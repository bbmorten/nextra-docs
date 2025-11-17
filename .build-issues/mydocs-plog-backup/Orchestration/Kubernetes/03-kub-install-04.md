# Install on Kubernetes

##  Krew

### ktop

### ca-cert

### graph

```shell
➜  ~ kubectl krew install graph
Updated the local copy of plugin index.
Installing plugin: graph
Installed plugin: graph
\
 | Use this plugin:
 |  kubectl graph
 | Documentation:
 |  https://github.com/steveteuber/kubectl-graph
 | Caveats:
 | \
 |  | This plugin requires Graphviz or Neo4j to visualize the dependency graph.
 |  | Please see the quickstart guide for more information:
 |  | https://github.com/steveteuber/kubectl-graph#quickstart
 | /
/
WARNING: You installed plugin "graph" from the krew-index plugin repository.
   These plugins are not audited for security by the Krew maintainers.
   Run them at your own risk.
➜  ~ kubectl graph
error: you must specify the type of resource to graph. Use "kubectl api-resources" for a complete list of supported resources.
➜  ~ kubectl graph [(-o|--output=)aql|arangodb|cql|cypher|dot|graphviz|mermaid] (TYPE[.VERSION][.GROUP] ...) [flags]
zsh: bad pattern: [(-o|--output=)aql
zsh: number expected
zsh: command not found: graphviz
zsh: command not found: arangodb
zsh: command not found: cql
zsh: command not found: cypher
➜  ~ kubectl graph pods --field-selector status.phase=Running -n kube-system | dot -T svg -o pods.svg
Please wait while retrieving data from https://kubernetes.docker.internal:6443
Processing... 100% [=================================================] (9/9)
➜  ~ open pods.svg
➜  ~ /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome pods.svg
Opening in existing browser session.
```

##  Kubeapps



```shell
kubectl create namespace kubeapps
helm install kubeapps --namespace kubeapps oci://registry-1.docker.io/bitnamicharts/kubeapps
```

```shell
kubectl create --namespace default serviceaccount kubeapps-operator
kubectl create clusterrolebinding kubeapps-operator --clusterrole=cluster-admin --serviceaccount=default:kubeapps-operator
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Secret
metadata:
  name: kubeapps-operator-token
  namespace: default
  annotations:
    kubernetes.io/service-account.name: kubeapps-operator
type: kubernetes.io/service-account-token
EOF
```


```shell
kubectl get --namespace default secret kubeapps-operator-token -o go-template='{{.data.token | base64decode}}'
```

