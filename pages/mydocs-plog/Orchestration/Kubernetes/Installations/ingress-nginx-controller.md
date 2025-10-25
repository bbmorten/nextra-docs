# Ingress Function, Ingress Resource and Ingress Controller

##  Installation on Morten Kubernetes

### Step 1 - Create an alternative Ingress NGINX Controller for its own $(NAMESPACEX)

```shell title='Alternative Ingress Controller'

export NAMESPACEX=mbm

helm upgrade --install ingress-nginx-mbm ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ${NAMESPACEX} --create-namespace \
  --set controller.ingressClassResource.name=nginx-${NAMESPACEX} \
  --set controller.ingressClassResource.controllerValue=k8s.io/ingress-nginx-${NAMESPACEX} \
  --set controller.service.name=ingress-nginx-${NAMESPACEX}-controller
```

### Step 2 - Check the status of the load balancer IP

```shell
kubectl get service --namespace ${NAMESPACEX} ingress-nginx-mbm-controller --output wide --watch
```

###  Step 3 - Creating Ingress Resource

[Ingress Resource Definition](./../assets/yaml/mbm-ingress-resource.yaml)

```yaml
kubectl apply -f - <<EOF
{% include "../assets/yaml/mbm-ingress-resource.yaml" %}
EOF
```

###  Step 4 - NGINX Services and Deployments

Create credentials for docker hub

```shell
kubectl create secret docker-registry dockerhub-secret \
  --docker-username=bbmorten \
  --docker-password=Qazwsxdoc2009_ \
  --docker-email=bbmorten@gmail.com \
  -n ${NAMESPACEX}
```

Create the NGINX configuration as a configmap for the root service

[NGINX-root-service Config as configmap](./../assets/yaml/custom-config-nginx-configmap.yaml)

```yaml
kubectl apply -f - <<EOF
{% include "../assets/yaml/custom-config-nginx-configmap.yaml" %}
EOF
```

[Services and Deployments](./../assets/yaml/nginx-deployments-and-services-mbm.yaml)

```yaml
kubectl apply -f - <<EOF
{% include "../assets/yaml/nginx-deployments-and-services-mbm.yaml" %}
EOF
```

If needed

```shell
kubectl rollout restart deployment nginx-root -n mbm
kubectl rollout restart deployment nginx-app1 -n mbm
kubectl rollout restart deployment nginx-app2 -n mbm
```

###  Step 5 - Verify

```shell
export NAMESPACEX=mbm
kubectl get ingress nginx-ingress -n ${NAMESPACEX}
```

```shell
kubectl describe ingress nginx-ingress -n ${NAMESPACEX}
```

```shell
kubectl get svc -n  ${NAMESPACEX}
```

```shell
kubectl get endpoints nginx-root-service -n ${NAMESPACEX}
```

```shell
kubectl get pods -n mbm -l app=nginx-root

```

```shell
LOAD_BALANCER_IP=10.97.93.36
curl -H "Host: www.example.com" ${LOAD_BALANCER_IP}
```

Sample Output

```shell
cloud_user@96ceef21bf1c:~$ export NAMESPACEX=mbm
cloud_user@96ceef21bf1c:~$ kubectl get ingress nginx-ingress -n ${NAMESPACEX}
NAME            CLASS       HOSTS             ADDRESS   PORTS   AGE
nginx-ingress   nginx-mbm   www.example.com             80      16m
cloud_user@96ceef21bf1c:~$ kubectl describe ingress nginx-ingress -n ${NAMESPACEX}
Name:             nginx-ingress
Labels:           <none>
Namespace:        mbm
Address:
Ingress Class:    nginx-mbm
Default backend:  <default>
Rules:
  Host             Path  Backends
  ----             ----  --------
  www.example.com
                   /       nginx-root-service:80 (10.0.1.250:80,10.0.0.216:80,10.0.1.95:80)
                   /app1   nginx-app1-service:80 (10.0.0.172:80,10.0.1.169:80,10.0.1.204:80)
                   /app2   nginx-app2-service:80 (10.0.0.154:80,10.0.1.47:80,10.0.1.178:80)
Annotations:       kubernetes.io/ingress.class: nginx-mbm
Events:
  Type    Reason  Age   From                      Message
  ----    ------  ----  ----                      -------
  Normal  Sync    16m   nginx-ingress-controller  Scheduled for sync
cloud_user@96ceef21bf1c:~$ kubectl get endpoints nginx-root-service -n ${NAMESPACEX}
NAME                 ENDPOINTS                                  AGE
nginx-root-service   10.0.0.216:80,10.0.1.250:80,10.0.1.95:80   11m
cloud_user@96ceef21bf1c:~$ LOAD_BALANCER_IP=10.97.93.36
cloud_user@96ceef21bf1c:~$ curl -H "Host: www.example.com" ${LOAD_BALANCER_IP}
Welcome from
IP:
Timestamp:
```

### Step D - Delete the installation of ingress controller

Deleting the ingress controller from the new-namespace

```shell
export NAMESPACEX=mbm
helm list -n ${NAMESPACEX}
kubectl get ns
helm uninstall ingress-nginx-mbm -n ${NAMESPACEX}
kubectl get service --namespace ${NAMESPACEX} ingress-nginx-${NAMESPACEX}-controller --output wide --watch
kubectl get ingressclass
kubectl delete ingressclass nginx-${NAMESPACEX}
kubectl delete namespaces ${NAMESPACEX}
# Delete deployments, configmaps and secrets related

```

To delete the Ingress-NGINX controller that you deployed with Helm, follow these steps:

---

#### **1. Identify the Helm Release**

To ensure you target the correct release, list all Helm releases in the namespace where the controller is deployed:

```bash
helm list -n <namespace>
```

Replace `<namespace>` with the namespace where the controller was deployed (e.g., `new-namespace`).

Look for the release name (e.g., `ingress-nginx-mbm`) in the list.

---

#### **2. Delete the Helm Release**

Use the following command to delete the Helm release:

```bash
helm uninstall ingress-nginx-mbm -n <namespace>
```

Replace `<namespace>` with the namespace where the release is deployed.

---

### **3. Verify the Deletion**

After running the uninstall command, confirm that all resources related to the release have been removed:

- Check for leftover pods:

  ```bash
  kubectl get pods -n <namespace>
  ```

- Check for leftover services:

  ```bash
  kubectl get svc -n <namespace>
  ```

- Check for leftover ingress classes:

  ```bash
  kubectl get ingressclass
  ```

If there are any remaining resources (e.g., ingress classes or ConfigMaps), delete them manually.

---

### **4. Delete the Namespace (Optional)**

If the namespace was created specifically for this controller and is no longer needed, delete the entire namespace:

```bash
kubectl delete namespace <namespace>
```

---

### **5. Clean Up Ingress Resources (Optional)**

If you had created any Ingress resources using the `nginx-mbm` class, either update those resources to use a different Ingress class or delete them:

- To update an Ingress resource, modify its `kubernetes.io/ingress.class` annotation.
- To delete an Ingress resource:

  ```bash
  kubectl delete ingress <ingress-name> -n <namespace>
  ```

---

### **Key Notes**

- Deleting the Helm release will remove all resources created by the Helm chart, but manual cleanup might be required for custom resources.
- Ensure no other workloads or configurations depend on the namespace or controller before deletion.

Let me know if you encounter any issues or need further assistance!

##  Installation on ACloudGuru/Docker-Desktop Kubernetes

```shell

```shell
helm upgrade --install ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ingress-nginx --create-namespace
```

```


Output


```shell
cloud_user@96ceef21bf1c:~$ helm upgrade --install ingress-nginx ingress-nginx \
>   --repo https://kubernetes.github.io/ingress-nginx \
>   --namespace ingress-nginx --create-namespace
Release "ingress-nginx" does not exist. Installing it now.
NAME: ingress-nginx
LAST DEPLOYED: Wed Jan 15 09:45:16 2025
NAMESPACE: ingress-nginx
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
The ingress-nginx controller has been installed.
It may take a few minutes for the load balancer IP to be available.
You can watch the status by running 'kubectl get service --namespace ingress-nginx ingress-nginx-controller --output wide --watch'

An example Ingress that makes use of the controller:
  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    name: example
    namespace: foo
  spec:
    ingressClassName: nginx
    rules:
      - host: www.example.com
        http:
          paths:
            - pathType: Prefix
              backend:
                service:
                  name: exampleService
                  port:
                    number: 80
              path: /
    # This section is only required if TLS is to be enabled for the Ingress
    tls:
      - hosts:
        - www.example.com
        secretName: example-tls

If TLS is enabled for the Ingress, a Secret containing the certificate and key must also be provided:

  apiVersion: v1
  kind: Secret
  metadata:
    name: example-tls
    namespace: foo
  data:
    tls.crt: <base64 encoded cert>
    tls.key: <base64 encoded key>
  type: kubernetes.io/tls
cloud_user@96ceef21bf1c:~$
```
