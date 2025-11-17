# Podman with limactl

<!-- Use bbmorten for redhat.com -->

> **Starts a Lima virtual machine using the Podman template. This sets up a VM with Podman pre-installed, allowing you to run containers in a lightweight Linux environment on macOS.**

```shell
limactl start template://podman
```

> **Opens a shell inside the running 'podman' Lima VM, so you can interact with the VM as if you were on a Linux machine.**

```shell
limactl shell podman
```

> **Runs a test container from the quay.io/podman/hello image to verify that Podman is working inside the VM.**

```shell
podman run quay.io/podman/hello
```

> **Searches for container images related to 'ubi9' (Red Hat Universal Base Image 9) on the default container registry.**

```shell
podman search ubi9
```

> **Logs in to the Red Hat container registry, allowing you to pull images that require authentication.**

```shell
podman login registry.redhat.io
```

> **Pulls the UBI 9 (Universal Base Image) from the Red Hat registry to your local Podman image store.**

```shell
podman pull registry.redhat.io/ubi9/ubi
```

4362 is the process ID of the container process running inside the Lima VM. This command displays the routing table for the network interfaces in that container, showing how network traffic is routed within the VM.

```shell
cat /proc/4362/net/fib_trie
```

```shell
podman inspect -l -f \{\{.NetworkSettings.IPAddress\}\}
```

rootless vs. rootful Podman

```shell

[bulent@lima-podman bulent]$ ps -ef |grep nginx
bulent      4364    4362  0 11:06 pts/0    00:00:00 nginx: master process nginx -g daemon off;
524388      4389    4364  0 11:06 pts/0    00:00:00 nginx: worker process
524388      4390    4364  0 11:06 pts/0    00:00:00 nginx: worker process
524388      4391    4364  0 11:06 pts/0    00:00:00 nginx: worker process
524388      4392    4364  0 11:06 pts/0    00:00:00 nginx: worker process
root        6284    6282  0 11:51 ?        00:00:00 nginx: master process nginx -g daemon off;
101         6308    6284  0 11:51 ?        00:00:00 nginx: worker process
101         6309    6284  0 11:51 ?        00:00:00 nginx: worker process
101         6310    6284  0 11:51 ?        00:00:00 nginx: worker process
101         6311    6284  0 11:51 ?        00:00:00 nginx: worker process
bulent      6389    3266  0 11:53 pts/1    00:00:00 grep --color=auto nginx
```

```shell
[bulent@lima-podman bulent]$ cat /proc/6284/net/fib_trie
Main:
  +-- 0.0.0.0/1 2 0 2
     +-- 0.0.0.0/4 2 0 2
        |-- 0.0.0.0
           /0 universe UNICAST
        +-- 10.88.0.0/16 2 0 2
           +-- 10.88.0.0/30 2 0 2
              |-- 10.88.0.0
                 /16 link UNICAST
              |-- 10.88.0.2
                 /32 host LOCAL
           |-- 10.88.255.255
              /32 link BROADCAST
     +-- 127.0.0.0/8 2 0 2
        +-- 127.0.0.0/31 1 0 0
           |-- 127.0.0.0
              /8 host LOCAL
           |-- 127.0.0.1
              /32 host LOCAL
        |-- 127.255.255.255
           /32 link BROADCAST
Local:
  +-- 0.0.0.0/1 2 0 2
     +-- 0.0.0.0/4 2 0 2
        |-- 0.0.0.0
           /0 universe UNICAST
        +-- 10.88.0.0/16 2 0 2
           +-- 10.88.0.0/30 2 0 2
              |-- 10.88.0.0
                 /16 link UNICAST
              |-- 10.88.0.2
                 /32 host LOCAL
           |-- 10.88.255.255
              /32 link BROADCAST
     +-- 127.0.0.0/8 2 0 2
        +-- 127.0.0.0/31 1 0 0
           |-- 127.0.0.0
              /8 host LOCAL
           |-- 127.0.0.1
              /32 host LOCAL
        |-- 127.255.255.255
           /32 link BROADCAST
```

```shell

[bulent@lima-podman bulent]$ sudo podman ps -a
CONTAINER ID  IMAGE                           COMMAND               CREATED        STATUS        PORTS       NAMES
fe2eab7e4167  docker.io/library/nginx:latest  nginx -g daemon o...  4 minutes ago  Up 4 minutes  80/tcp      sleepy_darwin
[bulent@lima-podman bulent]$ sudo podman inspect -l -f \{\{.NetworkSettings.IPAddress\}\}
10.88.0.2
```

Look for conmon processes.

```shell
ps faux | less
```

Ctrl-p, Ctrl-q to detach from the container shell.

```shell
podman run -e MARIADB_ROOT_PASSWORD=password -d mariadb
```

```shell
# Adjust “20g” if you want a different maximum size.
hdiutil create \
  -size 1000g \
  -type SPARSEBUNDLE \
  -fs APFS \
  -volname "LimaData" \
  /Volumes/CiscoD3/LimaData.sparsebundle


 hdiutil attach /Volumes/CiscoD3/LimaData.sparsebundle

/dev/disk14          GUID_partition_scheme
/dev/disk14s1        EFI
/dev/disk14s2        Apple_APFS
/dev/disk18          EF57347C-0000-11AA-AA11-0030654
/dev/disk18s1        41504653-0000-11AA-AA11-0030654 /Volumes/LimaData
```

```shell
mkdir -p /Volumes/CiscoD3/lima
sudo chown -R "$(whoami)" /Volumes/CiscoD3/lima
chmod 755 /Volumes/CiscoD3/lima
export LIMA_HOME=/Volumes/CiscoD3/lima


```shell
export LIMA_HOME="/Volumes/LimaData"
```

```shell
podman system connection add lima-podman "unix:///Volumes/LimaData/podman/sock/podman.sock"
podman system connection default lima-podman
podman run quay.io/podman/hello
```

```shell
  ~ podman context ls
Name                         URI                                                         Identity                                                      Default     ReadWrite
lima-podman                  unix:///Volumes/LimaData/podman/sock/podman.sock                                                                          true        true
podman-machine-default       ssh://core@127.0.0.1:45196/run/user/501/podman/podman.sock  /Users/bulent/.local/share/containers/podman/machine/machine  false       true
podman-machine-default-root  ssh://root@127.0.0.1:45196/run/podman/podman.sock           /Users/bulent/.local/share/containers/podman/machine/machine  false       true
```

```shell


podman pod create --name dbtest-pod -p 3306:3306
podman run -d \
  --pod dbtest-pod \
  --name mariadb \
  -e MARIADB_ROOT_PASSWORD=MyRootPass123 \
  mariadb

podman logs -f mariadb


podman run --rm -it \
  --pod dbtest-pod \
  --name sbbench \
  registry.fedoraproject.org/fedora \
  /bin/bash

```

In sbbench container, install sysbench and mariadb client:

```shell
dnf install -y mariadb sysbench

```



```shell
mysql -h 127.0.0.1 \
      -u root \
      -pMyRootPass123 \
      -e "CREATE DATABASE sbtest; \
          CREATE USER 'sbuser'@'%' IDENTIFIED BY 'SbPass!234'; \
          GRANT ALL ON sbtest.* TO 'sbuser'@'%'; \
          FLUSH PRIVILEGES;"

```



```shell
sysbench \
  --db-driver=mysql \
  --mysql-host=127.0.0.1 \
  --mysql-port=3306 \
  --mysql-user=sbuser \
  --mysql-password='SbPass!234' \
  --mysql-db=sbtest \
  --tables=16 \
  --table-size=100000 \
  oltp_read_write prepare

```




```shell
sysbench \
  --db-driver=mysql \
  --mysql-host=127.0.0.1 \
  --mysql-port=3306 \
  --mysql-user=sbuser \
  --mysql-password='SbPass!234' \
  --mysql-db=sbtest \
  --tables=16 \
  --table-size=100000 \
  --threads=4 \
  --time=60 \
  --report-interval=10 \
  oltp_read_write run

```




```shell
[root@dbtest-pod /]# sysbench \
  --db-driver=mysql \
  --mysql-host=127.0.0.1 \
  --mysql-port=3306 \
  --mysql-user=sbuser \
  --mysql-password='SbPass!234' \
  --mysql-db=sbtest \
  --tables=16 \
  --table-size=100000 \
  --threads=4 \
  --time=60 \
  --report-interval=10 \
  oltp_read_write run
sysbench 1.0.20 (using system LuaJIT 2.1.1731485912)

Running the test with following options:
Number of threads: 4
Report intermediate results every 10 second(s)
Initializing random number generator from current time


Initializing worker threads...

Threads started!

[ 10s ] thds: 4 tps: 33.69 qps: 679.29 (r/w/o: 476.32/135.18/67.79) lat (ms,95%): 262.64 err/s: 0.00 reconn/s: 0.00
[ 20s ] thds: 4 tps: 30.60 qps: 613.11 (r/w/o: 429.10/122.80/61.20) lat (ms,95%): 427.07 err/s: 0.00 reconn/s: 0.00
[ 30s ] thds: 4 tps: 36.90 qps: 735.47 (r/w/o: 514.45/147.21/73.81) lat (ms,95%): 262.64 err/s: 0.00 reconn/s: 0.00
[ 40s ] thds: 4 tps: 54.80 qps: 1097.23 (r/w/o: 768.45/219.19/109.59) lat (ms,95%): 189.93 err/s: 0.00 reconn/s: 0.00
[ 50s ] thds: 4 tps: 33.50 qps: 669.96 (r/w/o: 468.54/134.41/67.01) lat (ms,95%): 450.77 err/s: 0.00 reconn/s: 0.00
[ 60s ] thds: 4 tps: 56.00 qps: 1121.11 (r/w/o: 785.64/223.38/112.09) lat (ms,95%): 150.29 err/s: 0.10 reconn/s: 0.00
SQL statistics:
    queries performed:
        read:                            34440
        write:                           9838
        other:                           4919
        total:                           49197
    transactions:                        2459   (40.88 per sec.)
    queries:                             49197  (817.85 per sec.)
    ignored errors:                      1      (0.02 per sec.)
    reconnects:                          0      (0.00 per sec.)

General statistics:
    total time:                          60.1541s
    total number of events:              2459

Latency (ms):
         min:                                    4.17
         avg:                                   97.84
         max:                                 1525.76
         95th percentile:                      257.95
         sum:                               240582.08

Threads fairness:
    events (avg/stddev):           614.7500/7.82
    execution time (avg/stddev):   60.1455/0.00

```

## Another way to test




```shell

 podman exec -it sbbench /bin/bash
```



```shell
mysql -h127.0.0.1 -u root -pMyRootPass123 -e "
  CREATE DATABASE msdb;
  CREATE USER 'msuser'@'%' IDENTIFIED BY 'MsPass!234';
  GRANT ALL ON msdb.* TO 'msuser'@'%';
  FLUSH PRIVILEGES;
"

```


For reference


```shell
# Inside Fedora container, from previous instructions:
sysbench \
  --db-driver=mysql \
  --mysql-host=127.0.0.1 \
  --mysql-user=sbuser \
  --mysql-password='SbPass!234' \
  --mysql-db=sbtest \
  --tables=4 \
  --table-size=50000 \
  --threads=4 \
  --time=30 \
  oltp_read_write run

```

# For final test




```shell
mysqlslap \
  --user=msuser \
  --password='MsPass!234' \
  --host=127.0.0.1 \
  --port=3306 \
  --concurrency=10 \
  --iterations=50 \
  --number-int-cols=2 \
  --number-char-cols=3 \
  --auto-generate-sql \
  --verbose \
  --create-schema=msdb
```


https://github.com/akopytov/sysbench