# Podman Command Examples

##  podman image

### Podman image tree

```shell

Red Hat Certified Specialist in Containers (EX188) podman image tree --whatrequires registry.redhat.io/ubi9/ubi:latest
Image ID: dc7aecb0f6dd
Tags:     [registry.redhat.io/ubi9/ubi:latest]
Size:     234.4MB
Image Layers
├── ID: e3e63ac7af69 Size: 234.4MB Top Layer of: [registry.redhat.io/ubi9/ubi:latest]
├── ID: 2654070506be Size: 54.77MB Top Layer of: [localhost/myappubi:latest]
├── ID: 30933316e3a2 Size:      0B
└── ID: 8288c84748a6 Size:      0B
```

###  Run a command in a container

```shell
podman run --rm myapp nmap -O 192.168.48.0/24
```

###  Run a command in a container with a specific user

```shell
podman run --rm -u 1000:1000 myapp nmap -O 192.168.48.0/24
```

###  Run a command in a container with privileged mode

```shell
podman run --rm --privileged myapp nmap -O 192.168.48.0/24
podman run --rm --privileged myapp nmap -sn 192.168.70.0/24
```

###  Run a command in a container with specific capabilities

```shell
podman run --rm --cap-add=NET_RAW --cap-add=NET_ADMIN myapp nmap -O 192.168.48.0/24
```
