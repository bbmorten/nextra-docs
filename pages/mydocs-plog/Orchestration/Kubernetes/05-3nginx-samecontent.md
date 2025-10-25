# Deploying 3 NGINX servers running with the same content on Kubernetes

Deploying 3 NGINX servers running with the same content on Kubernetes can be efficiently managed through a Deployment and a Service. This setup will ensure that you have 3 replicas of NGINX pods, and they are accessible through a single service endpoint. Below is a step-by-step guide to achieve this, including the YAML configurations required.

## Step 1: Create a Deployment for NGINX

First, you'll create a Deployment that will manage the NGINX pods. You can customize the NGINX configuration and content by building a custom NGINX Docker image or by using ConfigMaps and volume mounts. For simplicity, this example uses the standard NGINX image from Docker Hub and assumes you are serving static content placed directly into `/usr/share/nginx/html`.

Create a file named `nginx-deployment.yaml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
        volumeMounts:
        - name: html-volume
          mountPath: /usr/share/nginx/html
      volumes:
      - name: html-volume
        configMap:
          name: nginx-html
```

## Step 2: Create a ConfigMap with Your Static Content

You should create a ConfigMap that contains your static website content. This example assumes you have a simple HTML file named `index.html`.

First, create a ConfigMap named `nginx-html`:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-html
data:
  index.html: |
    <!DOCTYPE html>
    <html>
    <head>
    <title>Welcome to NGINX!</title>
    </head>
    <body>
    <h1>Hello from Kubernetes!</h1>
    </body>
    </html>
```

Save this as `nginx-configmap.yaml`.

## Step 3: Create a Service to Expose Your Deployment

Next, expose the NGINX deployment using a Service so that the NGINX servers are accessible.

Create a file named `nginx-service.yaml`:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
  selector:
    app: nginx
```

## Step 4: Apply Your Configurations

Apply the configurations to your Kubernetes cluster with `kubectl`:

1. **ConfigMap**: This holds your static content.

   ```shell
   kubectl apply -f nginx-configmap.yaml
   ```

2. **Deployment**: This creates the NGINX pods.

   ```shell
   kubectl apply -f nginx-deployment.yaml
   ```

3. **Service**: This exposes the NGINX deployment to the internet or your internal network.

   ```shell
   kubectl apply -f nginx-service.yaml
   ```

After applying these configurations, you'll have 3 NGINX servers running in your Kubernetes cluster, all serving the same content defined in the ConfigMap. You can access the service through the IP provided by the `nginx-service` LoadBalancer, which will balance the traffic among the 3 replicas of your application.

## Step 5: Verifying Your Deployment

Verify that your pods are running:

```shell
kubectl get pods
```

And check your service:

```shell
kubectl get service nginx-service
```

From local host

```shell
kubectl --kubeconfig=/users/bulent/.kube/config.49.81 get service
NAME            TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
kubernetes      ClusterIP      10.96.0.1        <none>        443/TCP        26h
nginx-service   LoadBalancer   10.100.229.121   <pending>     80:30716/TCP   16m
```

The external IP address or hostname of the `nginx-service` will give you access to your NGINX servers.

##  Step 6: Accessing the service

**Since the service does not have  an assigned external IP, in order to reach it you should configure port-forwarding on your local machine.**

To perform port forwarding on your local machine for the `nginx-service`, which is exposed as a LoadBalancer service in your Kubernetes cluster, you can use `kubectl port-forward`. Since the external IP is in a `<pending>` state, this indicates you might be using a Kubernetes cluster that doesn't natively support LoadBalancer services (like minikube, kind, or a bare-metal setup), so port forwarding is a suitable way to access the service locally.

Here’s how you can forward a local port to the port exposed by the `nginx-service` service on your cluster:

1. **Identify the Service Port**: Based on your message, `nginx-service` is exposed on port 80 within the cluster, and it's mapped to port 30716 on the cluster's nodes.

2. **Use `kubectl port-forward`**: To forward a local port to the service's port, run the following command:

```sh

> kubectl --kubeconfig=/users/bulent/.kube/config.49.81  port-forward service/nginx-service 8080:80

Forwarding from 127.0.0.1:8080 -> 80
Forwarding from [::1]:8080 -> 80
Handling connection for 8080
Handling connection for 8080

```

   This command forwards local port `8080` to port `80` of the `nginx-service`. This means that if you access `http://localhost:8080` on your local machine, it will route the traffic to `nginx-service` on port `80` in your Kubernetes cluster.

3. **Access the Service Locally**: Open your web browser and go to `http://localhost:8080`. You should now be able to access the service that is running in your Kubernetes cluster.

### Notes

- **Local Port**: You can change the local port (`8080` in the example) to any port on your local machine that's not already in use if `8080` is not suitable for your needs.
- **Service Name**: Ensure that `nginx-service` is the correct name of your service. Use `kubectl get svc` to list all services in your current namespace to verify.
- **Namespace**: If your service is in a namespace other than `default`, you need to specify the namespace in your port-forward command with the `-n` or `--namespace` flag, like so:

  ```sh
  kubectl port-forward service/nginx-service 8080:80 -n your-namespace
  ```

Remember, port forwarding this way is suitable for development and testing but not recommended for production environments. For production, consider using an Ingress controller or a cloud provider's LoadBalancer service that automatically assigns an external IP to your service.
