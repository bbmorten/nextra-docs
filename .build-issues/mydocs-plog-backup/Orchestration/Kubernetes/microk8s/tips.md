# microk8s Tips

##  How can I open a shell in kubeapi-server pod in microk8s?

In MicroK8s, the `kube-apiserver` is not a regular pod but a system service managed by `systemd`. Since it runs as a systemd service and not inside a Kubernetes pod, you cannot directly `exec` into it like you would with a normal Kubernetes pod.

However, you can access the process environment and interact with it using the following methods:

### **Method 1: Use `nsenter` to Access the Process Namespace**

Since the `kube-apiserver` runs as a separate process, you can use `nsenter` to enter its namespace:

1. **Find the PID of `kube-apiserver`:**

   ```bash
   pid=$(pgrep -f kube-apiserver)
   echo "kube-apiserver PID: $pid"
   ```

2. **Enter the process namespace using `nsenter`:**

   ```bash
   sudo nsenter -t $pid -m -u -i -n -p -- bash
   ```

   This will open a shell inside the process namespace, allowing you to explore its environment.

---

### **Method 2: Open an Interactive Shell in the Snap Package**

MicroK8s runs inside a Snap package, so its binaries and configuration files are located under `/var/snap/microk8s/current/`.

1. **Switch to the Snap environment:**

   ```bash
   sudo snap run --shell microk8s
   ```

   This will open a shell in the MicroK8s environment.

2. **Explore configuration and logs:**

   ```bash
   cd /var/snap/microk8s/current/
   ls -l args
   ```

---

### **Method 3: Run `kube-apiserver` in Debug Mode**

If you need to debug the `kube-apiserver`, you can run:

```bash
sudo journalctl -u snap.microk8s.daemon-apiserver -f
```

To see real-time logs.

This method is not working properly. Some commands to try

```shell
sudo systemctl list-units --type=service | grep microk8s
sudo journalctl -u snap.microk8s.daemon-apiserver-kicker -f
```

---

##  Explain the services of microk8s

- **Prompt**

```console
Explain these services 

ubuntu@vm1:~$ sudo systemctl list-units --type=service | grep microk8s
  snap.microk8s.daemon-apiserver-kicker.service  loaded active running Service for snap application microk8s.daemon-apiserver-kicker
  snap.microk8s.daemon-cluster-agent.service     loaded active running Service for snap application microk8s.daemon-cluster-agent
  snap.microk8s.daemon-containerd.service        loaded active running Service for snap application microk8s.daemon-containerd
  snap.microk8s.daemon-k8s-dqlite.service        loaded active running Service for snap application microk8s.daemon-k8s-dqlite
  snap.microk8s.daemon-kubelite.service          loaded active running Service for snap application microk8s.daemon-kubelite
```

- **Answer**
  
These services are part of **MicroK8s** and manage different components of the Kubernetes cluster. Let's break down what each of them does:

---

### **1. `snap.microk8s.daemon-apiserver-kicker.service`**

- **Purpose:**  
  This service **monitors changes** in the cluster configuration and restarts the Kubernetes API server (`kube-apiserver`) if needed.
- **Why it's needed:**  
  If any **critical changes** are made (e.g., certificate updates or network modifications), this service ensures that `kube-apiserver` is restarted automatically.
- **How to check logs:**  

  ```bash
  sudo journalctl -u snap.microk8s.daemon-apiserver-kicker -f
  ```

---

### **2. `snap.microk8s.daemon-cluster-agent.service`**

- **Purpose:**  
  This service is responsible for **handling cluster management tasks**, including:
    - **Joining and managing nodes** in a multi-node MicroK8s setup.
    - **Handling cluster leader election** (for high availability clusters).
    - Managing the **API server certificate rotation**.

- **How to check logs:**  

  ```bash
  sudo journalctl -u snap.microk8s.daemon-cluster-agent -f
  ```

---

### **3. `snap.microk8s.daemon-containerd.service`**

- **Purpose:**  
  This is the **container runtime** service in MicroK8s. It manages:
    - **Running containers** inside the cluster.
    - **Pulling and managing images**.
    - **Interfacing with Kubernetes for container orchestration**.

- **Why it's important:**  
  Instead of using Docker, MicroK8s uses **containerd** as its runtime.

- **How to check logs:**  

  ```bash
  sudo journalctl -u snap.microk8s.daemon-containerd -f
  ```

- **To check running containers:**  

  ```bash
  sudo microk8s.ctr containers list
  ```

---

### **4. `snap.microk8s.daemon-k8s-dqlite.service`**

- **Purpose:**  
  This service **manages the Kubernetes cluster database**. Instead of using `etcd`, MicroK8s **uses Dqlite (a lightweight, high-performance database for distributed systems)**.
    - Stores Kubernetes objects (pods, services, deployments).
    - Provides **high availability** in multi-node setups.

- **How to check logs:**  

  ```bash
  sudo journalctl -u snap.microk8s.daemon-k8s-dqlite -f
  ```

- **Check database status:**  

  ```bash
  sudo microk8s.kubectl get etcd -n kube-system
  ```

---

### **5. `snap.microk8s.daemon-kubelite.service`**

- **Purpose:**  
  This is the **core service that runs all the Kubernetes components** in a lightweight way.
    - It **replaces multiple independent services** (`kube-apiserver`, `kube-scheduler`, `kube-controller-manager`, etc.).
    - It **manages the cluster control plane**.

- **How to check logs:**  

  ```bash
  sudo journalctl -u snap.microk8s.daemon-kubelite -f
  ```

- **How to restart it:**  

  ```bash
  sudo systemctl restart snap.microk8s.daemon-kubelite
  ```

---

### **Summary**

| **Service** | **Purpose** |
|-------------|------------|
| `snap.microk8s.daemon-apiserver-kicker` | Monitors and restarts API server when needed |
| `snap.microk8s.daemon-cluster-agent` | Manages multi-node cluster operations |
| `snap.microk8s.daemon-containerd` | Runs containers (container runtime) |
| `snap.microk8s.daemon-k8s-dqlite` | Manages Kubernetes database (Dqlite) |
| `snap.microk8s.daemon-kubelite` | Runs the Kubernetes control plane (API server, controller, scheduler) |

---

### **How to Open a Shell Inside These Services**

Since MicroK8s does not run `kube-apiserver` as a separate pod, but as part of `kubelite`, you can interact with it in these ways:

#### **1. Enter the Namespace of `kubelite`**

```bash
pid=$(pgrep -f kubelite)
sudo nsenter -t $pid -m -u -i -n -p -- bash
```

This allows you to run commands inside the `kubelite` process.

#### **2. Check Kubernetes API Server Logs**

```bash
sudo journalctl -u snap.microk8s.daemon-kubelite -f
```

#### **3. Restart Kubernetes API Server (`kubelite`)**

```bash
sudo systemctl restart snap.microk8s.daemon-kubelite
```

---

##  Serviceaccounts in microk8s

Start Using Service Accounts

apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
  namespace: default

We begin using the service account by creating it in a particular namespace. Every namespace will have a default service account similar to the one in the example above. Typically, more service accounts are added as needed.

The service account is usually tied to a secret, which usually contains ca.crt, token and namespace information to use.

To see related information about a **ServiceAccount** in Kubernetes, follow these steps:

---

### **1. List Available ServiceAccounts**

To see all ServiceAccounts in the current namespace:

```bash
microk8s kubectl get serviceaccounts
```

For a specific namespace:

```bash
microk8s kubectl get serviceaccounts -n <namespace>
```

---

### **2. Describe a Specific ServiceAccount**

To see details, including associated secrets:

```bash
microk8s kubectl describe serviceaccount default -n default
```

This will show:

- **Secrets linked to the ServiceAccount**
- **Created time**
- **Automount status**

Example output:

```
Name:                default
Namespace:           default
Secrets:             default-token-abcde
Automount:           true
```

---

### **3. Check the Associated Secret**

Each ServiceAccount is linked to a **Secret** that contains authentication details (certificate, token).

To list secrets:

```bash
microk8s kubectl get secrets -n default
```

To see details of a specific secret:

```bash
microk8s kubectl describe secret default-token-abcde -n default
```

This will display:

- **ca.crt** → Kubernetes API CA certificate
- **namespace** → Namespace where the ServiceAccount exists
- **token** → Bearer token for API authentication

---

### **4. Extract the Token for API Authentication**

To retrieve the raw token for authentication:

```bash
microk8s kubectl get secret default-token-abcde -n default -o jsonpath="{.data.token}" | base64 --decode
```

---

### **5. Verify If ServiceAccount Has Permissions**

To check what permissions the ServiceAccount has:

```bash
microk8s kubectl auth can-i list pods --as=system:serviceaccount:default:default
```

Replace `default:default` with the correct `namespace:serviceaccount_name`.

---

### **6. See if Automounting is Enabled**

To check if the ServiceAccount automatically mounts its token into pods:

```bash
microk8s kubectl get serviceaccount default -o jsonpath="{.automountServiceAccountToken}"
```

- `true` → The token will be automatically mounted inside the pods.
- `false` → The token will not be mounted by default.

---

### **7. Modify a ServiceAccount (Optional)**

To disable token automounting:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
  namespace: default
automountServiceAccountToken: false
```

Apply the changes:

```bash
microk8s kubectl apply -f serviceaccount.yaml
```

---

### **Summary**

| **Command** | **Description** |
|------------|----------------|
| `microk8s kubectl get serviceaccounts -n <namespace>` | List service accounts |
| `microk8s kubectl describe serviceaccount <name> -n <namespace>` | Show details of a service account |
| `microk8s kubectl get secrets -n <namespace>` | List secrets in a namespace |
| `microk8s kubectl describe secret <secret-name> -n <namespace>` | Show secret details |
| `microk8s kubectl auth can-i <verb> <resource> --as=system:serviceaccount:<namespace>:<name>` | Check permissions of a service account |
| `microk8s kubectl get serviceaccount <name> -o jsonpath="{.automountServiceAccountToken}"` | Check if automounting is enabled |
| `microk8s kubectl get secret <secret-name> -n <namespace> -o jsonpath="{.data.token}" | base64 --decode` | Retrieve the authentication token |

Let me know if you need help analyzing or modifying your **ServiceAccount** setup! 🚀

##   **Why Does Kubernetes Automatically Mount the Service Account Token into Every Pod?**

Kubernetes **automatically mounts the service account token** into every pod to enable **secure communication with the Kubernetes API server**. This default behavior is designed to allow pods to authenticate and interact with the cluster securely.

---

### **1. Purpose of Automatically Mounting the Token**

The **service account token** enables pods to:

- **Authenticate to the Kubernetes API** without needing hardcoded credentials.
- **Perform API operations** such as listing pods, getting secrets, or modifying resources (depending on RBAC permissions).
- **Enable controllers and operators** (such as the Horizontal Pod Autoscaler or monitoring tools) to interact with the Kubernetes API.
- **Support Kubernetes-native applications** that rely on in-cluster API communication.

---

### **2. How the Token is Mounted**

By default, Kubernetes **injects the token** into a pod’s filesystem at:

```
/var/run/secrets/kubernetes.io/serviceaccount/token
```

Along with:

- **ca.crt** → The cluster’s Certificate Authority (for verifying API requests).
- **namespace** → The namespace in which the pod is running.

#### **Example: Checking Token in a Running Pod**

To verify if a token is mounted inside a pod:

```bash
microk8s kubectl exec -it my-pod -- ls -l /var/run/secrets/kubernetes.io/serviceaccount/
```

Expected output:

```
ca.crt  namespace  token
```

To see the actual token:

```bash
microk8s kubectl exec -it my-pod -- cat /var/run/secrets/kubernetes.io/serviceaccount/token
```

This token is a **JWT (JSON Web Token)** used for authentication.

---

### **3. Why is This Enabled by Default?**

#### ✅ **1. API Authentication for Workloads**

- Many workloads (e.g., controllers, schedulers, logging agents) need **API access** to perform tasks.
- Example: A pod running a monitoring agent **needs access** to list pods and collect logs.

#### ✅ **2. Enables Kubernetes-native Applications**

- Many Kubernetes applications (e.g., Prometheus, Istio, custom controllers) depend on API access.
- The default behavior ensures that **in-cluster components can interact seamlessly** with the Kubernetes API.

#### ✅ **3. Secure Default Authentication Method**

- Instead of manually distributing credentials, Kubernetes **automatically injects an identity** into each pod.
- The **ServiceAccount token is short-lived** and can be revoked if necessary.

---

### **4. Security Implications & Risks**

While automatic token mounting is **convenient**, it also has security concerns.

#### ❌ **1. Pods May Gain Unintended API Access**

- Every pod gets a **default ServiceAccount** (`default` in its namespace).
- If the **default ServiceAccount has broad permissions**, all pods could potentially access cluster resources.

#### ❌ **2. Risk of Token Exposure**

- If an attacker **compromises a pod**, they can **steal the token** and use it to interact with the API.
- If a pod has **RBAC permissions**, the attacker can escalate privileges.

#### ❌ **3. Unnecessary API Access**

- Many workloads **do not need API access** (e.g., frontend applications, batch jobs, database services).
- Having the token by default **increases attack surface**.

---

### **5. How to Disable Automatic Token Mounting?**

If a pod **does not need API access**, disable token mounting.

#### **1️⃣ Disable at the ServiceAccount Level**

Modify the `ServiceAccount` definition:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-sa
  namespace: default
automountServiceAccountToken: false
```

Apply:

```bash
microk8s kubectl apply -f my-serviceaccount.yaml
```

✅ **Result**: **Any pod using this ServiceAccount will not get a token.**

---

#### **2️⃣ Disable at the Pod Level**

Even if a **ServiceAccount allows** token mounting, you can **disable it per pod**:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
  namespace: default
spec:
  serviceAccountName: my-sa
  automountServiceAccountToken: false
  containers:
    - name: nginx
      image: nginx
```

Apply:

```bash
microk8s kubectl apply -f my-pod.yaml
```

✅ **Result**: **This specific pod will not have the token mounted.**

---

### **6. Best Practices**

| **Scenario** | **Should You Disable Token Mounting?** |
|-------------|----------------------------------|
| **Pods that don’t need API access** | ✅ Yes (disable `automountServiceAccountToken`) |
| **Web apps, databases, batch jobs** | ✅ Yes (disable token to reduce attack risk) |
| **Monitoring, logging agents** | ❌ No (these need API access) |
| **Kubernetes controllers (e.g., Istio, Prometheus)** | ❌ No (these require API access) |
| **Multi-tenant clusters** | ✅ Yes (only allow API access where necessary) |

---

### **7. Summary**

- Kubernetes **automatically mounts a ServiceAccount token** into every pod to enable secure **API authentication**.
- This helps **controllers and Kubernetes-native applications** interact with the API **without hardcoded credentials**.
- **Security risks**: Pods may **gain unintended access** or **leak tokens** if compromised.
- **Best practice**: Disable `automountServiceAccountToken: false` **if the pod does not need API access**.
