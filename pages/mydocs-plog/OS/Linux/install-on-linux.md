# Applications for Linux

##  figlet/toilet

```shell
sudo apt-get install figlet
sudo apt-get install toilet
```

toilet --gay -f slant "mbm"

##  Kali

```shell title="wo/Resource"
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kali-linux
  labels:
    app: kali
spec:
  replicas: 1
  selector:
    matchLabels:
      app: kali
  template:
    metadata:
      labels:
        app: kali
    spec:
      containers:
      - name: kali
        image: kalilinux/kali-rolling
        command: ["/bin/bash", "-c", "sleep infinity"] # Keeps it running
EOF
```

```yaml title="w/Resource"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kali-linux
  labels:
    app: kali
spec:
  replicas: 1
  selector:
    matchLabels:
      app: kali
  template:
    metadata:
      labels:
        app: kali
    spec:
      containers:
      - name: kali
        image: kalilinux/kali-rolling
        command: ["/bin/bash", "-c", "sleep infinity"] # Keeps it running
        resources:
          limits:
            cpu: "2"
            memory: "4Gi"
          requests:
            cpu: "1"
            memory: "2Gi"

```

```shell
kubectl get pods
kubectl describe pod kali-linux-77879f9777-rtk84
kubectl exec -it $(kubectl get pod -l app=kali -o jsonpath="{.items[0].metadata.name}") -- /bin/bash
apt update && apt -y install kali-linux-headless
```
