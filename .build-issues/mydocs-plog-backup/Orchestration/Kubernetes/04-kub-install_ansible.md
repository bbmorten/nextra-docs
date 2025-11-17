# Install Kubernetes Nodes on Ubuntu with Ansible

##  Preparing the operator machine (MacOSX)

- Create a new folder called for example operator
- Create a dockerfile with the following contents in the **operator** folder

```Dockerfile
FROM python:3.9-slim-buster

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    openssh-client \
    curl \
    iproute2 \
    iputils-ping \
    sshpass && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN pip3 install ansible

WORKDIR /ansible

CMD ["/bin/bash"]
```

- Create the operator ansible image

```sh title='On Node 5'
mkdir operator
cd operator


```

##  Create a new image

```console
#docker build -t ansible-image-1 .
podman build -t ansible-image-1 .
```

## Preparations

1. Create a container that will run the ansible playbooks. Start it from the folder which includes your files.

 ```shell
 cd /home/vm/operator/

 podman run --rm -it -v /home/vm/operator:/ansible ansible-image-1
 ```

2. Try to run the playbook with the inventory file given below on the container

 ```shell
 ssh-keygen -t rsa -b 4096
 ansible-playbook -v --ask-become-pass -i copy-ssh-inventory.txt copy-ssh-key.yml
 ```

## Adding host records to /etc/hosts

Run the following playbook after you have corrected the IP addresses according to your pods.

```shell
ansible-playbook -v --ask-become-pass add-hosts.yml -i copy-ssh-inventory-84.txt
```

##  Create a cluster node on Ubuntu-22.04.4 K8s

 ```shell
 ansible-playbook -v --ask-become-pass -i copy-ssh-inventory-84.txt create-a-cluster-node-k8s.yml
 ```
