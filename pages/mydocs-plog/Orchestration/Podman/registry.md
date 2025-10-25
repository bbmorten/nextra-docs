# Private TLS-Secured Container Registry with Podman on macOS

This guide will walk you through the process of setting up a private, TLS-secured container image registry on your macOS machine using Podman. Using a local registry is ideal for development, testing, and storing images without relying on public hubs. We will use the official registry:2 image, secure it with a self-signed TLS certificate, and configure your system to trust this setup for secure push and pull operations.

### **Step 1: Prerequisites**

Before you begin, ensure you have the following installed on your macOS system:

1. **Podman**: The container engine. If you don't have it, install it via Homebrew:  
   brew install podman

2. **Podman Machine**: After installing Podman, you must initialize and start the Podman machine (a lightweight Linux VM where containers run).  
   podman machine init  
   podman machine start

3. **OpenSSL**: Used to generate our self-signed certificate. It is typically pre-installed on macOS.

### **Step 2: Create Directories and a Self-Signed Certificate**

We need a dedicated place to store the registry's data and our TLS certificates. We will also generate a certificate that the registry will use to secure HTTPS traffic.

1. **Create Directories**: Open your terminal and create a central directory for your registry.  

```shell
   mkdir ./podman-registry  
   mkdir ./podman-registry/data  
   mkdir ./podman-registry/certs  
   cd ./podman-registry
```

2. **Generate a Self-Signed Certificate**: We'll create a certificate valid for localhost. This is where your registry will be accessible.  

```shell
openssl req \
  -newkey rsa:2048 -nodes -keyout certs/domain.key \
  -x509 -days 365 -out certs/domain.crt \
  -subj "/CN=localhost" \
  -addext "subjectAltName = DNS:localhost"
```

   This command creates two files inside the certs directory:  

* domain.key: The private key for the certificate.  
* domain.crt: The public certificate (self-signed).

### **Step 3: Run the Private Registry Container**

Now, we will run the registry:2 container using Podman. We will map the ports and mount the data and certificate directories we just created.

```shell
# Not working on MacOS
podman run -d \
  --name private-registry \
  -p 5000:5000 \
  -v ./data:/var/lib/registry:z \
  -v ./certs:/certs:z \
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \
  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \
  docker.io/library/registry:2
```

```shell
podman run -d \
  --name private-registry \
  -p 5000:5000 \
  --restart=always \
  -v ./certs:/certs \
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \
  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \
  docker.io/library/registry:2
```

**Command Breakdown:**

* -d: Run the container in detached mode (in the background).  
* --name private-registry: Assign a memorable name to the container.  
* -p 5000:5000: Map port 5000 on your Mac to port 5000 inside the container.  
* -v ./data:/var/lib/registry:z: Mount the local data directory into the container to persistently store images. The :z flag tells Podman to handle SELinux permissions.  
* -v ./certs:/certs:z: Mount our local certs directory into the container.  
* -e ...: Set environment variables inside the container to tell the registry where to find the TLS certificate and key.

You can verify the container is running with podman ps.

### **Step 4: Configure Certificate Trust**

This is the most critical part. Because we used a self-signed certificate, your machine and the Podman VM don't trust it by default. We must explicitly configure them to trust our new certificate.

1. Trust the Certificate on macOS:  
   The podman client on your Mac needs to trust the certificate. We add it to the system keychain.  

```shell
   sudo security add-trusted-cert \
   -d \
   -r trustRoot \
   -k /Library/Keychains/System.keychain certs/domain.crt

```

   This command adds the certificate to the system keychain and marks it as trusted for all users.  
2. Trust the Certificate within the Podman Machine:  
   The Podman engine itself runs inside a Linux VM. This VM also needs to trust the certificate. We will copy the certificate into the VM's trust store.  
   First, SSH into the podman machine:  

```shell
   limactl shell podman 

```

   Once inside the VM's shell, create a directory for your registry's certificate and copy the file into it. The directory name (localhost:5000) must match the registry's address exactly.  

```shell
   # Inside the Podman VM  
   sudo mkdir -p /etc/containers/certs.d/localhost:5000  
   sudo cp "/Users/bulent/Documents/elearning/oreilly/Red Hat Certified Specialist in Containers (EX188)/ex188/podman-registry/certs/domain.crt" /etc/containers/certs.d/localhost:5000/ca.crt  
   exit
```

   **It is often necessary to restart the Podman machine for this change to take effect:**  

```shell
#   podman machine stop  
#   podman machine start
limactl stop podman
limactl start podman
```

   After it restarts, ensure your registry container is running again with podman start private-registry.

### **Step 5: Push an Image to Your Private Registry**

With the setup complete, let's test it by pushing an image.

1. **Pull a Test Image**: Let's grab a lightweight image like alpine.  

```shell
   podman pull docker.io/library/alpine

```

2. **Tag the Image for Your Registry**: You need to tag the image with the registry's address (localhost:5000).  

```shell
   podman tag docker.io/library/alpine localhost:5000/my-alpine

```

3. **Push the Tagged Image**:  

```shell
   podman push localhost:5000/my-alpine

```

   If successful, you will see output indicating the layers are being pushed, ending with the image's digest. You will not need any \--tls-verify=false flags because we properly configured the trust store.

### **Step 6: Verify the Image in the Registry**

You can verify that your image was successfully pushed by using the registry's API. Since the API is protected by our self-signed certificate, you need to tell curl to use it.

```shell
curl --cacert certs/domain.crt --resolve localhost:5000:127.0.0.1 https://localhost:5000/v2/_catalog
```

This should return a JSON object listing the repositories in your registry:

{"repositories":\["my-alpine"\]}

Congratulations\! You now have a fully functional, secure, and private container registry running locally with Podman.
