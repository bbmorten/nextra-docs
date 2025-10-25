# KNative

## Installation on Kind using Quickstart Plugin

- 192.168.49.85'de kurulum yaptım
- kn ve kn-quickstart yükledim
- kind yükledim
- `kn-quickstart kind` ile kurulum yapıldı

```shell
kind completion bash > ~/.kind-completion
source ~/.kind-completion
```

```shell
vm@int-02-05:~/kn$ kind get clusters
knative
vm@int-02-05:~/kn$ kubectl get pods -n knative-serving
NAME                                      READY   STATUS    RESTARTS   AGE
activator-794bf4b5f-8dljx                 1/1     Running   0          31m
autoscaler-678cd4b756-m4mmj               1/1     Running   0          31m
controller-749fb7bc8b-x8w98               1/1     Running   0          31m
net-kourier-controller-6c6b48b764-w5zrz   1/1     Running   0          31m
webhook-7c7d966789-lg2fh                  1/1     Running   0          31m
```

```shell

vm@int-02-05:~/kn$ kubectl get pods -n knative-eventing
NAME                                    READY   STATUS    RESTARTS   AGE
eventing-controller-5fc69ff9f8-xjbh6    1/1     Running   0          31m
eventing-webhook-7d9f998f6-bfhk9        1/1     Running   0          31m
imc-controller-8f679c-5rprf             1/1     Running   0          30m
imc-dispatcher-7cb9549d87-sjxm7         1/1     Running   0          30m
job-sink-5c885899b6-9w2s7               1/1     Running   0          31m
mt-broker-controller-7d68678c74-kt8nx   1/1     Running   0          30m
mt-broker-filter-96bd5854f-4hfvg        1/1     Running   0          30m
mt-broker-ingress-67f48b9854-sskvt      1/1     Running   0          30m
```

## Install Knative Serving Using YAML

- [Magic DNS](https://sslip.io)

```shell
kubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.14.0/serving-crds.yaml
kubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.14.0/serving-core.yaml
kubectl apply -l knative.dev/crd-install=true -f https://github.com/knative/net-istio/releases/download/knative-v1.14.0/istio.yaml
kubectl apply -f https://github.com/knative/net-istio/releases/download/knative-v1.14.0/istio.yaml
kubectl apply -f https://github.com/knative/net-istio/releases/download/knative-v1.14.0/net-istio.yaml
kubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.14.0/serving-default-domain.yaml

root@int-02-01:/# kubectl get pods -n knative-serving
NAME                                   READY   STATUS    RESTARTS   AGE
activator-55d856fccd-2thhh             1/1     Running   0          15m
autoscaler-5df8b7c68-6z4k2             1/1     Running   0          15m
controller-78b7976cc6-sh2mf            1/1     Running   0          15m
default-domain-2f4mb                   1/1     Running   0          51s
net-istio-controller-cc877c4dc-lzdrb   1/1     Running   0          11m
net-istio-webhook-69cd4975b8-b89d8     1/1     Running   0          11m
webhook-7c7b4cd674-9fb2l               1/1     Running   0          15m
```

##  Install Knative Eventing with YAML

```shell
kubectl apply -f https://github.com/knative/eventing/releases/download/knative-v1.14.0/eventing-crds.yaml
kubectl apply -f https://github.com/knative/eventing/releases/download/knative-v1.14.0/eventing-core.yaml
kubectl get pods -n knative-eventing
```

##  Install Knative Functions Locally

```shell title='kn installation'
curl -sSL https://github.com/knative/client/releases/latest/download/kn-linux-amd64 -o kn
chmod +x kn
sudo mv kn /usr/local/bin/
```

```shell
curl -sSL https://github.com/knative/func/releases/download/knative-v1.16.1/func_linux_amd64 -o kn-func
chmod +x kn-func
sudo mv kn-func /usr/local/bin/
```

```shell
kn-func create -l node hello-function
cd hello-function/
# https://distribution.github.io/distribution/
docker run -d -p 5000:5000 --name registry registry:2
kn-func build --registry localhost:5000
kn-func run --registry localhost:5000
kn-func invoke --data "Hello Knative function!"
# Bu çalışmadı
kn-func invoke --message "Hello Knative function!" 
# This is OK
vm@int-02-05:~/kn/hello-function-node$ kn-func invoke 
{"message":"Hello World"}
```

## Lab 7.1

<https://strimzi.io/quickstarts/>

```shell
kubectl create namespace kafka
kubectl create -f 'https://strimzi.io/install/latest?namespace=kafka' -n kafka
kubectl apply -f https://strimzi.io/examples/latest/kafka/kraft/kafka-single-node.yaml -n kafka 
```

kubectl -n kafka run kafka-producer -ti --image=quay.io/strimzi/kafka:0.44.0-kafka-3.8.0 --rm=true --restart=Never -- bin/kafka-console-producer.sh --bootstrap-server my-cluster-kafka-bootstrap:9092 --topic my-topic

If you don't see a command prompt, try pressing enter.

>Hello Strimzi!

kubectl -n kafka run kafka-consumer -ti --image=quay.io/strimzi/kafka:0.44.0-kafka-3.8.0 --rm=true --restart=Never -- bin/kafka-console-consumer.sh --bootstrap-server my-cluster-kafka-bootstrap:9092 --topic my-topic --from-beginning

```shell
kn service create order-service-eventing \
    --image docker.io/knativedemo/order-service-eventing \
    --port 8080 \
    -a autoscaling.knative.dev/min-scale=1

kn service create product-service-eventing \
    --image docker.io/knativedemo/product-service-eventing \
    --port 8080 \
    -a autoscaling.knative.dev/min-scale=1


```

```shell
vm@int-02-05:~/kn$ kn service ls
NAME                       URL                                                          LATEST                           AGE     CONDITIONS   READY   REASON
order-service-eventing     http://order-service-eventing.default.127.0.0.1.sslip.io     order-service-eventing-00001     2m17s   3 OK / 3     True
product-service-eventing   http://product-service-eventing.default.127.0.0.1.sslip.io   product-service-eventing-00001   31s     3 OK / 3     True
```

- Install Kafka

```shell

kubectl apply -f https://github.com/knative-extensions/eventing-kafka-broker/releases/download/knative-v1.14.0/eventing-kafka-controller.yaml
```

- Install Kafka Source Data Plane

```shell

kubectl apply -f https://github.com/knative-extensions/eventing-kafka-broker/releases/download/knative-v1.14.0/eventing-kafka-source.yaml
```

```shell
kubectl apply -f kn --recursive=false

```

```shell
kubectl apply -f order-kafka-source-product.yml
kubectl apply -f order-kafka-source-customer.yml
kubectl apply -f order-kafka-source.yml

kubectl delete -f order-kafka-source-product.yml
kubectl delete -f order-kafka-source-customer.yml
kubectl delete -f order-kafka-source.yml
```

```shell

vm@int-02-05:~/kn/LFS246/chapter-7/order-service/kn$ kubectl get sources
NAME                                                          TOPICS                BOOTSTRAPSERVERS                            READY   REASON   AGE
kafkasource.sources.knative.dev/order-customer-event-source   ["block-customers"]   ["my-cluster-kafka-bootstrap.kafka:9092"]                    113s
kafkasource.sources.knative.dev/order-event-source            ["place-order"]       ["my-cluster-kafka-bootstrap.kafka:9092"]                    70s
kafkasource.sources.knative.dev/order-product-event-source    ["block-products"]    ["my-cluster-kafka-bootstrap.kafka:9092"]                    2m17s
```

```shell

curl 'http://order-service-eventing.default.127.0.0.1.sslip.io/orders/place' \
    -H 'Content-Type:application/json'
    \ --data'{"id":1,"custId":1,"prodId":1,"amount":100,"prodCount":1}' --silent
```

```shell
kubectl -n kafka run kafka-consumer -ti --image=strimzi/kafka:0.14.0-kafka-2.3.0 --rm=true --restart=Never -- bin/kafka-console-consumer.sh --bootstrap-server my-cluster-kafka-bootstrap:9092 --topic block-customers
kubectl -n kafka run kafka-consumer -ti --image=strimzi/kafka:0.14.0-kafka-2.3.0 --rm=true --restart=Never -- bin/kafka-console-consumer.sh --bootstrap-server my-cluster-kafka-bootstrap:9092 --topic place-order
```

```shell
kubectl apply -f https://github.com/knative-extensions/eventing-kafka-broker/releases/tag/knative-v1.14.0/eventing-kafka-broker.yaml
```

```shell
https://github.com/knative-extensions
```
