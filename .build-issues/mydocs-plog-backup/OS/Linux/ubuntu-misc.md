#  Ubuntu Tips

## fallocate - Creating a large file

```shell
fallocate -l1G /var/www/html/largeFile.bin

```

## Ports listened by the host

```shell
bulent@NDAWN-Azure:~$ ss -ltn -4
State    Recv-Q    Send-Q        Local Address:Port        Peer Address:Port
LISTEN   0         511                 0.0.0.0:443              0.0.0.0:*
LISTEN   0         4096                0.0.0.0:8007             0.0.0.0:*
LISTEN   0         4096                0.0.0.0:8009             0.0.0.0:*
LISTEN   0         1024              127.0.0.1:25225            0.0.0.0:*
LISTEN   0         80                127.0.0.1:3306             0.0.0.0:*
LISTEN   0         511                 0.0.0.0:80               0.0.0.0:*
LISTEN   0         128           127.0.0.53%lo:53               0.0.0.0:*
LISTEN   0         128                 0.0.0.0:22               0.0.0.0:*
LISTEN   0         224               127.0.0.1:5432             0.0.0.0:*
```

```shell

bulent@NDAWN-Azure:~$ ss -ltn -6
State    Recv-Q    Send-Q        Local Address:Port        Peer Address:Port
LISTEN   0         511                    [::]:443                 [::]:*
LISTEN   0         4096                   [::]:8007                [::]:*
LISTEN   0         4096                   [::]:8009                [::]:*
LISTEN   0         511                    [::]:80                  [::]:*
LISTEN   0         128                    [::]:22                  [::]:*
```

##  Packages installed after a specific time

```shell
awk '$1 " " $2 >= "2024-11-20 08:22:12" && $3 == "install"' /var/log/dpkg.log

```

##  Passwordless sudo

<https://serverfault.com/questions/160581/how-to-setup-passwordless-sudo-on-linux>

For vm user on nodes and control plane

```shell
sudo visudo 


```

```shell
vm      ALL = (ALL) NOPASSWD: ALL


```

##  Ubuntu Version

You can check the version of Ubuntu installed on your system using any of the following commands:

### 1. **Using `lsb_release` Command**

```bash
lsb_release -a
```

This will display detailed information about the Ubuntu version, including the codename and release number.

### 2. **Checking the `/etc/os-release` File**

```bash
cat /etc/os-release
```

This command prints detailed information about the operating system version.

### 3. **Using `hostnamectl`**

```bash
sudo apt install systemd
hostnamectl
```

This will display system information, including the operating system and version.

### 4. **Checking the Kernel Version**

```bash
uname -a
```

While this doesn't give the Ubuntu version directly, it provides information about the kernel version and can indicate the OS version indirectly.

### 5. **Reading the `/etc/issue` File**

```bash
cat /etc/issue
```

This file often contains a brief summary of the Ubuntu version.

### Example Output from `lsb_release -a`

```
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 24.04 LTS
Release:        24.04
Codename:       focal
```

## Change Hostname on Ubuntu 20.04 (No Reboot Required)

`hostname` or `hostnamectl` komutu ile bilgi al.

```shell
hostnamectl set-hostname ct-cp1

```

<https://phoenixnap.com/kb/ubuntu-20-04-change-hostname>
