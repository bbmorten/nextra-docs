# Kubecost Installation

Persistent Storage is needed.

- <https://github.com/kubecost>

```shell
helm install kubecost cost-analyzer \
--repo https://kubecost.github.io/cost-analyzer/ \
--namespace kubecost --create-namespace \
--set kubecostToken="YnVsZW50QGJ0ZWdpdGltLmNvbQ==xm343yadf98"
```

```shell
kubectl port-forward --namespace kubecost deployment/kubecost-cost-analyzer 9090
```
