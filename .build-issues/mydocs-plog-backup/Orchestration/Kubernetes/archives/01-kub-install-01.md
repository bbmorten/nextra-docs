# Kubernetes Installation 1

## VMWare ESX + 4 Ubuntu Nodes + Powershell Scripts

###  Installing Powershell on MACOS

VSPHERE Server : 192.168.49.20
Username : administrator@vsphere.local
Password : ***

```shell
homebrew install powershell
cd /Users/bulent/Documents/CourseMaterial/BTKUB001/installations/powershell-scripts
powershell
Install-Module -Name VMware.PowerCLI
./VMwareDeployvm-MAC.ps1 -csvfile ./instructor-pod-2.csv
```

## Lab 1

### Kubernetes Installation - Installing and Configuring containerd and kubernetes packages on Control Plane and Worker Nodes

####  Step 1

```shell
# MACOSX
# /etc/hosts records for the cluster as well as the client machines
sudo bash -c 'cat <<EOF >> /etc/hosts
# Added by Bulent Morten BTKUB001 Trainer Cluster Setup
192.168.49.81 int-02-01.btegitim.local int-02-01
192.168.49.82 int-02-02.btegitim.local int-02-02
192.168.49.83 int-02-03.btegitim.local int-02-03
192.168.49.84 int-02-04.btegitim.local int-02-04
192.168.49.85 int-02-05.btegitim.local int-02-05
EOF'

# MacOSX Specific
sudo ssh-keygen

bash -c 'ssh-copy-id -i /Users/bulent/.ssh/id_rsa.pub vm@int-02-01'
bash -c 'ssh-copy-id -i /Users/bulent/.ssh/id_rsa.pub vm@int-02-02'
bash -c 'ssh-copy-id -i /Users/bulent/.ssh/id_rsa.pub vm@int-02-03'
bash -c 'ssh-copy-id -i /Users/bulent/.ssh/id_rsa.pub vm@int-02-04'
bash -c 'ssh-copy-id -i /Users/bulent/.ssh/id_rsa.pub vm@int-02-05'



# For windows, use the following command to add the hosts file
Add-Content -Path $env:windir\System32\drivers\etc\hosts -Value "`n192.168.49.81`tint-02-01" -Force
Add-Content -Path $env:windir\System32\drivers\etc\hosts -Value "`n192.168.49.82`tint-02-02" -Force
Add-Content -Path $env:windir\System32\drivers\etc\hosts -Value "`n192.168.49.83`tint-02-03" -Force
Add-Content -Path $env:windir\System32\drivers\etc\hosts -Value "`n192.168.49.84`tint-02-04" -Force

PS C:\Windows\System32> ssh-keygen.exe
Generating public/private rsa key pair.
...
Your public key has been saved in C:\Users\bulen/.ssh/id_rsa.pub.
...

# Powershell
type $env:USERPROFILE\.ssh\id_rsa.pub | ssh vm@192.168.49.81 "cat >> .ssh/authorized_keys"
type $env:USERPROFILE\.ssh\id_rsa.pub | ssh vm@192.168.49.82 "cat >> .ssh/authorized_keys"
type $env:USERPROFILE\.ssh\id_rsa.pub | ssh vm@192.168.49.83 "cat >> .ssh/authorized_keys"
type $env:USERPROFILE\.ssh\id_rsa.pub | ssh vm@192.168.49.84 "cat >> .ssh/authorized_keys"

```

#### Step 2 Updates

```shell
# Control Plane Installation (st-StudentID-01)
# Change int-02 to st-StudentID
# MACOSX

ssh -t vm@int-02-01 "echo Password1! |sudo -S apt-get update"
ssh -t vm@int-02-01 "echo Password1! |sudo -S apt-get upgrade -y"
ssh -t vm@int-02-01 "echo Password1! | sudo -S bash -c 'cat <<EOF >> /etc/hosts
# Added by Bulent Morten BTKUB001 Trainer Cluster Setup
192.168.49.81 int-02-01.btegitim.local int-02-01
192.168.49.82 int-02-02.btegitim.local int-02-02
192.168.49.83 int-02-03.btegitim.local int-02-03
192.168.49.84 int-02-04.btegitim.local int-02-04
192.168.49.85 int-02-05.btegitim.local int-02-05
EOF'"
```

```shell
ssh -t vm@int-02-01 "echo Password1! |sudo -S apt-get dist-upgrade -y"
```

This command may be executed interactively

```shell
ssh -t vm@int-02-01 "echo Password1! |sudo -S do-release-upgrade"
```

#### Step 3 Installing the docker engine

<https://docs.docker.com/engine/install/ubuntu/>

```shell
swapoff -a
sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

Non-root stuff

```shell
sudo groupadd docker
sudo usermod -aG docker $USER
```

```shell
vm@int-02-01:~$ docker run hello
```

Runtime  | Path to Unix domain socket
---------| ---------------------------
containerd | unix:///var/run/containerd/containerd.sock
CRI-O | unix:///var/run/crio/crio.sock
Docker Engine (using cri-dockerd) | unix:///var/run/cri-dockerd.sock

#### Step 4 Following the [kubernetes installation documents](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/)

```shell
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl

sudo curl -fsSLo /etc/apt/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg


echo "deb [signed-by=/etc/apt/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list

sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl

```

```shell

#1 - systemd Units
#Check the status of our kubelet and our container runtime, containerd.
#The kubelet will enter a crashloop until a cluster is created or the node is joined to an existing cluster.
sudo systemctl status kubelet.service
sudo systemctl status containerd.service


#Ensure both are set to start when the system starts up.
sudo systemctl enable kubelet.service
sudo systemctl enable containerd.service


```

From a pre installation of kubernetes doc <https://lms.morten.com.tr/mod/book/view.php?id=58&chapterid=190>

```shell
#0 - Install Packages
#containerd prerequisites, first load two modules and configure them to load on boot
#https://kubernetes.io/docs/setup/production-environment/container-runtimes/
sudo modprobe overlay
sudo modprobe br_netfilter

cat <<EOF | sudo tee /etc/modules-load.d/containerd.conf
overlay
br_netfilter
EOF


#Setup required sysctl params, these persist across reboots.
cat <<EOF | sudo tee /etc/sysctl.d/99-kubernetes-cri.conf
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
net.bridge.bridge-nf-call-ip6tables = 1
EOF


#Apply sysctl params without reboot
sudo sysctl --system

```

```shell


#Create a containerd configuration file
sudo mkdir -p /etc/containerd
sudo containerd config default | sudo tee /etc/containerd/config.toml

```

Set the cgroup driver for containerd to systemd which is required for the kubelet.
For more information on this config file see:
<https://github.com/containerd/cri/blob/master/docs/config.md> and also
<https://github.com/containerd/containerd/blob/master/docs/ops.md>

At the end of this section
[plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
...
UPDATE: This line is now in the config.toml file
change it from SystemdCgroup = false to SystemdCgroup = true
SystemdCgroup = true

```shell
sudo vi /etc/containerd/config.toml

```

or

```shell
sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml

#Restart containerd with the new configuration
sudo systemctl restart containerd

```

Update the package list and use apt-cache policy to inspect versions available in the repository

```shell
sudo apt-get update
apt-cache policy kubelet | head -n 20
```

####  Step 5 - Creating a Cluster Control Plane Node and Adding a Node to Your Cluster

```shell
mkdir manifests
cd manifests
#Create our kubernetes cluster, specify a pod network range matching that in calico.yaml!
#Only on the Control Plane Node, download the yaml files for the pod network.
wget https://docs.projectcalico.org/manifests/calico.yaml


#Look inside calico.yaml and find the setting for Pod Network IP address range CALICO_IPV4POOL_CIDR,
#adjust if needed for your infrastructure to ensure that the Pod network IP
#range doesn't overlap with other networks in our infrastructure.
vi calico.yaml
```

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

Set the CRI Socket to point to containerd

```shell
sed -i 's/ criSocket: \/var\/run\/dockershim\.sock/ criSocket: \/run\/containerd\/containerd\.sock/' ClusterConfiguration.yaml
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

We're using 1.21.0...if you're using a newer version update that here.

```shell
vi ClusterConfiguration.yaml
```

Need to add CRI socket since there's a check for docker in the kubeadm init process,
if you don't you'll get this error...

error execution phase preflight: docker is required for container runtime: exec: "docker": executable file not found in $PATH

```shell
sudo kubeadm init \
--config=ClusterConfiguration.yaml # \
```

1.22'de gerekmedi --cri-socket /run/containerd/containerd.sock

Output of the command

```shell
vm@int-02-01:~/manifests$ sudo kubeadm init --config=ClusterConfiguration.yaml
[init] Using Kubernetes version: v1.26.0
[preflight] Running pre-flight checks
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
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
[kubeconfig] Writing "kubelet.conf" kubeconfig file
[kubeconfig] Writing "controller-manager.conf" kubeconfig file
[kubeconfig] Writing "scheduler.conf" kubeconfig file
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Starting the kubelet
[control-plane] Using manifest folder "/etc/kubernetes/manifests"
[control-plane] Creating static Pod manifest for "kube-apiserver"
[control-plane] Creating static Pod manifest for "kube-controller-manager"
[control-plane] Creating static Pod manifest for "kube-scheduler"
[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"
[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s
[apiclient] All control plane components are healthy after 7.001933 seconds
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
        --discovery-token-ca-cert-hash sha256:50a4c9130cd683e6aa1873331e182bb2f770fc9796480ff95d9b0f81a11c9e67 
```

```shell
  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

    export KUBECONFIG=/etc/kubernetes/admin.conf

```

???+ Reboot
    Reboot the node before executing the following command.

To add a node to join the cluster.

```shell
sudo kubeadm join 192.168.49.81:6443 --token abcdef.0123456789abcdef \
        --discovery-token-ca-cert-hash sha256:50a4c9130cd683e6aa1873331e182bb2f770fc9796480ff95d9b0f81a11c9e67 
```

####  Hint : Deleting a Node

kubectl delete node ...

??? kubeadm reset

    kubeadm reset gerekli değildi. Ancak kubeadm reset komutu kullanılarak kubeadm konfigürasyonu silinebilir. sonrasında kubeadm init''ten itibaren tekrar kurulabilir.
    
    rm -rf $HOME/.kube

```shell title="On nodes"
sudo systemctl disable kubelet.service
sudo systemctl stop kubelet.service
sudo systemctl disable containerd.service
sudo systemctl stop containerd.service
sudo rm -rf /var/lib/kubelet
sudo rm -rf /etc/kubernetes/
sudo rm -rf /var/lib/etcd
sudo systemctl enable kubelet.service
sudo systemctl enable containerd.service
sudo systemctl start kubelet.service
sudo systemctl start containerd.service
```

### NFS Server Installation

Node names resolution

```shell
bash -c 'ssh-copy-id -i /Users/bulent/.ssh/id_rsa.pub vm@192.168.49.85'
ssh -t vm@int-02-05 "echo Password1! | sudo -S bash -c 'cat <<EOF >> /etc/hosts
192.168.49.81 int-02-01.btegitim.local int-02-01
192.168.49.82 int-02-02.btegitim.local int-02-02
192.168.49.83 int-02-03.btegitim.local int-02-03
192.168.49.84 int-02-04.btegitim.local int-02-04
192.168.49.85 int-02-04.btegitim.local int-02-05
EOF'"
```

Connect to nfs server

```shell
sudo apt-get update && sudo apt-get upgrade -y
sudo apt-get install -y nfs-server
```

NFS Server kurulumu bittikten sonra paylaşıma açmak için klasör oluşturuyoruz.

```shell
sudo mkdir /mnt/k8s-data
```

Klasör oluşturduktan sonra, klasör için güvenlik ayarlarını aşağıdaki komut ile değiştiriyoruz.

```shell

sudo chown nobody:nogroup /mnt/k8s-data

sudo chmod -R 777 /mnt/k8s-data

```

Bu işlemden sonra “/etc/exports” dosyasını güncelliyoruz.

```shell
sudo -s
```

```shell

bash -c 'cat <<EOF >> /etc/exports
/mnt/k8s-data 192.168.49.81(rw,sync,no_all_squash,root_squash,no_subtree_check)
/mnt/k8s-data 192.168.49.82(rw,sync,no_all_squash,root_squash,no_subtree_check)
/mnt/k8s-data 192.168.49.83(rw,sync,no_all_squash,root_squash,no_subtree_check)
/mnt/k8s-data 192.168.49.84(rw,sync,no_all_squash,root_squash,no_subtree_check)
EOF'
```

NFS sunucusunu aktif hale getirmek için;

```shell
systemctl enable --now nfs-server
```

Değişikliği aktif hala getirmek için;

```shell
exportfs -ar
```

Check the exported fs

```shell
exportfs
```

On each Node in your cluster...install the NFS client.

```shell
sudo apt install nfs-common -y
```

Testing a node

```shell
sudo mount -t nfs4 int-02-05:/mnt/k8s-data /mnt/
mount | grep nfs
sudo umount /mnt

```

### HELM Installation

```shell
curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
sudo apt-get install apt-transport-https --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm
```

### Kubeapps Installation

####  Step 1 - Installation

helm & kubectl are prerequisites

```shell
helm repo add bitnami https://charts.bitnami.com/bitnami
kubectl create namespace kubeapps
helm install kubeapps --namespace kubeapps bitnami/kubeapps
```

####  Step 2 - Access to web site

To access Kubeapps from outside your K8s cluster, follow the steps below:

1. Get the Kubeapps URL by running these commands:
   echo "Kubeapps URL: <http://127.0.0.1:8088>"

   ```shell
   kubectl port-forward --namespace kubeapps service/kubeapps 8088:80 --kubeconfig=config.49.81
   ```

2. Open a browser and access Kubeapps using the obtained URL.

#### Step 3 - Create Persistent Volumes

Create a PV with the read/write many and retain as the reclaim policy

```yaml title="data-kubeapps-postgresql-primary-0"
apiVersion: v1
kind: PersistentVolume
metadata:
   name: kubeapps-pv-primary
spec:
    storageClassName: "standart"
    capacity:
      storage: 8Gi
    claimRef:
      name: data-kubeapps-postgresql-primary-0
      namespace: kubeapps
    accessModes:
      - ReadWriteOnce
    nfs:
      path: /mnt/k8s-data/kubeapps/db01
      server: 192.168.49.85
```

Apply it with

```shell
kubectl apply -f -
<yaml>
Ctrl^D
```

Another PV

```yaml title="data-kubeapps-postgresql-read-0"
apiVersion: v1
kind: PersistentVolume
metadata:
   name: kubeapps-pv-read
spec:
    storageClassName: "standart"
    capacity:
      storage: 8Gi
    claimRef:
      name: data-kubeapps-postgresql-read-0
      namespace: kubeapps
    accessModes:
      - ReadWriteOnce
    nfs:
      path: /mnt/k8s-data/kubeapps/db02
      server: 192.168.49.85
```

#### Step 5 - NFS Server Tweaks

Log in to nfs-server and execute the following commands

```shell
cd /mnt/k8s-data

sudo mkdir kubeapps

cd kubeapps

sudo mkdir db01

sudo mkdir db02

sudo chown nobody:nogroup /mnt/k8s-data/kubeapps

sudo chmod -R 777 /mnt/k8s-data/kubeapps/
```

#### Step 6 - Demo Access

Kubeapps demo olarak kullanabilmek için aşağıdaki komutları giriyoruz. Prod ortamları için ayrı yapılandırma yapılması önerilmektedir. kubeapps/using-an-OIDC-provider.md at main · vmware-tanzu/kubeapps · GitHub

```shell
kubectl create --namespace default serviceaccount kubeapps-operator
kubectl create clusterrolebinding kubeapps-operator --clusterrole=cluster-admin --serviceaccount=default:kubeapps-operator
```

```yaml title="Service Account Token"
apiVersion: v1
kind: Secret
metadata:
  name: kubeapps-operator-token
  namespace: default
  annotations:
    kubernetes.io/service-account.name: kubeapps-operator
type: kubernetes.io/service-account-token
```

```shell
kubectl get --namespace default secret kubeapps-operator-token -o go-template='{{.data.token | base64decode}}'
```

### MYSQL Installation via Kubeapps

dywPo3-webvoh-qiqtid

#### Installation Notes from kubeapps

```shell
CHART NAME: mysql
CHART VERSION: 9.4.8
APP VERSION: 8.0.32
** Please be patient while the chart is being deployed **
Tip:
Watch the deployment status using the command: kubectl get pods -w --namespace databases
Services:
echo Primary: ohmysql.databases.svc.cluster.local:3306
Execute the following to get the administrator credentials:
echo Username: root
MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace databases ohmysql -o jsonpath="{.data.mysql-root-password}" | base64 -d)
To connect to your database:
Run a pod that you can use as a client:
kubectl run ohmysql-client --rm --tty -i --restart='Never' --image docker.io/bitnami/mysql:8.0.32-debian-11-r0 --namespace databases --env MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD --command -- bash
To connect to primary service (read/write):
mysql -h ohmysql.databases.svc.cluster.local -uroot -p"$MYSQL_ROOT_PASSWORD"
```

Another PV for MYSQL

```shell
cd /mnt/k8s-data/kubeapps

sudo mkdir ohmysql

sudo chmod -R 777 /mnt/k8s-data/kubeapps/
```

claimRef is important and should be named as data-ohmysql-0

```yaml title="data-kubeapps-postgresql-read-0"
apiVersion: v1
kind: PersistentVolume
metadata:
   name: ohmysql-pv-primary
spec:
    storageClassName: "standart"
    capacity:
      storage: 8Gi
    claimRef:
      name: data-ohmysql-0
      namespace: databases
    accessModes:
      - ReadWriteOnce
    nfs:
      path: /mnt/k8s-data/kubeapps/ohmysql
      server: 192.168.49.85
```

## Istio Installation on Ubuntu K8S Cluster

```shell
helm repo add istio https://istio-release.storage.googleapis.com/charts
helm repo update
```

Create the namespace, istio-system, for the Istio components:

```shell
kubectl create namespace istio-system
```

Install the Istio base chart which contains cluster-wide Custom Resource Definitions (CRDs) which must be installed prior to the deployment of the Istio control plane:

```shell
helm install istio-base istio/base -n istio-system
```

Validate the CRD installation with the helm ls command:

```shell
helm ls -n istio-system
```

Install the Istio discovery chart which deploys the istiod service:

```shell

helm install istiod istio/istiod -n istio-system --wait


NAME: istiod
LAST DEPLOYED: Thu Feb 23 12:20:02 2023
NAMESPACE: istio-system
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
"istiod" successfully installed!

To learn more about the release, try:
  $ helm status istiod
  $ helm get all istiod

Next steps:
  * Deploy a Gateway: https://istio.io/latest/docs/setup/additional-setup/gateway/
  * Try out our tasks to get started on common configurations:
    * https://istio.io/latest/docs/tasks/traffic-management
    * https://istio.io/latest/docs/tasks/security/
    * https://istio.io/latest/docs/tasks/policy-enforcement/
    * https://istio.io/latest/docs/tasks/policy-enforcement/
  * Review the list of actively supported releases, CVE publications and our hardening guide:
    * https://istio.io/latest/docs/releases/supported-releases/
    * https://istio.io/latest/news/security/
    * https://istio.io/latest/docs/ops/best-practices/security/

For further documentation see https://istio.io website

Tell us how your install/upgrade experience went at https://forms.gle/hMHGiwZHPU7UQRWe9

```

Install the Istio discovery chart which deploys the istiod service:

```shell
helm install istiod istio/istiod -n istio-system --wait
```

Verify the Istio discovery chart installation:

```shell
helm ls -n istio-system
NAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION
istio-base      istio-system    1               2023-02-23 11:40:25.822693 +0300 +03    deployed        base-1.17.0     1.17.0     
istiod          istio-system    1               2023-02-23 12:20:02.916965 +0300 +03    deployed        istiod-1.17.0   1.17.0  
```
Get the status of the installed helm chart to ensure it is deployed:

```shell
helm status istiod -n istio-system
``` 

Check istiod service is successfully installed and its pods are running:


```shell
kubectl get deployments -n istio-system --output wide
```

(Optional) Install an ingress gateway:

```shell
kubectl create namespace istio-ingress
kubectl label namespace istio-ingress istio-injection=enabled
helm install istio-ingress istio/gateway -n istio-ingress --wait
``` 

