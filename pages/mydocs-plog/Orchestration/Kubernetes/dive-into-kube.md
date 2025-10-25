# Dive Into Kubernetes (1)

Next one is [Dive Into KCNA](kcna-learn.md)

##  Container Runtimes

systemctl status containerd

which runc

which ctr

ctr images pull docker.io/library/ubuntu:latest

ctr run -t -d docker.io/library/ubuntu:latest quirky

ctr container list

ctr task list

ps -ef --forest

ctr task attach quirky

    ps
    apt update

ctr task ls

ctr container list

ctr container delete quirky

tar -xzvf /resources/nerdctl-1.1.0-linux.tar.gz --directory /usr/local/bin nerdctl

tar -xzvf /resources/cni-plugins-linux-v1.2.0.tgz -C /opt/cni/bin

ls -altr /etc/cni/net.d

nerdctl run --rm -it ubuntu bash

    ps -ef
    apt update
    apt install -y iproute2
    ip addr
    exit

cat /etc/cni/net.d/nerdctl-bridge.conflist

ip addr

mv /etc/cni/net.d/nerdctl-bridge.conflist /resources

##  Installing Kubernetes

```shell
kubeadm init --pod-network-cidr=10.10.0.0/16 --kubernetes-version=1.31.0

mkdir -p $HOME/.kube; sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config; sudo chown $(id -u):$(id -g) $HOME/.kube/config

kubectl get nodes

cat /resources/cni/10-bridge.conf
```

```shell
root@control-plane:~# cat /resources/cni/10-bridge.conf
{
    "cniVersion": "0.3.1",
    "name": "mynet",
    "type": "bridge",
    "bridge": "mynet0",
    "isDefaultGateway": true,
    "forceAddress": false,
    "ipMasq": true,
    "hairpinMode": true,
    "ipam": {
        "type": "host-local",
        "subnet": "10.10.0.0/16"
    }
```

sleep 3 && cp /resources/cni/10-bridge.conf /etc/cni/net.d & watch kubectl get nodes -o wide

ip addr

kubectl describe node control-plane | more

kubectl taint node control-plane node-role.kubernetes.io/control-plane:NoSchedule-

##  Kubernetes Pods

kubectl run nginx --image=nginx; watch kubectl get pods -o wide

kubectl get pods -o wide | grep nginx

IP=$(kubectl get pods -o wide | grep nginx | awk {'print $6'}); echo $IP

curl $IP

nerdctl ps -a

nerdctl namespace ls

nerdctl -n k8s.io ps -a

nerdctl -n default ps -a

Lima: Linux Machines

<https://github.com/lima-vm/lima>

limactl start
lima

nerdctl -n k8s.io ps -a | grep -v pause

nerdctl -n k8s.io ps -a | grep nginx

nerdctl -n k8s.io ps -a | grep nginx | grep -v pause

CONTAINER=$(nerdctl -n k8s.io ps -a | grep nginx | grep -v pause | awk {'print $1'}); echo $CONTAINER

nerdctl -n k8s.io stop $CONTAINER; watch kubectl get pods -o wide

CONTAINER=$(nerdctl -n k8s.io ps -a | grep nginx | grep pause | awk {'print $1'}); echo $CONTAINER

nerdctl -n k8s.io stop $CONTAINER; watch kubectl get pods -o wide

nerdctl -n k8s.io ps -a | grep nginx

kubectl delete pod/nginx --grace-period=0

## Creating YAML declarations with kubectl

kubectl run nginx --image=nginx --dry-run=client -o yaml

mkdir -p /etc/kubernetes/resources

kubectl run nginx --image=nginx --dry-run=client -o yaml > /etc/kubernetes/resources/nginx_pod.yaml

kubectl apply -f /etc/kubernetes/resources/nginx_pod.yaml

kubectl get pods

kubectl delete --grace-period=0 -f /etc/kubernetes/resources/nginx_pod.yaml

kubectl get pods

## Creating Kubernetes Deployments

kubectl create deployment nginx --image=nginx --port 80
kubectl get deployment
kubectl get replicaset

kubectl get pods -o wide
nerdctl -n k8s.io ps -a | grep nginx

kubectl scale deployment/nginx --replicas=2; watch kubectl get pods -o wide

nerdctl -n k8s.io ps -a | grep nginx

nerdctl -n k8s.io ps -a | grep nginx | grep pause

CONTAINERS=$(nerdctl -n k8s.io ps -a | grep nginx | grep pause | awk {'print $1'} | tr "\n" " "); echo $CONTAINERS

nerdctl -n k8s.io stop $CONTAINERS; watch kubectl get pods -o wide

The IP addresses changed for both pods ... whilst it is great that Kubernetes is automatically handling and repairing failed instances, we cant use this deployment for nginx effectively, if the IP addresses keep changing. In the next video, we'll look at Services to provide consistency!

##  Kubernetes Services

kubectl expose deployment/nginx --type=ClusterIP

kubectl get service

SERVICE=$(kubectl get service | grep nginx | awk {'print $3'}); echo $SERVICE

curl $SERVICE

nerdctl -n k8s.io ps -a | grep nginx | grep Up | grep pause

CONTAINERS=$(nerdctl -n k8s.io ps -a | grep nginx | grep Up | grep pause | awk {'print $1'} | tr "\n" " "); echo $CONTAINERS

nerdctl -n k8s.io stop $CONTAINERS; watch kubectl get pods -o wide

curl $SERVICE

## Using Kubernetes DNS

kubectl run hello-world --image=spurin/hello-app:1.0 --port 8080

kubectl get pods -o wide

HELLO_IP=$(kubectl get pods -o wide | grep hello-world | awk {'print $6'}); echo $HELLO_IP

curl $HELLO_IP:8080

kubectl run curl --image=curlimages/curl --restart=Never -- sh -c "sleep infinity"

kubectl get pods

kubectl exec -it curl -- sh -c "curl example.com"

kubectl exec -it curl -- sh -c "nslookup example.com"

kcurl() { kubectl exec -it curl -- sh -c "curl $1"; }

knslookup() { kubectl exec -it curl -- sh -c "nslookup $1"; }

kcurl example.com
knslookup example.com

```shell
root@control-plane:~# kubectl get pods
NAME                     READY   STATUS    RESTARTS      AGE
curl                     1/1     Running   0             2m29s
hello-world              1/1     Running   0             8m57s
nginx-7769f8f85b-dgrrs   1/1     Running   4 (10m ago)   8h
nginx-7769f8f85b-p96x9   1/1     Running   4 (10m ago)   8h
root@control-plane:~# kubectl get service
NAME         TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1     <none>        443/TCP   9h
nginx        ClusterIP   10.106.33.2   <none>        80/TCP    8h
root@control-plane:~# knslookup nginx.default.svc.cluster.local
Server:         10.96.0.10
Address:        10.96.0.10:53


Name:   nginx.default.svc.cluster.local
Address: 10.106.33.2
```

knslookup nginx.default.svc.cluster.local

kcurl nginx.default.svc.cluster.local

echo $HELLO_IP

HELLO_IP_DASHES=$(echo $HELLO_IP | sed 's/\./-/g'); echo $HELLO_IP_DASHES

echo $HELLO_IP_DASHES.default.pod.cluster.local

kcurl $HELLO_IP_DASHES.default.pod.cluster.local:8080

knslookup $HELLO_IP_DASHES.default.pod.cluster.local

kubectl delete deployment/nginx
kubectl delete service/nginx

kubectl delete --grace-period=0 pod/hello-world pod/curl

##  Kubernetes Architecture

nerdctl -n k8s.io ps -a | grep -v 'k8s.io/pause' | grep Up

kubectl get all -A

```shell
root@control-plane:~# kubectl get all -A
NAMESPACE     NAME                                        READY   STATUS    RESTARTS   AGE
kube-system   pod/coredns-6f6b679f8f-4l5ph                1/1     Running   0          9h
kube-system   pod/coredns-6f6b679f8f-qtpjc                1/1     Running   0          9h
kube-system   pod/etcd-control-plane                      1/1     Running   0          9h
kube-system   pod/kube-apiserver-control-plane            1/1     Running   0          9h
kube-system   pod/kube-controller-manager-control-plane   1/1     Running   0          9h
kube-system   pod/kube-proxy-lzlc4                        1/1     Running   0          9h
kube-system   pod/kube-scheduler-control-plane            1/1     Running   0          9h

NAMESPACE     NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                  AGE
default       service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP                  9h
kube-system   service/kube-dns     ClusterIP   10.96.0.10   <none>        53/UDP,53/TCP,9153/TCP   9h

NAMESPACE     NAME                        DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR            AGE
kube-system   daemonset.apps/kube-proxy   1         1         1       1            1           kubernetes.io/os=linux   9h

NAMESPACE     NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
kube-system   deployment.apps/coredns   2/2     2            2           9h

NAMESPACE     NAME                                 DESIRED   CURRENT   READY   AGE
kube-system   replicaset.apps/coredns-6f6b679f8f   2         2         2       9h
```

ps -ef | grep kubelet | grep -v kube-apiserver | grep -v grep

systemctl status kubelet

kubectl get all -A

```shell
kubectl -n kube-system get daemonset.apps/kube-proxy -o yaml > /etc/kubernetes/resources/kube-proxy.yaml
kubectl -n kube-system delete daemonset.apps/kube-proxy
```

```shell
kubectl -n kube-system get deployment.apps/coredns -o yaml > /etc/kubernetes/resources/coredns.yaml
kubectl -n kube-system delete deployment.apps/coredns
```

```shell
kubectl -n kube-system get service/kube-dns -o yaml > /etc/kubernetes/resources/kube-dns.yaml
kubectl -n kube-system delete service/kube-dns
```

```shell
mv /etc/kubernetes/manifests/* /etc/kubernetes/resources

```

```shell
root@control-plane:~# kubectl get nodes
The connection to the server 172.29.0.2:6443 was refused - did you specify the right host or port?
root@control-plane:~# kubectl get all -A
The connection to the server 172.29.0.2:6443 was refused - did you specify the right host or port?
The connection to the server 172.29.0.2:6443 was refused - did you specify the right host or port?
The connection to the server 172.29.0.2:6443 was refused - did you specify the right host or port?
The connection to the server 172.29.0.2:6443 was refused - did you specify the right host or port?
The connection to the server 172.29.0.2:6443 was refused - did you specify the right host or port?
The connection to the server 172.29.0.2:6443 was refused - did you specify the right host or port?
The connection to the server 172.29.0.2:6443 was refused - did you specify the right host or port?
The connection to the server 172.29.0.2:6443 was refused - did you specify the right host or port?
The connection to the server 172.29.0.2:6443 was refused - did you specify the right host or port?
The connection to the server 172.29.0.2:6443 was refused - did you specify the right host or port?
```

systemctl stop kubelet

alias nerdctl_stopall="nerdctl -n k8s.io ps -a | grep -v CONTAINER | cut -d ' ' -f 1 | xargs -i sh -c 'nerdctl -n k8s.io stop {} || true'"

alias nerdctl_rmall="nerdctl -n k8s.io ps -a | grep -v CONTAINER | cut -d ' ' -f 1 | xargs -i sh -c 'nerdctl -n k8s.io rm {} || true'"

nerdctl_stopall

nerdctl_rmall

**Everything cleaned-up**

nerdctl -n k8s.io ps -a

**Only containerd is working**

systemctl status containerd

##  Kubelet and Static Pods

systemctl start kubelet

And we can now see the kubelet running, notice that it makes reference to a configuration file of /var/lib/kubelet/config.yaml -

ps -ef | grep kubelet

cat /var/lib/kubelet/config.yaml

nerdctl -n k8s.io ps -a

cat /etc/kubernetes/resources/nginx_pod.yaml

mv /etc/kubernetes/resources/nginx_pod.yaml /etc/kubernetes/manifests; watch nerdctl -n k8s.io ps -a

nerdctl -n k8s.io ps -a

CONTAINER=$(nerdctl -n k8s.io ps -a | grep -v pause | grep nginx | awk {'print $1'}); echo $CONTAINER

nerdctl -n k8s.io inspect $CONTAINER | more

IP=$(nerdctl -n k8s.io inspect $CONTAINER | grep IPAddress | grep -E -o "([0-9]{1,3}[\.]){3}[0-9]{1,3}" | uniq); echo $IP

curl $IP

nerdctl_stopall; watch nerdctl -n k8s.io ps -a

mv /etc/kubernetes/manifests/nginx_pod.yaml /etc/kubernetes/resources

nerdctl_stopall; nerdctl_rmall

## Kubernetes Architecture - etcd

mv /etc/kubernetes/resources/etcd.yaml /etc/kubernetes/manifests; watch nerdctl -n k8s.io ps -a

apt update && apt install -y etcd-client

ps -ef | grep etcd

ENDPOINT=$(ps -ef | grep etcd | awk -F ' ' '{for(i=1;i<=NF;i++){if ($i ~ /--advertise-client-urls=/) {print $i}}}' | awk -F= '{print $2}');echo $ENDPOINT

<https://172.29.0.2:2379>

ETCDCTL_API=3 etcdctl --endpoints $ENDPOINT --cacert /etc/kubernetes/pki/etcd/ca.crt --cert /etc/kubernetes/pki/etcd/server.crt --key /etc/kubernetes/pki/etcd/server.key --write-out=table endpoint status

ETCDCTL_API=3 etcdctl --endpoints $ENDPOINT --cacert /etc/kubernetes/pki/etcd/ca.crt --cert /etc/kubernetes/pki/etcd/server.crt --key /etc/kubernetes/pki/etcd/server.key get / --prefix --keys-only | grep -v ^$ | head -10

ETCDCTL_API=3 etcdctl --endpoints $ENDPOINT --cacert /etc/kubernetes/pki/etcd/ca.crt --cert /etc/kubernetes/pki/etcd/server.crt --key /etc/kubernetes/pki/etcd/server.key put foo bar

ETCDCTL_API=3 etcdctl --endpoints $ENDPOINT --cacert /etc/kubernetes/pki/etcd/ca.crt --cert /etc/kubernetes/pki/etcd/server.crt --key /etc/kubernetes/pki/etcd/server.key get foo

##  Kube-Apiserver

mv /etc/kubernetes/resources/kube-apiserver.yaml /etc/kubernetes/manifests; watch nerdctl -n k8s.io ps -a

kubectl get nodes

##  Kubernetes Architecture - Kube-Scheduler

kubectl run nginx --image=nginx; watch kubectl get pods -o wide
mv /etc/kubernetes/resources/kube-scheduler.yaml /etc/kubernetes/manifests

watch kubectl get pods -o wide

kubectl delete pod/nginx --grace-period=0

##  Controller-Manager

kubectl create deployment nginx --image=nginx --port=80; watch kubectl describe deployment/nginx

mv /etc/kubernetes/resources/kube-controller-manager.yaml /etc/kubernetes/manifests; watch kubectl describe deployment/nginx

## Kube-Proxy

kubectl expose deployment/nginx --type=ClusterIP

kubectl get service

SERVICE=$(kubectl get service | grep nginx | awk {'print $3'}) && echo $SERVICE

curl $SERVICE

kubectl apply -f /etc/kubernetes/resources/kube-proxy.yaml; watch nerdctl -n k8s.io ps -a

kubectl get all -A

curl $SERVICE

##  CoreDNS and Kube-DNS

kubectl run curl --image=curlimages/curl --restart=Never -- sh -c "sleep infinity"

kcurl() { kubectl exec -it curl -- sh -c "curl $1"; }

kcurl nginx.default.svc.cluster.local

**failed**

kubectl apply -f /etc/kubernetes/resources/coredns.yaml

kubectl apply -f /etc/kubernetes/resources/kube-dns.yaml

**again**

kcurl nginx.default.svc.cluster.local

**success**

kubectl get all -A

kubectl delete pod/curl
