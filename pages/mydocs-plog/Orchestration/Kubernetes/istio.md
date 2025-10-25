# ISTIO Notes & Samples

## Istio Components, including the edge gateways

![Istio Components][istio-comp]

## Installation Configuration Profiles

```shell
vm@int-02-01:~/manifests$ istioctl profile list
Istio configuration profiles:
    ambient
    default
    demo
    empty
    external
    minimal
    openshift
    preview
    remote
```

To install Istio using the Istio CLI, we can use the --set flag and specify the profile like this:

```shell
istioctl install --set profile=demo
```

## Sidecar Injection

1. Copy the examples from github. Move the samples to 192.168.49.81

	```shell
	git clone --depth 1 --filter=blob:none <https://github.com/istio/istio.git> --branch master --single-branch samples
	scp -r samples vm@192.168.49.81:~vm
	```

2. Open a remote connection to 192.168.49.81 with Visual Studio Code.
3. Remove second deployment from helloworld.yaml and save it as helloworld-v1-only.yaml
4. Perform a manual sidear injection by the following command

	```shell
	istioctl kube-inject -f helloworld-v1-only.yaml > helloworld-v1-only-injected.yaml
	```

5. Apply the new pod design, scale  and check the pods.

	```shell
	kubectl apply -f helloworld-v1-only-injected.yaml 
	kubectl scale --replicas=5 -f helloworld-v1-only-injected.yaml 
	kubectl get pods

	NAME                             READY   STATUS    RESTARTS   AGE
	helloworld-v1-6949896c86-5swxf   2/2     Running   0          24m
	helloworld-v1-6949896c86-685gs   2/2     Running   0          22m
	helloworld-v1-6949896c86-6zvbd   2/2     Running   0          22m
	helloworld-v1-6949896c86-g5fgm   2/2     Running   0          99s
	helloworld-v1-6949896c86-p4wn5   2/2     Running   0          99s
	```

6. Create a new namespace as a playground and enable automatic  sidecar injection.

	```shell
	kubectl create namespace mypg
	kubectl label ns mypg istio-injection=enabled
	kubectl get ns -Listio-injection
	NAME              STATUS   AGE     ISTIO-INJECTION
	databases         Active   20d     
	default           Active   21d     
	istio-system      Active   3h28m   
	kube-node-lease   Active   21d     
	kube-public       Active   21d     
	kube-system       Active   21d     
	kubeapps          Active   20d     
	mypg              Active   3m16s   enabled
	```

7. Create new pods in the mypg namespace and verify the injection is automatic

	```shell
	kubectl -n mypg apply -f helloworld-v1-only.yaml
	kubectl -n mypg apply -f ../sleep/sleep.yaml
	```

![iptables][iptables-envoy]
![Packet Flow][packetFlow]

8. Let's see the packet flow and some logs generated

	```shell
	kubectl get pods -n mypg
	kubectl exec -n mypg -it sleep-bc9998558-q64rv -- /bin/sh
	kubectl logs --follow sleep-bc9998558-q64rv -c istio-proxy -n mypg
	kubectl logs --follow helloworld-v1-77489ccb5f-wswk5 -c istio-proxy -n mypg
	kubectl logs --follow helloworld-v1-77489ccb5f-wswk5 -n mypg
	```

[packetFlow]: assets/images/Screenshot%202023-02-23%20at%2015.19.49.png
[iptables-envoy]: assets/images/Screenshot%202023-02-23%20at%2015.18.10.png

## Contour Ingress Controller

Just curiosity I've installed it

```shell
helm repo add bitnami https://charts.bitnami.com/bitnami

helm install my-release bitnami/contour --namespace projectcontour --create-namespace
NAME: my-release
LAST DEPLOYED: Thu Feb 23 21:24:53 2023
NAMESPACE: projectcontour
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
CHART NAME: contour
CHART VERSION: 10.2.1
APP VERSION: 1.23.2

** Please be patient while the chart is being deployed **
1. Get Contours's load balancer IP/hostname:

     NOTE: It may take a few minutes for this to become available.

     You can watch the status by running:

         $ kubectl get svc my-release-contour-envoy --namespace projectcontour -w

     Once 'EXTERNAL-IP' is no longer '<pending>':

         $ kubectl describe svc my-release-contour-envoy --namespace projectcontour | grep Ingress | awk '{print $3}'

2. Configure DNS records corresponding to Kubernetes ingress resources to point to the load balancer IP/hostname found in step 1
```

Hoping metal loadbalancer can solve my external load balancer IP problem, tried to install MetalLoadBalancer in L2 mode

```shell
kubectl edit configmap -n kube-system kube-proxy
```

```yaml
apiVersion: kubeproxy.config.k8s.io/v1alpha1
kind: KubeProxyConfiguration
mode: "ipvs"
ipvs:
  strictARP: true
```

```shell title="Nice Commands"
# see what changes would be made, returns nonzero returncode if different
kubectl get configmap kube-proxy -n kube-system -o yaml | \
sed -e "s/strictARP: false/strictARP: true/" | \
kubectl diff -f - -n kube-system

# actually apply the changes, returns nonzero returncode on errors only
kubectl get configmap kube-proxy -n kube-system -o yaml | \
sed -e "s/strictARP: false/strictARP: true/" | \
kubectl apply -f - -n kube-system
```

Installation by Manifest

```shell
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.13.9/config/manifests/metallb-native.yaml
```

or install with kubeapps

use the following yaml to create an ip address pool

```shell
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: first-pool
  namespace: default
spec:
  addresses:
  - 192.168.49.91-192.168.49.95
```

it worked.

```shell
vm@int-02-01:~/manifests$ kubectl get services -o wide --all-namespaces | grep --color=never -E 'LoadBalancer|NAMESPACE'
NAMESPACE        NAME                             TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)                                 AGE     SELECTOR
projectcontour   my-release-contour-envoy         LoadBalancer   10.109.40.204    192.168.49.91   80:32631/TCP,443:31392/TCP              44m     app.kubernetes.io/component=envoy,app.kubernetes.io/instance=my-release,app.kubernetes.io/name=contour
vm@int-02-01:~/manifests$ kubectl describe svc my-release-contour-envoy --namespace projectcontour | grep Ingress | awk '{print $3}'
192.168.49.91
```

To test the contour

```shell
kubectl apply -f <https://projectcontour.io/examples/kuard.yaml>
kubectl get po,svc,ing -l app=kuard

vm@int-02-01:~/manifests$ kubectl get po,svc,ing -l app=kuard
NAME                         READY   STATUS    RESTARTS   AGE
pod/kuard-6886b7db79-8mmxm   1/1     Running   0          4m5s
pod/kuard-6886b7db79-lr4j4   1/1     Running   0          4m5s
pod/kuard-6886b7db79-rr64q   1/1     Running   0          4m5s

NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)   AGE
service/kuard   ClusterIP   10.107.168.254   <none>        80/TCP    4m5s

NAME                              CLASS     HOSTS   ADDRESS         PORTS   AGE
ingress.networking.k8s.io/kuard   contour   *       192.168.49.91   80      4m5s
```

kuard is working after port forwarding

![kuard][kuard]

![kuard dashboard][kuard-dashboard]

[kuard]: assets/images/Screenshot%202023-02-23%20at%2022.15.31.png
[kuard-dashboard]: assets/images/Screenshot%202023-02-23%20at%2022.15.54.png
[istio-comp]: assets/images/Screenshot%202023-02-23%20at%2022.19.53.png
