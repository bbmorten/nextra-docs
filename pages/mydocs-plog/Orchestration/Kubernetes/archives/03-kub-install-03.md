# Kubernetes Installation 3

## Control-plane node installation

```console
sudo apt update && sudo apt upgrade -y

```

- Check if swap is enabled:

```console
swapon -s 

```

- If output is non-empty, disable swap:

```console
sudo swapoff -a

```

- Then edit /etc/fstab and comment out any lines containing swap.

```console
sudo sed -i '/ swap / s/^/#/' /etc/fstab
```

### Add Kubernetes Repository

```console
sudo apt-get update

# apt-transport-https may be a dummy package; if so, you can skip that package
sudo apt-get install -y apt-transport-https ca-certificates curl

sudo apt-get update

curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.29/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.29/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

sudo apt-get update
```

###   Install containerd

```console
sudo apt-get install -y containerd

```

### Create a containerd configuration file

```console
sudo mkdir -p /etc/containerd
sudo containerd config default | sudo tee /etc/containerd/config.toml
sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml

# Restart containerd with the new configuration
sudo systemctl enable containerd
sudo systemctl restart containerd

```


### Checks logs and status

```console
sudo journalctl -xe  -u containerd -n 50 --no-pager
sudo systemctl status containerd
```

### Load required kernel modules and configure systemctl

```console
sudo modprobe overlay
sudo modprobe br_netfilter

# Set sysctl params, these persist across reboots.
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
sudo sysctl --system

cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.ipv4.ip_forward                 = 1
EOF
sudo sysctl --system

```

###  Install Kubernetes Components

```console
sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
```

### systemd Units

- Check the status of our kubelet and our container runtime, containerd.
- The kubelet will enter a crashloop until a cluster is created or the node is joined to an existing cluster.

```console
sudo systemctl status kubelet.service
sudo systemctl status containerd.service
```

- Ensure both are set to start when the system starts up.

```console
sudo systemctl enable kubelet.service
sudo systemctl enable containerd.service
```



###  Calico Setup  

```shell
mkdir manifests
cd manifests
#Create our kubernetes cluster, specify a pod network range matching that in calico.yaml!
#Only on the Control Plane Node, download the yaml files for the pod network.
wget https://calico-v3-25.netlify.app/archive/v3.25/manifests/calico.yaml


#Look inside calico.yaml and find the setting for Pod Network IP address range CALICO_IPV4POOL_CIDR,
#adjust if needed for your infrastructure to ensure that the Pod network IP
#range doesn't overlap with other networks in our infrastructure.

# Didn't touch it last time. Change the CIDR block and failed.
#vi calico.yaml
```

### Kubeadm init configuration file

Generate a default kubeadm init configuration file...this defines the settings of the cluster being built.
If you get a warning about how docker is not installed...this is OK to ingore and is a bug in kubeadm
For more info on kubeconfig configuration files see:
<https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/#config-file>

```shell
kubeadm config print init-defaults | tee ClusterConfiguration.yaml
```

Inside default configuration file, we need to change four things.

1. The IP Endpoint for the API Server localAPIEndpoint.advertiseAddress:
2. nodeRegistration.criSocket from docker to containerd
3. Set the cgroup driver for the kubelet to systemd, it's not set in this file yet, the efault is cgroupfs
4. Edit kubernetesVersion to match the version you installed in -PackageInstallation-containerd.sh
5. Update the node name from node to the actual control plane node name, c1-cp1

Change the address of the localAPIEndpoint.advertiseAddress to the Control Plane Node's IP ddress

```shell
sed -i 's/ advertiseAddress: 1.2.3.4/ advertiseAddress: 192.168.49.81/' ClusterConfiguration.yaml
```

UPDATE: Added configuration to set the node name for the control plane node to the actual hostname

```shell
sed -i 's/ name: node/ name: int-02-01/' ClusterConfiguration.yaml
```

Set the cgroupDriver to systemd...matching that of your container runtime, containerd

```shell
cat <<EOF | cat >> ClusterConfiguration.yaml
---
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
cgroupDriver: systemd
EOF
```

Review the Cluster configuration file, update the version to match what you've installed.

```shell
vi ClusterConfiguration.yaml
```

```shell
sudo kubeadm init --config=ClusterConfiguration.yaml 
```

### Start using your cluster

```console
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

#### Initializatin Log

```console
vm@int-02-01:~/manifests$ sudo kubeadm init \
--config=ClusterConfiguration.yaml
[init] Using Kubernetes version: v1.29.0
[preflight] Running pre-flight checks
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
W0324 12:10:58.950523    3525 checks.go:835] detected that the sandbox image "registry.k8s.io/pause:3.8" of the container runtime is inconsistent with that used by kubeadm. It is recommended that using "registry.k8s.io/pause:3.9" as the CRI sandbox image.
[certs] Using certificateDir folder "/etc/kubernetes/pki"
[certs] Generating "ca" certificate and key
[certs] Generating "apiserver" certificate and key
[certs] apiserver serving cert is signed for DNS names [int-02-01 kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local] and IPs [10.96.0.1 192.168.49.81]
[certs] Generating "apiserver-kubelet-client" certificate and key
[certs] Generating "front-proxy-ca" certificate and key
[certs] Generating "front-proxy-client" certificate and key
[certs] Generating "etcd/ca" certificate and key
[certs] Generating "etcd/server" certificate and key
[certs] etcd/server serving cert is signed for DNS names [int-02-01 localhost] and IPs [192.168.49.81 127.0.0.1 ::1]
[certs] Generating "etcd/peer" certificate and key
[certs] etcd/peer serving cert is signed for DNS names [int-02-01 localhost] and IPs [192.168.49.81 127.0.0.1 ::1]
[certs] Generating "etcd/healthcheck-client" certificate and key
[certs] Generating "apiserver-etcd-client" certificate and key
[certs] Generating "sa" key and public key
[kubeconfig] Using kubeconfig folder "/etc/kubernetes"
[kubeconfig] Writing "admin.conf" kubeconfig file
[kubeconfig] Writing "super-admin.conf" kubeconfig file
[kubeconfig] Writing "kubelet.conf" kubeconfig file
[kubeconfig] Writing "controller-manager.conf" kubeconfig file
[kubeconfig] Writing "scheduler.conf" kubeconfig file
[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"
[control-plane] Using manifest folder "/etc/kubernetes/manifests"
[control-plane] Creating static Pod manifest for "kube-apiserver"
[control-plane] Creating static Pod manifest for "kube-controller-manager"
[control-plane] Creating static Pod manifest for "kube-scheduler"
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Starting the kubelet
[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s
[apiclient] All control plane components are healthy after 6.503256 seconds
[upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
[kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster
[upload-certs] Skipping phase. Please see --upload-certs
[mark-control-plane] Marking the node int-02-01 as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
[mark-control-plane] Marking the node int-02-01 as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
[bootstrap-token] Using token: abcdef.0123456789abcdef
[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes
[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
[bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
[bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
[bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
[kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
[addons] Applied essential addon: CoreDNS
[addons] Applied essential addon: kube-proxy

Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

Alternatively, if you are the root user, you can run:

  export KUBECONFIG=/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 192.168.49.81:6443 --token abcdef.0123456789abcdef \
 --discovery-token-ca-cert-hash sha256:142c84e9b8f31b83cf2a06dd0b682447f88c8d0034076f611ce7b0a0d0ab40a3


```





<!-- 
##  Garbage

## containerd, runc, libseccomp, cni-plugins installation

<https://github.com/containerd/containerd/blob/main/docs/getting-started.md>

 106  wget <https://github.com/containerd/containerd/releases/download/v1.7.14/containerd-1.7.14-linux-amd64.tar.gz>
  107  tar Cxzvf /usr/local containerd-1.7.14-linux-amd64.tar.gz
  108  sudo tar Cxzvf /usr/local containerd-1.7.14-linux-amd64.tar.gz
  109  wget <https://raw.githubusercontent.com/containerd/containerd/main/containerd.service>
  110  ls -la
  111  sudo find / -name *.service --print
  112  sudo find / -name*.service -print
  113  sudo cp containerd.service /lib/systemd/system/
  114  systemctl daemon-reload
  115  systemctl enable --now containerd
  116  systemctl status containerd
  117  kubectl cluster-info
  118  wget <https://github.com/opencontainers/runc/releases/download/v1.1.12/libseccomp-2.5.4.tar.gz>
  119  sudo tar Cxzvf ./ libseccomp-2.5.4.tar.gz
  120  ls -la
  121  cd libseccomp-2.5.4/
  122  ls -la
  123  more README.md
  124  ./configure
  125  sudo apt-get install gcc
  126  ls -la
  127  ./configure
  128  sudo apt-get install gperf
  129  ./configure
  130  sudo apt-get install gmake
  131  sudo apt-get install gawk
  132  ./configure
  133  MAKE="gmake" ./configure
  134  sudo apt-get install make
  135  ./configure
  136  ls -la
  137  more README.md
  138  make
  139  make install
  140  sudo make install
  141  history

    142  wget https://github.com/opencontainers/runc/releases/download/v1.1.12/runc.amd64
  143  install -m 755 runc.amd64 /usr/local/sbin/runc
  144  sudo install -m 755 runc.amd64 /usr/local/sbin/runc
  145  runc
  146  runc ps
  147  runc -h
  148  runc  list
  149  history

    150  wget https://github.com/containernetworking/plugins/releases/download/v1.4.1/cni-plugins-linux-amd64-v1.4.1.tgz
  151  sudo mkdir -p /opt/cni/bin
  152  sudo tar Cxzvf /opt/cni/bin cni-plugins-linux-amd64-v1.4.1.tgz
  153  macvlan
  154  /opt/cni/bin/macvlan
  155  containerd config default > /etc/containerd/config.toml
  156  systemctl status containerd
  157  vi /lib/systemd/system/containerd.service
  158  containerd config default > config.toml
  159  ls -la
  160  cd ..
  161* containerd config default > config.tom
  162  ls -la
  163  more config.toml
  164  sudo systemctl restart containerd
  165  history

   166  sudo apt-get update
  167  # apt-transport-https may be a dummy package; if so, you can skip that package
  168  sudo apt-get install -y apt-transport-https ca-certificates curl gpg
  169  # If the directory `/etc/apt/keyrings` does not exist, it should be created before the curl command, read the note below.
  170  # sudo mkdir -p -m 755 /etc/apt/keyrings
  171  curl -fsSL <https://pkgs.k8s.io/core:/stable:/v1.29/deb/Release.key> | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
  172  echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] <https://pkgs.k8s.io/core:/stable:/v1.29/deb/> /' | sudo tee /etc/apt/sources.list.d/kubernetes.list
  173  sudo apt-get update
  174  sudo apt-get install -y kubelet kubeadm kubectl
  175  sudo apt-mark hold kubelet kubeadm kubectl
  176  sudo systemctl enable --now kubelet
  177  sudo systemctl status kubelet
  178  history

  sudo kubeadm init --config=ClusterConfiguration.yaml  
  
## podSubnet in config file

  --pod-network-cidr=172.16.0.0/16

  vm@int-02-01:~/installation$ sudo kubeadm init --config=ClusterConfiguration.yaml
[init] Using Kubernetes version: v1.29.0
[preflight] Running pre-flight checks
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
W0322 17:46:10.561708    2405 checks.go:835] detected that the sandbox image "registry.k8s.io/pause:3.8" of the container runtime is inconsistent with that used by kubeadm. It is recommended that using "registry.k8s.io/pause:3.9" as the CRI sandbox image.
[certs] Using certificateDir folder "/etc/kubernetes/pki"
[certs] Generating "ca" certificate and key
[certs] Generating "apiserver" certificate and key
[certs] apiserver serving cert is signed for DNS names [int-02-01 kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local] and IPs [10.96.0.1 192.168.49.81]
[certs] Generating "apiserver-kubelet-client" certificate and key
[certs] Generating "front-proxy-ca" certificate and key
[certs] Generating "front-proxy-client" certificate and key
[certs] Generating "etcd/ca" certificate and key
[certs] Generating "etcd/server" certificate and key
[certs] etcd/server serving cert is signed for DNS names [int-02-01 localhost] and IPs [192.168.49.81 127.0.0.1 ::1]
[certs] Generating "etcd/peer" certificate and key
[certs] etcd/peer serving cert is signed for DNS names [int-02-01 localhost] and IPs [192.168.49.81 127.0.0.1 ::1]
[certs] Generating "etcd/healthcheck-client" certificate and key
[certs] Generating "apiserver-etcd-client" certificate and key
[certs] Generating "sa" key and public key
[kubeconfig] Using kubeconfig folder "/etc/kubernetes"
[kubeconfig] Writing "admin.conf" kubeconfig file
[kubeconfig] Writing "super-admin.conf" kubeconfig file
[kubeconfig] Writing "kubelet.conf" kubeconfig file
[kubeconfig] Writing "controller-manager.conf" kubeconfig file
[kubeconfig] Writing "scheduler.conf" kubeconfig file
[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"
[control-plane] Using manifest folder "/etc/kubernetes/manifests"
[control-plane] Creating static Pod manifest for "kube-apiserver"
[control-plane] Creating static Pod manifest for "kube-controller-manager"
[control-plane] Creating static Pod manifest for "kube-scheduler"
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Starting the kubelet
[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s
[apiclient] All control plane components are healthy after 5.502092 seconds
[upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
[kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster
[upload-certs] Skipping phase. Please see --upload-certs
[mark-control-plane] Marking the node int-02-01 as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
[mark-control-plane] Marking the node int-02-01 as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
[bootstrap-token] Using token: abcdef.0123456789abcdef
[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes
[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
[bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
[bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
[bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
[kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
[addons] Applied essential addon: CoreDNS
[addons] Applied essential addon: kube-proxy

Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

Alternatively, if you are the root user, you can run:

  export KUBECONFIG=/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  <https://kubernetes.io/docs/concepts/cluster-administration/addons/>

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 192.168.49.81:6443 --token abcdef.0123456789abcdef \
 --discovery-token-ca-cert-hash sha256:4ca1471eb361fa326971ec833da6d0f651c10310be4919241f78358d65de165b

 229  sudo kubeadm init --config=ClusterConfiguration.yaml
  230  sudo kubectl
  231  sudo kubectl get nodes
  232  sudo kubeadm reset
  233  rm -rf ~/.kube/config
  234  sudo kubeadm init --config=ClusterConfiguration.yaml
  235  mkdir -p $HOME/.kube
  236  exit
  237  kubectl get pods
  238  kubectl get nodes
  239  kubectl create -f <https://raw.githubusercontent.com/projectcalico/calico/v3.27.2/manifests/tigera-operator.yaml>
  240  kubectl create -f <https://raw.githubusercontent.com/projectcalico/calico/v3.27.2/manifests/custom-resources.yaml>
  241  watch kubectl get pods -n calico-system
  242  kubectl get name
  243  kubectl get resources
  244  kubectl get -h
  245  kubectl get nodes
  246  kubectl get pods -n calico-system
  247  kubectl taint nodes --all node-role.kubernetes.io/control-plane-
  248  kubectl taint nodes --all node-role.kubernetes.io/master-
  249  history

  247  kubectl taint nodes --all node-role.kubernetes.io/control-plane-
  248  kubectl taint nodes --all node-role.kubernetes.io/master-
  249  history
  250  kubectl get pods -n calico-system
  251  kubectl get nodes
  252  journalctl -xe kubeadm
  253  journalctl -xe kubelet
  254  sudo reboott
  255  sudo reboot
  256  kubectl get nodes
  257  sudo swap off -a
  258  sudo swapoff -a
  259  kubectl get nodes
  260  sudo vi /etc/fstab
  261  sudo reboot
  262  sudo kubectl get nodes
  263  sudo kubectl get pods
  264  kubectl get nodes
  265  vm@int-02-01:~$ kubectl get nodes
  266  NAME        STATUS     ROLES           AGE   VERSION
  267  int-02-01   NotReady   control-plane   16m   v1.29.3
  268  sudo systemctl status kubelet
  269  journalctl -u kubelet
  270  sudo systemctl status kubelet
  271  kubectl describe node int-02-01
  272  df -k
  273  du -k
  274  kubectl describe node int-02-01
  275  history

  Mar 22 18:12:23 int-02-01 containerd[841]: time="2024-03-22T18:12:23.463043215+03:00" level=warning msg="failed to load plugin io>

During kubeadm reset

  [reset] Deleting contents of directories: [/etc/kubernetes/manifests /var/lib/kubelet /etc/kubernetes/pki]
[reset] Deleting files: [/etc/kubernetes/admin.conf /etc/kubernetes/super-admin.conf /etc/kubernetes/kubelet.conf /etc/kubernetes/bootstrap-kubelet.conf /etc/kubernetes/controller-manager.conf /etc/kubernetes/scheduler.conf]
 -->