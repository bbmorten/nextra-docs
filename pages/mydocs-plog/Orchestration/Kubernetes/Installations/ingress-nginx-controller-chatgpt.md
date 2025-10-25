# Ingress Function, Ingress Resource, and Ingress Controller - ChatGPT
 
## Installation on Morten Kubernetes

### Step 1 - Create an Alternative Ingress NGINX Controller in a Custom Namespace

The following command installs the NGINX ingress controller into a specified namespace. This customization allows for more controlled traffic management in isolated environments:

```bash
docker_secret="Qazwsxdoc2009_"
docker_user="bbmorten"
export NAMESPACEX=mbm

helm upgrade --install ingress-nginx-mbm ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ${NAMESPACEX} --create-namespace \
  --set controller.ingressClassResource.name=nginx-${NAMESPACEX} \
  --set controller.ingressClassResource.controllerValue=k8s.io/ingress-nginx-${NAMESPACEX} \
  --set controller.service.name=ingress-nginx-${NAMESPACEX}-controller
```

### Step 2 - Checking the Load Balancer IP Status

This step ensures that the load balancer is operational and retrieves its assigned external IP:

```bash
kubectl get service --namespace ${NAMESPACEX} ingress-nginx-mbm-controller --output wide --watch
```

### Step 3 - Creating an Ingress Resource

Define and apply an ingress resource that maps paths to specific services. Below is the configuration integrated from the `mbm-ingress-resource.yaml` file:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
  namespace: mbm
  annotations:
    kubernetes.io/ingress.class: nginx-mbm
spec:
  ingressClassName: nginx-mbm
  rules:
    - host: www.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: nginx-root-service
                port:
                  number: 80
          - path: /app1
            pathType: Prefix
            backend:
              service:
                name: nginx-app1-service
                port:
                  number: 80
          - path: /app2
            pathType: Prefix
            backend:
              service:
                name: nginx-app2-service
                port:
                  number: 80
```

Apply the configuration:

```bash
kubectl apply -f - <<EOF
<above YAML configuration>
EOF
```

### Step 4 - Deployments, Services, and ConfigMap

#### Creating Credentials for Docker Hub

This step generates a secret for accessing a private Docker repository:

```bash
kubectl create secret docker-registry dockerhub-secret \
  --docker-username=${docker_user} \
  --docker-password=${docker_secret} \
  --docker-email=bbmorten@gmail.com \
  -n ${NAMESPACEX}
```

#### Configuring NGINX Root Service

The NGINX configuration is defined in a `ConfigMap` to make it reusable across different pods. Below is the integrated content from `custom-config-nginx-configmap.yaml`:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-config-root
  namespace: mbm
data:
  nginx.conf: |
    worker_processes  1;

    events {
        worker_connections  1024;
    }

    http {
        server {
            listen 80;
            server_name localhost;

            location / {
                default_type text/plain;
                return 200 "Welcome from \$hostname\nIP: \$remote_addr\nTimestamp: \$time_local\n";
            }
        }
    }
```

Apply the configuration:

```bash
kubectl apply -f - <<EOF
<above YAML configuration>
EOF
```

#### Deployments and Services

The following deployments and services ensure high availability for the root service and applications. These configurations are integrated from `nginx-deployments-and-services-mbm.yaml`:

```yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-root
  namespace: mbm
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx-root
  template:
    metadata:
      labels:
        app: nginx-root
    spec:
      imagePullSecrets:
        - name: dockerhub-secret
      containers:
        - name: nginx
          image: nginx
          ports:
            - containerPort: 80
          volumeMounts:
            - name: nginx-config-volume
              mountPath: /etc/nginx/nginx.conf
              subPath: nginx.conf
      volumes:
        - name: nginx-config-volume
          configMap:
            name: nginx-config-root
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-root-service
  namespace: mbm
spec:
  selector:
    app: nginx-root
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP
```

Apply the deployments and services:

```bash
kubectl apply -f - <<EOF
<above YAML configuration>
EOF
```

### Step 5 - Verification

Verify the deployment and services:

```bash
kubectl get ingress nginx-ingress -n ${NAMESPACEX}
kubectl describe ingress nginx-ingress -n ${NAMESPACEX}
kubectl get svc -n ${NAMESPACEX}
kubectl get pods -n ${NAMESPACEX}
```

### Cleanup

To uninstall the ingress controller and related resources:

```bash
helm uninstall ingress-nginx-mbm -n ${NAMESPACEX}
kubectl delete namespace ${NAMESPACEX}


data:
  proxy-protocol: |
    location /rabbit {
      proxy_pass https://rabbitmq-service:15671;
    }