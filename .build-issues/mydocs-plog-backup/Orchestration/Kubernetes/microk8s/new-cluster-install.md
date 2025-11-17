#  MicroK8s Cluster on macOS

##  Install MicroK8s on macOS

### Install Multipass

```shell
brew install --cask multipass
```

### Start two instances

```shell
multipass launch --name vm1 --memory 4G --disk 10G
multipass launch --name vm2 --memory 4G --disk 10G
```

###  Prepare first node

```shell
multipass shell vm1

```

```shell
sudo apt  update && sudo apt -y upgrade
sudo reboot

```

- Install the [MicroK8s](#sudo-snap-install-microk8s---classic) snap app

```shell
sudo snap install microk8s --classic 
# sudo snap install microk8s --classic --channel=1.30/stable
sudo iptables -P FORWARD ACCEPT

```

- Check status of the node

```shell
sudo microk8s.status --wait-ready

```

- From the list, you need to enable the DNS, Dashboard, and Registry add-ons.

```shell
sudo microk8s.enable dns dashboard registry cilium

```

- Run the snap alias command to alias microk8s.kubectl to kubectl.

```shell
sudo snap alias microk8s.kubectl kubectl

```

- Adjust permissions for ubuntu user.

```shell
sudo usermod -a -G microk8s ubuntu
mkdir ~/.kube
sudo chown -R ubuntu ~/.kube
newgrp microk8s
kubectl get nodes -o wide
kubectl get services -o wide
kubectl get services -o wide --all-namespaces
```

- Test a deployment

```shell
kubectl create deployment nginx --image=nginx
kubectl get deployments
kubectl get pods -o wide
wget <pod-ip>
```

-- Create a headlless service

```shell
microk8s kubectl apply -f - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: nginx-headless
spec:
  clusterIP: None
  selector:
    app: nginx
  ports:
    - port: 80
EOF

```

```shell
ubuntu@vm1:~$ kubectl get service -o wide
NAME             TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE    SELECTOR
kubernetes       ClusterIP   10.152.183.1   <none>        443/TCP   68m    <none>
nginx-headless   ClusterIP   None           <none>        80/TCP    116s   app=nginx
```

```shell
ubuntu@vm1:~$ kubectl describe  service/nginx-headless
Name:                     nginx-headless
Namespace:                default
Labels:                   <none>
Annotations:              <none>
Selector:                 app=nginx
Type:                     ClusterIP
IP Family Policy:         SingleStack
IP Families:              IPv4
IP:                       None
IPs:                      None
Port:                     <unset>  80/TCP
TargetPort:               80/TCP
Endpoints:                10.1.225.9:80
Session Affinity:         None
Internal Traffic Policy:  Cluster
Events:                   <none>
```

```shell
ubuntu@vm1:~$ kubectl get pods
NAME                     READY   STATUS    RESTARTS   AGE
netshoot                 1/1     Running   0          11m
nginx-676b6c5bbc-pf4tt   1/1     Running   0          34m
```

- Running a utility pod

```shell
kubectl run tmp-shell --rm -i --tty --image nicolaka/netshoot
```

```shell
wget nginx-headless.default.svc.cluster.local

```

```shell
ping  nginx-headless.default.svc.cluster.local
PING nginx-headless.default.svc.cluster.local (10.1.225.9) 56(84) bytes of data.
64 bytes from 10-1-225-9.nginx-headless.default.svc.cluster.local (10.1.225.9): icmp_seq=1 ttl=63 time=0.417 ms
64 bytes from 10-1-225-9.nginx-headless.default.svc.cluster.local (10.1.225.9): icmp_seq=2 ttl=63 time=0.059 ms
64 bytes from 10-1-225-9.nginx-headless.default.svc.cluster.local (10.1.225.9): icmp_seq=3 ttl=63 time=0.166 ms
```

```shell
netshoot  ~  wget 10-1-225-9.nginx-headless.default.svc.cluster.local
Connecting to 10-1-225-9.nginx-headless.default.svc.cluster.local (10.1.225.9:80)
saving to 'index.html'
index.html           100% |******************************************************************|   615  0:00:00 ETA
'index.html' saved

```

```shell
 netshoot  ~  wget 10-1-225-9.default.pod.cluster.local
Connecting to 10-1-225-9.default.pod.cluster.local (10.1.225.9:80)
saving to 'index.html'
index.html           100% |******************************************************************|   615  0:00:00 ETA
'index.html' saved
```

### Adding a worker node

```shell
multipass shell vm2

```

```shell
sudo apt  update && sudo apt -y upgrade
sudo reboot
sudo snap install microk8s --classic
```

-- On the first node run,

```shell
ubuntu@vm1:~$ microk8s add-node
From the node you wish to join to this cluster, run the following:
microk8s join 192.168.206.4:25000/b73048550e0d881f25fe7871a51e3673/ef18fd17ecc8

Use the '--worker' flag to join a node as a worker not running the control plane, eg:
microk8s join 192.168.206.4:25000/b73048550e0d881f25fe7871a51e3673/ef18fd17ecc8 --worker

If the node you are adding is not reachable through the default interface you can use one of the following:
microk8s join 192.168.206.4:25000/b73048550e0d881f25fe7871a51e3673/ef18fd17ecc8
microk8s join fdb1:c939:e4d6:638c:5054:ff:fe84:41ff:25000/b73048550e0d881f25fe7871a51e3673/ef18fd17ecc8
```

- Adjust permissions for ubuntu user.

```shell
sudo usermod -a -G microk8s ubuntu
mkdir ~/.kube
sudo chown -R ubuntu ~/.kube
newgrp microk8s

```

```shell
ubuntu@vm2:~$ microk8s join 192.168.206.4:25000/b73048550e0d881f25fe7871a51e3673/ef18fd17ecc8 --worker
Contacting cluster at 192.168.206.4

The node has joined the cluster and will appear in the nodes list in a few seconds.

This worker node gets automatically configured with the API server endpoints.
If the API servers are behind a loadbalancer please set the '--refresh-interval' to '0s' in:
    /var/snap/microk8s/current/args/apiserver-proxy
and replace the API server endpoints with the one provided by the loadbalancer in:
    /var/snap/microk8s/current/args/traefik/provider.yaml

Successfully joined the cluster.
```

### To test the worker node scale the nginx deployment

-- On **vm1**

```shell
kubectl scale --replicas=3 deployments/nginx

```

-- Check new pods

```shell
ubuntu@vm1:~$ kubectl get pods -o wide
NAME                     READY   STATUS    RESTARTS   AGE    IP             NODE   NOMINATED NODE   READINESS GATES
netshoot                 1/1     Running   0          19m    10.1.225.23    vm1    <none>           <none>
nginx-676b6c5bbc-4w4q6   1/1     Running   0          111s   10.1.185.193   vm2    <none>           <none>
nginx-676b6c5bbc-bpwjg   1/1     Running   0          111s   10.1.185.194   vm2    <none>           <none>
nginx-676b6c5bbc-pf4tt   1/1     Running   0          55m    10.1.225.9     vm1    <none>           <none>
```

-- Test pod access from utility pod

```shell
netshoot  ~  ping -c 1  nginx-headless.default.svc.cluster.local
PING nginx-headless.default.svc.cluster.local (10.1.185.194) 56(84) bytes of data.
64 bytes from 10-1-185-194.nginx-headless.default.svc.cluster.local (10.1.185.194): icmp_seq=1 ttl=62 time=4.22 ms

--- nginx-headless.default.svc.cluster.local ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 4.215/4.215/4.215/0.000 ms

 netshoot  ~  ping -c 1  nginx-headless.default.svc.cluster.local
PING nginx-headless.default.svc.cluster.local (10.1.225.9) 56(84) bytes of data.
64 bytes from 10-1-225-9.nginx-headless.default.svc.cluster.local (10.1.225.9): icmp_seq=1 ttl=63 time=0.613 ms

--- nginx-headless.default.svc.cluster.local ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 0.613/0.613/0.613/0.000 ms
```

```shell
 netshoot  ~  ping -c 1 10-1-185-194.default.pod.cluster.local
PING 10-1-185-194.default.pod.cluster.local (10.1.185.194) 56(84) bytes of data.
64 bytes from 10-1-185-194.nginx-headless.default.svc.cluster.local (10.1.185.194): icmp_seq=1 ttl=62 time=3.03 ms

--- 10-1-185-194.default.pod.cluster.local ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 3.034/3.034/3.034/0.000 ms
```

### Try to define a new service on existing deployment

```shell
kubectl apply -f - << EOF
apiVersion: v1
kind: Service
metadata:
  name: nginx-hashead
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
EOF
```

-- Headless service reflects the pod ip address. But normal service reflects the Cluster IP.

```shell
 netshoot  ~  wget  nginx-hashead.default.svc.cluster.local
Connecting to nginx-hashead.default.svc.cluster.local (10.152.183.61:80)
saving to 'index.html'
index.html           100% |******************************************************************|   615  0:00:00 ETA
'index.html' saved

 netshoot  ~  wget  nginx-headless.default.svc.cluster.local
Connecting to nginx-headless.default.svc.cluster.local (10.1.185.193:80)
wget: can't open 'index.html': File exists

```

## Networking Summary

-- On **vm1** [Output](vm1-networking.txt)

-- On **vm2** [Output](vm2-networking.txt)

-- Pods on the kubernetes cluster

```shell
ubuntu@vm1:~$ kubectl get pods -o wide
NAME                     READY   STATUS    RESTARTS   AGE   IP             NODE   NOMINATED NODE   READINESS GATES
netshoot                 1/1     Running   0          45m   10.1.225.23    vm1    <none>           <none>
nginx-676b6c5bbc-4w4q6   1/1     Running   0          28m   10.1.185.193   vm2    <none>           <none>
nginx-676b6c5bbc-bpwjg   1/1     Running   0          28m   10.1.185.194   vm2    <none>           <none>
nginx-676b6c5bbc-pf4tt   1/1     Running   0          82m   10.1.225.9     vm1    <none>           <none>
```

-- Pods networking info

```shell
ubuntu@vm1:~$ # Get the list of pod names
PODS=$(kubectl get pods --no-headers -o custom-columns=":metadata.name")

# Iterate over each pod and execute the commands
for POD in $PODS; do
  echo "Executing on pod: $POD"
  echo "------------------------------"

  # Run ip link list
  echo "Output of ip link list:"
  kubectl exec "$POD" -- ip link list

  # Run ip addr list
  echo "Output of ip addr list:"
  kubectl exec "$POD" -- ip addr list

  echo "------------------------------"
  echo
done
Executing on pod: netshoot
------------------------------
Output of ip link list:
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
3: eth0@if28: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc noqueue state UP mode DEFAULT group default
    link/ether 52:f4:c3:59:26:90 brd ff:ff:ff:ff:ff:ff link-netnsid 0
Output of ip addr list:
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host proto kernel_lo
       valid_lft forever preferred_lft forever
3: eth0@if28: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc noqueue state UP group default
    link/ether 52:f4:c3:59:26:90 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 10.1.225.23/32 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::50f4:c3ff:fe59:2690/64 scope link proto kernel_ll
       valid_lft forever preferred_lft forever
------------------------------

```

-- Some pods do not have ip commands

```shell
kubectl run debug-pod --rm -it --image=nicolaka/netshoot -- bash

```

```shell
sudo microk8s.ctr --namespace k8s.io containers list

```

```shell
CONTAINER_ID=$(sudo microk8s.ctr --namespace k8s.io containers list | grep netshoot | awk '{print $1}')
echo "Container ID: $CONTAINER_ID"

```

```shell

sudo microk8s.ctr --namespace k8s.io containers info aeaae52de3f326e6909d37a74d181a6b059a2c6f9c0a8e7d3d7b3844c514fdbf
```

```shell
HOST_PID=$(sudo microk8s.ctr --namespace k8s.io containers info $CONTAINER_ID | jq -r '.Spec.linux.namespaces[] | select(.type == "ipc") | .path' | awk -F'/' '{print $3}')
echo "Host PID: $HOST_PID"
```

```shell
echo "Inspecting network for pod: $POD_NAME (PID: $HOST_PID)"
sudo nsenter -t "$HOST_PID" -n ip addr
sudo nsenter -t "$HOST_PID" -n ip link
```

##  An excellent script

-- Version 1

```shell
#!/bin/bash

# Get the list of pod names
PODS=$(kubectl get pods --no-headers -o custom-columns=":metadata.name")

# Iterate over each pod and execute the commands
for POD in $PODS; do
  echo "Executing on pod: $POD"
  echo "------------------------------"

  # Get the container ID using kubectl for accurate mapping
  CONTAINER_ID=$(kubectl get pod "$POD" -o jsonpath='{.status.containerStatuses[0].containerID}' | cut -d'/' -f3)

  if [ -z "$CONTAINER_ID" ]; then
    echo "No container ID found for pod: $POD. Skipping."
    echo "------------------------------"
    echo
    continue
  fi

  # Extract the PID from the IPC namespace path
  HOST_PID=$(sudo microk8s.ctr --namespace k8s.io containers info "$CONTAINER_ID" | jq -r '.Spec.linux.namespaces[] | select(.type == "ipc") | .path' | awk -F'/' '{print $3}')

  echo "Container ID: $CONTAINER_ID"
  echo "Host PID: $HOST_PID"

  # Check if PID is found
  if [ -n "$HOST_PID" ]; then
    echo "Inspecting network for pod: $POD (PID: $HOST_PID)"
    sudo nsenter -t "$HOST_PID" -n ip addr
    sudo nsenter -t "$HOST_PID" -n ip link
  else
    echo "Unable to retrieve Host PID for pod: $POD"
  fi

  echo "------------------------------"
  echo
done

```

- Create records for vms on /etc/hosts file

```shell
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""
ubuntu@vm1:~$ cat $(ls ~/.ssh/id_rsa.pub)
<Copy the output .ssh/authorized_keys on vm2>



ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""  # If not already done
ubuntu@vm2:~$ cat $(ls ~/.ssh/id_rsa.pub)
<Copy the output .ssh/authorized_keys on vm1>
```

-- Version 2

```shell
#!/bin/bash

# Get the list of pod names
PODS=$(kubectl get pods --no-headers -o custom-columns=":metadata.name")

# Iterate over each pod and execute the commands
for POD in $PODS; do
  echo "Executing on pod: $POD"
  echo "------------------------------"

  # Get the node where the pod is running
  NODE_NAME=$(kubectl get pod "$POD" -o jsonpath='{.spec.nodeName}')

  # Get the container ID using kubectl for accurate mapping
  CONTAINER_ID=$(kubectl get pod "$POD" -o jsonpath='{.status.containerStatuses[0].containerID}' | cut -d'/' -f3)

  if [ -z "$CONTAINER_ID" ]; then
    echo "No container ID found for pod: $POD. Skipping."
    echo "------------------------------"
    echo
    continue
  fi

  # If the pod is on the current node
  if [ "$NODE_NAME" == "$(hostname)" ]; then
    HOST_PID=$(sudo microk8s.ctr --namespace k8s.io containers info "$CONTAINER_ID" | jq -r '.Spec.linux.namespaces[] | select(.type == "ipc") | .path' | awk -F'/' '{print $3}')
  else
    # If the pod is on a remote node, use SSH
    HOST_PID=$(ssh "$NODE_NAME" "sudo microk8s.ctr --namespace k8s.io containers info $CONTAINER_ID | jq -r '.Spec.linux.namespaces[] | select(.type == \"ipc\") | .path' | awk -F'/' '{print \$3}'")
  fi

  echo "Container ID: $CONTAINER_ID"
  echo "Host PID: $HOST_PID"

  # Check if PID is found
  if [ -n "$HOST_PID" ]; then
    echo "Inspecting network for pod: $POD (PID: $HOST_PID)"
    if [ "$NODE_NAME" == "$(hostname)" ]; then
      sudo nsenter -t "$HOST_PID" -n ip addr
      sudo nsenter -t "$HOST_PID" -n ip link
    else
      ssh "$NODE_NAME" "sudo nsenter -t $HOST_PID -n ip addr"
      ssh "$NODE_NAME" "sudo nsenter -t $HOST_PID -n ip link"
    fi
  else
    echo "Unable to retrieve Host PID for pod: $POD"
  fi

  echo "------------------------------"
  echo
done

```

[Output of the script](pod-networking.txt)

##  Multipass Dashboard

```shell
microk8s enable dashboard

```

```shell
ubuntu@vm1:~$ microk8s kubectl describe secret -n kube-system microk8s-dashboard-token
Name:         microk8s-dashboard-token
Namespace:    kube-system
Labels:       <none>
Annotations:  kubernetes.io/service-account.name: default
              kubernetes.io/service-account.uid: 1858264e-46ac-4eaf-bb3d-964fdece334a

Type:  kubernetes.io/service-account-token

Data
====
ca.crt:     1123 bytes
namespace:  11 bytes
token:      eyJhbGciOiJSUzI1NiIsImtpZCI6ImN1ZDdrdEhXRzhfTGdONTJKREdXM3hIemd2Q1RxMmZweXpBeDhxUHZGb00ifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJtaWNyb2s4cy1kYXNoYm9hcmQtdG9rZW4iLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVmYXVsdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjE4NTgyNjRlLTQ2YWMtNGVhZi1iYjNkLTk2NGZkZWNlMzM0YSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTpkZWZhdWx0In0.K0abH-oKdhmGntX1q0fE9mQ1qh_QkUL8tMFt-7UxZFwQpwTRlcSWiEZaLXoQSfHEU47QBUcDMlNoPL-ahwEIwEp-KlCsRujKQwVoj6z6jXD32rjhflLiHjNjzEiLVDSgVQ5JNilCsOy5bRo46ffmBFtYtTXom4HmKQCLSZ0r7NFgpOIFp01DPsEuIXqrnc5Id9IpeDP6hQoyHO8fWs7Ptl6sRaz1r1Y3ZLkdMsctQWEST_IV6uTd6W-SeuUE2ygJmQUXa5vW1G87O7i6RnDGKluyULZAIDkoYpTpLlPydgDEvdmpFLgZmz1WvQRiKXn68BTYYlcnYUe7sbKVQExk-w
```

```shell
kubectl -n kube-system describe  secret microk8s-dashboard-token
```



```shell
kubectl port-forward -n kube-system service/kubernetes-dashboard 10443:443 --address 0.0.0.0
```

On MacOSX site

```shell
ssh -L 10443:10.210.70.226:10443 vm@192.168.49.18

```

[Dashboard](https://localhost:10443)

## sudo snap install microk8s --classic

The `--classic` flag in the command:

```bash
sudo snap install microk8s --classic
```

refers to **classic confinement** in the Snap package system.

### 🚀 **What is Classic Confinement?**

- **Snap packages** are usually confined, meaning they run in a **sandboxed environment** with restricted access to the host system's resources (like files, hardware, and network).
- **Classic confinement** removes these restrictions, allowing the snap to access the system similarly to a traditional package installed via `apt` or `yum`.

### 🔑 **Why Use `--classic` for MicroK8s?**

- **MicroK8s** needs to interact with low-level system components (like networking, file systems, and kernel modules) to manage Kubernetes clusters effectively.
- Without `--classic`, MicroK8s wouldn't have the necessary permissions to configure networking or access system-level resources required for Kubernetes.

### ⚠️ **Security Implications**

- Classic confinement reduces isolation, which could pose a **security risk** if the snap is compromised.
- Only trusted snaps should be installed with `--classic`.

### ✅ **When to Use It?**

Use `--classic` when:

- The application needs unrestricted access to the system.
- The developer specifically requires it (as with MicroK8s, Docker, VS Code, etc.).

Let me know if you’d like more details on Snap confinement or Kubernetes! 🚀

##  Ansible Installation

### Create the main directory

mkdir -p microk8s-ansible/roles/{multipass,tasks,microk8s,nginx}/tasks

### Navigate to the main directory

cd microk8s-ansible

### Create the inventory and vars.yml files

touch inventory vars.yml playbook.yml

### Create the main.yml files for each role

touch roles/multipass/tasks/main.yml
touch roles/microk8s/tasks/main.yml
touch roles/nginx/tasks/main.yml

### Run the playbook

ansible-playbook -i inventory playbook.yml
