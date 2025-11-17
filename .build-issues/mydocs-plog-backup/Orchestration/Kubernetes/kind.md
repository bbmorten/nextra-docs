# KIND

## Installation on Linux Ubuntu 24.04

```yml title="kind-example-config.yaml"
# three node (two workers) cluster config
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
- role: worker
```

```shell title="Kind installation"
mkdir kind
cd kind
# For Linux Ubuntu
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.24.0/kind-linux-amd64
sudo su -
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind
# For MacosX Intel
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.24.0/kind-darwin-amd64
sudo su -
chmod +x ./kind
mv ./kind /usr/local/bin
```

```shell title="Create a cluster"
sudo su -
kind create cluster --config kind-example-config.yaml
```

```shell title="Running lens"
# Copy the kubeconfig file to the remote machine
scp ~root/.kube/config bulent@192.168.68.104:~bulent/.kube/config.kind.109
# Check the port on the remote machine
more .kube/config.kind.109
export LENS_PORT=36565
ssh -L ${LENS_PORT}:127.0.0.1:${LENS_PORT} 192.168.68.109
```

##  Installing kubectl on Linux

```shell
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

## Installing Cilium with KIND

### Creating the cluster

```shell
curl -LO https://raw.githubusercontent.com/cilium/cilium/1.16.1/Documentation/installation/kind-config.yaml
kind create cluster --config=kind-config.yaml
```

- For information you do not need to create it

```yml title="kind-config.yaml"
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
- role: worker
- role: worker
networking:
  disableDefaultCNI: true
```

### Installing Cilium-CLI

```shell title="Linux ubuntu"
CILIUM_CLI_VERSION=$(curl -s https://raw.githubusercontent.com/cilium/cilium-cli/main/stable.txt)
CLI_ARCH=amd64
if [ "$(uname -m)" = "aarch64" ]; then CLI_ARCH=arm64; fi
curl -L --fail --remote-name-all https://github.com/cilium/cilium-cli/releases/download/${CILIUM_CLI_VERSION}/cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}
sha256sum --check cilium-linux-${CLI_ARCH}.tar.gz.sha256sum
sudo tar xzvfC cilium-linux-${CLI_ARCH}.tar.gz /usr/local/bin
rm cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}
```

```shell title="MacOSX"
brew install cilium-cli

```

### Install Cilium

```shell
cilium install --version 1.16.1

```

### Verify Cilium

```shell
$ cilium status --wait
   /¯¯\
/¯¯\__/¯¯\    Cilium:         OK
\__/¯¯\__/    Operator:       OK
/¯¯\__/¯¯\    Hubble:         disabled
\__/¯¯\__/    ClusterMesh:    disabled
   \__/

DaemonSet         cilium             Desired: 2, Ready: 2/2, Available: 2/2
Deployment        cilium-operator    Desired: 2, Ready: 2/2, Available: 2/2
Containers:       cilium-operator    Running: 2
                  cilium             Running: 2
Image versions    cilium             quay.io/cilium/cilium:v1.9.5: 2
                  cilium-operator    quay.io/cilium/operator-generic:v1.9.5: 2

```

### connectivity test

```shell
cilium connectivity test
```

### Star Wars Demo

```shell
git clone https://github.com/cilium/star-wars-demo.git
```

####  Lab Kind Config

```yml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  extraPortMappings:
  # localhost.run proxy
  - containerPort: 32042
    hostPort: 32042
  # Hubble relay
  - containerPort: 31234
    hostPort: 31234
  # Hubble UI
  - containerPort: 31235
    hostPort: 31235
- role: worker
- role: worker
networking:
  disableDefaultCNI: true
  kubeProxyMode: none
```

#### Deploying the application

```yml title="http-sw-app.yaml"

---
apiVersion: v1
kind: Service
metadata:
  name: deathstar
  labels:
    app.kubernetes.io/name: deathstar
spec:
  type: ClusterIP
  ports:
  - port: 80
  selector:
    org: empire
    class: deathstar
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deathstar
  labels:
    app.kubernetes.io/name: deathstar
spec:
  replicas: 2
  selector:
    matchLabels:
      org: empire
      class: deathstar
  template:
    metadata:
      labels:
        org: empire
        class: deathstar
        app.kubernetes.io/name: deathstar
    spec:
      containers:
      - name: deathstar
        image: quay.io/cilium/starwars:v2.1
---
apiVersion: v1
kind: Pod
metadata:
  name: tiefighter
  labels:
    org: empire
    class: tiefighter
    app.kubernetes.io/name: tiefighter
spec:
  containers:
  - name: spaceship
    image: quay.io/cilium/json-mock:v1.3.8
---
apiVersion: v1
kind: Pod
metadata:
  name: xwing
  labels:
    app.kubernetes.io/name: xwing
    org: alliance
    class: xwing
spec:
  containers:
  - name: spaceship
    image: quay.io/cilium/json-mock:v1.3.8

```

```shell
# kubectl apply -f https://raw.githubusercontent.com/cilium/cilium/HEAD/examples/minikube/http-sw-app.yaml
kubectl apply -f http-sw-app.yaml
```

```shell title="Control 1"
root@server:~# kubectl get pods,svc
NAME                            READY   STATUS    RESTARTS   AGE
pod/deathstar-b4b8ccfb5-rv4jc   1/1     Running   0          13s
pod/deathstar-b4b8ccfb5-wmlzm   1/1     Running   0          13s
pod/tiefighter                  1/1     Running   0          13s
pod/xwing                       1/1     Running   0          13s

NAME                 TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
service/deathstar    ClusterIP   10.96.77.158   <none>        80/TCP    13s
service/kubernetes   ClusterIP   10.96.0.1      <none>        443/TCP   24m
root@server:~# kubectl get cep --all-namespaces
NAMESPACE            NAME                                      SECURITY IDENTITY   ENDPOINT STATE   IPV4           IPV6
default              deathstar-b4b8ccfb5-rv4jc                 18913               ready            10.244.2.160   
default              deathstar-b4b8ccfb5-wmlzm                 18913               ready            10.244.1.119   
default              tiefighter                                47875               ready            10.244.1.58    
default              xwing                                     18566               ready            10.244.1.171   
kube-system          coredns-76f75df574-bv4cl                  47291               ready            10.244.2.232   
kube-system          coredns-76f75df574-cctk9                  47291               ready            10.244.2.127   
local-path-storage   local-path-provisioner-7577fdbbfb-zvgk7   22917               ready            10.244.2.28  
```

```shell
root@BMAPMBP133:~/kind# kubectl exec tiefighter -- \
  curl -s -XPOST deathstar.default.svc.cluster.local/v1/request-landing
Ship landed
root@BMAPMBP133:~/kind# kubectl exec xwing -- \
  curl -s -XPOST deathstar.default.svc.cluster.local/v1/request-landing
Ship landed
```

####  Enforcing the Network Policy

```shell
kubectl apply -f https://raw.githubusercontent.com/cilium/cilium/HEAD/examples/minikube/sw_l3_l4_policy.yaml
```

```yml title="sw_l3_l4_policy.yaml"
apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: "rule1"
spec:
  description: "L3-L4 policy to restrict deathstar access to empire ships only"
  endpointSelector:
    matchLabels:
      org: empire
      class: deathstar
  ingress:
  - fromEndpoints:
    - matchLabels:
        org: empire
    toPorts:
    - ports:
      - port: "80"
        protocol: TCP
```

```shell
root@server:~# kubectl apply -f https://raw.githubusercontent.com/cilium/cilium/HEAD/examples/minikube/sw_l3_l4_policy.yaml
ciliumnetworkpolicy.cilium.io/rule1 created
root@server:~# kubectl exec tiefighter -- \
  curl -s -XPOST deathstar.default.svc.cluster.local/v1/request-landing
Ship landed
root@server:~# kubectl exec xwing -- \
  curl -s -XPOST deathstar.default.svc.cluster.local/v1/request-landing
...
```

```shell title="An attack ..."
root@BMAPMBP133:~/kind# kubectl exec tiefighter -- \
  curl -s -XPUT deathstar.default.svc.cluster.local/v1/exhaust-port
Panic: deathstar exploded

goroutine 1 [running]:
main.HandleGarbage(0x2080c3f50, 0x2, 0x4, 0x425c0, 0x5, 0xa)
        /code/src/github.com/empire/deathstar/
        temp/main.go:9 +0x64
main.main()
        /code/src/github.com/empire/deathstar/
        temp/main.go:5 +0x85
```

```yaml title="sw_l3_l4_l7_policy.yaml"
apiVersion: cilium.io/v2
kind: CiliumNetworkPolicy
metadata:
  name: rule1
spec:
  endpointSelector:
    matchLabels:
      org: empire
      class: deathstar
  ingress:
    - fromEndpoints:
        - matchLabels:
            org: empire
      toPorts:
        - ports:
            - port: "80"
              protocol: TCP
          rules:
            http:
              - method: POST
                path: /v1/request-landing

```

```shell
kubectl apply -f https://raw.githubusercontent.com/cilium/cilium/HEAD/examples/minikube/sw_l3_l4_l7_policy.yaml
root@BMAPMBP133:~/kind# kubectl exec tiefighter -- curl -s -XPUT deathstar.default.svc.cluster.local/v1/exhaust-port
Access denied
```

#### Challenge

The death star was destroyed by an X-Wing. And what does the empire do? They built another death star. And this time we really have to ensure that no X-Wing can ever access it.

Your task is to create a rule file under the name /root/policies/sneak.yaml, containing a rule called rule1 which restricts access to the death star via L3-L4 policies to empire ships only.

ⓘ Notes:

In the </> Editor tab, the sneak.yaml file has been pre-created but is missing the right parameters.
The policy has been loaded in the 🔗 Network Policy Editor tab. You can also open it in a new tab if necessary.
Make sure to apply the policy file in the >_ Terminal tab!
Your organization is called empire, you only want to allow ships of the class tiefighter
The endpoint the ships should reach is of the class deathstar, and of the organization empire
We also want to limit to port 80 and the TCP protocol.
Test TIE fighter access with kubectl exec tiefighter -- curl -s -XPOST deathstar.default.svc.cluster.local/v1/request-landing
Test X-Wing access with kubectl exec xwing -- curl -s -XPOST deathstar.default.svc.cluster.local/v1/request-landing
In the second tab, you can find the network policy editor which can help you creating the necessary rule.
You might find Cilium documentation about L3/L4 policies helpful
When the policy is updated, apply it with kubectl apply -f /root/policies/sneak.yaml

```yaml title="sneak.yaml --> Solution"
apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: "rule1"
spec:
  endpointSelector:
    matchLabels:
      org: empire
      class: deathstar
  ingress:
  - fromEndpoints:
    - matchLabels:
        org: empire     
        class: tiefighter
    toPorts:
    - ports:
      - port: "80"
        protocol: TCP

```

### Problem about kind

```shell

  \{^_^}/ hi!

  Loading /default.json
  Loading /middleware.js
  Done

  Resources
  http://:80/private
  http://:80/public
  http://:80/auth-header-required

  Home
  http://:80

  Type s + enter at any time to create a snapshot of the database
  Watching...

Error: EMFILE: too many open files, watch '/'
    at FSWatcher.<computed> (node:internal/fs/watchers:247:19)
    at Object.watch (node:fs:2469:36)
    at /usr/local/lib/node_modules/json-server/lib/cli/run.js:163:10 {
  errno: -24,
  syscall: 'watch',
  code: 'EMFILE',
  path: '/',
  filename: '/'
}

```

- Two containers images [restarting continuosly](https://kind.sigs.k8s.io/docs/user/known-issues/#pod-errors-due-to-too-many-open-files). Two correct them.

```shell

sysctl fs.inotify.max_user_instances=512
sysctl fs.inotify.max_user_watches=524288
```

- To make it permanent

```bash title="/etc/sysctl.conf"
fs.inotify.max_user_watches = 524288
fs.inotify.max_user_instances = 512
```
