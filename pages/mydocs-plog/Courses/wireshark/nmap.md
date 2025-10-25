#  NMAP Notes

## dig

[zonetransfer.me](https://digi.ninja/projects/zonetransferme.php)

## whois

```shell
mydocs-plog git:(main) ✗ whois e-bebek.com   
...
```

##  nslookup

## host

##  Running zenmap on my mac

```shell
sudo /Applications/Zenmap.app/Contents/MacOS/Zenmap
```

##  Examples

### nmap -T4 -A -v 192.168.70.0/24

```shell
nmap -T4 -A -v 192.168.70.0/24
```

The command `nmap -T4 -A -v 192.168.70.0/24` performs a detailed network scan of the subnet 192.168.70.0/24. Here's a detailed breakdown of each part of the command:

- `nmap`: The Network Mapper tool, which is used for network discovery and security auditing.
- `-T4`: Sets the timing template to level 4. Timing templates control the speed and aggressiveness of the scan. Level 4 is faster and more aggressive than the default (level 3) but can generate more network traffic and be more easily detected.
- `-A`: Enables OS detection, version detection, script scanning, and traceroute. This provides a detailed view of the network and its devices.
- `-v`: Increases verbosity, providing more detailed output during the scan.
- `192.168.70.0/24`: Specifies the target subnet to scan, covering all IP addresses from 192.168.70.0 to 192.168.70.255.

When you run this command, Nmap will scan the specified subnet, identify live hosts, and gather detailed information about each host, including open ports, running services, operating systems, and traceroute paths. This can be useful for network administrators and security professionals to understand the network's configuration and identify potential security issues.

### nmap -sT 192.168.70.1-10

```shell
nmap -sT 192.168.70.1-10

```

The command `nmap -sT 192.168.70.1-10` is used to perform a TCP connect scan on the specified range of IP addresses. Here is a breakdown of each part of the command:

- `nmap`: The Network Mapper tool, which is used for network discovery and security auditing.
- `-sT`: Specifies a TCP connect scan. This type of scan establishes a full TCP connection to each open port it finds. It is less stealthy than other types of scans (like SYN scan) because it completes the TCP handshake, making it more likely to be logged by the target system.
- `192.168.70.1-100`: Specifies the target IP address range to scan, covering all IP addresses from 192.168.70.1 to 192.168.70.100.

When you run this command, Nmap will perform a TCP connect scan on each IP address in the specified range, identifying open ports and the services running on those ports. This type of scan is useful when you do not have the necessary permissions to perform more stealthy scans, or when you need to perform a reliable scan that completes the TCP handshake.

###  nmap -iL hosts.txt

The command `nmap -iL hosts.txt` is used to perform a scan on a list of hosts provided in a file. Here's a detailed breakdown of the command:

- `nmap`: The Network Mapper tool, which is used for network discovery and security auditing.
- `-iL hosts.txt`: Specifies an input file containing a list of hostnames or IP addresses to scan. Each line in the file should contain a single hostname or IP address.

When you run this command, Nmap reads the hosts listed in `hosts.txt` and performs a scan on each of them. The file `hosts.txt` should be formatted with one IP address or hostname per line. This is useful for scanning a specific set of hosts without having to list them all on the command line.

Example content of `hosts.txt`:

```shell
192.168.1.1
192.168.1.2
example.com
```

By using this command, Nmap will scan the hosts `192.168.1.1`, `192.168.1.2`, and `example.com` as specified in the `hosts.txt` file.

### nmap 192.168.1.0/24 --exclude 192.168.1.10,192.168.1.20-192.168.1.30

To exclude specific hosts or ranges from an Nmap scan, you can use the `--exclude` option. Here’s an example of how to use it:

Suppose you want to scan the subnet `192.168.1.0/24` but exclude the hosts `192.168.1.10` and the range `192.168.1.20-192.168.1.30`. You can use the following command:

```sh
nmap 192.168.1.0/24 --exclude 192.168.1.10,192.168.1.20-192.168.1.30
```

Here’s a breakdown of the command:

- `nmap`: The Network Mapper tool.
- `192.168.1.0/24`: The target subnet to scan.
- `--exclude 192.168.1.10,192.168.1.20-192.168.1.30`: The `--exclude` option specifies the IP addresses or ranges to exclude from the scan. Multiple addresses or ranges are separated by commas.

Additionally, if you have a file with a list of hosts to exclude, you can use the `--excludefile` option. Suppose the file `exclude.txt` contains the following:

```
192.168.1.10
192.168.1.20-192.168.1.30
```

You can run the following command to exclude these hosts:

```sh
nmap 192.168.1.0/24 --excludefile exclude.txt
```

This way, Nmap will scan the subnet `192.168.1.0/24` but will skip the hosts and ranges specified in `exclude.txt`.


### nmap -sL 192.168.70.0/24


metaspoitable2

Simple ping scan

nmap -sn/-sP 192.168.70.0/24

namp -sn -n 192.168.70.0/24

sudo nmap -sn -n // Gives different result
// bypass firewall rules
// you may be blocking echo request and reply
// but timestamp echo request and reply may be working

