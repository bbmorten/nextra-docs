#  Docker Networking

##  Docker Desktop provides a built-in command to access the VM

```shell
docker run -it --privileged --pid=host justincormack/nsenter1

```

## Host (MACOSX) outputs

###  ip link

```shell
➜  ~ ip link
1: lo0: <UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384 status UNKNOWN
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: gif0: <POINTOPOINT,MULTICAST> mtu 1280 status UNKNOWN
    link/none
3: stf0: <> mtu 1280 status UNKNOWN
    link/unknown
4: anpi0: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether ca:78:02:00:46:5e brd ff:ff:ff:ff:ff:ff
5: anpi1: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether ca:78:02:00:46:5f brd ff:ff:ff:ff:ff:ff
6: en3: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether ca:78:02:00:46:3e brd ff:ff:ff:ff:ff:ff
7: en4: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether ca:78:02:00:46:3f brd ff:ff:ff:ff:ff:ff
8: en1: <UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether 36:06:6b:cc:83:00 brd ff:ff:ff:ff:ff:ff
9: en2: <UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether 36:06:6b:cc:83:04 brd ff:ff:ff:ff:ff:ff
10: bridge0: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether 36:06:6b:cc:83:00 brd ff:ff:ff:ff:ff:ff
11: ap1: <UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether 3e:06:30:27:7d:56 brd ff:ff:ff:ff:ff:ff
12: en0: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status UP
    link/ether 3c:06:30:27:7d:56 brd ff:ff:ff:ff:ff:ff
13: awdl0: <UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status UP
    link/ether 26:1b:c0:c0:d2:4c brd ff:ff:ff:ff:ff:ff
14: llw0: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether 26:1b:c0:c0:d2:4c brd ff:ff:ff:ff:ff:ff
15: utun0: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1500 status UNKNOWN
    link/none
16: utun1: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380 status UNKNOWN
    link/none
17: utun2: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 2000 status UNKNOWN
    link/none
18: utun3: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1000 status UNKNOWN
    link/none
19: utun4: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380 status UNKNOWN
    link/none
20: utun5: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380 status UNKNOWN
    link/none
29: utun6: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380 status UNKNOWN
    link/none
30: utun7: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380 status UNKNOWN
    link/none
23: vmenet0: <UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500 status UP
    link/ether 62:31:a4:0b:bb:f5 brd ff:ff:ff:ff:ff:ff
24: bridge100: <UP,BROADCAST,SMART,RUNNING,ALLMULTI,SIMPLEX,MULTICAST> mtu 1500 status UP
    link/ether 3e:06:30:72:81:64 brd ff:ff:ff:ff:ff:ff
21: feth7722: <UP,BROADCAST,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 2800 status UP
    link/ether 66:65:74:68:1e:2a brd ff:ff:ff:ff:ff:ff
22: feth2722: <UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> mtu 2800 status UP
    link/ether 3a:66:52:aa:62:fd brd ff:ff:ff:ff:ff:ff
```

### ip addr list

```shell
➜  ~ ip addr list
1: lo0: <UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384 status UNKNOWN
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8
    inet6 ::1/128
    inet6 fe80::1/64
2: gif0: <POINTOPOINT,MULTICAST> mtu 1280 status UNKNOWN
    link/none
3: stf0: <> mtu 1280 status UNKNOWN
    link/unknown
4: anpi0: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether ca:78:02:00:46:5e brd ff:ff:ff:ff:ff:ff
5: anpi1: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether ca:78:02:00:46:5f brd ff:ff:ff:ff:ff:ff
6: en3: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether ca:78:02:00:46:3e brd ff:ff:ff:ff:ff:ff
7: en4: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether ca:78:02:00:46:3f brd ff:ff:ff:ff:ff:ff
8: en1: <UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether 36:06:6b:cc:83:00 brd ff:ff:ff:ff:ff:ff
9: en2: <UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether 36:06:6b:cc:83:04 brd ff:ff:ff:ff:ff:ff
10: bridge0: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether 36:06:6b:cc:83:00 brd ff:ff:ff:ff:ff:ff
11: ap1: <UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether 3e:06:30:27:7d:56 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::3c06:30ff:fe27:7d56/64
12: en0: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status UP
    link/ether 3c:06:30:27:7d:56 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::4f3:8daf:572c:e463/64
    inet 192.168.70.120/24 brd 192.168.70.255
13: awdl0: <UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status UP
    link/ether 26:1b:c0:c0:d2:4c brd ff:ff:ff:ff:ff:ff
    inet6 fe80::241b:c0ff:fec0:d24c/64
14: llw0: <UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500 status DOWN
    link/ether 26:1b:c0:c0:d2:4c brd ff:ff:ff:ff:ff:ff
    inet6 fe80::241b:c0ff:fec0:d24c/64
15: utun0: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1500 status UNKNOWN
    link/none
    inet6 fe80::c0e2:32cb:7c08:bb15/64
16: utun1: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380 status UNKNOWN
    link/none
    inet6 fe80::1c85:3fc5:824c:512d/64
17: utun2: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 2000 status UNKNOWN
    link/none
    inet6 fe80::10c1:11b6:1541:4149/64
18: utun3: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1000 status UNKNOWN
    link/none
    inet6 fe80::ce81:b1c:bd2c:69e/64
19: utun4: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380 status UNKNOWN
    link/none
    inet6 fe80::8969:2ba2:c3e:fcb0/64
20: utun5: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380 status UNKNOWN
    link/none
    inet6 fe80::56a5:573c:56d3:1487/64
29: utun6: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380 status UNKNOWN
    link/none
    inet6 fe80::7bc5:8a13:4964:b608/64
30: utun7: <UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380 status UNKNOWN
    link/none
    inet6 fe80::9528:4410:966d:24bf/64
23: vmenet0: <UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500 status UP
    link/ether 62:31:a4:0b:bb:f5 brd ff:ff:ff:ff:ff:ff
24: bridge100: <UP,BROADCAST,SMART,RUNNING,ALLMULTI,SIMPLEX,MULTICAST> mtu 1500 status UP
    link/ether 3e:06:30:72:81:64 brd ff:ff:ff:ff:ff:ff
    inet 192.168.205.1/24 brd 192.168.205.255
    inet6 fe80::3c06:30ff:fe72:8164/64
    inet6 fd2d:230d:4b89:cddd:102a:6c6e:1556:241d/64
21: feth7722: <UP,BROADCAST,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 2800 status UP
    link/ether 66:65:74:68:1e:2a brd ff:ff:ff:ff:ff:ff
22: feth2722: <UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> mtu 2800 status UP
    link/ether 3a:66:52:aa:62:fd brd ff:ff:ff:ff:ff:ff
    inet 10.242.131.218/16 brd 10.242.255.255
```

##  Internal VM `ip link` output (MACOSX)

### ip link

```shell
~ # ip link
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: bond0: <BROADCAST,MULTICAST400> mtu 1500 qdisc noop state DOWN qlen 1000
    link/ether 2a:86:33:d2:6a:12 brd ff:ff:ff:ff:ff:ff
3: dummy0: <BROADCAST,NOARP> mtu 1500 qdisc noop state DOWN qlen 1000
    link/ether be:0f:f8:63:c8:6e brd ff:ff:ff:ff:ff:ff
4: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 65535 qdisc pfifo_fast state UP qlen 1000
    link/ether 0e:84:a8:59:e8:16 brd ff:ff:ff:ff:ff:ff
5: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether ce:ef:80:80:2b:98 brd ff:ff:ff:ff:ff:ff
6: teql0: <NOARP> mtu 1500 qdisc noop state DOWN qlen 100
    link/void 
7: tunl0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN qlen 1000
    link/ipip 0.0.0.0 brd 0.0.0.0
8: gre0@NONE: <NOARP> mtu 1476 qdisc noop state DOWN qlen 1000
    link/gre 0.0.0.0 brd 0.0.0.0
9: gretap0@NONE: <BROADCAST,MULTICAST> mtu 1462 qdisc noop state DOWN qlen 1000
    link/ether 00:00:00:00:00:00 brd ff:ff:ff:ff:ff:ff
10: erspan0@NONE: <BROADCAST,MULTICAST> mtu 1450 qdisc noop state DOWN qlen 1000
    link/ether 00:00:00:00:00:00 brd ff:ff:ff:ff:ff:ff
11: ip_vti0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN qlen 1000
    link/ipip 0.0.0.0 brd 0.0.0.0
12: ip6_vti0@NONE: <NOARP> mtu 1428 qdisc noop state DOWN qlen 1000
    link/tunnel6 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 brd 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00
13: sit0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN qlen 1000
    link/sit 0.0.0.0 brd 0.0.0.0
14: ip6tnl0@NONE: <NOARP> mtu 1452 qdisc noop state DOWN qlen 1000
    link/tunnel6 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 brd 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00
15: ip6gre0@NONE: <NOARP> mtu 1448 qdisc noop state DOWN qlen 1000
    link/[823] 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 brd 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00
16: services1@ip_vti0: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue state UP 
    link/ether 2a:f4:d8:eb:39:72 brd ff:ff:ff:ff:ff:ff
17: br-724279d38281: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN 
    link/ether 02:42:c9:9d:13:12 brd ff:ff:ff:ff:ff:ff
18: br-77e1f5e44380: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN 
    link/ether 02:42:fd:d4:03:a6 brd ff:ff:ff:ff:ff:ff
19: br-d5eb3ed9f5c6: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP 
    link/ether 02:42:05:53:8e:11 brd ff:ff:ff:ff:ff:ff
20: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 65535 qdisc noqueue state UP 
    link/ether 02:42:f0:60:00:33 brd ff:ff:ff:ff:ff:ff
21: br-10b8b117fe47: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP 
    link/ether 02:42:ce:97:c7:b2 brd ff:ff:ff:ff:ff:ff
23: br-297c56764ff7: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN 
    link/ether 02:42:08:ac:30:1a brd ff:ff:ff:ff:ff:ff
24: br-4ee9e6cd6dae: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN 
    link/ether 02:42:26:a1:33:fa brd ff:ff:ff:ff:ff:ff
26: veth6fe0545@if25: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue master br-10b8b117fe47 state UP 
    link/ether 7a:12:43:83:42:e2 brd ff:ff:ff:ff:ff:ff
30: vethdc35866@if29: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 65535 qdisc noqueue master docker0 state UP 
    link/ether aa:4b:f3:44:4b:a9 brd ff:ff:ff:ff:ff:ff
32: veth11372f2@if31: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue master br-d5eb3ed9f5c6 state UP 
    link/ether ee:bd:b4:a6:d7:1a brd ff:ff:ff:ff:ff:ff
59: vethe1994e0@if58: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 65535 qdisc noqueue master docker0 state UP 
    link/ether 22:42:8a:d9:92:c6 brd ff:ff:ff:ff:ff:ff
61: veth7d26b30@if60: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 65535 qdisc noqueue master docker0 state UP 
    link/ether 52:b4:43:f3:fd:09 brd ff:ff:ff:ff:ff:ff
```

### ip addr list

```shell
~ # ip addr list
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: bond0: <BROADCAST,MULTICAST400> mtu 1500 qdisc noop state DOWN qlen 1000
    link/ether 2a:86:33:d2:6a:12 brd ff:ff:ff:ff:ff:ff
3: dummy0: <BROADCAST,NOARP> mtu 1500 qdisc noop state DOWN qlen 1000
    link/ether be:0f:f8:63:c8:6e brd ff:ff:ff:ff:ff:ff
4: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 65535 qdisc pfifo_fast state UP qlen 1000
    link/ether 0e:84:a8:59:e8:16 brd ff:ff:ff:ff:ff:ff
    inet 192.168.65.3/24 brd 192.168.65.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fdc4:f303:9324::3/64 scope global flags 02 
       valid_lft forever preferred_lft forever
    inet6 fe80::c84:a8ff:fe59:e816/64 scope link 
       valid_lft forever preferred_lft forever
5: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether ce:ef:80:80:2b:98 brd ff:ff:ff:ff:ff:ff
    inet 192.168.205.3/24 brd 192.168.205.255 scope global eth1
       valid_lft forever preferred_lft forever
    inet6 fdc4:f303:9324::3/64 scope global flags 02 
       valid_lft forever preferred_lft forever
    inet6 fe80::ccef:80ff:fe80:2b98/64 scope link 
       valid_lft forever preferred_lft forever
6: teql0: <NOARP> mtu 1500 qdisc noop state DOWN qlen 100
    link/void 
7: tunl0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN qlen 1000
    link/ipip 0.0.0.0 brd 0.0.0.0
8: gre0@NONE: <NOARP> mtu 1476 qdisc noop state DOWN qlen 1000
    link/gre 0.0.0.0 brd 0.0.0.0
9: gretap0@NONE: <BROADCAST,MULTICAST> mtu 1462 qdisc noop state DOWN qlen 1000
    link/ether 00:00:00:00:00:00 brd ff:ff:ff:ff:ff:ff
10: erspan0@NONE: <BROADCAST,MULTICAST> mtu 1450 qdisc noop state DOWN qlen 1000
    link/ether 00:00:00:00:00:00 brd ff:ff:ff:ff:ff:ff
11: ip_vti0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN qlen 1000
    link/ipip 0.0.0.0 brd 0.0.0.0
12: ip6_vti0@NONE: <NOARP> mtu 1428 qdisc noop state DOWN qlen 1000
    link/tunnel6 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 brd 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00
13: sit0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN qlen 1000
    link/sit 0.0.0.0 brd 0.0.0.0
14: ip6tnl0@NONE: <NOARP> mtu 1452 qdisc noop state DOWN qlen 1000
    link/tunnel6 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 brd 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00
15: ip6gre0@NONE: <NOARP> mtu 1448 qdisc noop state DOWN qlen 1000
    link/[823] 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 brd 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00
16: services1@ip_vti0: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue state UP 
    link/ether 2a:f4:d8:eb:39:72 brd ff:ff:ff:ff:ff:ff
    inet 192.168.65.6/32 scope global services1
       valid_lft forever preferred_lft forever
    inet6 fdc4:f303:9324::6/128 scope global 
       valid_lft forever preferred_lft forever
    inet6 fe80::28f4:d8ff:feeb:3972/64 scope link 
       valid_lft forever preferred_lft forever
17: br-724279d38281: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN 
    link/ether 02:42:c9:9d:13:12 brd ff:ff:ff:ff:ff:ff
    inet 172.20.0.1/16 brd 172.20.255.255 scope global br-724279d38281
       valid_lft forever preferred_lft forever
18: br-77e1f5e44380: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN 
    link/ether 02:42:fd:d4:03:a6 brd ff:ff:ff:ff:ff:ff
    inet 172.19.0.1/16 brd 172.19.255.255 scope global br-77e1f5e44380
       valid_lft forever preferred_lft forever
19: br-d5eb3ed9f5c6: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP 
    link/ether 02:42:05:53:8e:11 brd ff:ff:ff:ff:ff:ff
    inet 172.25.0.1/16 brd 172.25.255.255 scope global br-d5eb3ed9f5c6
       valid_lft forever preferred_lft forever
    inet6 fe80::42:5ff:fe53:8e11/64 scope link 
       valid_lft forever preferred_lft forever
20: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 65535 qdisc noqueue state UP 
    link/ether 02:42:f0:60:00:33 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:f0ff:fe60:33/64 scope link 
       valid_lft forever preferred_lft forever
21: br-10b8b117fe47: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP 
    link/ether 02:42:ce:97:c7:b2 brd ff:ff:ff:ff:ff:ff
    inet 172.21.0.1/16 brd 172.21.255.255 scope global br-10b8b117fe47
       valid_lft forever preferred_lft forever
    inet6 fe80::42:ceff:fe97:c7b2/64 scope link 
       valid_lft forever preferred_lft forever
23: br-297c56764ff7: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN 
    link/ether 02:42:08:ac:30:1a brd ff:ff:ff:ff:ff:ff
    inet 172.18.0.1/24 brd 172.18.0.255 scope global br-297c56764ff7
       valid_lft forever preferred_lft forever
24: br-4ee9e6cd6dae: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN 
    link/ether 02:42:26:a1:33:fa brd ff:ff:ff:ff:ff:ff
    inet 172.22.0.1/16 brd 172.22.255.255 scope global br-4ee9e6cd6dae
       valid_lft forever preferred_lft forever
26: veth6fe0545@if25: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue master br-10b8b117fe47 state UP 
    link/ether 7a:12:43:83:42:e2 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::7812:43ff:fe83:42e2/64 scope link 
       valid_lft forever preferred_lft forever
30: vethdc35866@if29: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 65535 qdisc noqueue master docker0 state UP 
    link/ether aa:4b:f3:44:4b:a9 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::a84b:f3ff:fe44:4ba9/64 scope link 
       valid_lft forever preferred_lft forever
32: veth11372f2@if31: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue master br-d5eb3ed9f5c6 state UP 
    link/ether ee:bd:b4:a6:d7:1a brd ff:ff:ff:ff:ff:ff
    inet6 fe80::ecbd:b4ff:fea6:d71a/64 scope link 
       valid_lft forever preferred_lft forever
59: vethe1994e0@if58: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 65535 qdisc noqueue master docker0 state UP 
    link/ether 22:42:8a:d9:92:c6 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::2042:8aff:fed9:92c6/64 scope link 
       valid_lft forever preferred_lft forever
61: veth7d26b30@if60: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 65535 qdisc noqueue master docker0 state UP 
    link/ether 52:b4:43:f3:fd:09 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::50b4:43ff:fef3:fd09/64 scope link 
       valid_lft forever preferred_lft forever
```

Here is an explanation of the interfaces listed in the output from the internal Docker VM:

---

### **Key Interface Categories**

#### 1. **General Interfaces**

- **`lo`** (Loopback Interface):
    - A virtual network interface used for local communication within the VM.
    - Example: Processes in the VM communicate with each other using `127.0.0.1`.
    - Status: `UP`.

- **`bond0`** (Bonding Interface):
    - Used for link aggregation (combining multiple network connections into one).
    - Currently: `DOWN`.

- **`dummy0`**:
    - A virtual interface often used for testing or network simulation.
    - Currently: `DOWN`.

- **`teql0`**, **`tunl0`**, **`gre0`**, **`gretap0`**, **`erspan0`**, **`ip_vti0`**, **`ip6_vti0`**, **`sit0`**, **`ip6tnl0`**, **`ip6gre0`**:
    - These are tunnel interfaces for various encapsulation protocols:
        - `tunl0`: IP-in-IP tunneling.
        - `gre0`: Generic Routing Encapsulation (GRE) tunneling.
        - `sit0`: IPv6 over IPv4 encapsulation (SIT).
        - `ip_vti0`, `ip6_vti0`: Virtual Tunneling Interfaces.
        - `erspan0`: Encapsulated Remote SPAN (ERSPAN) for traffic mirroring.
        - `gretap0`: GRE tunneling with Ethernet bridging.
    - Currently: `DOWN`.

#### 2. **Ethernet Interfaces**

- **`eth0`**, **`eth1`**:
    - Physical or virtual Ethernet interfaces in the VM.
    - Used for communication with the host system or external network.
    - Status: `UP`.

#### 3. **Bridge Interfaces**

These are virtual interfaces used by Docker to connect containers and manage their networking.

- **`docker0`**:
    - The default bridge interface created by Docker.
    - All containers without a custom network attach to this bridge by default.
    - Status: `UP`.

- **Custom Bridges (e.g., `br-724279d38281`, `br-77e1f5e44380`, `br-d5eb3ed9f5c6`)**:
    - User-defined Docker networks.
    - Each corresponds to a custom bridge network created for containers.
    - Status:
        - `br-d5eb3ed9f5c6`: `UP` (active bridge).
        - Others: `DOWN` (no connected containers).

####  docker network ls

```shell
➜  ~ docker network ls
NETWORK ID     NAME                   DRIVER    SCOPE
da2ed4f742da   bridge                 bridge    local
4ee9e6cd6dae   docker-v3_default      bridge    local
43899f665487   host                   host      local
10b8b117fe47   mydocs-plog_default    bridge    local
724279d38281   mydocs-wstpa_default   bridge    local
d5eb3ed9f5c6   mydocs_default         bridge    local
297c56764ff7   net1                   bridge    local
77e1f5e44380   net2                   bridge    local
f862166f9dea   none                   null      local
```

#### Container IP Addresses

```shell
➜  ~ docker ps -q | xargs docker inspect --format '{{.Name}} - {{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}'

/musing_varahamihira - 172.17.0.4
/blog_db - 172.17.0.3
/mydocs-plog-docs-1 - 172.21.0.2
/mystifying_davinci - 172.17.0.2
/mydocs-docs-1 - 172.25.0.2
```

#### `docker network inspect bridge``

```shell
➜  ~ docker network inspect bridge

[
    {
        "Name": "bridge",
        "Id": "da2ed4f742da3da0d5ce0e22fa60fdfe015f993230a35a3675e0edd457e0d061",
        "Created": "2024-11-07T09:22:21.440277584Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.17.0.0/16",
                    "Gateway": "172.17.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "51a59cb876e2e09b6c3983eea0a4f432b2a157f57a1471c513240e1541702e64": {
                "Name": "blog_db",
                "EndpointID": "4d128a1e8a4439b9405194ce3495c2d18829e5e39b626241d822cc67126bbb90",
                "MacAddress": "02:42:ac:11:00:03",
                "IPv4Address": "172.17.0.3/16",
                "IPv6Address": ""
            },
            "756b45f5a6155cc13955a0d49844594cfff4449e8bd4d535fb0fb9a01f2a331a": {
                "Name": "musing_varahamihira",
                "EndpointID": "c766aa544db539e6c1388a6cd1dcc6f9076c93eb38063cbca104eb01e864020a",
                "MacAddress": "02:42:ac:11:00:04",
                "IPv4Address": "172.17.0.4/16",
                "IPv6Address": ""
            },
            "edbfb0c9ba7eb26a6d68f6f4b972e56b7a1afa59e66cd6ebe8b4933b28414c06": {
                "Name": "mystifying_davinci",
                "EndpointID": "476fa328ab78407cc73a0cfb78499a414bb93b039988e3a4c43883fba9c241d6",
                "MacAddress": "02:42:ac:11:00:02",
                "IPv4Address": "172.17.0.2/16",
                "IPv6Address": ""
            }
        },
        "Options": {
            "com.docker.network.bridge.default_bridge": "true",
            "com.docker.network.bridge.enable_icc": "true",
            "com.docker.network.bridge.enable_ip_masquerade": "true",
            "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0",
            "com.docker.network.bridge.name": "docker0",
            "com.docker.network.driver.mtu": "65535"
        },
        "Labels": {}
    }
]

```

#### 4. **Virtual Ethernet Interfaces (veth)**

These are pairs of connected interfaces linking Docker containers to bridge networks. Each pair has an `if<N>` identifier to show its peer.

- **Examples**:
    - `veth6fe0545@if25`: Connected to `br-10b8b117fe47`.
    - `vethdc35866@if29`: Connected to `docker0`.
    - Status: `UP`.

#### 5. **Service-Specific Interfaces**

- **`services1`**:
    - An interface tied to a specific service or a virtualized setup.
    - Status: `UP`.

---

### **Summary of Active Interfaces**

- **Loopback (`lo`)**: Internal communication within the VM.
- **`eth0` and `eth1`**: Ethernet interfaces for external communication.
- **`docker0`**: Default Docker bridge for container networking.
- **Custom bridges (`br-*`)**: Bridges for custom Docker networks.
- **`veth*` interfaces**: Connections between containers and bridges.

## Container connected to Docker0 bridge

```shell
~ # brctl show docker0
bridge name bridge id  STP enabled interfaces
docker0  8000.0242f0600033 no  vethdc35866
       veth19b5753
       vethe1994e0
```

## Containers connected specifically to the bridge network

```shell
docker ps -q | while read -r container_id; do
  network_id=$(docker inspect -f '{{range $k, $v := .NetworkSettings.Networks}}{{if eq $k "bridge"}}{{$v.NetworkID}}{{end}}{{end}}' "$container_id")
  if [ -n "$network_id" ]; then
    echo "Container: $container_id is connected to bridge network: $network_id"
  else
    echo "Container: $container_id is NOT connected to the bridge network."
  fi
done

```

```shell
➜  ~ docker network inspect bridge | jq '.[0].Containers | keys[]'

"51a59cb876e2e09b6c3983eea0a4f432b2a157f57a1471c513240e1541702e64"
"756b45f5a6155cc13955a0d49844594cfff4449e8bd4d535fb0fb9a01f2a331a"
"edbfb0c9ba7eb26a6d68f6f4b972e56b7a1afa59e66cd6ebe8b4933b28414c06"
```

## Key Interfaces related to Docker VM

From the outputs provided, the interfaces related to the internal Docker VM running on macOS can be identified based on their roles and Docker's networking behavior. Here's the breakdown:

---

### **Key Interfaces Related to Docker VM**

#### **1. `bridge100`**

- **Type**: Bridge Interface
- **Purpose**:
    - This is the main interface created by Docker Desktop on macOS for managing container networking.
    - Acts as a bridge between the Docker VM and the host machine's network.
- **IP Addresses**:
    - IPv4: `192.168.205.1/24` (Used for communication between the host and the Docker VM).
    - IPv6: Multiple addresses including `fe80::3c06:30ff:fe72:8164/64`.
- **Status**: `UP`.

#### **2. `vmenet0`**

- **Type**: Virtual Machine Network Interface
- **Purpose**:
    - This interface represents the connection between the Docker VM and the host system.
    - Used for communication between macOS and the VM where Docker containers are running.
- **Status**: `UP`.

#### **3. `feth7722`**

- **Type**: Virtual Ethernet Interface
- **Purpose**:
    - Likely represents the connection between the internal Docker VM and containers or between container networks.
    - Promiscuous mode indicates it can monitor all traffic for debugging or routing purposes.
- **Status**: `UP`.

#### **4. `feth2722`**

- **Type**: Virtual Ethernet Interface
- **Purpose**:
    - Similar to `feth7722`, this interface connects to internal networks within the Docker VM.
    - Assigned an IP address (`10.242.131.218/16`), which may belong to an internal Docker network.
- **IP Addresses**:
    - IPv4: `10.242.131.218/16`.
- **Status**: `UP`.

---

### **Interface Roles in Context**

1. **`bridge100`**:
   - Represents the bridge network used by Docker containers and the VM for communication with the host.
   - Primary interface for external communication.

2. **`vmenet0`**:
   - Handles traffic between the Docker VM and the host machine.

3. **`feth7722` & `feth2722`**:
   - Internal virtual Ethernet interfaces for container communication inside the Docker VM.

---

### **How to Verify These Interfaces**

To confirm the association with Docker, you can:

1. **Inspect Docker Networks**:

   ```bash
   docker network ls
   ```

   Then inspect each network:

   ```bash
   docker network inspect <network_name>
   ```

2. **Ping or Debug**:
   - From the host, ping the `bridge100` IP (`192.168.205.1`) to test connectivity.
   - From inside a Docker container, use `ping` or `curl` to test routes to `feth2722` or `bridge100`.

3. **Check ARP Tables**:

   ```bash
   arp -a
   ```

   This will show mappings of IP addresses to MAC addresses and help you correlate traffic.

---

##  Use a Sidecar Container with tcpdump (github.com/nicolaka/netshoot)

docker run -it --privileged --pid=host nicolaka/netshoot