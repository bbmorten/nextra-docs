# Oracle Linux Container Image

## Installation sample 1

```shell
docker pull oraclelinux:9-slim-fips
docker run --rm -it --name oracle1 oraclelinux:9-slim-fips bash
```

```shell
microdnf update -y
microdnf install git
cd tmp
git clone https://github.com/oracle-devrel/linux-virt-labs.git
```

```shell
microdnf install -y oracle-epel-release-el9
microdnf install -y ansible-core
ansible --version
ansible-galaxy --version
```

```shell
docker commit oracle1 bbmorten/oraclelinux:9-v1
docker run --rm -it --name oracle2 bbmorten/oraclelinux:9-v1
```

```shell
docker commit oracle2 bbmorten/oraclelinux:9-v1
docker run --rm -it --name oracle1 bbmorten/oraclelinux:9-v1
```

cd tmp/linux-virt-labs/ol
ansible-galaxy collection install -r requirements.yml
ansible-playbook create_instance.yml -e localhost_python_interpreter="/usr/bin/python3.9" -e use_nginx=true


- OCI 

curl -L https://raw.githubusercontent.com/oracle/oci-cli/master/scripts/install/install.sh | bash
exec -l $SHELL