# nsenter

nsenter is a tool that allows you to enter the namespaces of another process. It is useful for debugging and inspecting processes in different namespaces.

```shell
podman inspect vibrant_yonath --format '{{.State.Pid}}'
1654
limactl shell podman
sudo nsenter -n -t 1654 ss -pant


[bulent@lima-podman bulent]$ sudo nsenter -n -t 1654 ss -pant
State        Recv-Q   Send-Q      Local Address:Port        Peer Address:Port   Process
LISTEN       0        511               0.0.0.0:8080             0.0.0.0:*       users:(("nginx",pid=1699,fd=6),("nginx",pid=1698,fd=6),("nginx",pid=1697,fd=6),("nginx",pid=1696,fd=6),("nginx",pid=1654,fd=6))
CLOSE-WAIT   0        0               127.0.0.1:34580          127.0.0.1:8080    users:(("pasta",pid=1648,fd=49))
```

```shell


[bulent@lima-podman bulent]$ podman exec -it aecf /bin/bash
1001@aecfc12ab8c5:/app$ cat /proc/1/cmdline
nginx: master process /opt/bitnami/nginx/sbin/nginx -c /opt/bitnami/nginx/conf/nginx.conf -g daemon off;1001@aecfc12ab8c5:/app$
```
