# Docker/Kubernetes Example

##  Example Voting App

<https://github.com/dockersamples/example-voting-app/blob/main/README.md>
<https://github.com/bbmorten/nerdctl>
<https://kind.sigs.k8s.io/>

## Accessing Kubernetes API

<https://kubernetes.io/docs/tasks/administer-cluster/access-cluster-api/>

```yaml title="Opening API Server to external"
apiVersion: v1
kind: Service
metadata:
  name: kubernetes-api-nodeport
  namespace: default
spec:
  type: NodePort
  ports:
    - port: 443         # The port that the service will expose
      targetPort: 6443   # The port on the API server pod
      nodePort: 30000    # The NodePort to expose (range: 30000-32767)
      protocol: TCP
  selector:
    component: kube-apiserver

```
