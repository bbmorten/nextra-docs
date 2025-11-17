# Kubernetes Cheatsheet

##  Events happening during creation of a pod

Here is a comprehensive table that lists the key events and processes that occur during **Pod creation** in a Kubernetes cluster, along with the associated module, library, process, agent, or API involved in each step:

| **Step** | **Event**                                                                                   | **Module/Library/Process/Agent/API**                                   |
|----------|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| **1**    | User submits a Pod specification (YAML/JSON) via `kubectl apply/create`.                   | **kubectl (CLI)**: Interacts with Kubernetes API Server.               |
| **2**    | `kubectl` sends the Pod manifest to the Kubernetes API Server.                             | **REST API call**: Made by `kubectl` to the **API Server**.            |
| **3**    | API Server authenticates the user (via certificates, tokens, or OpenID).                   | **Authentication modules** (e.g., X.509 certificates, OAuth tokens).   |
| **4**    | API Server authorizes the request using RBAC or ABAC policies.                             | **Authorization modules** (e.g., Role-Based Access Control).           |
| **5**    | API Server validates the Pod manifest against the OpenAPI schema.                          | **Validation Schema**: Defined in the Kubernetes API.                  |
| **6**    | API Server writes the Pod object to etcd for persistence.                                  | **etcd**: Kubernetes key-value store for cluster state.                |
| **7**    | API Server sends an event to the Scheduler to determine node placement for the Pod.        | **Scheduler**: Listens for unscheduled Pods via the API Server.        |
| **8**    | Scheduler determines the best node for the Pod based on constraints and policies.          | **Scheduling algorithms**: Affinity/Anti-affinity, Taints, Resource Requests. |
| **9**    | Scheduler updates the Pod object with the `spec.nodeName` field.                           | **API Server**: Persists the updated Pod object to **etcd**.           |
| **10**   | Kubelet on the selected node detects the new Pod assignment.                               | **Kubelet**: Polls the API Server for changes or uses a watch.         |
| **11**   | Kubelet retrieves the Pod specification from the API Server.                               | **Kubelet**: Uses the Kubernetes REST API.                             |
| **12**   | Kubelet pulls the required container images from the specified container registry.         | **Container Runtime** (e.g., containerd, CRI-O): Interacts with the registry. |
| **13**   | Kubelet creates and starts the containers for the Pod.                                     | **Container Runtime Interface (CRI)**: API between Kubelet and runtime.|
| **14**   | Network namespace and IP address are assigned to the Pod.                                  | **CNI Plugin** (e.g., Calico, Flannel): Configures networking for the Pod. |
| **15**   | Kubelet mounts volumes specified in the Pod definition.                                    | **CSI Plugin** (if using storage): Handles volume provisioning.        |
| **16**   | Kubelet updates the Pod status in the API Server to reflect container states.              | **Kubelet**: Reports `Running` state to API Server.                    |
| **17**   | API Server updates etcd with the Pod’s latest status.                                      | **etcd**: Stores the updated Pod status.                               |
| **18**   | Endpoints Controller updates the Service endpoint list if the Pod belongs to a Service.    | **Endpoints Controller**: Updates Service endpoints in etcd.           |
| **19**   | Kube Proxy updates iptables or IPVS rules to route traffic to the Pod.                     | **Kube Proxy**: Handles Pod traffic routing.                           |
| **20**   | Pod is fully running, and events related to its creation are logged.                       | **API Server** and **Event Recorder**: Store events in etcd.           |

---

### **Summary of Key Components**

1. **API Server**: Central communication hub for all components.
2. **etcd**: Persistent key-value store for cluster state.
3. **Scheduler**: Determines the best node for Pod placement.
4. **Kubelet**: Node agent that starts and manages Pods.
5. **Container Runtime**: Runs the containers (e.g., containerd, CRI-O, Docker).
6. **CNI Plugins**: Handle Pod networking.
7. **CSI Plugins**: Manage volume mounts and storage.
8. **Controllers**: Maintain desired states, e.g., Endpoints Controller for services.
9. **Kube Proxy**: Manages network traffic routing to Pods.

Let me know if you'd like a deeper dive into any of these steps or components!

##  Krew (kubectl plugins manager)

<https://krew.sigs.k8s.io/plugins/>

```shell
(
  set -x; cd "$(mktemp -d)" &&
  OS="$(uname | tr '[:upper:]' '[:lower:]')" &&
  ARCH="$(uname -m | sed -e 's/x86_64/amd64/' -e 's/\(arm\)\(64\)\?.*/\1\2/' -e 's/aarch64$/arm64/')" &&
  KREW="krew-${OS}_${ARCH}" &&
  curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/${KREW}.tar.gz" &&
  tar zxvf "${KREW}.tar.gz" &&
  ./"${KREW}" install krew
)
echo 'export PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"' >> ~/.bashrc
```

or

```shell
echo 'export PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"' >> ~/.zshrc
echo 'export PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"' >> ~/.zshenv
```

kubectl krew install ca-cert
kubectl ca-cert

## Command completion for zsh

```shell
source <(kubectl completion zsh)
echo 'source <(kubectl completion zsh)' >> ~/.zshrc
```

## Command completion for bash

To enable **command completion** for `kubectl` in **Bash**, follow these steps:

---

### 1. **Install Bash Completion**

Ensure Bash completion is installed on your system. On Ubuntu, you can install it using:

```bash
sudo apt-get install -y bash-completion
```

---

### 2. **Enable Kubectl Completion**

Add the kubectl completion script to your Bash environment. Run the following command to enable completion for the current session:

```bash
source <(kubectl completion bash)
```

To make it permanent, append the completion script to your `.bashrc` file:

```bash
echo 'source <(kubectl completion bash)' >> ~/.bashrc
```

---

### 3. **Optional: Alias Completion**

If you use an alias for `kubectl`, such as `k`, you can enable completion for the alias as well:

```bash
alias k=kubectl
complete -o default -F __start_kubectl k
```

To make this permanent, add it to your `.bashrc`:

```bash
echo 'alias k=kubectl' >> ~/.bashrc
echo 'complete -o default -F __start_kubectl k' >> ~/.bashrc
```

---

### 4. **Reload Bash**

After making these changes, reload your Bash configuration to apply them:

```bash
source ~/.bashrc
```

---

### 5. **Verify Command Completion**

Test the command completion by typing `kubectl` followed by pressing `TAB` twice. You should see a list of available commands and options.

For example:

```bash
kubectl g[TAB]
```

This will suggest commands like `get`, `get nodes`, etc.

---

### Additional Tips

- To enhance your command-line experience further, consider installing tools like [kubectl-autosuggest](https://github.com/ahmetb/kubectl-aliases) or [krew](https://krew.sigs.k8s.io/) (a plugin manager for kubectl).
- Use `kubectl explain` for inline documentation of resource types.

By following these steps, you will have Bash command completion for `kubectl`, making it easier to interact with your Kubernetes cluster.

##  Flowchart for Container Creation

1. Start
2. User requests to create a new container through Kubernetes.
3. Kubernetes API server receives the container creation request.
4. Kubernetes API server validates the request, ensuring it has all the required information.
5. If the request is valid, Kubernetes API server schedules the creation of the container.
6. The Scheduler component of Kubernetes selects an appropriate node (worker) in the cluster to run the container based on resource availability and constraints.
7. The selected node receives the scheduling decision and starts preparing for container creation.
8. The Kubelet on the node communicates with the container runtime (e.g., Docker) to initiate the container creation process.
9. The Container Runtime downloads the container image from the container registry (e.g., Docker Hub, containerd, etc.) to the node.
10. The Container Runtime creates a new container based on the downloaded image.
11. The Container Runtime uses the specified CNI (Container Network Interface) plugin to set up networking for the container, following the ADD request to the CNI plugin.
12. The Container Runtime starts the container with the specified configurations (e.g., environment variables, resource limits, volume mounts, etc.).
13. The container is now up and running on the selected node.
14. Kubernetes API server updates the cluster state to reflect the successful creation of the container.
15. End

Please note that this flowchart is a simplified representation of the container creation process in Kubernetes. The actual process involves more steps and components, such as pod creation, admission controllers, and lifecycle events. Additionally, the flow may differ based on the specific Kubernetes version, configurations, and customizations within your cluster. For a more comprehensive representation, consider referring to official Kubernetes documentation and resources.

## Getting statistics for pods running

1. Get CPU and memory usage for pods/nodes in a specific namespace:

    ```shell
    kubectl top pods -n <namespace>
    ```

2. Get CPU and memory usage for nodes in the cluster:

    ```shell
    kubectl top nodes
    ```

3. Get CPU and memory usage for a specific pod:

    ```shell
    kubectl top pod <pod-name>
    ```

4. Get CPU and memory usage for containers in a pod:

    ```shell
    kubectl top pod <pod-name> --containers
    ```

If metrics API is not enabled and the metrics-server not installed you can add here how to do it :-)

To 49.81

- HELM Installation failed
- with YAML file from github is failed
- Lens-metrics maybe
- error: Metrics API not available this error we have

## To merge two kubeconfig files

you can use the following steps:

1. Copy the contents of the first kubeconfig file into a new file.
2. Append the contents of the second kubeconfig file to the new file.
3. Ensure that the cluster, user, and context sections have unique names in the new file.
4. Validate the new file using the command kubectl config view --kubeconfig=<new file name>
5. Use the new file with the --kubeconfig flag when running kubectl commands.

Alternatively, you can use the kubectl config view command to combine the kubeconfig files into a single file, and then use the --kubeconfig flag to specify the file for use with kubectl commands.

##  Attaching a pod

```shell
kubectl -n databases attach ohmysql-client-2 -i -t
```

##  Kubernetes Operators

Kubernetes Operators are a way to extend the Kubernetes API and automate complex application management tasks. An Operator is essentially a Kubernetes custom controller that is specifically designed to manage a complex application or service.

Operators use custom resources to represent the application being managed and use custom controllers to reconcile the desired state of the application with its actual state. This allows Operators to automate tasks such as deployment, scaling, and upgrades for complex applications that would otherwise require manual intervention.

Operators are typically built using the Operator Framework, which is a collection of tools and libraries that make it easier to develop, test, and deploy Kubernetes Operators. The Operator Framework provides several key components:

- The Operator SDK: a set of tools for building, testing, and deploying Kubernetes Operators.
- The Operator Lifecycle Manager (OLM): a component that manages the lifecycle of Operators, including installation, upgrades, and removal.
- The Operator Metering: a component that tracks resource usage by Operators and provides metering and chargeback capabilities.

Operators can be used to manage a wide range of complex applications, from databases and message brokers to machine learning platforms and big data tools. By using an Operator, you can simplify the management of complex applications and reduce the risk of errors or downtime.

Here are some key benefits of using Kubernetes Operators:

- Automated management of complex applications: Operators can automate deployment, scaling, and upgrades for complex applications, reducing the need for manual intervention and reducing the risk of errors or downtime.

- Customizable application management: Operators can be customized to meet the specific needs of your application, allowing you to define your own policies and procedures for managing the application.

- Standardization of application management: Operators use the Kubernetes API to manage applications, providing a standard way to manage applications across different environments and infrastructures.

- Integration with the Kubernetes ecosystem: Operators integrate with the Kubernetes ecosystem, allowing you to leverage other Kubernetes tools and services to manage your applications.

## Kubernetes operators vs. Helm/Kubeapps

Kubernetes Operators and Helm are both tools for managing applications on a Kubernetes cluster, but they have some important differences in their approach and functionality.

Helm is a package manager for Kubernetes that allows you to define, install, and upgrade applications as packages called charts. Helm charts are essentially templates that specify the configuration and resources needed to deploy an application on Kubernetes. Helm uses a client-server architecture, where the client (the helm command-line tool) sends requests to a server called Tiller, which then deploys the application on the Kubernetes cluster.

In contrast, Kubernetes Operators are custom controllers that are specifically designed to manage complex applications or services on Kubernetes. Operators use custom resources to represent the application being managed and use custom controllers to reconcile the desired state of the application with its actual state. This allows Operators to automate tasks such as deployment, scaling, and upgrades for complex applications that would otherwise require manual intervention. Operators are typically built using the Operator Framework, which is a collection of tools and libraries that make it easier to develop, test, and deploy Kubernetes Operators.

In terms of functionality, Operators offer several advantages over Helm. For example, Operators can be used to manage stateful applications that require more complex lifecycle management, such as databases or message brokers. Operators can also be used to define more complex policies and procedures for application management, beyond what can be achieved with Helm charts. Operators also provide a more standardized way to manage applications, as they use the Kubernetes API and integrate more closely with the Kubernetes ecosystem.

Kubeapps is another tool for managing applications on Kubernetes that is often compared to Helm and Operators. Kubeapps is a web-based application dashboard that provides a catalog of applications that can be deployed on Kubernetes clusters. Kubeapps uses Helm charts to define the applications and provides a user-friendly interface for managing the applications. Kubeapps also integrates with the Kubernetes API and can be used to manage applications across different environments and infrastructures.

In summary, while Helm and Kubeapps are useful tools for managing applications on Kubernetes, Kubernetes Operators offer a more powerful and standardized way to manage complex applications and services, with the ability to define custom policies and procedures for application management.
