# Popular Nmap Command Examples

This document provides a curated list of popular Nmap command examples, tailored for network administrators and security professionals. All examples use the `192.168.70.0/24` subnet for network scans and `ndawn.btegitim.com` for host-specific scans.

##  Another link for examples

[Nmap Cheat Sheet](https://www.recordedfuture.com/threat-intelligence-101/tools-and-techniques/nmap-commands)

```shell
podman run --rm --privileged myapp nmap -O 192.168.48.0/24
podman run --rm --privileged myapp nmap -O 192.168.48.0/24
podman run --rm --cap-add=NET_RAW --cap-add=NET_ADMIN myapp nmap ndawn.btegitim.com
```

---

## **Basic Scans**

- **Scan a Single Host**

  ```bash
  nmap ndawn.btegitim.com
  ```

  Scans the specified host for open ports and basic information[1][3][5].

- **Scan a Single IP**

  ```bash
  nmap 192.168.70.10
  ```

  Scans a specific IP address for open ports[1][3][5].

- **Scan an Entire Subnet**

  ```bash
  nmap 192.168.70.0/24
  ```

  Scans all hosts in the subnet for open ports[3][5].

---

## **Host Discovery (Ping Scans)**

- **Ping Scan (Find Live Hosts)**

  ```bash
  nmap -sn 192.168.70.0/24
  ```

  Discovers which hosts are up without scanning ports[1][3].

- **ARP Discovery on Local Network**

  ```bash
  nmap -PR -sn 192.168.70.0/24
  ```

  Uses ARP requests for host discovery on the local subnet[4].

---

## **Port Scanning**

- **Scan Specific Ports**

  ```bash
  nmap -p 22,80,443 192.168.70.10
  ```

  Scans only ports 22, 80, and 443 on the target[1][3].

- **Scan All Ports**

  ```bash
  nmap -p 1-65535 192.168.70.10
  ```

  Scans all 65535 TCP ports on the target[1].

- **Scan Top 20 Most Common Ports**

  ```bash
  nmap --top-ports 20 192.168.70.10
  ```

  Scans the 20 most commonly used ports[1].

---

## **Service and Version Detection**

- **Detect Service Versions**

  ```bash
  nmap -sV 192.168.70.10
  ```

  Attempts to determine service versions running on open ports[3][5].

- **Aggressive Scan (OS, Version, Script, Traceroute)**

  ```bash
  nmap -A ndawn.btegitim.com
  ```

  Enables OS detection, version detection, script scanning, and traceroute[2][3].

---

## **Scanning Multiple Targets**

- **Scan Multiple IPs**

  ```bash
  nmap 192.168.70.10 192.168.70.20 192.168.70.30
  ```

  Scans several specified IPs[3][5].

- **Scan IP Range**

  ```bash
  nmap 192.168.70.10-20
  ```

  Scans all IPs from `.10` to `.20` in the subnet[3][5].

- **Scan Using Wildcard**

  ```bash
  nmap 192.168.70.*
  ```

  Scans all hosts in the `192.168.70.0/24` subnet[3][5].

---

## **Advanced Scans and Options**

- **Enable Verbose Output**

  ```bash
  nmap -v 192.168.70.10
  ```

  Shows more detailed output during the scan[3].

- **Fast Scan**

  ```bash
  nmap -F 192.168.70.10
  ```

  Scans fewer ports for a quicker result[2].

- **Only Show Open Ports**

  ```bash
  nmap --open 192.168.70.10
  ```

  Displays only open (or possibly open) ports[2].

- **Scan and Exclude Specific Hosts**

  ```bash
  nmap 192.168.70.0/24 --exclude 192.168.70.100
  ```

  Scans the subnet but skips the specified IP[3].

---

## **Script Scanning and OS Fingerprinting**

- **Run Default Scripts**

  ```bash
  nmap -sC 192.168.70.10
  ```

  Executes a set of default scripts against the target[3].

- **OS Detection**

  ```bash
  nmap -O 192.168.70.10
  ```

  Attempts to determine the operating system of the target[3][5].

---

## **Output and Reporting**

- **Save Output in Grepable Format**

  ```bash
  nmap -oG scan_results.txt 192.168.70.0/24
  ```

  Saves scan results in a format suitable for `grep`[4].

- **Save Output in XML Format**

  ```bash
  nmap -oX scan_results.xml 192.168.70.0/24
  ```

  Useful for further processing or reporting[4].

---

## **Specialized Scans**

- **UDP Scan**

  ```bash
  nmap -sU 192.168.70.10
  ```

  Scans for open UDP ports [slower than TCP scans](5).

- **IP Protocol Scan**

  ```bash
  nmap -sO 192.168.70.10
  ```

  Determines which IP protocols (TCP, ICMP, IGMP, etc.) are supported[5].

---

## **Examples Table**

| Command | Description |
|---------|-------------|
| `nmap ndawn.btegitim.com` | Scan a specific host |
| `nmap 192.168.70.0/24` | Scan an entire subnet |
| `nmap -sn 192.168.70.0/24` | Ping sweep for live hosts |
| `nmap -p 22,80,443 192.168.70.10` | Scan specific ports |
| `nmap -A ndawn.btegitim.com` | Aggressive scan (OS, version, scripts) |
| `nmap -O 192.168.70.10` | OS detection |
| `nmap --top-ports 20 192.168.70.10` | Scan top 20 ports |
| `nmap -sV 192.168.70.10` | Service version detection |
| `nmap -F 192.168.70.10` | Fast scan |
| `nmap --open 192.168.70.10` | Show only open ports |
| `nmap -oG scan.txt 192.168.70.0/24` | Output in grepable format |

---

**References:**  
Commands and descriptions are based on widely used Nmap practices and confirmed by recent tutorials and cheat sheets[1][2][3][4][5].

[1] <https://www.recordedfuture.com/threat-intelligence-101/tools-and-techniques/nmap-commands>
[2] <https://gbhackers.com/information-gatheri-using-nmap/>
[3] <https://www.tecmint.com/nmap-command-examples/>
[4] <https://gist.github.com/rsperl/321aac3d529aa8f8c7924fd12d581b67>
[5] <https://www.cnblogs.com/UnGeek/p/5913829.html>
[6] <https://nmap.org/book/man-host-discovery.html>
[7] <https://github.com/ifding/useful-scripts/blob/master/linux/nmap-cheat-sheet.md>
[8] <https://stackoverflow.com/questions/21357320/how-do-i-grep-this-nmap-scan>
[9] <https://nmap.org/book/host-discovery-specify-targets.html>
[10] <https://labex.io/tutorials/nmap-scan-specific-hosts-in-nmap-547111>
