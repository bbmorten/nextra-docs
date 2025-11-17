# Kali linux

Passphrase : '1122334455on!_'

- To start a kali linux container

```shell
docker pull docker.io/kalilinux/kali-rolling
# docker run --tty --interactive kalilinux/kali-rolling
docker run -t -d --name my-kali -p 25900:5900 -p 25901:5901 kalilinux/kali-rolling
docker exec -it my-kali /bin/bash
```

- In the container running, execute the following commands

```shell
apt-update
apt-upgrade
apt install kali-linux-everything
```

[Image from a running container](https://kodekloud.com/blog/docker-create-image-from-container/)

```shell
docker container commit -a "updated-kali-rolling-wo-desktop" -m "Kali linux everything"

```
