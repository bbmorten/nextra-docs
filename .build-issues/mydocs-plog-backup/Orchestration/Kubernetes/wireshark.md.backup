# What is Network Analysis?

* The process of listening to and analyzing network traffic
* Offers insight into network communications to:
  * Identify performance problems
  * Locate security breaches
  * Analyze application behavior
  * Perform capacity planning
* Also known as "protocol analysis"
* Used by IT professionals responsible for network performance and security

# Chapter1: The World of Network Analysis

## What is Network Analysis?

* The process of listening to and analyzing network traffic
* Offers insight into network communications to:
  * Identify performance problems
  * Locate security breaches
  * Analyze application behavior
  * Perform capacity planning
* Also known as "protocol analysis"
* Used by IT professionals responsible for network performance and security



## Skills for Effective Network Analysis

1. A solid understanding of TCP/IP communications
2. Comfort using Wireshark
3. Familiarity with packet structures and typical packet flows



## The Typical Network Analysis Session

1. Capture packets at the appropriate location
2. Apply filters to focus on traffic of interest
3. Review and identify anomalies in the traffic



## Example: Web Browsing Session

![Figure 1: Web Browsing Session](https://cdn.markslides.ai/users/1280/images/1IS1v3tWtcWb72C1k59Zx)




## Example: Downloading a File

![Figure 2: Requesting the Wireshark executable](https://cdn.markslides.ai/users/1280/images/slW2hqyg-ITgdy-EFQSTR)



## Using Graphs for Analysis

![Figure 3: Using filters in graphs to identify traffic patterns](https://cdn.markslides.ai/users/1280/images/G4E9ffWZGQ8xBpe8Bc3o9)



## Understanding Network Traffic Flows

* How packets travel from one host to another
* How network devices process and modify packets
* Where to capture traffic for effective analysis



## Switching Overview

* Switches are Layer 2 devices (OSI model - data link layer)
* Forward packets based on destination MAC address
* Do not change the MAC or IP addresses in packets




![Figure 4: Switches do not alter the MAC or IP address in a packet](https://cdn.markslides.ai/users/1280/images/IyReLWqgzXbWid8k0imcj)



## Routing Overview

* Routers forward packets based on destination IP address
* Strip off MAC header, examine IP header
* Decrement Time to Live value
* Create and apply new MAC header before forwarding



![Figure 5: Routers change the destination MAC address](https://cdn.markslides.ai/users/1280/images/b_RWX_TLzhSonCJL5qiQY)



## Proxy, Firewall and NAT/PAT Overview

* Firewalls examine traffic and allow/disallow based on rules
* NAT systems alter IP addresses to hide client's private IP address
* PAT systems also alter port information
* 


![Figure 6: The firewall uses NAT to hide the true source IP address](https://cdn.markslides.ai/users/1280/images/VW1W1cy0oopn2NPt-_xJE)



## Other Technologies that Affect Packets

* VLAN tagging (802.1Q) adds identification to packets
* Creates virtual networks in a switched environment
* Multiprotocol Label Switching (MPLS) creates virtual links



![Figure 7: VLAN tags separate virtual networks](https://cdn.markslides.ai/users/1280/images/D8r5RNKNV-KT3GhV7AEc6)



## Capturing and Analyzing Traffic

* Install Wireshark
* Start capturing on your network adapter
* Browse to a website
* Stop the capture and analyze
  


![Figure 8: The client makes a GET request for the main page](https://cdn.markslides.ai/users/1280/images/slW2hqyg-ITgdy-EFQSTR)



## Troubleshooting Tasks for the Network Analyst

* Locate faulty network devices
* Identify device or software misconfigurations
* Measure high delays along a path
* Locate the point of packet loss
* Identify network errors and service refusals
* Graph queuing delays



## Security Tasks for the Network Analyst

* Perform intrusion detection
* Identify and define malicious traffic signatures
* Passively discover hosts, operating systems and services
* Log traffic for forensics examination
* Capture traffic as evidence
* Test firewall blocking
* Validate secure login and data traversal



## Optimization Tasks for the Network Analyst

* Analyzing current bandwidth usage
* Evaluating efficient use of packet sizes in data transfer applications
* Evaluating response times across a network
* Validating proper system configurations



## Application Analysis Tasks

* Analyzing application bandwidth requirements
* Identifying application protocols and ports in use
* Validating secure application data traversal



## Security Issues Related to Network Analysis

* Network analysis can be used maliciously
* Unencrypted communications may be captured
* Intruders can learn network configuration information
* Malicious programs may include network analysis capabilities



## Define Policies Regarding Network Analysis

* State who can use a network analyzer
* Define how, when, and where analyzers may be used
* For consultants: add a "Network Analysis" clause to NDAs
* Secure storage solutions for captured traffic files



## Protect Your Network against Unwanted "Sniffers"

* Deactivate unused network ports
* Deactivate ports in common areas
* Encrypt network traffic using robust methods
* Be aware that some traffic (e.g., DHCP broadcasts) remains visible



## Legal Issues of Listening to Network Traffic

* Unauthorized use of network analysis tools may be illegal
* In the U.S.: Electronic Communications and Privacy Act (ECPA)
* In the EU: Data Protection Directive
* Company policies may forbid unauthorized analysis



## Overcoming the "Needle in the Haystack Issue"

* Place the analyzer appropriately
* Apply capture filters to reduce the number of packets captured
* Apply display filters to focus on specific conversations
* Colorize the conversations
* Reassemble streams for a clear view of data
* Save subsets of the captured traffic
* Build graphs depicting overall traffic patterns



## Analysis Tasks Checklist

* Find the top talkers on the network
* Identify the protocols and applications in use
* Determine average packets/bytes per second rate
* List all hosts communicating
* Learn packet lengths used by applications
* Recognize common connection problems
* Locate misconfigured hosts
* Detect network or host congestion
* Graph application throughput
* Identify applications that do not encrypt traffic



## Walk-Through: Troubleshooting Session 1

### Step 1: Plan
* Discuss the situation with IT staff
* Identify the best place to capture traffic
* Set up Wireshark for capture

### Step 2: Capture
* Begin capturing without filters
* Watch for anomalies during capture



## Walk-Through: Troubleshooting Session 2


### Step 3: Analyze
* Isolate conversations of interest
* Examine TCP connections and handshakes
* Create IO Graphs to visualize patterns
* Examine Expert Infos for problems
* Identify where packet loss occurs



## Walk-Through: Troubleshooting Session 3

### Step 4: Repeat
* Capture at different network points
* Apply targeted filters
* Compare results to identify issues



## Walk-Through: Security Scenario 1

### Step 1: Plan
* Proper evidence handling
* Capture close to suspect host
* Use unobtrusive methods (taps, stealth mode)

### Step 2: Capture
* Capture all traffic to/from suspect



## Walk-Through: Security Scenario 2

### Step 3: Analyze
* Look for unusual connections or protocols
* Follow TCP streams to examine content
* Identify command patterns (e.g., IRC)
* Collect evidence for remediation



## Walk-Through: Security Scenario 3

### Step 4: Secure
* Isolate infected hosts
* Block malicious connections
* Apply patches to vulnerable systems

### Step 5: Document
* Document findings and procedures
* Educate users and IT staff



## Practice Exercise

Download and analyze trace files:
* gen-googlemaps.pcapng
* http-chappellu2011.pcapng
* http-wiresharkdownload.pcapng
* http-wiresharkdownload-slow.pcapng
* icmp-ping-basic.pcapng
* sec-nessus.pcapng
* telnet.pcapng
* vlan-general.pcapng



## Review Questions

1. What is the purpose of network analysis?

2. Name at least three troubleshooting tasks that can be performed using network analysis.

3. Why is network analysis considered a security risk by some companies?



## Summary

* Network analysis provides insight into communications
* Understanding traffic flows is key to effective analysis
* Wireshark is a powerful tool for capturing and analyzing packets
* Network analysis can identify performance issues and security breaches
* Proper policies and security measures are essential


# Chapter 2: Introduction to Wireshark
## The World's Most Popular Network Protocol Analyzer





![Wireshark Logo](https://www.wireshark.org/assets/theme-2015/images/wireshark_logo.png)

- Free and open-source packet analyzer
- Used for network troubleshooting, analysis, software development, and education
- Cross-platform compatibility (Windows, Mac, Linux)



# Wireshark History

- Originally created by Gerald Combs in 1997
- First released as "Ethereal" on July 14, 1998
- Renamed to "Wireshark" in June 2006 due to trademark issues
- CACE Technologies (Wireshark's parent company) was purchased by Riverbed Technology in 2010
- Maintained by an active community of developers from all over the world
- Currently contains over 2.2 million lines of code worth ~$90 million in development costs



<img src="https://cdn.markslides.ai/users/1280/images/U1VypMIN_SKUYT8eb_74r" alt="Wireshark Architecture Overview" width="800px" />




# Wireshark Architecture 

Key components:
- **Capture Libraries**: WinPcap (Windows), libpcap (Unix/Linux), AirPcap (Wireless)
- **Wiretap Library**: Reads various capture file formats
- **Core Engine**: Processes packets and manages program flow
- **Dissectors**: Decode protocols and provide field interpretations
- **User Interface**: Built using GTK+ for cross-platform compatibility



# Wireshark GUI Elements

![Wireshark GUI Elements](https://cdn.markslides.ai/users/1280/images/Id4MzpD2Q16ER6-erOMQV)



## Main Display Elements
- **Packet List Pane**: Shows summary of each packet
- **Packet Details Pane**: Shows decoded fields for selected packet
- **Packet Bytes Pane**: Shows raw data of selected packet

## Control Elements
- **Menu Bar**: Access to all features and settings
- **Main Toolbar**: Quick access to common functions
- **Filter Toolbar**: Apply display filters
- **Status Bar**: Shows file, packet info, and profile



# Packet Processing Workflow

![Wireshark Packet Processing Workflow](https://cdn.markslides.ai/users/1280/images/ikl5yT4eeLpzNngFnqG4A)




## Dissection Process
1. Each packet is processed through a chain of protocol dissectors
2. Ethernet dissector examines frame header, identifies IP protocol
3. IP dissector examines IP header, identifies TCP protocol
4. TCP dissector examines TCP header, identifies HTTP protocol
5. HTTP dissector examines HTTP content
6. Each level of encapsulation is revealed in the packet details pane



# Capture Process

## Wired Network Capture
- Uses libpcap (Unix/Linux) or WinPcap (Windows)
- Captures on available network interfaces
- Places the interface in promiscuous mode to see all traffic

## Wireless Network Capture
- Uses AirPcap adapters for Windows
- Special considerations for 802.11 frames
- Can view management, control, and data frames



# Main Menu Items

## File Menu
- Open/Close/Save capture files
- Merge trace files
- Export packets/objects
- Print packets

## Edit Menu
- Find packets
- Mark/Ignore packets
- Set time references
- Packet comments
- Configuration profiles
- Preferences

## View Menu
- Time display format
- Name resolution
- Colorization



# Filter Types

## Capture Filters
- Applied before packets are captured
- Reduces the volume of data captured
- Uses Berkeley Packet Filter (BPF) syntax
- Example: `host 192.168.1.1 and port 80`

## Display Filters
- Applied to packets already captured
- More powerful and flexible than capture filters
- Uses Wireshark-specific syntax
- Example: `ip.addr == 192.168.1.1 && tcp.port == 80`



# Wireshark Tools and Features

## Statistics
- Protocol hierarchy
- Conversations and endpoints
- IO graphs
- Service response time

## Telephony
- VoIP calls analysis
- RTP streams
- Flow graphs

## Expert Information
- Automatically identifies potential issues
- Categorizes by severity (errors, warnings, notes, chats)
- Helps troubleshoot network problems quickly



# Trace Files and Formats

## Supported Trace Formats
- Wireshark native format (.pcapng)
- Traditional libpcap format (.pcap)
- Microsoft Network Monitor (.cap)
- Various commercial formats (Sniffer, Observer, etc.)

## pcapng Format Benefits
- Can store interface information
- Supports multiple interfaces in one file
- Allows packet comments and annotations
- Preserves name resolution information



# Learning Resources

## Online Resources
- [www.wireshark.org](https://www.wireshark.org) - Main Wireshark home page
- [wiki.wireshark.org](https://wiki.wireshark.org) - Wiki with sample captures
- [ask.wireshark.org](https://ask.wireshark.org) - Q&A forum
- [sharkfest.wireshark.org](https://sharkfest.wireshark.org) - Wireshark conference

## Books and Training
- Wireshark Network Analysis by Laura Chappell
- Practical Packet Analysis by Chris Sanders
- Wireshark Certified Network Analyst program



# Practical Workshop

## Lab Exercises
1. Install Wireshark and capture basic network traffic
2. Apply filters to isolate HTTP traffic
3. Follow TCP streams to analyze web browsing sessions
4. Identify network latency issues using time display formats
5. Use coloring rules to highlight important packets
6. Create basic IO graphs to visualize network activity



# Questions?

![Wireshark Logo](https://www.wireshark.org/assets/theme-2015/images/wireshark_logo.png)

Thank you!



# References
- Wireshark User's Guide: [www.wireshark.org/docs/wsug_html_chunked/](https://www.wireshark.org/docs/wsug_html_chunked/)
- Chapter 2 of the Wireshark Book
- Wireshark Wiki: [wiki.wireshark.org](https://wiki.wireshark.org)



# Chapter 3: Capture 



## Overview
- Understanding capture locations
- Switched network capture methods
- Routed network considerations
- Wireless network capture
- Remote capture techniques
- Optimizing capture performance



## Know Where to Tap Into the Network

- Place analyzer close to the complaining client
- Measure round trip time & identify packet loss
- Move analyzer toward server if needed to locate problem
  


![Basic network diagram showing client/server communication](https://cdn.markslides.ai/users/1280/images/sz9o_3N07MA7fizeziZxk)




## Running Wireshark Locally

- Simple solution: Run Wireshark directly on target system
- **Pros**: 
  - No additional hardware needed
  - Captures exactly what the host sees
- **Cons**:
  - Security concerns with installation
  - May affect system performance
  - Not always feasible on production servers



## Portable Wireshark

- Install on PortableApps-enabled device
- Run without installing on host
- Note: Host still requires WinPcap installation
- Great for field troubleshooting



![Portable Wireshark](https://cdn.markslides.ai/users/1280/images/ifMo5PgxPhACDeq7_kkv0)




## Capturing on Switched Networks

**Challenge**: Switches isolate traffic between ports

By default, connecting to a switch port shows only:
- Broadcast traffic
- Multicast traffic (if forwarded)
- Traffic to/from your MAC address
- Traffic to unknown MAC addresses



![switch isolation](https://cdn.markslides.ai/users/1280/images/Eu4QBkCcxOjHzG_RNMiNg)



## Switched Network Capture Methods

1. Hub (half-duplex only)
2. Test Access Port (TAP)  
3. Port spanning/mirroring
4. Analyzer agents
5. Install Wireshark on target



## Using a Hub (Half-Duplex Only)

- Simple but limited to half-duplex networks
- Forwards all bits to all ports
- **Warning**: Rare today; placing half-duplex hub in full-duplex environment creates mismatch
- Test before use (some "hubs" are actually switches)



![Hub monitoring](https://cdn.markslides.ai/users/1280/images/nDibE_QObxdq7GE0iKk4A)



## Test Access Ports (TAPs)

- Works on half and full-duplex networks
- Passive in-line devices
- Can forward packets with physical errors
- Does not introduce delays or alter traffic
- Should "fail open" to avoid disruption



![Network Tap](https://cdn.markslides.ai/users/1280/images/QTeTyQZmLFfUdje_8PENb)



## Types of TAPs

- **Non-Aggregating**: Separate monitor ports for each direction
- **Aggregating**: Combines bidirectional traffic to one port
- **Regenerating**: Multiple monitor ports for multiple tools
- **Link Aggregation**: Monitor multiple links simultaneously
- **Intelligent**: Can filter/timestamp packets



![Aggregating TAP](https://cdn.markslides.ai/users/1280/images/HteHL1HjG-PqQGsISH9BL)



## Port Spanning / Port Mirroring

- Configure switch to copy traffic to monitor port
- Terms: port spanning, port mirroring, port snooping
- SPAN terminology:
  - Source port/VLAN: What's being monitored
  - Destination/monitor port: Where Wireshark connects
  - Ingress/Egress traffic: Direction of monitoring





<img src="https://cdn.markslides.ai/users/1280/images/oi6q5eRC3fAEIAa78LYX7" width=800 >



## Port Spanning Configuration Example

```
# Configure port spanning on Cisco switch
monitor session 1 source interface fa4/7
monitor session 1 destination interface fa4/1

# View configured sessions
show monitor session all

# Remove a session when finished
no monitor session 1
```
## Analyzing Routed Networks


- Routers isolate traffic based on network address
- Wireshark placed on one side only sees traffic to/from that network
- Strategic placement needed based on traffic flow
- May require multiple capture points




![Routed network analysis](https://cdn.markslides.ai/users/1280/images/fl-3sXQA8fzbg-qzIVa3c)



## Analyzing Wireless Networks


1. Start with RF analysis (spectrum analyzer)
2. Place Wireshark close to complaining user
3. Examine WLAN control and management processes
4. Analyze data packets



![Wireless analysis placement](https://cdn.markslides.ai/users/1280/images/6ypLgYcwZmgZK4nbhyDeF)



## Monitor Mode vs. Promiscuous Mode

**Promiscuous Mode**:
- Captures traffic addressed to other devices on the same network
- Limited to packets of the SSID the adapter has joined

**Monitor Mode (rfmon)**:
- Captures all traffic on all SSIDs on current channel
- Not supported by WinPcap (Windows)
- Blocks normal network connectivity
- Required for complete WLAN analysis



## Dual Captures


- Two or more Wireshark systems capturing simultaneously
- Useful for finding packet loss location
- Requirements:
  - Time synchronization (NTP)
  - Consistent capture/display filters
  - Tools to merge and compare results



![Dual capture setup](https://cdn.markslides.ai/users/1280/images/Z5UKoNzn9FbFRs9zOok5U)





## Remote Capture Methods


- Remote control software
- Switch rspan capability
- Wireshark remote capture (rpcapd)
- Remote capture considerations:
  - Added network load
  - Security concerns
  - Configuration complexity
  



<img src="https://cdn.markslides.ai/users/1280/images/VrVdzITsPOIGvqhRJ4Acc" width="1000">




## File Sets and Ring Buffers

- **File Sets**: Create multiple sequentially named files
  - Based on time intervals or size limits
  - Easier to manage than single large files
  - Format: `basename_00001_YYYYMMDDHHMMSS.pcapng`

- **Ring Buffer**: Limits number of files saved
  - Prevents filling disk during long captures
  - Only keeps the most recent N files
  - Useful for "wait for problem" scenarios



## Optimizing Wireshark

**Capture Options**:
- Disable "Update List of Packets in Real Time"
- Disable name resolution
- Use file sets (50MB max file size)
- Increase buffer size

**Display Options**:
- Reduce column count
- Disable coloring rules
- Disable unnecessary protocol features



## Command-Line Capture Tools

When GUI capture is too resource-intensive:

- **Tshark**: Feature-rich but resource-heavy
- **Dumpcap**: Lightweight, efficient core capture
- **Rawshark**: Specialized binary data analysis
- **tcpdump**: Not included with Wireshark but popular

Memory comparison:
- Dumpcap: ~3.5 MB
- Tshark: ~43 MB (includes Dumpcap)



## Case Study: Dual Capture Points the Finger

- Client complained about download performance from specific server
- Captured traffic at both client and server sides
- Merged trace files showed delays in file request packets
- Moving capture point identified Router B as bottleneck
- Router had misconfigured QoS giving low priority to server traffic
- Reconfigured router solved the problem



## Review Questions

1. If you connect Wireshark directly to a switch port, what traffic can you see by default?

2. What is the difference between monitor mode and promiscuous mode?

3. What is the purpose of file sets?



## Thank You!

For more information:
- www.wireshark.org
- wiki.wireshark.org/CaptureSetup



# Chapter 4: Create and Apply Capture Filters




## Introduction to Capture Filters

- **Purpose**: Limit packets captured during live capture processes
- **Benefits**:
  - Reduces file size
  - Focuses on traffic of interest
  - Improves performance on busy networks
- **Limitation**: Cannot be applied to existing trace files
- **Warning**: Filtered packets are permanently discarded



![Capture Filter Process](https://cdn.markslides.ai/users/1280/images/UBXucJjJzJLR76RnVfUmg)




## Capture Filters vs Display Filters

| Capture Filters | Display Filters |
|-----------------|-----------------|
| Applied during capture | Applied after capture |
| Filtered packets lost forever | All packets retained |
| BPF syntax (tcpdump) | Wireshark-specific syntax |
| Less flexible | More granular and flexible |
| Applied before saving | Can be applied anytime |
| Cannot be applied to saved files | Can be applied to saved files |




![](https://cdn.markslides.ai/users/1280/images/_10IPZgw-vxoH0h6Tz3xU)





## Capture Filter Components

- **Qualifiers**:
  - **Type**: host, net, port
  - **Direction**: src, dst
  - **Protocol**: tcp, udp, icmp, ip6, etc.
- **Identifiers**: Values to filter on (IP addresses, port numbers, etc.)
- **Primitives**: Keywords that can be used in filters
- **Operators**: and, or, not
- 


![Capture Filter Syntax](https://cdn.markslides.ai/users/1280/images/upG8wltQob5nJu58hag4J)



## Common Capture Filter Examples

**Protocol Filters**:
- `tcp` - Capture only TCP packets
- `udp` - Capture only UDP packets
- `icmp` - Capture only ICMP packets
- `arp` - Capture only ARP packets

**Address Filters**:
- `host 192.168.1.10` - Traffic to/from specific IP
- `net 192.168.0.0/24` - Traffic to/from network
- `ether host 00:11:22:33:44:55` - Traffic to/from MAC




![Common Capture Filters](https://cdn.markslides.ai/users/1280/images/M6Mu0JVMOIEdeTSxNRB7G)



## Application-Specific Filters

**Web Traffic**:
- `port 80` - HTTP traffic (TCP or UDP)
- `tcp port 80` - HTTP over TCP only
- `tcp port 443` - HTTPS traffic
- `port 80 or port 443` - All web traffic

**Other Applications**:
- `port 53` - DNS traffic
- `udp port 53` - DNS queries/responses (not zone transfers)
- `tcp port 25` - SMTP mail traffic
- `port 20 or port 21` - FTP traffic



## Combining Filters with Operators

**Logical AND**:
- `tcp and port 80` - HTTP over TCP
- `host 192.168.1.10 and tcp port 80` - Web traffic to/from specific host
- `tcp port 80 and tcp[tcpflags] & tcp-syn != 0` - HTTP connection attempts

**Logical OR**:
- `tcp or udp` - All TCP or UDP traffic
- `port 80 or port 443` - HTTP or HTTPS traffic
- `host 10.0.0.1 or host 10.0.0.2` - Traffic to/from either host

**Logical NOT**:
- `not arp` - Everything except ARP
- `not port 53` - Everything except DNS
- `not broadcast and not multicast` - No broadcast/multicast traffic



![Advanced Capture Filters](https://cdn.markslides.ai/users/1280/images/lcrGD-3s335w3cfqPWUYt)



## TCP Flag Filters

- `tcp[tcpflags] & (tcp-syn) != 0` - TCP SYN packets (connection attempts)
- `tcp[tcpflags] & (tcp-syn|tcp-fin) != 0` - Connection setup/teardown
- `tcp[tcpflags] & (tcp-syn) != 0 and tcp[tcpflags] & (tcp-ack) == 0` - SYN packets only (no ACK)

**Real-world example**:
```
tcp[tcpflags] & (tcp-syn|tcp-fin) != 0 and not src and dst net localnet
```
Captures the start and end packets of each TCP conversation with non-local hosts.



## Byte Value Filtering

Format: `proto[expr:size] [operator] [value]`

- `tcp[2:2] > 1024` - TCP traffic to ports > 1024
- `tcp[13] & 0x02 != 0` - TCP SYN packets (alternative syntax)
- `ip[8] < 10` - IP packets with TTL < 10

**Example - TCP Window Size**:
```
tcp[14:2] = 0xffff
```
Filters for TCP packets with window size of 65,535



## Filtering Based on MAC Addresses

**Best Practices**:
- Use MAC address filters when:
  - You have dual-stack systems (IPv4/IPv6)
  - IP addresses change frequently
  - You want to include non-IP traffic (ARP, etc.)

**Examples**:
- `ether host 00:11:22:33:44:55` - All traffic to/from specific MAC
- `not ether host 00:11:22:33:44:55` - Exclude specific host's traffic
- `ether broadcast` - Ethernet broadcast traffic only



## Capture Filter Management

- Saved in `cfilters` file
- Default location: Wireshark program directory
- Can be edited manually to add categories/organization
- Can be shared between systems by copying file
- Wireshark 1.8+ supports different filters per interface

**Best Practices**:
- Create a custom filter set for different tasks
- Use profiles to organize filter sets
- Back up your filter sets regularly



## Case Study: Kerberos UDP to TCP Issue

**Problem**: 
- Users migrated from NT to Active Directory unable to login
- Error: "The RPC Server is unavailable"

**Analysis with Wireshark**:
- Used filter: `not port 3389` (exclude RDP traffic)
- Discovered Kerberos error: "KRB5KRB_ERR_RESPONSE_TOO_BIG"
- Server needed to switch from UDP to TCP for Kerberos
- Firewall was only allowing UDP port 88, not TCP port 88

**Resolution**:
- Updated firewall to allow TCP port 88
- Demonstrates importance of network analysis for troubleshooting



![Kerberos](https://cdn.markslides.ai/users/1280/images/j_EX5dsDWawfxj6FVwPWJ)



## Best Practices for Using Capture Filters

1. **Use Sparingly**: 
   - Only when absolutely necessary to reduce capture size
   - Prefer display filters when possible (no data loss)

2. **Start Broad, Then Narrow**:
   - Begin with minimal filtering
   - Refine as you understand the traffic pattern

3. **Document Your Filters**:
   - Save useful filters with descriptive names
   - Add comments to complex filters

4. **Test Before Using in Production**:
   - Verify filter works as expected on test traffic
   - Ensure you're not filtering out important related traffic



## Practice Exercise

1. Create "My MAC" filter based on your hardware address
2. Capture traffic for 5 minutes without keyboard activity
3. Browse to www.wireshark.org using your filter
4. Examine automated background traffic vs. user-initiated traffic
5. Replace your capture filter file with sample from book website
6. Compare http-espn trace files from different years



## Review Questions

1. What is the difference between capture filters and display filters?
2. What format is used by Wireshark's capture filters?
3. What is the purpose of each of these capture filters?
   - `ether dst 08:3f:3d:03:32:03`
   - `gateway rtrmain01`
   - `host www.espn.com`



## Additional Resources

- [tcpdump Man Page](http://www.tcpdump.org/tcpdump_man.html)
- [Wireshark Display Filter Reference](https://www.wireshark.org/docs/dfref/)
- [Wireshark Wiki - CaptureFilters](https://wiki.wireshark.org/CaptureFilters)
- Book website: [www.wiresharkbook.com](http://www.wiresharkbook.com) for sample files


# Chapter 5: Define Global and Personal Preferences



## Learning Objectives

- Identify Wireshark configuration folder locations
- Differentiate between Global and Personal configuration settings
- Configure User Interface settings for optimal workflow
- Configure Capture preferences
- Customize name resolution settings
- Apply protocol-specific settings
- Create and use Filter Expressions





## Configuration Folders



- **Global Configuration Folder**: Contains default settings for all users
  - Default capture filters, display filters, coloring rules, etc.
  - Location: Help → About Wireshark → Folders

- **Personal Configuration Folder**: Contains your customized settings
  - Overrides global settings
  - Location: Help → About Wireshark → Folders


<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:90% height:auto](https://cdn.markslides.ai/users/1280/images/iNBNRSRnxzday77Ljo50P)



## Global Configuration Files

- **cfilters** - default capture filters
- **dfilters** - default display filters
- **colorfilters** - default coloring rules
- **manuf** - default OUI list (MAC address vendor mapping)
- **services** - default port list
- **smi-modules** - default MIB modules for SNMP

*You can manually edit these files to customize Wireshark's behavior*



## Personal vs. Global Configuration


- Personal configurations override global settings
- Created when you customize settings
- Stored in your personal configuration folder
- Can be shared between users by copying files
- Preserved during Wireshark updates


<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/pcrM8ri8vtciFj3wrDRAm)



## User Interface Customization

Key settings to adjust:

- "Open Recent" max list entries (increase to 30)
- Filter display max list entries (increase to 30)
- Pane layout (side-by-side vs. stacked)
- Custom window title
- Default time display format

*These settings make Wireshark more efficient for your workflow*



## Customizing Columns


- Add/remove columns in Packet List pane
- Reorder columns by dragging
- Create custom columns from packet fields
  - Right-click field → Apply as Column
  - Edit → Preferences → Columns → Add

*Custom columns help visualize important data at a glance*



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/0m6BsQN8fpNjyLLayGZyb)



## Capture Preferences

Key capture settings:

- Select default interface
- Enable/disable promiscuous mode
- Configure pcap-ng as default file format
- Toggle "Update list of packets in real time"
- Toggle "Automatically scroll during capture"

*Proper capture settings prevent packet loss on busy networks*



## Trace File Format: pcap-ng


- Next generation capture file format
- Advantages:
  - Extensibility
  - Portability 
  - Merge/append data
  - Packet annotations
  - Multiple interfaces per file

*Enable in Edit → Preferences → Capture*




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/SNMttd66qSnk5KcBauAvn)





## Name Resolution Options


Three main types:

1. **MAC name resolution** (hardware)
   - OUI lookup using manuf file
   - Create custom ethers file

2. **Network name resolution** (IP addresses)
   - Uses hosts file or DNS PTR queries
   - Can significantly impact performance!

3. **Transport name resolution** (port numbers)
   - Uses services file



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/CZYTQsX_pIh1-gxn2I4Y8)





## MAC Name Resolution

- Resolves first 3 bytes of MAC address to manufacturer
- Uses manuf file in Global Configuration directory
- Create custom ethers file for local device names:
  ```
  00:11:22:33:44:55 RouterA
  AA:BB:CC:DD:EE:FF PrinterMain
  ```
- Performance impact: Minimal



## Network Name Resolution (IP)

- Uses hosts file lookup or DNS PTR queries
- Can severely impact performance!
- Create custom hosts file in personal directory:
  ```
  10.1.0.1 rtr01
  10.1.0.99 server04
  192.168.1.10 Fred-PC
  ```
- Manual resolution: Right-click IP address → Resolve Name



## GeoIP Configuration

- Plot IP addresses on world map
- Download MaxMind databases:
  - GeoLiteCity.dat.gz
  - GeoIP.dat.gz
  - GeoIPASNum.dat.gz
- Configure database directory in preferences
- View in Statistics → Endpoints → IPv4 → Map







<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/kA-HhPYqs1fHCUmM-8Ed3)





## Filter Expressions



- Quick access buttons for common display filters
- Create in Edit → Preferences → Filter Expressions
- Or: Create filter → Click Save button
- Appears in display filter area as buttons
- Great for frequent troubleshooting tasks!



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:90% height:auto](https://cdn.markslides.ai/users/1280/images/VGbOaqixpjiIzJzij3CUb)



## Protocol Preferences

Customizable protocol dissectors:

- TCP: Enable sequence analysis, relative sequence numbers
- HTTP: Add non-standard ports
- SSL: Configure decryption keys
- ARP: Detect duplicate IPs, ARP storms
- RTP: Decode outside conversations
- And many more...



## TCP Preferences

Important settings:
- Disable checksum validation (for offloaded checksums)
- Allow subdissector to reassemble TCP streams
- Analyze TCP sequence numbers
- Use relative sequence numbers
- Track number of bytes in flight




## Quick Protocol Settings

- Right-click protocol in Packet Details pane
- Select "Protocol Preferences"
- Toggle settings on/off quickly
- Changes are permanent (saved to personal preferences)




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/ENOm0WOJkBL9f5oRnbhVN)



## Practice Exercise

- Locate Global and Personal Configuration folders
- Set "Open Recent" max list entries to 30
- Add "DSCP" column after Time column
- Create custom column for TCP Window Size
- Enable GeoIP lookups
- Create 2-3 Filter Expression buttons for common filters
- Experiment with turning TCP reassembly on/off
- Open several trace files to evaluate your customized display



## Review Questions

1. How does Wireshark's network name resolution use DNS to associate an IP address with a host name?

2. Why would you want to alter Wireshark's preference settings?

3. What is the difference between a global preference and a personal preference setting?



## Answers to Review Questions & Additional Resources

**Q5.1:** Wireshark's network name resolution uses DNS PTR (Pointer) queries to resolve IP addresses to hostnames. It first checks local hosts file, then sends PTR queries if needed.

**Q5.2:** Customizing preferences improves efficiency, reduces packet drops, provides better visualization, and adapts to specific network environments.

**Q5.3:** Global preferences apply to all users and are stored in the Global Configuration folder. Personal preferences override globals and are stored in your Personal Configuration folder.

**Additional Resources:**
- Wireshark User's Guide: www.wireshark.org/docs/wsug_html/#ChCustGUIPrefPage
- Wireshark Wiki: wiki.wireshark.org
- MaxMind GeoIP: geolite.maxmind.com

# Chapter 6: Colorize Traffic




## Introduction to Colorization

* Colorization helps to **locate and highlight packets of interest**
* Effective for identifying:
  * Error conditions
  * Network scan evidence
  * Breached hosts
  * And more...
* Wireshark contains **predefined coloring rules** in the default coloring rules file
  * Stored in Global Configurations directory
  * Edits saved in Personal Configurations directory
  * Profile-specific rules saved in profile directory



## Predefined Coloring Rules

* **Bad TCP**: TCP retransmissions, out-of-order packets, duplicate ACKs
* **HSRP State Change**: Hot Standby Router Protocol state changes
* **Spanning Tree Topology Change**: STP topology changes
* **OSPF State Change**: Routing state changes
* **ICMP errors**: Destination unreachable, Source Quench, etc.
* **ARP**: All ARP traffic
* **ICMP**: All ICMP traffic (except errors covered above)
* **TCP RST**: Connection refusal or termination packets
* **Low TTL**: Packets with IP header Time-to-Live < 5



## Coloring Rule Components


* **Name**: Descriptive identifier
* **String**: Display filter format expression
* **Foreground color**: Text color
* **Background color**: Background color
* Coloring rules are processed **in order from top to bottom**
  * First matching rule determines packet color
 

<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/spdYWi3Ui79Ne-22gMPBE)



## Disable Colorization

* **Disable all coloring**: 
  * Click "Colorize Packet List" button on Main Toolbar
  * Select View > Colorize Packet List (toggle)

* **Disable a single rule**:
  * Click Coloring Rules button on Main Toolbar
  * Select rule to disable
  * Click "Disable" button (rule remains in list but doesn't apply)

* **Delete a rule**:
  * Select rule in Coloring Rules list
  * Click "Delete" button (removes rule completely)



## Checksum Errors and Coloring

* Consider disabling "Checksum Errors" rule when:
  * TCP, UDP, IP checksum validation is enabled
  * System uses checksum offloading
* Packets captured from local system may trigger false errors
* Checksum offloading transfers checksum calculation from CPU to NIC
* Example: In http-facebook.pcapng, client 24.6.173.220 uses offloading

![Checksum Errors Example](/artifacts/checksum-errors-diagram)



## Share and Manage Coloring Rules

* **Export rules**:
  * Click "Export" in Coloring Rules window
  * Default filename: colorfilters
  * Share with other users

* **Import rules**:
  * Click "Import" in Coloring Rules window
  * Select colorfilters file

* **Alternative sharing**:
  * Copy the text file directly between systems
  * No need to use Import/Export feature



## Identify Why a Packet is Colored

* Examine **Frame section** in Packet Details pane
* Expand Frame details to view:
  * [Coloring Rule Name]
  * [Coloring Rule String]
* Filter on coloring rules:
  * Right-click on coloring rule name or string
  * Create display filter based on these elements



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/bTFpx1JkCiIJF1dhfdZTK)





## Creating Custom Coloring Rules

### Example: "Butt Ugly" HTTP Errors Rule

1. Select packet with field of interest
2. Right-click field > Colorize with Filter > New Coloring Rule
3. Name the rule (e.g., "T-HTTP Errors")
4. Enter filter string (e.g., `http.response.code > 399`)
5. Set background/foreground colors
6. Move rule to appropriate position in list



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/5sgANTFr_4NjBhUMKRmGP)



## Color Conversations

* **Temporary coloring** for specific conversations
* 10 different color options
* Apply by:
  * Right-click packet in Packet List
  * Select Colorize Conversation
  * Choose conversation protocol
  * Select color (1-10)
* Coloring persists when reopening file
* Remove by:
  * Select View > Reset Coloring 1-10
  * Restart Wireshark

![Conversation Colorization Menu](/artifacts/stream-coloring-diagram)



## Marking Packets of Interest

* **Temporary identification** of important packets
* Apply by:
  * Right-click packet > Mark Packet (toggle)
  * Keyboard shortcut: Ctrl+M
* Navigate marked packets:
  * Shift+Ctrl+N: Find next marked packet
  * Shift+Ctrl+B: Find previous marked packet
* Default: Black background, white foreground
* Can be changed: Edit > Preferences > Colors



## Saving Marked Packets

* Allows saving **non-contiguous packets**
* Steps:
  1. Mark packets of interest
  2. Select File > Export Specified Packets
  3. Check "Marked packets" option
  4. Enter filename and save
* Clear marking:
  * Edit > Unmark All Displayed Packets
  * Click Reload button on Main Toolbar
* Invert marking:
  * Edit > Toggle Marking of All Displayed Packets



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/qF-sx3D-l3gghBzhSMFH1)





## Stream Reassembly Coloring

* Used when following streams:
  * Follow TCP stream
  * Follow UDP stream
  * Follow SSL stream
* Default colors:
  * **Client** (initiator): Light red background, red font
  * **Server** (responder): Light blue background, blue font
* Change via:
  * Edit > Preferences > Colors
  * Modify "Sample TCP stream client/server text"



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/TtwkOwYF8SYJ_H-mRw5Fb)



## Case Study: SharePoint Connections

* SharePoint uses numerous connections and port numbers
* Colorizing different connections helps:
  * Distinguish between various connections
  * Identify which connections established first
  * Spot problematic connections
* Process:
  1. Systematically colorize different conversations
  2. Filter out non-problematic conversations
  3. Focus on remaining problematic connections



## Summary

* Colorization distinguishes conversations, packet types, and unusual traffic
* Predefined rules in colorfilters file (Global Preferences directory)
* Custom rules saved in Personal Configuration folder
* Coloring rule application:
  * Automatic if coloring enabled
  * Processed in order (top to bottom)
* Temporary colorization:
  * Conversation coloring (10 options)
  * Marked packets
* Packets can be saved based on marking (not other colorization)
* Stream reassembly uses client/server coloring (customizable)



## Practice Exercises

* **Deal with Checksum Offloading**:
  * Examine checksum errors with ip-checksum-invalid.pcapng
  * Disable Checksum Errors coloring rule
  * Observe result

* **Separate Conversations**:
  * Use http-aol.pcapng (17 TCP connections)
  * Colorize different TCP conversations
  * Observe how colors persist across Wireshark sessions

* **Mark and Save Packets**:
  * Filter for HTTP GET commands
  * Mark specific connection packets
  * Export marked packets to new trace file

* **Create FTP Password Coloring Rule**:
  * Create rule to highlight FTP PASS commands
  * Test with ftp-putfile.pcapng



## Review Questions

1. What is the difference between marking packets and applying a coloring rule?

2. How do you share coloring rules with other Wireshark users?

3. You have created a coloring rule for ICMP Type 3 traffic. How can you ensure that ICMP Type 3 packets are colored with this new rule?



## Answers to Review Questions

**Q6.1**: What is the difference between marking packets and applying a coloring rule?
- Marking is temporary and used to identify specific packets of interest
- Coloring rules are rule-based and automatically applied to all matching packets
- Marked packets can be saved as a subset; coloring alone cannot be used for saving

**Q6.2**: How do you share coloring rules with other Wireshark users?
- Export them using the Export button in the Coloring Rules window
- Copy the colorfilters file directly to another system
- Import using the Import button in the Coloring Rules window

**Q6.3**: How can you ensure ICMP Type 3 packets are colored with your new rule?
- Move the rule higher in the coloring rules list (rules are processed top to bottom)
- Make sure it appears before any other rules that might match the same packets



## Additional Resources

* **Sample Trace Files**:
  * Available at www.wiresharkbook.com
  * Includes examples for all concepts covered

* **Wireshark Documentation**:
  * https://www.wireshark.org/docs/

* **Wireshark Wiki**:
  * https://wiki.wireshark.org/

* **Wireshark Forums**:
  * https://ask.wireshark.org/


# Chapter 7: Time Values and Summaries




## Learning Objectives

By the end of this chapter, you will be able to:
- Use time values to identify network problems
- Choose the ideal time display format for different troubleshooting scenarios
- Create additional time columns for comparative analysis
- Set time references to measure specific transaction times
- Identify client, server, and path delays using time analysis
- Use summaries to understand traffic characteristics
- Compare performance metrics across multiple trace files



## Time Values: Critical for Troubleshooting

- Slow network performance often manifests as **time delays**
- Time column analysis helps identify:
  - High latency points
  - Server processing delays
  - Client response delays
  - Protocol inefficiencies

> 💡 **The Time column is your best friend when troubleshooting performance issues**



## How Wireshark Measures Packet Time

- Timestamps come from libpcap/WinPcap library
- Operating system kernel provides timestamps to the library
- pcap file headers store timestamps for each packet:
  - 4-byte value: seconds since Jan 1, 1970 00:00:00 UTC
  - 4-byte value: microseconds since that point
- pcap files: microsecond resolution
- pcap-ng files: nanosecond resolution possible (with special hardware)



## Time Display Formats

Eight different time display formats available:


Set via: **View > Time Display Format**





## Time Display Format Options (1/3)

- **Date and Time of Day / Time of Day**
  - Shows local time of capturing system
  - Good for correlating with other system logs
  - Can be misleading if system time was incorrect

- **Seconds since Epoch**
  - Time since January 1, 1970 (UNIX time)
  - Useful for scripting and cross-system comparisons



## Time Display Format Options (2/3)

- **Seconds since Beginning of Capture** (DEFAULT)
  - First packet = 0
  - All other packets measured relative to first packet
  - Ideal for single transactions (website load, file download)

- **Seconds since Previous Captured Packet** (Delta Time)
  - Time between consecutive packets in capture
  - Includes filtered-out packets in calculation



## Time Display Format Options (3/3)

- **Seconds since Previous Displayed Packet**
  - Time between consecutive displayed packets
  - Best for analyzing filtered conversations
  - Most useful for finding delays in specific traffic

- **UTC Date and Time of Day / UTC Time of Day**
  - Based on Coordinated Universal Time
  - Helpful for cross-timezone analysis



## Packet Time Analysis: Key Concept

![Wireshark Time Analysis Visualization](time-values-diagrams)



## Delta Time Example


<!-- _header: '' -->
<!-- _footer: '' -->

![bg right width:85% height:auto](https://cdn.markslides.ai/users/1280/images/lavXqDi6XT-O43y3v92LY)


**Key difference:** "Previous Displayed" only counts visible packets



## Timestamp Considerations

- **Accuracy varies** by capturing system
- USB adapters often have poor timestamp accuracy
- Resolution levels:
  - Milliseconds: .000
  - Microseconds: .000000
  - Nanoseconds: .000000000 (special hardware required)
- Trace files from other tools may have limited resolution
- For best timestamp accuracy: **Use NTP to synchronize time**



## Time Zones and Trace Files


<!-- _header: '' -->
<!-- _footer: '' -->

![bg right width:100% height:auto](https://cdn.markslides.ai/users/1280/images/5An0QE64IWZ_GARaIZt7L)


When sharing trace files across time zones:
- Capturing system's timezone offset saved in file
- Same trace file shows different times in different zones
- Focus on **relative timing** for performance analysis



## Identifying Delays with Time Values

1. Set Time column to **Seconds since Previous Displayed Packet**
2. Sort the Time column to identify large gaps
3. Focus analysis on packets surrounding delays





## Creating Additional Time Columns

Multiple time views simultaneously:
1. Edit > Preferences > Columns > Add 
2. Or: Expand Frame header, right-click time field, "Apply as Column"

Available time columns:
- Absolute date and time
- Absolute time
- Delta time (conversation)
- Delta time displayed
- Relative time
- Relative time (conversation)
- Time (format as specified)



## Time Reference: Measure Specific Transactions



- Right-click packet > **Set Time Reference (toggle)**
- Selected packet becomes time zero (00:00:00)
- All subsequent packets show time since reference
- Multiple reference points possible
- Perfect for measuring:
  - Website load times
  - Transaction durations
  - Recovery periods


<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:85% height:auto](https://cdn.markslides.ai/users/1280/images/55BHdNNLszxr5pNQG0-Gz)





## Analyzing Three Types of Delays



<!-- _header: '' -->
<!-- _footer: '' -->

![bg right width:100% height:auto](https://cdn.markslides.ai/users/1280/images/Squ5bHK0PmNjmPcrdXOgU)

1. **End-to-End Path Delays**
2. **Server Processing Delays**
3. **Client Response Delays**



## End-to-End Path Delays

- Measured by examining SYN to SYN/ACK time
- Indicates **network latency** (round-trip time)
- Common causes:
  - Physical distance
  - Congested links
  - Routing inefficiencies
  - Slow interconnecting devices

→ Look at time between packets 1 and 2 in TCP handshake




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:70% height:auto](https://cdn.markslides.ai/users/1280/images/NS4xlZOMIIUVHEY7azkqs)



## Server Processing Delays

- Measured by examining time between:
  - Receiving request (ACK) and sending response (data)
- Common causes:
  - Overloaded server
  - Insufficient server resources
  - Application processing time
  - Database query time

→ Look at time between packets 5 and 6 in example



## Client Processing Delays

- Measured by examining time before client makes next request
- Common causes:
  - Insufficient client resources
  - Application processing time
  - User interaction delays
  - Disk I/O bottlenecks

→ Look at time between packets 3 and 4 in example



## Summary Statistics

View Statistics > Summary for basic information:
- File format and metadata
- Capture duration
- Packet counts and rates
- Byte totals and rates
- Average packet sizes

Invaluable for comparing performance scenarios!



## Comparing Traffic Types in Summary

Compare up to three traffic types:
- All captured packets
- All displayed packets (filtered)
- All marked packets



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:85% height:auto](https://cdn.markslides.ai/users/1280/images/4UNNaBHgQyGn0lIZIzc6K)




## Comparing Multiple Trace Files



1. Open multiple instances of Wireshark
2. Load different trace files
3. Open Summary in each instance
4. Compare side-by-side








## Case Study: Delayed ACKs

Problem:
- Extremely slow printing to LPD server
- 100 Mbps Ethernet connection
- Slower than 56 Kbps dialup

Analysis:
- Time column revealed **frequent ~200ms delays**
- Sorting by delta time showed clear pattern
- IO Graphs showed "hurry up and wait" pattern

Root cause:
- Microsoft LPR client implementation issue
- Fixed by using alternative print protocols



## Chapter Summary

- Time column analysis is crucial for performance troubleshooting
- Different time formats serve different analysis needs
- TCP handshakes provide snapshots of network latency
- Three main delay sources:
  - Network path
  - Server processing
  - Client processing
- Summary windows help compare performance metrics
- Time references help measure specific transactions
- Combining time analysis techniques leads to faster problem resolution



## Practice Exercise

1. Open dns-slow.pcapng
   - Measure time between DNS queries and responses
   - Set time references to measure specific intervals

2. Open http-download-good.pcapng
   - Find path latency from TCP handshake
   - Sort Time column to find largest delays
   - Determine what happened around major delays

3. Compare various trace files:
   - dns-slow.pcapng
   - http-download2011.pcapng
   - http-download-bad.pcapng
   - http-download-good.pcapng
   - http-slowboat.pcapng



## Review Questions

Q7.1: How can the time setting be used to identify the cause of network performance problems?

Q7.2: You have opened a trace file sent to you from another company. The timestamp only shows millisecond resolution. Why? Can you improve the timestamp resolution of the trace file?

Q7.3: You have opened a trace file that contains 5 separate conversations. How can Time Reference be used to measure the time elapsed in one of the conversations?



## Answers to Review Questions

**A7.1**: Time settings help identify performance issues by revealing delays in network communications. By examining large gaps between packets (request/acknowledgement, acknowledgement/response) you can determine if poor performance is due to network latency, server processing delays, or client processing delays.

**A7.2**: The trace file was likely captured with another network analysis tool that only supports millisecond resolution. You cannot improve the resolution of an existing trace file - resolution is determined at capture time.

**A7.3**: Set a time reference on the first packet of the specific conversation you want to measure. This makes that packet time 0.000000. The last packet of that conversation will show the total elapsed time of the conversation.



## Additional Resources

- [Wireshark Wiki - Development/PcapNg](https://wiki.wireshark.org/Development/PcapNg)
- [Wireshark Wiki - Development/LibpcapFileFormat](https://wiki.wireshark.org/Development/LibpcapFileFormat)
- Microsoft Knowledge Base:
  - [KB950326](https://support.microsoft.com/kb/950326)
  - [KB823764](https://support.microsoft.com/kb/823764)
- TCP Analysis Flags - Chapter 13: Wireshark's Expert System
- ICMP Analysis - Chapter 18: Analyze ICMP Traffic
- Network Baselines - Chapter 28: Baseline "Normal" Traffic Patterns


# Chapter 8: Interpret Basic Trace File Statistics



## Learning Objectives

By the end of this chapter, students will be able to:

- Access and interpret Wireshark's various statistics features
- Identify network protocols and applications using Protocol Hierarchy
- Analyze conversations and endpoints in trace files
- Use GeoIP to visualize traffic destinations
- Evaluate packet length distributions
- Analyze specific protocol statistics (HTTP, WLAN)
- Create flow graphs to visualize traffic patterns



## Key Statistics in Wireshark

Wireshark offers a comprehensive set of statistics to analyze network traffic:

- **Protocol Hierarchies**: Identify protocols and applications by layer
- **Conversations and Endpoints**: Identify communicating hosts and traffic patterns
- **Address and Port Information**: List IP addresses and port usage
- **Packet Lengths**: Evaluate efficiency of data transfer
- **Multicast Stream**: Analyze multicast traffic patterns
- **Flow Graphs**: Visualize communication sequences
- **Protocol-specific Statistics**: HTTP, WLAN, DHCP, etc.



## Protocol Hierarchy


![bg right width:100% height:auto](https://cdn.markslides.ai/users/1280/images/u5hg34ffz6Jcyznk_qL0_)

- Displays protocols by OSI layer
- Shows packet count, bytes, Mbps, and "end packets"
- Percentage of overall traffic each protocol represents
- Can filter for specific hosts or traffic types
- Right-click to create filters, find packets, or colorize protocols



## Protocol Hierarchy Tips

- TCP preferences affect results
  - "Allow subdissector to reassemble TCP streams" setting
  - Changing this setting reveals more HTTP packets
- For security analysis:
  - Apply host filter before opening Protocol Hierarchy
  - Look for unusual protocols (IRC, TFTP, RPC)
  - Right-click on suspicious protocols to create filters



## Conversations vs. Endpoints

**Conversations**:
- Pairs of entities communicating (MAC, IP, Port)
- Useful for identifying the most active connections
- Sortable by packets, bytes, bps, duration

**Endpoints**:
- One side of a conversation
- Shows TX/RX statistics for each host
- Broadcast/multicast addresses listed as endpoints
- Can be mapped via GeoIP



## Conversations Window


![bg right width:100% height:auto](https://cdn.markslides.ai/users/1280/images/HKboOx-vDqYAOHlms0tKY)




- Separate tabs for Ethernet, IPv4, IPv6, TCP, UDP
- Sort columns to identify high-volume connections
- Useful for troubleshooting application issues
- Filter by selecting "Limit to display filter"



## Endpoints and GeoIP Mapping

![bg right width:100% height:auto](https://cdn.markslides.ai/users/1280/images/HHQ7PIHmaRsBlIxyaGMPC)


- Requires GeoIP database from MaxMind
- Configure in Edit → Preferences → Name Resolution
- Map feature shows global traffic distribution
- Useful for identifying suspicious connection targets
- Supports both IPv4 and IPv6 mapping



## Packet Lengths Analysis



![bg right width:100% height:auto](https://cdn.markslides.ai/users/1280/images/tVSpZHyk6DxawJwjPL7cJ)

- Evaluates efficiency of data transfers
- Smaller packets = less efficient file transfers
- Standard Ethernet: 1518 bytes max (1460 bytes payload)
- Applications using small packets waste bandwidth
- Important for baselining application performance



## Packet Size Efficiency Example

For transferring a 500,000 byte file over TCP/IP:

**Using full 1460-byte segments:**
- 343 packets needed
- 19,894 bytes of header overhead

**Using 320-byte segments:**
- 1,563 packets needed
- 90,654 bytes of header overhead (4.5x more overhead!)

Small packet sizes often indicate:
- Small files being transferred
- MTU limitations on the path
- Poorly optimized applications



## IP Address Statistics

Two useful views:
- **IP Addresses**: Lists all source and destination IPs
- **IP Destinations**: Shows destinations with port numbers

Filterable to focus on specific:
- Addresses or subnets
- Protocols or applications
- Connection states (e.g., `tcp.flags==0x12` for SYN+ACK)



## UDP Multicast Streams


- Automatically detects multicast streams
- Shows source, destination, port information
- Displays packet rate and burst statistics
- Configurable burst measurement intervals
- Examples: OSPF, IGMP, streaming media



## Flow Graphs


- Visualizes traffic between hosts over time
- Sources and destinations in columns
- Can show all traffic, filtered traffic, or TCP flows
- Useful for identifying:
  - Connection sequences
  - Redirections
  - Delays in communication
  - Dependencies on other hosts



![bg](https://cdn.markslides.ai/users/1280/images/95FwfQ4TLDFUPSn_64tjs)




## HTTP Statistics


Three main sections:
1. **Load Distribution**: Requests by host
2. **Packet Counter**: Request types (GET/POST) and response codes
3. **HTTP Requests**: Every target server and requested file

Response codes grouped by type:
- 1xx (Informational)
- 2xx (Success)
- 3xx (Redirection)
- 4xx (Client Error)
- 5xx (Server Error)



![bg](https://cdn.markslides.ai/users/1280/images/QOCtUM7VmFtZoWpzJqJiv)






## WLAN Statistics


- Lists BSSID, channels, SSID
- Shows packet percentages
- Details management and control packet types
- Displays protection mechanisms
- Filter by channel frequency (e.g., `radiotap.channel.freq==2437`)



## Case Study: Aptimize Website Accelerator

Methodology:
1. Capture traffic with and without optimization
2. Clear browser cache between tests
3. Compare performance metrics

Results with Aptimize enabled:
- **22.9% faster** page load time
- **24.3% fewer** packets transmitted
- **17.4% fewer** bytes transferred
- **62.2% fewer** HTTP GET requests
- Average **37% improvement** in connection speed




![bg](https://cdn.markslides.ai/users/1280/images/cBavEgLm1si6KEwHsWVYw)





## Case Study: Finding VoIP Quality Issues

Methodology:
- Capture VoIP traffic (wired or wireless)
- Create I/O graph with two filters:
  - Outgoing traffic from phone
  - Incoming traffic to phone
- G.711 codec = 50 packets per second (consistent)
- Flat line at 50 pps = good quality
- Fluctuations indicate voice quality issues



## Practice Exercise

1. Download trace files from www.wiresharkbook.com
2. Open the specified files and analyze using statistics tools:
   - app-aptimize-off.pcapng
   - app-aptimize-on.pcapng
   - app-aptimize-on-fromcache.pcapng
   - arp-sweep.pcapng
   - http files (various years)
   - sec-clientdying.pcapng
   - udp-mcaststream-queued2.pcapng

3. Answer questions related to each file using appropriate statistics



## Review Questions

**Q8.1**  
How can you use the Protocol Hierarchy window to identify a breached host?

**Q8.2**  
Your trace file contains over 100 TCP connections. How can you identify the most active (bytes/second) TCP connections?

**Q8.3**  
What is the purpose of GeoIP?



## Answers to Review Questions

**A8.1**  
Apply a filter for the suspect host's IP address, then open the Protocol Hierarchy window to look for unusual protocols or applications (like IRC, TFTP, RPC) that are not normally used in your network.

**A8.2**  
Open the Conversations window, click on the TCP tab, and sort by the "Bytes/s" column to identify the most active connections by bandwidth usage.

**A8.3**  
GeoIP maps IP addresses to geographical locations on a world map, allowing analysts to visualize the global distribution of traffic. This helps identify suspicious connections to unusual locations that might indicate a security breach.



## Additional Resources

- Wireshark User's Guide: https://www.wireshark.org/docs/wsug_html/
- Wireshark Wiki: https://wiki.wireshark.org/
- GeoIP Database: https://www.maxmind.com
- Practice trace files: https://www.wiresharkbook.com
- Wireshark forums: https://ask.wireshark.org/


# Chapter 9: Create and Apply Display Filters





## Purpose of Display Filters

- **Focus on specific packets** based on defined criteria
- Filter traffic you want to see (inclusion filtering)
- Filter out unwanted traffic (exclusion filtering)

Display filters can be created using:
- Manual typing (with auto-complete)
- Saved display filters
- Expressions
- Right-click filtering
- Applying conversation/endpoint filters



## Display Filter vs. Capture Filter

- Display filters: Wireshark proprietary format
- Capture filters: Berkeley Packet Filtering (BPF) format (used by tcpdump)
- **Not interchangeable!**
- Display filters can be applied after capture
- Status bar shows filtered packet count




## Basic Display Filter Examples

```
tcp                      # Show all TCP traffic
ip                       # IPv4 traffic only
ipv6                     # IPv6 traffic only
udp                      # UDP traffic only
icmp                     # ICMP traffic only
bootp                    # BOOTP/DHCP traffic
arp                      # ARP traffic only
dns                      # DNS traffic only
```



## Field-Based Display Filters

```
http.request.method=="GET"           # HTTP GET requests
tcp.flags==0x20                      # TCP packets with ACK bit set
tcp.window_size < 1460               # TCP window size less than 1460
tcp.stream eq 1                      # All packets in TCP stream 1
icmp.type==8                         # ICMP Echo requests
dns.qry.name=="www.wireshark.org"    # DNS queries for wireshark.org
```



## Complex Display Filters

Example 1: ARP requests except from a specific MAC
```
(arp.opcode==0x0001) && !(arp.src.hw_mac==00:01:5c:22:a5:82)
```

Example 2: BOOTP/DHCP packets to/from specific IPs
```
bootp.ip.relay==73.68.136.1 && bootp.ip.your==74.31.51.150
```

Example 3: TCP ACK packets but not SYN packets
```
(tcp.flags.ack==1) && !(tcp.flags.syn==1)
```



## Auto-Complete for Display Filters

- Type a protocol followed by a period (e.g., `tcp.`)
- Wireshark shows a dropdown of available fields
- Green background = valid filter
- Yellow background = valid but potentially problematic
- Red background = invalid filter



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:60% height:auto](https://cdn.markslides.ai/users/1280/images/5W5LPRYCRqDp6gTxaTXpX)





## Saved Display Filters

- Click Filter button to manage saved filters
- Create, edit, and delete filters
- Filters saved in `dfilters` file
  - Default location: Global Configurations directory
  - Custom filters: Personal Configurations directory or profile directory



## Using Filter Expressions

- Click Expression button to use the assistant
- Helps build complex filters
- Shows available fields for protocols
- Some fields have predefined values



## Right-Click Filtering

- Fast way to create filters based on packet content
- Works in Packet List and Packet Details panes
- Two main options:
  - **Apply as Filter**: Applies filter immediately
  - **Prepare a Filter**: Creates filter but doesn't apply it






<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/2iwG9IbMo6vBmgwg_klOY)


## Filter on Conversations & Endpoints

- Right-click in Conversations window
- Select direction (A→B, A←B, or A↔B)
- Options to prepare or apply the filter
- Endpoint window similar (no direction options)



## Display Filter Operators

**Comparison Operators**
- Equal: `==` or `eq`  
- Not equal: `!=` or `ne`
- Greater than: `>` or `gt`
- Less than: `<` or `lt`
- Greater than or equal: `>=` or `ge`
- Less than or equal: `<=` or `le`

**Logical Operators**
- AND: `&&` or `and`
- OR: `||` or `or`
- NOT: `!` or `not`

**Special Operators**
- Contains: `contains`
- Matches: `matches` (for regex)



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:50% height:auto](https://cdn.markslides.ai/users/1280/images/fO0B2uClz1p1Sln7RRLBy)





## Using Parentheses for Order of Operations

The same filters with different grouping have different meanings:

```
(ip.src==192.168.0.105 and udp.port==53) or tcp.port==80
```
*DNS traffic from 192.168.0.105 plus all HTTP traffic*

```
ip.src==192.168.0.105 and (udp.port==53 or tcp.port==80)
```
*DNS or HTTP traffic, but only from 192.168.0.105*




## Filtering on Field Existence

Show packets containing specific fields (even if not in the actual packet):

```
http.cookie or http.set_cookie    # Show HTTP packets with cookies
```

Show TCP analysis issues:
```
tcp.analysis.flags && !tcp.analysis.window_update
```

Specific TCP issues:
```
tcp.analysis.lost_segment
tcp.analysis.duplicate_ack
tcp.analysis.retransmission
```



## Offset Filtering (Subset Operators)

- Filter on specific bytes within a field
- Format: `proto[offset:size]==value`
- Useful when no simpler filter is available

Examples:
```
eth.src[4:2]==22:1b    # Ethernet source ending with 22:1b
ip[14:2]==96:2c        # IP address ending with 150.44
```


<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:70% height:auto](https://cdn.markslides.ai/users/1280/images/_yMPKLd6A4zERnxJXkfMq)



## Using Regular Expressions (matches)

The `matches` operator uses Perl regular expressions:

```
# Find HTTP requests for .exe, .zip, or .jar files (case insensitive)
http matches "\.(?i)(exe|zip|jar)"

# Find email addresses in a frame
frame matches "(?i)[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z\>]{2,4}"

# Find HTTP hosts not ending with .com
http.host && !http.host matches "\.com$"
```



## Common Display Filter Mistakes

**Incorrect negation of an address filter:**

```
ip.addr != 10.2.4.1   # WRONG (yellow background)
```
*Shows packets with any address other than 10.2.4.1 in either src or dst*

```
!ip.addr == 10.2.4.1  # CORRECT
```
*Shows all packets except those with 10.2.4.1 in either src or dst*

Same applies to port filters (`tcp.port`, `udp.port`) and IPv6 filters



## Display Filter Macros

- Create shortcuts for complex filters
- Define variables with a dollar sign ($)
- Saved in `dfilters_macros` file

Example macro for multiple ports:
```
tcp.dstport==$1 || tcp.dstport==$2 || tcp.dstport==$3 || tcp.dstport==$4 || tcp.dstport==$5
```

Use as: `${5ports:5600;5603;6400;6500;6700}`



## Case Study: Using Filters & Graphs for Database Issues

Filter for successful TCP connections using the 3rd packet of TCP handshake:
```
(tcp.flags==0x10) && (tcp.seq==1) && (tcp.ack==1)
```

Steps:
1. Look for ACK bit set in TCP header (0x10)
2. TCP Sequence Number = 1
3. TCP Acknowledgment Number = 1
4. Apply to I/O Graph to identify connection spikes

Result: Server admin's test software was creating 1,000+ connections



## Case Study: The Chatty Browser

Long exclusion filter to isolate specific traffic:
```
ip.addr==192.168.0.106 && !srvloc && !dns && !ip.addr==74.6.114.56
&& !ip.addr==239.255.255.250 && !ip.addr==96.17.0.0/16 &&
!ip.addr==192.168.0.102 && !smb && !nbns && !ip.addr==
192.168.0.103 && ...
```

Discovery: Browser plugins generating excessive background traffic

Solution: Identified and removed unnecessary plugins that were constantly communicating



## Case Study: Catching Viruses and Worms

Process:
1. Establish a network traffic baseline
2. Monitor traffic for unusual patterns (ping sweeps, port scans)
3. Create display filters to isolate suspicious hosts
4. Generate lists of potentially infected workstations

Result: Faster identification and remediation of infected hosts



## Practice Exercise

Files to work with:
- app-norton-update.pcapng
- app-norton-update2.pcapng
- ftp-crack.pcapng
- http-aol.pcapng
- http-download-bad.pcapng
- http-download-exe.pcapng
- http-download-good.pcapng
- http-slow-filexfer.pcapng
- sec-nessus.pcapng

Try these filters:
- `http.response.code==404` (compare both Norton update files)
- `ftp.request.command=="USER" || ftp.request.command=="PASS"`
- `http.request.uri matches "laptop$"`
- `http.request.uri matches "&+"`
- `frame matches "MZ"`



## Review Questions

Q9.1: What syntax type is used by Wireshark display filters?

Q9.2: Why is the display filter `arp && bootp` incorrect?

Q9.3: What is the difference between Prepare a Filter and Apply as Filter?

Q9.4: What is the difference between the following filters?
```
(ip.src==192.168.0.1 and udp.port==53) or tcp.port==80
ip.src==192.168.0.1 and (udp.port==53 or tcp.port==80)
```



## Answers to Review Questions

A9.1: Wireshark display filters use Wireshark's proprietary syntax (not BPF syntax used by capture filters).

A9.2: This filter is syntactically correct but logically incorrect. A packet cannot be both an ARP packet and a BOOTP packet at the same time.

A9.3: "Prepare a Filter" creates the filter but doesn't apply it immediately, allowing further edits. "Apply as Filter" immediately applies the filter to the packet display.

A9.4: The first filter shows DNS traffic from 192.168.0.1 plus all HTTP traffic. The second filter shows only DNS or HTTP traffic from 192.168.0.1.



## Additional Resources

- Wireshark Wiki: https://wiki.wireshark.org/DisplayFilters
- Filter Reference: https://www.wireshark.org/docs/dfref/
- Regular Expression Cheat Sheet: https://regexlib.com/CheatSheet.aspx
- Sample display filters: www.wiresharkbook.com (Downloads section)
- Wireshark User's Guide: https://www.wireshark.org/docs/wsug_html_chunked/ChDisplayFilters.html


# Chapter 10: Follow Streams and Reassemble Data




## The Basics of Traffic Reassembly

* Wireshark can follow communication streams
* Reassembles communications (minus headers)
* Color-coded for easy viewing:
  * Red = client traffic (initiator)
  * Blue = server traffic
* Access via right-click in Packet List or Packet Bytes pane:
  * Follow UDP Stream
  * Follow TCP Stream
  * Follow SSL Stream




![bg right width:100% height:auto](https://cdn.markslides.ai/users/1280/images/uOE9raQ-x0lfl1FcNTJnr)



## Follow and Reassemble UDP Conversations

* Available for any traffic with UDP header
* Useful for:
  * Reassembling multicast video streams
  * Analyzing VoIP RTP streams
  * Viewing unencrypted application data
* Process:
  1. Right-click on UDP packet
  2. Select "Follow UDP Stream"
  3. View reassembled stream content
  4. Save data using "Save As" if needed




## Example: Reassembling Video Streams

* For non-encrypted video streams:
  * Reassemble data with Follow UDP Stream
  * Save with "Save As" option to appropriate video format
  * Open with compatible video player (VLC recommended)
* Filter created: `(ip.addr eq X and ip.addr eq Y) and (udp.port eq A and udp.port eq B)`
* For VoIP: Use `Telephony > VoIP Calls > Player > Decode`



## Follow and Reassemble TCP Conversations

* Useful for web sessions, FTP, and other TCP communications
* Shows commands and application headers with data
* Process:
  1. Right-click on TCP packet
  2. Select "Follow TCP Stream"
* Filter created: `tcp.stream eq x` (where x is the stream index)
* Stream index visible in TCP header details




## TCP Stream Examples

* HTTP Sessions:
  * View browser type, user-agent details
  * Examine HTTP requests and responses
  * Identify server/OS information
* Form Submissions:
  * View data sent from client to server
  * Analyze POST requests
* File Transfers:
  * Extract embedded files (images, documents)
  * Use file identifiers to determine file types



## Identify Common File Types

* Files begin with identifiers (magic numbers)
* View streams in hex dump format to locate these values

| File Type | Extension | File Identifier Value (Hex) |
|-----------|-----------|----------------------------|
| JPEG | jpg | FF D8 FF |
| PNG | png | 89 50 4E 47 0D 0A 1A 0A 00 00 00 0D 49 48 44 52 |
| ZIP | zip | 50 4B 03 04 |
| Word | doc | D0 CF 11 E0 A1 B1 1A E1 |
| Excel | xls | D0 CF 11 E0 A1 B1 1A E1 00 |
| PowerPoint | ppt | D0 CF 11 E0 A1 B1 1A E1 00 |
| PCAP | pcap | D4 C3 B2 A1 |
| PCAPNG | pcapng | 0A 0D 0D 0A |



## Reassembling FTP File Transfers

1. Locate the FTP data channel
   * Filter: `ftp.response.code==227 || ftp.request.command=="PORT"`
   * Find IP address and port in command channel
2. Right-click on data channel packet
3. Select "Follow TCP Stream"
4. Save data using "Save As" option
5. Open with appropriate application




## Follow and Reassemble SSL Conversations

* Requires SSL decryption setup first
* Configure in: `Edit > Preferences > Protocols > SSL`
* Required information:
  * IP address of host in trace
  * Port number of encrypted traffic
  * Protocol type (HTTP, SMTP, etc.)
  * Path to RSA key file
* After configuration, use "Follow SSL Stream"




## Reassembling SMB Transfers

* Don't use "Follow TCP Stream" for SMB
  * SMB's back-and-forth nature makes it inefficient
* Instead use: `File > Export Objects > SMB`
* This feature extracts files directly
* Much cleaner than manual stream reassembly




## Case Study: Unknown Hosts Identified

* Hospital IT staff believed they had 458 hosts and 7 servers
* Wireshark analysis showed over 600 devices sending ARP broadcasts
* Investigation revealed:
  * Undocumented medical equipment
  * Devices running embedded Windows XP
  * Potential security vulnerabilities
* Outcome: Customer initiated security review of embedded devices



## Summary

* Stream following strips headers and color-codes traffic
* Can reassemble UDP, TCP, and SSL streams
* SSL requires decryption configuration
* File identifiers help identify file types
* For SMB transfers, use `File > Export Objects > SMB`
* Following streams is invaluable for understanding application behavior



## Practice Exercise

* Download trace files from www.wiresharkbook.com:
  * app-nodissector.pcapng: Identify unknown application
  * ftp-clientside.pcapng: Reassemble FTP file transfer
  * http-fault-post.pcapng: Analyze HTTP POST data
  * ipv6-worldipv6day.pcapng: Identify browser and extract images
  * rsasnakeoil2.pcap: Practice SSL decryption
  * udp-mcaststream-queued2.pcapng: Reassemble UDP stream
  * voip-extension2downata.pcapng: Replay VoIP call



## Review Questions

1. Why might "Follow TCP Stream" not be available when right-clicking on a packet?

2. What is the syntax of the display filter created when you choose "Follow TCP Stream"?

3. How can you determine the type of file transferred over an FTP connection when using "Follow TCP Stream"?

4. Why would the Stream window be empty when you select "Follow SSL Streams"?



## Answers to Review Questions

1. The selected packet does not have a TCP header (might be ARP, UDP, or another protocol type).

2. `tcp.stream eq x` where x is the TCP stream number. This same syntax is used for SSL streams.

3. Look at the file name in the command channel or examine file identifiers inside the file itself.

4. The Stream window will be empty until you successfully apply decryption keys to the SSL stream.



## Additional Resources

* Wireshark Wiki: wiki.wireshark.org/SSL
* VLC Media Player: www.videolan.org
* File type identification: mark0.net/soft-trid-deflist.html
* IANA Port Number Registry: www.iana.org
* Wireshark Documentation: www.wireshark.org/docs


# Chapter 11: Wireshark Profiles



## Overview of Wireshark Profiles

- **What are profiles?** Configurations that help work more efficiently in specific environments
- **Key components customizable in profiles:**
  - Display filters
  - Capture filters
  - Coloring rules
  - Columns configuration
  - Custom layouts
- **Benefits:** Faster analysis, focused views for specific scenarios




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/9UiFm4sVAhF407FSTNC0i)



## Creating and Managing Profiles

- **Create a new profile:**
  - Right-click on Profile area in Status bar OR
  - Select Edit → Configuration Profiles → New
- **Profile location:** Stored in a subdirectory under Personal Configurations directory
- **Sharing profiles:** Copy the entire profile directory to another system
- **Profile inheritance:** Create from existing profiles (since Wireshark 1.8)




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/jp4w8Nd87xKP4f3f7xr20)





## Profile Configuration Files

Files that may exist in a profile directory:
- **cfilters:** Capture filters
- **dfilters:** Display filters
- **colorfilters:** Coloring rules
- **preferences:** Column settings, protocol preferences
- **disabled_protos:** Disabled protocols
- **decode_as_entries:** Custom protocol dissector assignments
- **recent:** Recent settings



## Troubleshooting Profile Example

**Capture filters (cfilters):**
```
My MAC: ether host D4:85:64:A7:BF:A3
Not My MAC: not ether host D4:85:64:A7:BF:A3
DHCP: port 67
```

**Display filters (dfilters):**
```
TCP Issues: tcp.analysis.flags
SYN Packets: tcp.flags==0x0002
HTTP GETs: http.request.method=="GET"
```

**Color filters:**
```
I-TCP SYN/R: tcp.flags.syn==1
T-HTTP-err/O: http.response.code > 399
T-TCP Delay/O: tcp.time_delta > 2
```



## Corporate Profile Example

**Components:**
- Capture filters for key hosts and protocols
- Display filters for important services
- Coloring rules for unusual traffic patterns
- Custom columns for network metrics

**Example column additions:**
- Time Since Previous Displayed Packet
- TCP window size
- IP DSCP values



## WLAN Profile Example

**Key configurations:**
- Filters for WLAN-specific frames
- Colorization for signal strength, retries, beacons
- Custom columns for WLAN metrics

**Example custom columns:**
- WLAN Channel/Frequency
- Signal Strength (radiotap.dbm_antsignal)
- Transmission rate


<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/EHBvcjcGuXADqkqZdmUBi)





## VoIP Profile Example

**Components:**
- Capture filters for SIP, RTP traffic
- Display filters for VoIP protocols, error responses
- Colorization for retransmissions, errors
- QoS-focused columns (DSCP values)

**Protocol preference settings:**
- Enable "Try to Decode RTP outside of conversations"



## Security Profile Example

**Components:**
- Display filters for suspicious traffic patterns
- Colorization for unusual ICMP traffic, IRC commands
- Custom columns for HTTP hosts, TCP stream index

**Example security filters:**
```
tcp matches "(?i)join"    # IRC JOIN commands
icmp.type==13 || icmp.type==15 || icmp.type==17    # ICMP OS fingerprinting
```



## Case Study: Customer-Specific Profile

**Customer environment:** Thousands of hosts, hundreds of applications

**Custom configurations:**
- Red coloring for server delays: `ip.src==10.6.2.2 && tcp.time_delta > 0.200`
- Red coloring for small window sizes (TCP buffer issues)
- Green coloring for TCP handshake packets
- Custom columns for window size and DSCP values
- GeoIP mapping enabled

**Result:** Faster and more accurate problem identification



## Summary

- Profiles allow environment-specific Wireshark customization
- Key advantages:
  - Faster analysis for specific network segments
  - Targeted views for specific protocols
  - More efficient troubleshooting
- Consider creating profiles for:
  - Different network environments
  - Specific traffic types
  - Specialized analysis needs



## Practice Exercise

**Downloading and testing sample profiles:**
1. Download sample profiles from www.wiresharkbook.com
2. Copy to your Wireshark \profiles directory
3. Open test trace files with appropriate profiles:
   - http-download-bad.pcapng (Troubleshooting profile)
   - sec-strangescan.pcapng (Nmap Detection profile)
   - wlan-airplane-laptopson.pcapng (WLAN profile)

**Exercise:** Create your own profiles for:
- Corporate office environment
- Home network
- Wireless network
- TCP-based applications



## Review Questions

1. What elements can you customize using Wireshark profiles?

2. How can you move a custom profile to another Wireshark system?

3. Which file should you be cautious of sharing when copying a custom profile to another Wireshark system?



## Answers to Review Questions

1. **Elements customizable in profiles:**
   - Display filters
   - Capture filters
   - Coloring rules
   - Column configurations
   - Protocol preferences

2. **Moving a profile:**
   - Copy the entire profile directory to the target system's profiles directory

3. **File to be cautious about:**
   - preferences file - may contain system-specific paths or device references



## Additional Resources

- **Official Wireshark Documentation:**
  - https://www.wireshark.org/docs/
  
- **Laura Chappell's Wireshark Book:**
  - www.wiresharkbook.com
  
- **Wireshark Community Resources:**
  - https://ask.wireshark.org/
  
- **Additional Profiles Repository:**
  - https://github.com/wireshark/wireshark-profiles
    

# Chapter 12 :Annotate, Save, Export and Print Packets



## Learning Objectives

By the end of this chapter, you will be able to:

- Annotate packets and trace files with comments
- Save subsets of packets based on filters, marks, or ranges
- Export packet content in various formats for analysis in other applications
- Export packet bytes, SSL keys, and other specific data
- Save information from statistics windows (conversations, endpoints, etc.)
- Print packet information in different formats



## Annotate Packets and Trace Files

### Key Points:
- Trace files must be saved in **pcap-ng format** to retain annotations
- Two types of annotations:
  - Individual packet comments
  - Entire trace file comments

### Adding Packet Comments:
1. Select a packet in the Packet List pane
2. Choose Edit → Edit or Add Packet Comment (or right-click)
3. Comments appear above the Frame section as "pkt_comment"



## Wireshark Annotation Workflow


- Comments visible in **Packet Details pane**
- Add "Packet Comments" column to Packet List pane
- All comments listed in **Expert Infos** window under "Packet Comments" tab
- Double-click on a comment in Expert Info to edit

![bg right  width:auto height:auto](https://cdn.markslides.ai/users/1280/images/wHVLtE_YnHbfAZsPHQYwv)







## Trace File Comments

- Click on the **Comment icon** in the lower left corner of Status Bar
- View through Statistics → Summary
- Provides context for the entire trace file

### Benefits of Annotations:
- Document findings directly in the trace file
- Share observations with colleagues
- Create self-documenting evidence
- Highlight important packets or patterns



## Saving Subsets of Packets

### Options in Save As dialog:
- All packets
- Displayed packets (matching current filter)
- Selected packet only
- Marked packets
- First to last marked packet
- Range of packets

**Best Practice:** Save subsets when baselining network communications to isolate specific functions



## Save Subset Options Visualization



![bg right width:auto height:auto](https://cdn.markslides.ai/users/1280/images/_HSGPbhMjkej3JrVDuhdV)

### File Format Options:
- Wireshark/tcpdump...libpcap (*.pcap, *.cap)
- Wireshark - pcap-ng (*.pcapng) - preferred for annotations
- Various other formats available



## Printing Packet Information

### Print Options:
- Print to paper or to a file (text or PostScript)
- Select content to print:
  - Packet List summary line
  - Packet Details (collapsed, as displayed, expanded)
  - Packet Bytes
- Same subset options as saving (displayed, selected, marked, range)

**Tip:** Print in landscape mode for better readability



## Print Dialog and Output


- Printed output retains formatting for readability
- Consider printing to a file for reformatting



## Export Packet Dissections

### Available Formats:
- Plain text (*.txt)
- PostScript (*.ps)
- CSV - Comma Separated Values (*.csv)
- C Arrays - Packet Bytes (*.c)
- PSML - XML Packet Summary (*.psml)
- PDML - XML Packet Details (*.pdml)

### Use Cases:
- Create custom graphs
- Search for specific content
- Perform advanced analysis in other tools



## Wireshark Export Options Overview



### Process:
1. Apply desired filter
2. File → Export Packet Dissections → As CSV (or other format)
3. Import into appropriate analysis tool
4. Create custom visualizations and reports



![bg right width:75%](https://cdn.markslides.ai/users/1280/images/zaKYHowra_5MwiEWEcc8r)




## Visualizing Exported Data


### Example Analysis Ideas:
- Plot delta times between packets
- Graph TCP analysis metrics (bytes_in_flight)
- Visualize WLAN retransmissions
- Compare multiple metrics on same chart



## Exporting from Statistics Windows

### Windows with Export Options:
- Conversations
- Endpoints
- IO Graphs
- Flow Graphs

### Methods:
- Click "Copy" for CSV format (Conversations, Endpoints, IO Graphs)
- Click "Save As" for text format (Flow Graphs)
- IO Graphs: "Save" button for graphics (BMP, ICO, JPEG, PNG, TIFF)



## Statistics Export Options


**Note:** IO Graph saves only include plot points; axis labels are not saved



## Export SSL Keys

- File → Export SSL Keys
- Saves with .key extension
- Example content:
  ```
  RSA Session-ID: Master-Key:df7be659ee74cad671c9962edd70cbe1aacc0175b14289362ddd985a3da6f24ad03
  ```



## Export Packet Bytes

### Process:
1. Select field or bytes in Packet Details or Bytes pane
2. Right-click → Export Selected Packet Bytes (or Ctrl+H)
3. Exports in raw data (hex) format

### Use Case:
Export specific header or payload data for deeper analysis



## Case Study: Isolating Problems


### Scenario:
- Intermittent database connection issues
- Multiple users experiencing problems
- Created "Ouch" icon for users to mark problem occurrences
- Used ICMP pings as markers in trace file



![bg width:80%](https://cdn.markslides.ai/users/1280/images/zVR0FpuKbv70pjZ_NJOS9)



## Case Study: Problem Identification

### Analysis Process:
1. **Filter:** `icmp.type==8` to find markers
2. **Mark packets** for easy navigation
3. **Observe:** Server sent TCP ACK but didn't respond with requested file
4. **Measure:** 23-second delay pattern identified
5. **Save evidence:** Export problem sequences
6. **Resolution:** Vendor identified limitation in their application



## Summary

- **Annotation** features help document findings in trace files
- **Save subsets** to isolate specific traffic patterns or problems
- **Export options** enable analysis in other applications
- **Print capabilities** allow sharing findings in various formats
- **Statistics exports** provide additional data manipulation options



## Practice Exercise

### Hands-On Activities:
- **client_init_renego.pcap**: Export SSL keys
- **http-riverbed-one.pcapng**: Filter and save DNS traffic
- **icmpredirect.pcapng**: Examine ICMP redirect, save to separate file
- **sec-evilprogram.pcapng**: Filter DNS lookups, add trace file annotations
- **sec-nessus.pcapng**: Search for "nessus" string, export conversations
- **wlan-beacon-problem.pcapng**: Create and save IO Graph



## Review Questions

1. How can you quickly view all the packet comments in a trace file?

2. What save options are available when you only want to save a subset of packets contained in a trace file?

3. What export format could you use if you are going to import information from the Packet List pane into a spreadsheet program?

4. Which Wireshark feature should you use if you want to save a TCP header as a text file?



## Answers to Review Questions

1. Use the **Expert Infos window's Packet Comments tab** to quickly view all packet comments.

2. Save options for subsets include:
   - **Displayed packets** (matching filter)
   - **Selected packet**
   - **Marked packets**
   - **First to last marked packet**
   - **Range of packets** (by number)

3. **CSV (Comma Separated Values)** format is ideal for importing into spreadsheet programs.

4. Use the **Export Selected Packet Bytes** feature (select the TCP header in the Packet Details pane, right-click and select Export Selected Packet Bytes).



## Additional Resources

### Tools:
- Screen capture utilities (e.g., **SnagIt** by TechSmith)
- **Cascade Pilot** by Riverbed for advanced visualization

### Practice Files:
- Download trace files from **www.wiresharkbook.com**

### Further Reading:
- Wireshark documentation on pcap-ng format
- Guides on creating effective packet annotations
- Advanced packet analysis with Excel and other tools


# Chapter 13: Wireshark's Expert System 



## Overview

- Expert Information is built into Wireshark's protocol dissectors
- Provides quick insight into potential network issues
- Categorizes findings into different severity levels
- Primarily focused on TCP communication issues
- Lets Wireshark guide your troubleshooting process



## Expert Information Categories

- **Errors**: Packet or dissector errors (RED)
- **Warnings**: Unusual responses from application/transport (YELLOW)
- **Notes**: Unusual but potentially normal responses (CYAN/LIGHT BLUE)
- **Chats**: Information about workflow (BLUE)
- **Comments**: Packet annotations added by users (GREEN)
- **Details**: Shows all categories in a single view



## Accessing Expert Information

- Click the Expert Info button on the status bar (color coded)
- Select **Analyze > Expert Info** from the menu
- Status bar button color indicates highest severity level
- Button colors match severity levels (Red, Yellow, Cyan, Blue, Green, Grey)


<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/L-7yFEn9aL_W98L-6lE76)




## Expert Info Window

- Shows potential issues organized by severity
- Clicking an entry jumps to that packet
- Can enable "Display LEDs" for colored tab labels
- "Details" tab shows everything in a single view
- "Packet Comments" tab shows all user annotations



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/A26N0dDC3F4pF0sIc7RYr)





## Filtering on Expert Information

### Display Filters:
- `tcp.analysis.flags` - All TCP-related problems
- `expert.severity==error` - All error-level notifications
- `expert.severity==warn` - All warning-level notifications
- `expert.severity==note` - All note-level notifications
- `expert.severity==chat` - All chat-level notifications
- `expert.group==<group>` - Filter by specific problem group



## Colorizing Expert Info Elements

- Expert elements are colored by default (black/red)
- Can customize via coloring rules
- Default rule: `tcp.analysis.flags && !tcp.analysis.window_update`
- Can create filters based on coloring rule names
- Example: `frame.coloring_rule.name=="T-Low Window Sizes"`



## TCP Expert Notifications: Retransmissions (Notes)

- Triggered when a segment with same sequence number is resent
- Occurs when:
  - Sender's TCP retransmission timeout (RTO) expires
  - Receiver sends duplicate ACKs requesting missing segment
- Filter: `tcp.analysis.retransmission`
- Indicates packet loss somewhere in the network
- Move analyzer to different locations to isolate loss point




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/3Ta2Ij1sHBAZs2ekwNGGq)






## TCP Expert Notifications: Previous Segment Lost (Warning)

- Triggered when an expected sequence number is skipped
- Appears on packet immediately following the missing packet
- Indicates packet loss between sender and Wireshark
- Move analyzer to find where packets are being dropped



## TCP Expert Notifications: ACKed Lost Packet (Warning)

- Triggered when Wireshark sees an ACK but didn't see the original data packet
- Possible causes:
  - Asymmetrical routing (packets taking different paths)
  - Faulty capture process (switch overload, span port issues)
- Consider discarding trace files with these errors
- They don't provide a complete view of network traffic



## TCP Expert Notifications: Keep Alive & Response

- **Keep Alive (Note)**: Sent when keep alive timer expires
- **Keep Alive ACK (Note)**: Response to keep alive packet
- Used to verify TCP connection is still valid
- May indicate underutilized but maintained connections



## TCP Expert Notifications: Duplicate ACK (Note)

- Triggered when receiver detects missing segment
- Receiver continues to ACK last correctly received byte
- After 3 duplicate ACKs, sender performs Fast Retransmission
- High number may indicate high latency or packet loss
- Part of TCP's normal packet loss recovery mechanism



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/PRTNGSmAt3o-2IcmZzlNy)



## TCP Expert Notifications: Zero Window (Warning)

- Triggered when receiver has no buffer space
- Receiver sends packets with window size = 0
- Effectively stops data transfer until buffer space clears
- Causes:
  - Underpowered system
  - CPU-intensive applications
  - Slow application not retrieving data from buffer
  - Initial window size too small



## TCP Expert Notifications: Zero Window Probe & Response

- **Zero Window Probe (Note)**: Sent to check if zero window condition resolved
- **Zero Window Probe ACK (Note)**: Response to probe
- Probe may contain one byte of next data segment
- If condition resolved, receiver acknowledges new byte
- If not resolved, receiver sends ACK without acknowledging new byte



## TCP Expert Notifications: Out-of-Order (Warning)

- Packet has lower sequence number than a previous packet
- May indicate:
  - Traffic traveling along multiple paths with different latencies
  - Queuing device forwarding packets out of order
- Can cause unnecessary retransmissions
- Different from retransmission (uses same sequence number)



## TCP Expert Notifications: Fast Retransmission (Note)

- Occurs within 20ms of a Duplicate ACK
- Triggered by Fast Recovery protocol (3 duplicate ACKs)
- Filter: `tcp.analysis.retransmission` (same as regular retransmissions)
- Similar to regular retransmissions, but triggered by receiver's feedback
- Indicates packet loss at some point in the network



## TCP Expert Notifications: Window Update (Chat)

- Contains no data, only window size increase
- Indicates application retrieved data from receive buffer
- Positive event in TCP communication
- Only recovery mechanism for Zero Window condition
- Prior to Wireshark 1.8, incorrectly marked as "Bad TCP"



## TCP Expert Notifications: Window is Full (Note)

- Tracks when data packet will fill remaining buffer space
- Precursor to potential Zero Window condition
- Focus troubleshooting on destination IP host
- Indicates application not retrieving data fast enough



## TCP Expert Notifications: TCP Ports Reused (Note)

- New TCP session using same IP/port combination as earlier session
- Often seen in:
  - Vulnerability scans
  - Reconnaissance processes
- Should be investigated as potential security concern



## TCP Expert Notifications: 4 NOP in a Row (Warning)

- Illogical pattern (01:01:01:01) in TCP SYN or SYN/ACK packet
- Indicates router likely stripped TCP header option
- Replaced with 4 NOPs (No Operations)
- Can prevent TCP feature negotiation (like SACK)
- Poor router behavior



## Case Study: TCP Randomization Issue

- Remote access headaches with proxy service
- Internet access slow or unavailable at some sites
- Issue only present when using web proxy
- Analysis showed high number of Duplicate ACKs
- TCP headers were being modified between routers
- "TCP randomization" feature on firewall modified sequence numbers
- Conflicted with SACK (Selective ACK) option field



## Best Practices with Expert Information

- Always verify Expert findings through manual examination
- Use Expert as a starting point, not final conclusion
- Consider moving analyzer to different network locations
- Apply tcp.analysis.flags filter to see all TCP-related issues
- Create filter expression buttons for common issues
- Double-check for false positives



## Summary

- Expert System quickly identifies potential network problems
- Color-coded by severity level for easy identification
- Primarily focuses on TCP communication issues
- Status bar button provides fast access
- Great first step in troubleshooting process
- Always verify findings through manual inspection



## Practice Exercise

- Download trace files from www.wiresharkbook.com
- Analyze the following files:
  - ftp-ioupload-partial.pcapng
  - http-download-bad.pcapng
  - http-iewithtoolbar.pcapng
  - sec-nessus-recon.pcapng
  - tcp-winscaling-off.pcapng
- Use Expert Info to identify problems in each file
- Practice filtering on Expert Information elements



## Review Questions

1. What is the fastest way to launch the Expert Infos window?

2. How can you make specific Expert Info elements stand out in the Packet List pane?

3. How can you filter on all packets that trigger TCP Expert notifications?



## Answers to Review Questions

1. Click the Expert Info button on the lower left of the Status Bar.

2. Create or modify coloring rules based on expert information criteria. Default coloring rule for TCP issues is: `tcp.analysis.flags && !tcp.analysis.window_update`

3. Apply a display filter for `tcp.analysis.flags`



## Additional Resources

- Wireshark User's Guide - Expert Information section
- Wireshark Wiki - TCP Analysis
- RFC 793 - TCP Specification
- TCP/IP Illustrated, Volume 1
- Network Analysis Using Wireshark Cookbook
- Protocol dissector source code (packet-tcp.c) on www.wireshark.org

# Chapter 14: TCP/IP Analysis Overview



## Learning Objectives

- Understand the TCP/IP stack elements and models
- Learn the multi-step TCP/IP resolution process
- Identify normal network communication patterns
- Analyze network traffic using Wireshark for troubleshooting
- Recognize common TCP/IP protocols and their functions



## TCP/IP Stack Overview



- **TCP/IP Model** vs **OSI Model**
- Key TCP/IP Stack Elements:
  - Internet Protocol (IPv4/IPv6) - Network layer routing
  - TCP/UDP - Transport layer services
  - Routing Protocols (RIP, OSPF) - Path information exchange
  - ICMP - Network information and testing
  - DNS - Name resolution services
  - DHCP - Dynamic configuration services
  - ARP - Hardware address lookup


<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:90% height:auto](https://cdn.markslides.ai/users/1280/images/ed6s-kt5k1VneHg6cEqcz)




## When Everything Goes Right

- Clients locate services quickly
- Services respond rapidly to requests
- Clients don't need to request a service more than once
- **Baselining normal traffic is essential**
- An analyzer can reveal:
  - Large delays between communications
  - Name resolution faults
  - Duplicate requests and retransmissions
  - Insecure applications



## TCP/IP Multi-Step Resolution Process



1. **Port Number Resolution** (no network traffic)
2. **Network Name Resolution** (DNS queries if needed)
3. **Route Resolution** (local vs. remote target)
4. **Local MAC Address Resolution** (ARP if needed)
5. **Route Resolution for Remote Targets** (routing table lookup)
6. **Gateway MAC Address Resolution** (ARP if needed)




<!-- _header: '' -->
<!-- _footer: '' -->

![bg right width:100% height:auto](https://cdn.markslides.ai/users/1280/images/gS5SAAUZuO1ai1lo5T4vA)




## Step 1: Port Number Resolution

- Determine source and destination ports for the application
- Example: FTP uses ports 20 (data) and 21 (commands)
- Source port is typically dynamic (ephemeral)
- Destination port is typically well-known
- Information stored in `/etc/services` file
- **No network traffic generated during this step**



## Step 2: Network Name Resolution (Optional)



- Required when using hostnames instead of IP addresses
- Resolution order:
  1. Check DNS resolver cache
  2. Check local hosts file
  3. Query DNS server(s)
- Network traffic generated if cache miss occurs
  



![bg right width:100% height:auto](https://cdn.markslides.ai/users/1280/images/iqEd64PhZ87PY_MCe-hzf)











## Step 3: Route Resolution (Local Target)

- Determine if target is local or remote
- Compare:
  - Source IP + subnet mask
  - vs. Destination IP
- Example:
  - Source: 10.1.22.4/8 → Target 10.2.99.99 is **local**
  - Source: 10.1.22.4/16 → Target 10.2.99.99 is **remote**
  - Source: 10.2.22.4/16 → Target 10.2.99.99 is **local**
- **No network traffic generated during this step**



## Step 4: Local MAC Address Resolution


- Required for local target communication
- Process:
  1. Check ARP cache first
  2. If not in cache, send ARP broadcast
  3. Update cache on receiving ARP response
- Network traffic generated only for cache misses



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/m-C_xyqmJFGC3uyVr0vqY)



## Step 5: Route Resolution (Remote Target)

- Required when target is on another network
- Process:
  1. Check local routing table for host/network route
  2. Use default gateway if no specific route exists
- Default gateway options:
  - Forward packet
  - Send ICMP redirect to better router
  - Reply with "unreachable" message
- **No network traffic generated during this step**



## Step 6: Gateway MAC Address Resolution

- Required for remote target communication
- Process:
  1. Check ARP cache for gateway MAC
  2. If not in cache, send ARP broadcast
  3. Update cache on receiving ARP response
- Network traffic generated only for cache misses



## Building the Complete Packet

Once all resolution processes complete, we have:
- Destination MAC address
- Destination IP address
- Source and destination port numbers



![bg width:auto height:auto](https://cdn.markslides.ai/users/1280/images/LiaiwXV-AwCgudMY6i666)





## Real-World Example: Browsing to www.riverbed.com



- First visit (after clearing caches):
  - No ARP queries (MAC addresses already in cache)
  - DNS queries for both IPv4 (A) and IPv6 (AAAA) records
  - DNS response caches IP address for 2 minutes (TTL)
  - TCP handshake begins with SYN to port 80
  - Full trace contains 1,492 packets

- Second visit (89 seconds later):
  - Fewer DNS queries (some still in cache)
  - Some page elements loaded from browser cache
  - Only 319 total packets (78% reduction)
    





![bg width:auto height:auto](https://cdn.markslides.ai/users/1280/images/fP5CA2h4tVbXsH9zkycrK)



## Wireshark Tip: TCP Analysis Settings

For analyzing HTTP traffic:
- Disable: "Allow subdissector to reassemble TCP streams"
- This helps you see individual HTTP messages in the Info column



## Case Study: Absolving the Network from Blame

Problem: Email connections stopped working

Analysis with Wireshark:
1. ARP process worked correctly
2. DNS resolution worked correctly
3. TCP handshake attempts to SMTP server failed
4. Connection to other ports on same server worked
5. Same issue from different locations

Conclusion: SMTP server issue, not network
Solution: Restart SMTP server



## Summary

- TCP/IP communications follow standard resolution processes
- Resolution failures prevent host communication
- Some processes generate network traffic, others don't
- Key protocols in resolution: DNS and ARP
- Wireshark allows you to:
  - Observe resolution processes in action
  - Pinpoint specific failure points
  - Prove what is NOT the problem



## Practice Exercise

- Download trace files from www.wiresharkbook.com:
  - **http-riverbed-one.pcapng**: First visit to www.riverbed.com
    - Examine DNS responses and TTL values
    - Right-click on DNS Time to Live field → Apply as Column
  
  - **http-riverbed-two.pcapng**: Return visit to www.riverbed.com
    - Look for IfModified-Since in GET requests
    - Compare packet count and load time with first visit
  
  - **net-resolutions.pcapng**: Practice using display filters
    - `arp` and `dns` filters
    - Observe resolution processes in action



## Review Questions

1. What file is referenced to determine the port to use in a communication when the application does not explicitly specify a port?

2. What can you assume when a client does not generate a DNS query to resolve a target's IP address?

3. What configuration fault might cause a host to ARP for a remote target?



## Answers to Review Questions

1. The `/etc/services` file is referenced to determine the port to use when the application does not explicitly specify a port.

2. When a client does not generate a DNS query, you can assume that the client either:
   - Already has the IP address in DNS cache
   - Is using a hostname defined in the local hosts file
   - Is using an IP address directly (no hostname)

3. An incorrect subnet mask configuration might cause a host to ARP for a remote target. If the subnet mask is too large, the host might incorrectly determine that a remote target is on the local network.



## Additional Resources

- Packet Analysis Reference Guides:
  - Wireshark Network Analysis by Laura Chappell
  - TCP/IP Illustrated by W. Richard Stevens
  
- Online Resources:
  - Wireshark Wiki: https://wiki.wireshark.org/
  - Wireshark University: https://www.wiresharktraining.com/
  
- Wireshark Display Filters:
  - `dns` - Show DNS traffic
  - `arp` - Show ARP traffic
  - `tcp.analysis.flags` - Show TCP issues

# Chapter 15: Analyze Domain Name System (DNS) Traffic



## The Purpose of DNS

- **Primary Function**: Convert symbolic host names to IP addresses
  - Example: www.wiresharktraining.com → IP address
- **Additional Functions**:
  - Transfer name information between DNS servers
  - Identify host names for IP addresses (inverse/pointer queries)
  - Look up other name elements (MX records, etc.)
- **Criticality**: DNS failure can prevent hosts from locating each other
- **Transport Protocol**:
  - UDP for most queries/responses
  - TCP for zone transfers and large responses



## DNS Communication Basics

- **Default Port**: 53 (both UDP and TCP)
- **DNS Packet Size Limitations**:
  - RFC 1035: UDP packet payload limited to 512 bytes
  - Response > 512 bytes: Truncation flag set → client retries with TCP
  - RFC 2671 (EDNS0): Allows for larger UDP packets
- **Multicast DNS (mDNS)**:
  - For smaller networks without DNS servers
  - Top-level domain: .local
  - Multicast address: 224.0.0.251 (IPv4) / FF02::FB (IPv6)



## Normal DNS Query/Response Process



![bg right width:auto](https://cdn.markslides.ai/users/1280/images/OsGswdssBn9ilpazMpdPn)




- **Process**:
  1. Client sends DNS query to DNS server
  2. Server responds directly with cached information OR
  3. Server performs recursive query to other DNS servers
- **A Record**: Standard host address record (IPv4)
- **AAAA Record**: IPv6 address record
- **CNAME**: Canonical name (alias) record



## Common DNS Problems

### DNS Name Not Found (NXDOMAIN)
- Error when name doesn't exist in DNS database
- Common causes:
  - Incorrect hostname entry
  - New name not yet propagated through Internet DNS
  
### Server Failure Responses
- Name server cannot resolve information due to errors
- Possible causes:
  - Timeout waiting for response from another server
  - Response not understood
  - Internal server failure



## DNS Problem Troubleshooting

### ICMP Port Unreachable Issues
- Client sends DNS request to a server, but port 53 is not open
- Indicated by ICMP Destination Unreachable/Port Unreachable responses
- Potential causes:
  - Client has incorrect DNS server IP
  - DNS service not running on server

### Resolution Steps:
1. Verify client DNS configuration
2. Check DNS server status
3. Test DNS service availability
4. Move Wireshark upstream if needed



## DNS Packet Structure


![bg right width:120%](https://cdn.markslides.ai/users/1280/images/PPrWnNSYyD8ACW5bMoCdo)


- **Four Primary Sections**:
  1. Questions
  2. Answer Resource Records
  3. Authority Resource Records
  4. Additional Resource Records



## DNS Header Fields (1/3)

- **Transaction ID**: Associates queries with responses
  - Filter: `dns.id==0x05b5`
- **Flags Byte**: Defines query characteristics
  - **Query/Response bit**:
    - 0 = Query (`dns.flags.response==0`)
    - 1 = Response (`dns.flags.response==1`)
  - **Opcode**: Specifies query type (typically 0000 for standard)
  - **Authoritative Answer**: Response from authoritative server



## DNS Header Fields (2/3)

- **Truncation**: Response was truncated due to length
  - If set, client should retry over TCP
- **Recursion Desired**: Server may use recursive query process
  - Server can ask other servers on client's behalf
- **Recursion Available**: Indicates if recursion available at server
- **Reserved**: Set to 0
- **Rcode (Response Code)**: Indicates error conditions
  - Filter for DNS errors: `dns.flags.rcode != 0`



## DNS Response Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 0 | No Error | Normal response |
| 1 | Format Error | Query couldn't be interpreted |
| 2 | Server Failure | Server problem prevented processing |
| 3 | Name Error (NXDOMAIN) | Domain name doesn't exist |
| 4 | Not Implemented | Query type not supported |
| 5 | Refused | Server refused due to policy |



## DNS Header Fields (3/3)

- **Question Count**: Number of questions in Question section
- **Answer Resource Record (RR) Count**: Number of answers provided
- **Authority RRs Count**: Number of authority answers
- **Additional RRs Count**: Number of additional answers



## DNS Question and Resource Record Sections

### Question Section
- **Name**: Name being resolved (variable length with numerical delimiters)
  - Example: 3www9wireshark3org0
- **Type**: Type of query (A, NS, CNAME, SOA, PTR, MX, AAAA, etc.)
- **Class**: Set to 1 for Internet class address

### Resource Records
- **Answer RRs**: Contains resolved information
- **Authority RRs**: Information from servers in naming hierarchy
- **Additional RRs**: Additional information (e.g., A records for servers)



## Resource Record TTL Value

- Present in DNS responses
- Indicates how long receiver can cache DNS information
- Each answer contains its own TTL value
- DNS servers count down remaining TTL on responses
  - Same query 10 seconds apart: 10-second difference in TTL



## DNS Filtering in Wireshark

### Capture Filters
- Standard DNS: `port 53`
- Multicast DNS: `port 5353`

### Display Filters
- All DNS traffic: `dns`
- DNS queries: `dns.flags.response==0`
- DNS responses: `dns.flags.response==1`
- DNS errors: `dns.flags.rcode != 0`
- Multiple answers: `dns.count.answers > 5`
- Specific hostname: `dns.qry.name=="www.abc.com"`
- Text search: `dns contains "abc"`
- Host query: `dns.qry.type==0x0001`
- Pointer query: `dns.qry.type==0x000c`



## Case Study: DNS Killed Web Browsing Performance


**Scenario**: Users complain about slow web browsing
- Sometimes 10-15 seconds to load websites
- Some sites wouldn't load at all
- Problem appeared overnight

**Troubleshooting Steps**:
1. Place full-duplex tap between affected user and switch
2. Observe traffic while user visits websites
3. Notice unusual DNS behavior - many queries, some unresponded



![bg](https://cdn.markslides.ai/users/1280/images/kem319DsOzHPNfjJ0d7yC)





## Case Study: Findings and Resolution

**Root Cause**:
- Primary DNS server configured to be at remote branch office
- Many DNS queries traveling across internet to remote office
- Communication problems causing query timeouts
- Secondary local DNS only used after remote DNS failure

**Resolution**:
- Reconfigure DHCP to set local DNS server as primary
- Remote DNS server as secondary or removed from configuration

**Lesson**: What appears to be an application problem (slow web browsing) was actually a DNS configuration issue



## Summary: DNS Key Concepts

- DNS primarily resolves names to IP addresses
- Resolution process:
  1. Check local cache
  2. Check local hosts file
  3. Query DNS server (recursive or iterative)
- DNS servers respond with numerical codes
  - Reply code 0 indicates success
- Both UDP (queries/responses) and TCP (zone transfers) used
- DNS misconfiguration can severely impact network performance



## Practice Exercises

- Analyze trace files from the book website:
  - dns-errors-partial.pcapng
  - dns-icmp-fault.pcapng
  - dns-misc.pcapng
  - dns-ptr.pcapng
  - dns-serverfailure.pcapng
  - http-espn2007/2010/2011.pcapng
  - http-msnbc.pcapng
  - ipv6-worldipv6day.pcapng
- For each file, examine specific DNS behaviors and issues
- Practice creating and using DNS-specific display filters



## Review Questions

1. What is the purpose of DNS?
2. When does DNS traffic use TCP as the transport?
3. What is the difference between recursive and iterative DNS queries?
4. What are the four sections of DNS queries and answers?



## Answers to Review Questions

**A15.1**: DNS is used to convert symbolic host names to IP addresses. It can also transfer name information between DNS servers, identify hostnames for IP addresses (inverse/pointer queries), and look up other name elements such as MX records.

**A15.2**: DNS uses TCP as transport for zone transfers and when responses exceed 512 bytes (requiring truncation flag to be set).

**A15.3**: In recursive queries, the DNS server takes responsibility for completing the lookup by querying other servers on behalf of the client. In iterative queries, the server only returns information it has locally or may provide the address of another DNS server to ask.

**A15.4**: The four sections are: Questions, Answer Resource Records, Authority Resource Records, and Additional Resource Records.



## Additional Resources

- RFC 1035: Domain Names - Implementation and Specification
- RFC 2671: Extension Mechanisms for DNS (EDNS0)
- www.iana.org/assignments/dns-parameters
- www.multicastdns.org
- Wireshark Display Filter Reference: www.wireshark.org/docs/dfref/d/dns.html
- Laura Chappell Network Analysis materials: www.wiresharktraining.com

# Chapter 16: Analyze Address Resolution Protocol (ARP) Traffic






## Learning Objectives

* Identify the purpose of ARP
* Analyze normal ARP requests and responses
* Understand gratuitous ARPs
* Diagnose ARP-related network problems
* Dissect the ARP packet structure
* Filter on ARP traffic



## Purpose of ARP

* ARP = Address Resolution Protocol (defined in RFC 826)
* **Primary Purpose**: Associates MAC addresses with IP addresses on a local network
* **Secondary Purpose**: Tests for duplicate IPv4 addresses (gratuitous ARP)
* **Important characteristics**:
  * ARP packets do not contain an IP header
  * ARP packets are non-routable
  * ARP operates only at the local level
  * Not used in IPv6 communications (uses NDP instead)



## ARP Operates Locally

* Key point: ARP is a local-only protocol
* You must be on the same network segment as the host to capture ARP packets
* Packets cannot cross routers (no IP header)

<!-- _header: '' -->
<!-- _footer: '' -->

![bg right width:100% height:auto](https://cdn.markslides.ai/users/1280/images/GfKv3vc2XCrGCPAl0hqPz)



## Normal ARP Communication

* Simple request/response process:
  1. Host sends ARP broadcast with target IP address
  2. Host with matching IP sends unicast response with its MAC address
  
* Address fields in ARP packets:
  * **Sender**: The host that generated the current packet
  * **Target**: The host the current packet is asking about or responding to



## ARP Request/Response Example

**ARP Request**:
* Sender MAC: 00:50:da:ca:0f:33
* Sender IP: 10.64.0.164
* Target MAC: 00:00:00:00:00:00 (unknown - what we're looking for)
* Target IP: 10.64.0.1 (the IP we want to resolve)

**ARP Response**:
* Sender MAC: 00:0c:29:25:bb:b2 (the resolved address)
* Sender IP: 10.64.0.1
* Target MAC: 00:50:da:ca:0f:33 (the original requester)
* Target IP: 10.64.0.164






![bg width:80% height:90%](https://cdn.markslides.ai/users/1280/images/LKwhuX4c1KUkj7ObCnei6)



## Gratuitous ARP

* **Purpose**: Detect duplicate IP addresses on a network
* **Process**:
  * Host sends ARP request for its own IP address
  * Target hardware address set to all zeros
  * A response indicates IP address conflict
  * No response means the address is available
* All hosts send gratuitous ARPs on startup regardless of static or DHCP addressing
* Wireshark can identify gratuitous ARP packets



## Gratuitous ARP Process

* Typical process:
  * Host boots up and receives IP address (DHCP or static)
  * Host sends at least one gratuitous ARP request
  * Waits ~1 second for response
  * In practice, often sends 3 attempts with 1-second intervals
  * If no response after final wait, host initializes IP stack
  * If response received, duplicate IP alert generated



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/_ZS5rM1k2mAAw9-658Hth)



## Common ARP Problems

### Incorrect Subnet Mask
* Host configured with wrong subnet mask
* Host thinks remote targets are local
* Broadcasts ARP requests that will never reach target
* Creates unnecessary broadcast traffic





<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/bIecJ14Yj1vHZ3uCJ0hw5)



## Proxy ARP

* Defined in RFC 1027 - "Using ARP to Implement Transparent Subnet Gateways"
* Router answers ARP requests on behalf of remote devices
* Disadvantages:
  * Increases overall ARP traffic
  * Can mask configuration issues
  * Creates security concerns

```
# Display filter for proxy ARP:
(arp.opcode==0x0002) && !(arp.src.proto_ipv4==192.168.0.1/16)
```



## ARP Poisoning

* Attack technique for Man-in-the-Middle (MITM)
* Attacker sends false ARP responses
* Associates attacker's MAC with legitimate IP addresses
* Signature: Single MAC address advertising multiple IP addresses
* Wireshark can detect duplicate IP addresses



<!-- _header: '' -->
<!-- _footer: '' -->

![bg  width:auto height:auto](https://cdn.markslides.ai/users/1280/images/ndatobWXmeZ4McFg0ea6d)



## ARP Packet Structure

| Field | Description |
|-------|-------------|
| Hardware Type | Defines hardware/data link type (1 = Ethernet) |
| Protocol Type | Defines protocol address type (0x0800 = IPv4) |
| Length of HW Address | Size in bytes of hardware addresses (6 for Ethernet) |
| Length of Protocol Address | Size in bytes of protocol addresses (4 for IPv4) |
| Opcode | Request (1), Reply (2), RARP request (3), RARP reply (4) |
| Sender's Hardware Address | MAC address of sending device |
| Sender's Protocol Address | IP address of sending device |
| Target Hardware Address | Desired MAC address (all 0s in request) |
| Target Protocol Address | Desired IP address |



## Wireshark ARP Detection Features

* **Duplicate IP Address Detection**:
  * Enabled by default
  * Detects and flags when multiple hosts claim same IP
  * Noted in Packet List pane and Expert Infos warnings

* **ARP Storm Detection**:
  * Disabled by default
  * Can be configured to detect specified number of ARP packets in detection period
  * Default: 30 packets within 100ms
  * Added to Notes section of Expert Infos



## ARP Filtering in Wireshark

### Capture Filters
```
arp                      # All ARP traffic
```

### Display Filters
```
arp                      # All ARP traffic
arp.opcode==0x0001       # ARP requests
arp.opcode==0x0002       # ARP replies
arp.src.hw_mac==00:13:46:cc:a3:ea  # ARP from specific MAC
```



## Advanced ARP Display Filters

```
# ARP request from specific MAC
(arp.src.hw_mac==00:21:97:40:74:d2) && (arp.opcode==0x0001)

# ARP packet where host not advertising own IP (suspicious)
(arp.src.hw_mac==00:d0:59:aa:af:80) && !(arp.src.proto_ipv4==192.168.1.1)

# ARP proxy responses (resolution for remote device)
(arp.opcode==0x0002) && !(arp.src.proto_ipv4==192.168.0.1/16)
```



## Case Study: Death by ARP

* Problem: Packet storm from mostly HP printers
* Symptoms:
  * Printers flooding network with ARP requests
  * ARP tables on hosts being flooded
  * Network performance severely degraded
* Root cause: Network improperly designed as one big bridged network
* Lesson: Proper network segmentation is critical



## Case Study: The Missing ARP

* Problem: VoIP phones losing connection randomly
* Symptoms:
  * Calls disconnected
  * Heartbeat failures between phones and VoIP server
* Investigation:
  * IP phones stopped sending heartbeats
  * Phones repeatedly ARPing for gateway with no response
  * L3 switches eventually resumed responding
* Root cause: Proprietary router redundancy protocol issue with asymmetrical routing
* Lesson: "Assume nothing, expect anything, and always look for (missing) ARP packets!"



## Summary

* ARP resolves hardware addresses of local targets
* ARP process checks local cache before generating network request
* Requests sent to broadcast, responses sent unicast
* Gratuitous ARP detects duplicate IP addresses
* ARP packets are non-routable (no IP header)
* ARP problems often indicate network configuration issues



## Practice Exercise

Lab exercises using the following trace files:

1. **arp-badpadding.pcapng**
   * Examine ARP padding and minimum packet size requirements
   * Investigate security implications

2. **arp-bootup.pcapng**
   * Analyze client boot sequence
   * Identify purpose and timing of ARP packets 

3. **arp-ping.pcapng**
   * Determine purpose of each ARP packet
   * Evaluate success of each process

4. **arp-poison.pcapng**
   * Diagram attack based on MAC/IP relationships
   * Identify poisoner and affected hosts



## Review Questions

1. What is the purpose of ARP?

2. What configuration problem can cause a host to ARP for a remote host?

3. Why can't ARP packets cross routers?

4. What is the syntax of capture and display filters for ARP traffic?



## Answers to Review Questions

1. ARP is used to obtain the hardware address of a target host or gateway/router.

2. If a client's subnet mask is too short, it may think more targets are on the local network and broadcast ARP packets to resolve the hardware addresses of those targets.

3. ARP packets cannot be routed because they do not have a routing (IP) header.

4. Capture filter: `arp`  
   Display filter: `arp`



## Additional Resources

* RFC 826 - Ethernet Address Resolution Protocol
* RFC 1027 - Using ARP to Implement Transparent Subnet Gateways
* RFC 903 - A Reverse Address Resolution Protocol
* IANA Hardware Type Listings - www.iana.org
* IANA Protocol Number Listings - www.iana.org/assignments/protocol-numbers
* Wireshark Wiki ARP Page - wiki.wireshark.org/ARP
Address Resolution Protocol (ARP) Traffic## Instructor Slides


# Chapter 17: Analyzing Internet Protocol (IPv4/IPv6) Traffic



## The Purpose of IP

- Provides datagram delivery services for networked systems
- Handles fragmentation and reassembly for networks with different MTUs
- Offers quality of service designation capabilities
- Is connectionless and unreliable (best-effort delivery)
- Applications requiring guaranteed delivery use TCP over IP




![IPv4 Header Structure](https://cdn.markslides.ai/users/1280/images/vcXMFoqVdrFHhW4iBM1Ml)



## IPv4 Header Structure

- Typically 20 bytes long (can be extended with Options field)
- Contains routing information, fragmentation controls, and QoS parameters
- Each field serves a specific purpose in packet delivery



## IPv4 Header Fields (1)

- **Version**: Indicates IPv4 (value = 4)
- **Header Length (IHL)**: Length of IP header in 32-bit words
- **Differentiated Services**: Used for QoS prioritization
- **Total Length**: Size of entire packet (header + data)
- **Identification**: Unique ID for packet fragments



## IPv4 Header Fields (2)

- **Flags**: Controls fragmentation (Don't Fragment, More Fragments)
- **Fragment Offset**: Position of fragment in original packet
- **Time to Live (TTL)**: Limits packet lifetime in the network
- **Protocol**: Indicates next protocol (TCP=6, UDP=17, ICMP=1)
- **Header Checksum**: Error detection for header only



## IPv4 Header Fields (3)

- **Source Address**: Sender's IP address
- **Destination Address**: Recipient's IP address
- **Options**: Optional parameters (rarely used)
- **Data**: The actual payload



## Analyzing Normal IPv4 Traffic

- IPv4 communications deliver packets efficiently using optimal packet size
- Routers examine destination IP for routing decisions
- MTU is checked to determine if fragmentation is needed
- MAC headers are replaced at each hop
- TTL is decremented by routers



## IPv4 Fragmentation

![IP Fragmentation](https://cdn.markslides.ai/users/1280/images/Zt6QH0CQoEg8vHi1zv70h)



## IPv4 Fragmentation (.cont)

- Occurs when packet exceeds MTU of next network link
- Router checks the "Don't Fragment" bit
- If DF=1 and packet too large: ICMP "Fragmentation Needed" sent back
- If DF=0: Router splits packet into multiple fragments
- All fragments share same IP ID value
- Reassembly happens at destination



## IPv4 Problems to Watch For

- **Fragmentation issues**: When ICMP Type 3/Code 4 packets are blocked
- **Unusual IP addresses**: Loopback (127.0.0.0/8), multicast, or broadcast as source
- **Excessive broadcasts**: Can degrade network performance
- **IP checksum errors**: Could indicate transmission problems



## IPv4 Differentiated Services

- 6-bit field used for traffic prioritization (QoS)
- Contains Differentiated Services Code Point (DSCP) value
- Determines per-hop behavior (PHB) for packet handling
- **Assured Forwarding (AF)**: Different forwarding assurance levels
- **Expedited Forwarding (EF)**: Low loss, low latency service



## IPv4 Broadcast & Multicast

- **General Broadcast**: 255.255.255.255
- **Subnet Broadcast**: e.g., 10.2.255.255
- **Multicast**: 224.x.x.x – 239.x.x.x

Used for:
- Lookups (DHCP discovery, ARP)
- Announcements (routing updates)




## Introduction to IPv6


- Next generation IP protocol (RFC 2460)
- Simplifies header format (fewer fields)
- 128-bit addresses (versus 32-bit in IPv4)
- No broadcast - uses multicast instead
- Native QoS and security capabilities
- 


## Introduction to IPv6

![IPv6 Header Structure](https://cdn.markslides.ai/users/1280/images/puwM3JO_czZcH2DwIjjoF)



## IPv6 Header Fields

- **Version**: Set to 6
- **Traffic Class**: Similar to DiffServ in IPv4
- **Flow Label**: Identifies packets in same "flow"
- **Payload Length**: Size of data after header
- **Next Header**: Similar to Protocol field in IPv4
- **Hop Limit**: Equivalent to TTL in IPv4
- **Source/Destination Addresses**: 128-bit addresses



## IPv6 Extension Headers

Extension headers provide additional functionality:
- Hop-by-Hop Options (0)
- Destination Options (60)
- Routing Header (43)
- Fragment Header (44)
- Authentication Header (51)
- Encapsulating Security Payload (50)



## IPv6 Addressing Basics

- 128-bit addresses (16 bytes)
- Written as eight groups of four hex digits: `2001:0DB8:0000:0000:0008:0800:200C:417A`
- Can be shortened: `2001:DB8::8:800:200C:417A`
- Three types:
  - **Unicast**: Single interface
  - **Multicast**: Group of interfaces
  - **Anycast**: Nearest interface in a group



## IPv6 Address Types

- **Unicast**: Begin with 2xxx
- **Multicast**: Begin with FFxx
- **Link-Local**: Begin with FE80
  - Used on a single link
  - Not routed
  - Used for auto-configuration and neighbor discovery



## IPv6 Neighbor Discovery

Replaces ARP in IPv4:
- **Neighbor Solicitation**: Like ARP request
- **Neighbor Advertisement**: Like ARP reply
- **Router Solicitation**: Discover local routers
- **Router Advertisement**: Router sends interface/network info



## IPv6 Address Configuration


![IPv6 Configuration Modes](https://cdn.markslides.ai/users/1280/images/SpQjiCzbMgC4B8vTzvkzd)




## IPv6 Address Configuration (.cont)

Three methods based on Router Advertisement M and O bits:

1. **Stateless Address AutoConfiguration (SLAAC)**: M=0, O=0
2. **DHCPv6 Stateful**: M=1
3. **DHCPv6 Stateless**: M=0, O=1



## IPv6 Transition Technologies

- **Dual Stack**: Host runs both IPv4 and IPv6
- **6to4 Tunneling**: IPv6 tunneled in IPv4 (Protocol 41)
- **Teredo**: IPv6 tunneled in UDP (for NAT traversal)
- **ISATAP**: IntraSite Automatic Tunnel Addressing Protocol



## Troubleshooting with Wireshark

IPv4 filters:
```
ip                     # All IPv4 traffic
ip.src==192.168.1.1    # Source address filter
ip.dst==192.168.1.103  # Destination address filter
ip.addr==192.168.1.103 # Either source or destination
ip.ttl < 10            # Low TTL values
```



## Troubleshooting with Wireshark (2)

IPv6 filters:
```
ipv6                   # All IPv6 traffic
ipv6.src==2001:db8::1  # Source address filter
ipv6.nxt==0x06         # IPv6 packets preceding TCP
ipv6.hlim < 10         # Hop limit below 10
```



## Case Studies

1. **"Everyone Blamed the Router"**
   - Problem: Router not responding to pings
   - Analysis with Wireshark: IP multicast storm detected
   - Resolution: Found and fixed misconfigured server

2. **"IPv6 Addressing Mayhem"**
   - Problem: Windows client repeatedly releasing IPv6 address
   - Root cause: Two routers sending conflicting Router Advertisements
   - Resolution: Synchronize M and O bit settings on both routers



## Practice Exercise

- Examine a trace file with IP fragmentation
- Identify DSCP values for traffic prioritization
- Investigate TTL values to detect potential routing issues
- Analyze IPv6 neighbor discovery process



## Key Takeaways

- IP provides best-effort packet delivery across networks
- IPv4 header structure supports routing, fragmentation, and QoS
- IPv6 simplifies the header while expanding addressing
- Wireshark is essential for troubleshooting IP-related issues
- Many network problems occur at the IP layer


# Chapter 18: Analyze Internet Control Message Protocol (ICMPv4/ICMPv6) Traffic



## The Purpose of ICMP

- Messaging system for errors, alerts, and notifications on IP networks
- Key ICMP message types:
  - Echo messages (connectivity testing)
  - Redirect messages (routing optimization)
  - Destination Unreachable messages (delivery failure)
- Examining ICMP traffic reveals:
  - Network design efficiency
  - Configuration errors
  - Functional problems
  - Security breaches
- Defined in RFC 792



## Normal ICMP Traffic

- "Normal" is subjective to each network
- Typical normal traffic includes:
  - ICMP-based pings
    - Type 8: Echo Request
    - Type 0: Echo Reply
  - ICMP-based traceroute
    - Alters Time to Live (TTL) values
    - Triggers Type 11, Code 0 responses (Time Exceeded)



## ICMP Ping Process


- ICMP Type 8 (Echo Request) → Target system
- Target replies with ICMP Type 0 (Echo Reply)
- Round Trip Time (RTT) measured between request and reply



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/AWpjSxuM7toCSZ3AK84X2)




## ICMP Traceroute


- Uses incrementing TTL values
- Each router decrements TTL
- When TTL reaches 1, router returns ICMP Type 11, Code 0
- Creates "hop by hop" path discovery



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:90% height:auto](https://cdn.markslides.ai/users/1280/images/P2fc7UXk3DzrcOjV--BCO)





## Analyzing ICMP Problems

Common issues identifiable through ICMP:

- Failed echo tests (no connectivity)
- DNS issues (Destination Unreachable/Port Unreachable)
- Excessive redirects
- Firewall detection
- Path MTU discovery problems



## ICMP Redirect Example

- Sent when a router identifies a better path
- Type 5/Code 1 message
- Contains original triggering packet
- Host should update routing table in response



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:90% height:auto](https://cdn.markslides.ai/users/1280/images/iFmq7PpgF-vTvuyI9QXyv)



## ICMP Packet Structure

- No UDP or TCP header (not affected by port filtering)
- Three required fields:
  - Type (message category)
  - Code (message subcategory)
  - Checksum
- Some types include additional fields



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/fJic6scw_8WoyT_gfZQ67)








## Common ICMP Types and Codes

- Type 0/Type 8: Echo Reply/Echo Request
- Type 3: Destination Unreachable
  - Code 0: Net Unreachable
  - Code 1: Host Unreachable
  - Code 3: Port Unreachable
  - Code 4: Fragmentation Needed (DF bit set)
- Type 5: Redirect
- Type 11: Time Exceeded
  - Code 0: TTL Exceeded in Transit
  - Code 1: Fragment Reassembly Time Exceeded



## ICMPv6 Functionality

- Defined in RFC 4443
- Same packet structure as ICMPv4
- Essential for IPv6 operation:
  - Neighbor Discovery Protocol
  - Duplicate Address Detection
  - Path MTU Discovery



## Key ICMPv6 Types

- Types 1-4: Error messages (similar to ICMPv4)
- Types 128-129: Echo Request/Reply
- Types 130-132: Multicast Listener Discovery
- Types 133-134: Router Solicitation/Advertisement
- Types 135-136: Neighbor Solicitation/Advertisement
- Type 137: Redirect Message



## ICMP Filtering

**Capture filters:**
- `icmp` (for ICMPv4)
- `icmp6` (for ICMPv6)

**Display filters examples:**
- `icmp.type==8` (ICMP ping requests)
- `icmp.type==8 || icmp.type==0` (ICMP ping request or response)
- `icmp.type==11` (ICMP Time to Live Exceeded)
- `icmpv6.type==133` (ICMPv6 router solicitation)
- `(ipv6.src==::) && (icmpv6.type==135)` (ICMPv6 duplicate address test)



## Dead-End Router Case Study


- Symptoms: Some hosts couldn't reach internet on certain days
- Issue: Sun accounting server responded to Router Solicitations
- Problem: Sun server wasn't configured as a router
- Result: Clients that used Sun server as default gateway couldn't route traffic
- Solution: Configure Sun server properly or disable Router Advertisement responses




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:90% height:auto](https://cdn.markslides.ai/users/1280/images/kY5FL_OyzP1zfxni-8YE2)



## Summary

- ICMP provides essential messaging services for network errors and configuration
- ICMP packets aren't affected by port filtering (no TCP/UDP headers)
- Many ICMP packets contain the original triggering header
- Echo Requests commonly used for ping and traceroute operations
- ICMPv6 has expanded functionality, essential for IPv6 operation



## Practice Exercises

- **icmp-dest-unreachable.pcapng**: Identify why ping is unsuccessful
- **icmp-payload.pcapng**: Examine payload and security implications
- **icmp-ping-basic.pcapng**: Identify how Echo requests are distinguished
- **icmp-ping-2signatures.pcapng**: Create display filters for different payloads
- **icmpredirect.pcapng**: Map out MAC addresses and analyze ICMP Echo Replies
- **icmp-traceroute-2011.pcapng**: Determine if traceroute reached target
- **icmp-traceroute-normal.pcapng**: Analyze router discovery
- **ipv6-pinginipv4.pcapng**: Identify ICMPv6 Types and analyze hop counts



## Review Questions

1. What is the purpose of ICMP?
2. What device might generate ICMP Type 3, Code 13?
3. How can you determine what triggered ICMP Type 3 packets?
4. Which ICMP packets are used for standard ping process?
5. What should a host do when receiving an ICMP Redirect?
6. What is the syntax for ICMPv4/ICMPv6 filters?
7. What ICMPv6 packet checks for duplicate IP address assignment?



## Additional Resources

- IANA ICMP Parameters Registry: www.iana.org/assignments/icmp-parameters
- IANA ICMPv6 Parameters Registry: www.iana.org/assignments/icmpv6-parameters
- RFC 792: Internet Control Message Protocol
- RFC 4443: Internet Control Message Protocol (ICMPv6)
- RFC 4884: Extended ICMP to Support Multi-Part Messages






# Chapter 19: Analyze User Datagram Protocol (UDP) Traffic




## Learning Objectives

After completing this chapter, you will be able to:

- Explain the purpose and characteristics of UDP
- Analyze normal UDP traffic patterns
- Identify and troubleshoot common UDP problems
- Dissect the UDP packet structure
- Apply effective filters for UDP traffic analysis
- Troubleshoot UDP-based applications



## The Purpose of UDP

- Provides connectionless transport services
- Supports broadcast and multicast traffic
- Simple 8-byte header with four fields
- Defined in RFC 768, User Datagram Protocol



## Common UDP Applications

- DHCP/BOOTP
- DNS (Domain Name System)
- SIP (Session Initiation Protocol)
- RTP (Real-time Transport Protocol)
- TFTP (Trivial File Transfer Protocol)
- Streaming video applications
- NTP (Network Time Protocol)





## Analyzing the UDP Header



- Source Port: Identifies sending application
- Destination Port: Identifies receiving application
- Length: Total length of UDP header and data
- Checksum: Optional error detection in IPv4, required in IPv6




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/5jnCEDU8MvzRXDCrS8BNZ)



## UDP vs TCP


| Characteristic | UDP | TCP |
|----------------|-----|-----|
| Connection     | Connectionless | Connection-oriented |
| Reliability    | No guarantees | Guaranteed delivery |
| Header size    | 8 bytes | 20+ bytes |
| Speed          | Faster | Slower |
| Ordering       | No packet ordering | Maintains sequence |
| Error recovery | None built-in | Extensive |
| Use cases      | Streaming, broadcasts | File transfers, web browsing |




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:85% height:auto](https://cdn.markslides.ai/users/1280/images/P2GrQvABLurrxRhLo_x3Y)




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/hbpbw1_JHbKxE1rmLY0bf)



## Common UDP Problems

- Port filtering by firewalls
  - Silent packet discarding
  - No ICMP Destination Unreachable responses
- UDP scans
  - Identifiable by patterns of UDP packets and ICMP responses
  - Look for ICMP Destination Unreachable/Port Unreachable responses



## UDP Packet Structure - In Detail

### Source Port Field (16 bits)
- Opens listening port for responses
- Sometimes defines the sending application

### Destination Port Field (16 bits)
- Defines target application or process
- Well-known ports for server processes



## UDP Packet Structure - In Detail (continued)

### Length Field (16 bits)
- Defines packet length from UDP header to end of data
- Redundant with IP header information
- Calculation: UDP Length = IP Total Length - IP Header Length

### Checksum Field (16 bits)
- Covers UDP header, data, and IP pseudoheader
- Optional in IPv4 (may be set to 0x0000)
- Required in IPv6



## UDP Filtering Techniques


### Capture Filters
- Basic: `udp`
- Port specific: `udp port 53`

### Display Filters
- Basic: `udp`
- Source port: `udp.srcport==161` (SNMP response)
- Destination port: `udp.dstport==137` (NetBIOS Name Service)
- Length: `udp.length > 248` (large UDP packets)




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/hofb5yHS-kEj0jBMmCNEA)




## Case Study: NTP Synchronization Problem


- Problem: Devices not synchronizing with NTP server
- Investigation:
  - UDP port 123 traffic was reaching the NTP server
  - Return traffic was going to the firewall
- Root cause:
  - NTP server misconfigured with incorrect default gateway
- Resolution:
  - Reconfigured NTP server with correct gateway
- Lesson: Layer 2/3 configuration can affect UDP applications




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/8kITavUnq36bauWx5k2Ts)






## Summary

- UDP offers simple connectionless transport
- 8-byte header primarily defines service ports
- Checksum is optional in IPv4, required in IPv6
- Common problems involve port filtering
- When a port is not available, ICMP Port Unreachable should be returned
- UDP problems often manifest as application-level issues



## Practice Exercises

1. **DHCP Boot Trace Analysis**
   - Identify port numbers used for DHCP communication
   
2. **DNS Traffic Analysis**
   - Determine capture filters for DNS traffic
   - Check if UDP checksums are utilized
   
3. **UDP Echo Analysis**
   - Examine UDP echo port communications
   - Consider the effects of identical source/destination ports



## Review Questions

1. What is the purpose of UDP?

2. How does a UDP-based application recover from packet loss?

3. Why would a UDP packet contain a checksum value of 0x0000?



## Answers to Review Questions

1. **Purpose of UDP**: To provide connectionless transport services with minimal overhead, allowing applications to use transport services without the complexity and latency of connection establishment.

2. **Recovery from packet loss**: UDP itself does not recover from packet loss. Recovery must be implemented at the application layer if needed.

3. **Checksum value of 0x0000**: This indicates the checksum is not being used, and the recipient should not validate it. This is only valid in IPv4; checksums are required in IPv6.



## Additional Resources

- RFC 768: User Datagram Protocol
- Wireshark Wiki: UDP Analysis
- Sample UDP trace files at www.wiresharkbook.com
- Wireshark UDP Dissector documentation
- Online UDP port number registry (IANA)



# Chapter 20: Analyze Transmission Control Protocol (TCP) Traffic



## Learning Objectives

- Understand the purpose and functions of TCP
- Analyze normal TCP communications (handshake, data transfer, teardown)
- Identify and troubleshoot common TCP problems
- Understand TCP sequence and acknowledgment processes
- Interpret packet loss detection and recovery mechanisms
- Analyze TCP flow control and window mechanisms
- Examine TCP packet structure and fields
- Apply Wireshark tools and preferences for TCP analysis



## The Purpose of TCP

- **Connection-oriented transport protocol** 
  - Begins with a handshake between two devices
  - Data is sequenced and acknowledged
  - Ensures proper delivery and recovery for lost packets

- **Supports windowing**
  - Sends multiple packets without waiting for acknowledgment
  - Window size based on network congestion, receiver buffer space, sender buffer capability

- **Used by many protocols**
  - HTTP/HTTPS, FTP, email, etc.



## TCP vs. UDP: A Comparison

| TCP | UDP |
|-----|-----|
| Connection-oriented | Connectionless |
| Sequenced, acknowledged | No sequencing or acknowledgment |
| Reliable delivery | Unreliable delivery |
| Flow control | No flow control |
| Used when reliability required | Used when speed is priority |
| Example: File transfer | Example: Streaming video |



## Analyze Normal TCP Communications

- **Connection establishment** (three-way handshake)
- **Sequence tracking** of data exchange 
- **Data loss recovery** mechanisms
- **Connection teardown** process



## The TCP Three-Way Handshake


- **SYN**: Client sends synchronization packet with Initial Sequence Number (ISN)
- **SYN/ACK**: Server acknowledges and sends own ISN
- **ACK**: Client acknowledges server's ISN
- After handshake, data transfer can begin





<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/OVXYFsuU66O8inxKJuOUQ)





## TCP Connection Refusal

- When TCP-based services are refused:
  - **TCP Reset (RST)**: Target responds with TCP RST packet
  - **ICMP Destination Unreachable**: Target responds with ICMP message
    - Code 1: Host Unreachable
    - Code 2: Protocol Unreachable
    - Code 3: Port Unreachable
    - Code 9-11: Communication administratively prohibited
  - **No response**: SYN may not reach target, or response blocked



## TCP Connection Termination

- **Using FINs (implicit termination)**
  - Each side sends FIN packet to indicate no more data to send
  - Multiple states: FIN-WAIT, CLOSE-WAIT, TIME-WAIT, etc.

- **Using RST (explicit termination)**
  - Abrupt connection termination
  - May be preceded by FINs or standalone

- Use `netstat -a` to see TCP connection states



## TCP Sequence and Acknowledgment Numbers

- **Sequence Number**: Tracks data sent by each host
  - Initial Sequence Number (ISN) chosen during handshake
  - Increments by number of data bytes sent

- **Acknowledgment Number**: Next expected sequence number
  - Acknowledges all data up to that point

- **Key equation**:
  ACK Number = SEQ Number + TCP Payload Length



## TCP Sequence Numbering Example



- Each side maintains own sequence number
- Sequence numbers increment by bytes of data sent
- SYN and FIN packets increment sequence number by 1



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/okaBG46l81Embd7QL1wrz)



## TCP Packet Loss Recovery

Two main mechanisms:

**1. Fast Recovery (detected by receiver)**
   - Receiver notices missing sequence number
   - Sends duplicate ACKs for next expected sequence
   - After 3 duplicate ACKs, sender retransmits

**2. RTO Timeout (detected by sender)**
   - Sender maintains Retransmission Timeout (RTO) timer
   - If no ACK received before timeout, retransmits
   - Uses backoff algorithm (doubles timeout with each retry)



## TCP Selective Acknowledgments (SACK)

- Improves recovery efficiency
- Acknowledges out-of-order segments while still requesting missing ones
- Must be established during TCP handshake by both hosts
- Uses Left Edge and Right Edge values to specify received data ranges
- Reduces unnecessary retransmissions



## TCP Flow Control

- **Congestion Window** limits unacknowledged data
  - Based on three factors:
    - Receiver's advertised buffer space
    - Sender's transmit buffer capability
    - Network congestion/packet loss rate

- **Sliding Window** allows reliable flow control
  - Window "slides" as ACKs are received
  - Allows for pipelining of data



## TCP Receive Window

- **TCP Receive Window**: Buffer space on receiver
  - Advertised in Window field of TCP header
  - Maximum value: 65,535 bytes (without scaling)

- **Window Zero**: Stops data transfer
  - Receiver cannot accept more data
  - Sender must stop until window reopens
  - May indicate application not emptying buffer



## Nagling and Delayed ACKs

- **Nagle Algorithm**: Reduces small packet problem
  - Buffers outgoing TCP data if unacknowledged segment exists
  - Can slow down small data transfers
  - Often disabled by applications needing low latency

- **Delayed ACKs**: Reduces ACK packets
  - ACK sent for every other TCP segment received
  - Or when 200ms timer expires
  - Can cause 200ms delays in communications



## Common TCP Problems

- **Handshake problems**
  - Connection refusal (RST/ACK)
  - Packet loss during handshake
  - Excessive failed connections (potential scan)

- **Data transfer problems**
  - Packet loss and retransmissions
  - Window Zero conditions
  - Delayed ACKs
  - Slow transfers (MSS/Window size issues)



## TCP Packet Structure

![bg width:120% height:auto right](https://cdn.markslides.ai/users/1280/images/ozWdXQr2F0OCdtb_byScM)

- Source and Destination Ports (16 bits each)
- Sequence Number (32 bits)
- Acknowledgment Number (32 bits)
- Data Offset, Reserved, Flags (16 bits)
- Window Size (16 bits)
- Checksum and Urgent Pointer (16 bits each)
- Options (variable length)



## TCP Flags

- **URG**: Urgent data present
- **ACK**: Acknowledgment field valid
- **PSH**: Push function (deliver data immediately)
- **RST**: Reset connection
- **SYN**: Synchronize sequence numbers
- **FIN**: Finish, no more data
- **CWR**: Congestion Window Reduced
- **ECE**: ECN-Echo
- **NS**: Nonce Sum (for ECN)



## TCP Options

- **Maximum Segment Size (MSS)**: Maximum TCP payload size
- **Window Scale**: Multiplier for Window Size field
- **SACK Permitted**: Allows Selective ACKs
- **SACK**: Used during packet loss recovery
- **Timestamps**: For round-trip time calculations and PAWS
- **NOP**: No-Operation (padding)
- **End of Option List**: Terminates options list



## Wireshark TCP Analysis

Wireshark offers extensive TCP analysis features:

- **Relative Sequence Numbers**: Makes analysis easier
- **Window Scaling Calculation**: Shows true window size
- **Bytes in Flight Tracking**: Shows unacknowledged data
- **Conversation Timestamps**: Shows time between packets
- **Stream Reassembly**: Links related segments
- **Expert Notifications**: Highlights TCP issues
- **TCP Analysis Flags**: Marks potential problems



## Wireshark TCP Expert Notifications

Detects and highlights these conditions:

- Lost segments
- Window is full
- Out-of-order segments
- Frozen window
- Duplicate ACKs
- Window updates
- Retransmissions and fast retransmissions



## Useful TCP Display Filters

- `tcp.flags.syn == 1`: SYN packets (connection attempts)
- `tcp.flags.reset == 1`: Reset packets
- `tcp.window_size == 0`: Window zero conditions
- `tcp.analysis.flags`: Packets with TCP issues
- `tcp.analysis.retransmission`: Retransmitted packets
- `tcp.analysis.duplicate_ack`: Duplicate ACKs
- `tcp.analysis.lost_segment`: Lost segment detected
- `tcp.options.wscale_val`: Window scale option packets



## Practice Exercise

- Analyze TCP connections in provided trace files
- Look for:
  - Connection establishment and teardown
  - Sequence/Acknowledgment numbers
  - Window size and scaling factors
  - Packet loss and retransmissions
  - Connection problems
  - TCP options used
- Identify successful vs. failed connections



## Review Questions

1. What is the purpose of TCP?
2. What three packets establish a TCP connection?
3. What is the purpose of Sequence and Acknowledgment numbers?
4. How does a TCP host refuse a connection request?
5. How does a TCP-based application recover from packet loss?
6. What is the maximum value that can be used in the TCP Window field?



## Additional Resources

- RFC 793: Transmission Control Protocol
- RFC 1323: TCP Extensions for High Performance
- RFC 2018: TCP Selective Acknowledgment Options
- RFC 2581: TCP Congestion Control
- Wireshark Wiki TCP Analysis: https://wiki.wireshark.org/TCP-Analysis
- Online TCP/IP Guide: http://www.tcpipguide.com/


# Chapter 21: Graph IO Rates and TCP Trends



## Introduction to Wireshark Graphs

- **Purpose**: Visualize traffic flow trends and spot performance issues
- **Types of Graphs**:
  - Directional (one-way traffic)
  - Bidirectional (traffic in both directions)
- **Common Uses**:
  - Visualize network traffic patterns
  - Identify performance bottlenecks
  - Compare normal vs. problematic traffic
  - Troubleshoot TCP issues



## Basic IO Graphs

- Shows overall traffic in unsaved or saved trace files
- Accessed via: Statistics → IO Graphs
- **Default Settings**:
  - X axis: Tick interval of one second
  - Y axis: Packets/tick
- **Capabilities**:
  - Graph up to five traffic channels
  - Adjust X and Y axis scales
  - Apply display filters to specific channels
  - Click on a point to jump to relevant packets



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/kMmXPBAp6eKUF_zSMFSxN)






## IO Graph Features

### Coloring
- Graph 1: Black
- Graph 2: Red
- Graph 3: Green
- Graph 4: Blue
- Graph 5: Pink

### Styles
- Line
- Impulse
- Fbar
- Dots

### Best Practice
- Consider color assumptions (red for bad, green for good)
- Choose styles that provide clear visualization
- Be mindful of graph layering (Graph 1 is foreground)



## IO Graph Axis Settings

### X Axis Options
- Time intervals: 0.001s to 10 minutes
- Pixels per tick: 1, 2, 5, or 10
- View as Time of Day option

### Y Axis Options
- Packets/Tick
- Bytes/Tick
- Bits/Tick
- Advanced (launches Advanced IO Graph)

### Scale Options
- Auto (default)
- Fixed (10 to 2 billion)
- Logarithmic (useful for comparing values of different magnitudes)



## Advanced IO Graph Features

- **Calc Options**:
  - SUM(*): Adds up field values
  - MIN(*): Plots minimum field values
  - AVG(*): Plots average field values
  - MAX(*): Plots maximum field values
  - COUNT(*): Counts occurrences
  - LOAD(*): Measures response time fields

- **Applications**:
  - Plot TCP data (tcp.len)
  - Track TCP sequence numbers (tcp.seq)
  - Count retransmissions, DUP ACKs, etc.
  - Measure response times






<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/NK3HEgd0GxPj7-7lvWXg6)



## TCP Round Trip Time Graphs

- Plots time between data packet and corresponding ACK
- Accessed via: Statistics → TCP Stream Graph → Round Trip Time Graph
- **Key Characteristics**:
  - Unidirectional (select appropriate packet)
  - Y axis: Round trip time in seconds
  - X axis: TCP sequence number
- **Interpretation**:
  - Vertical stripes often indicate packet loss or queuing
  - Click points to investigate specific issues
  - Use +/- keys to zoom in/out



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/dnGBI_5_8cYI31ildA87O)



## TCP Throughput Graphs

- Shows data transfer rates
- Accessed via: Statistics → TCP Stream Graph → Throughput Graph
- **Key Characteristics**:
  - Unidirectional (select appropriate packet)
  - Similar to IO Graph but plots with dots only
  - Y axis: bytes per second
  - X axis: time
- **Usage**:
  - Compare throughput of different connections
  - Identify periods of reduced data transfer



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/uDHrHr56jZNgSH81_-917)





## TCP Time-Sequence Graphs

- Visualizes TCP sequence numbers over time
- Two types:
  - Time-Sequence Graph (Stevens)
  - Time-Sequence Graph (tcptrace) - more information
- **Ideal Pattern**: Smooth diagonal line from lower left to upper right
- **Key Elements**:
  - "I bars" represent TCP segments (taller = more data)
  - Unidirectional (select appropriate packet)
  - Grey line shows receive window size


![bg ](https://cdn.markslides.ai/users/1280/images/aUk8U4RmyuyumY0qDCA_q)



## Interpreting TCP Window Size Issues

- **Window Size**: Advertises buffer space available
- **Window Zero Condition**:
  - Grey line meets the I bars
  - Indicates receiver can't accept more data
  - Data transfer stops until window opens
- **Window Probe Packets**:
  - Sent to check if window has opened
- **Window Scaling Graph**:
  - Plots calculated window size from each packet



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/VNaFWameZdKE-YRRkRBvY)



## Detecting Packet Loss and Retransmissions

- **Upstream from packet loss**:
  - See duplicate I bars (same sequence number at different times)
- **Downstream from packet loss**:
  - Gaps in I bars (skipped sequence numbers)
- **Duplicate ACKs**:
  - Appear as numerous ticks along receive line
  - May indicate high path latency
- **Retransmissions**:
  - Fast retransmit: Follows Duplicate ACKs
  - Timeout retransmit: Not preceded by Duplicate ACKs



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/O7VeZs925mKR5Nlroj2pC)






## Case Study: Watching Performance Levels Drop

- **Issue**: Users complaining about intermittent lockups when accessing Internet
- **Observation**: TCP Zero Window followed by TCP reset after ~10 seconds
- **Investigation**: 
  - Examined client machines during complaints
  - Found Dropbox synchronizing folders when problems occurred
- **Root Cause**: Dropbox consuming resources, preventing data from being pulled from TCP buffer
- **Resolution**: Disabled Dropbox on affected systems
- **Lesson**: Client-side applications can cause resource contention affecting TCP performance



## Case Study: Graphing RTT to Corporate Office

- **Goal**: Compare round trip times between branch offices and headquarters
- **Method**: Used AVG(*) with tcp.analysis.ack_rtt for three branch networks
- **Finding**: Two networks (10.2 and 10.4) showed higher RTT than 10.3
- **Further Analysis**:
  - Created additional graphs separating traffic by port/protocol
  - Discovered SMB traffic experiencing higher RTT than HTTP/NTP
- **Root Cause**: QoS configurations altered for VoIP rollout, deprioritizing port 445
- **Resolution**: IT team adjusted QoS settings
- **Result**: Users noticed immediate performance improvement



## Case Study: Testing QoS Policies

- **Task**: Set up QoS policy to limit external partner bandwidth on 100Mbps link
- **Test Approach**:
  - Lab setup simulating hosts on both ends
  - Used Wireshark to monitor traffic in the middle
  - Generated traffic exceeding allowed bandwidth
  - Tested multiple scenarios
- **Output**: Generated graphs for management to visualize policy enforcement
- **Value**: Verified QoS functionality before production implementation



## Tips for Effective Graph Usage

1. **Choose the right graph** for your analysis needs
2. **Apply appropriate filters** to focus on relevant traffic
3. **Adjust axis settings** for clearer visualization
4. **Use logarithmic scale** when comparing values of different magnitudes
5. **Click on graph points** to jump to relevant packets
6. **Export graphs** as images for documentation
7. **Compare baseline** to problematic trace files
8. **Consider color coding** for easier interpretation
9. **Zoom in/out** to focus on specific time periods
10. **Combine multiple graph types** for comprehensive analysis



## Summary

- **IO Graphs**: Visualize overall traffic patterns
- **Advanced IO Graphs**: Apply calculations and filters for detailed analysis
- **Round Trip Time Graphs**: Track latency between data and ACKs
- **Throughput Graphs**: Plot data transfer rates
- **Time-Sequence Graphs**: Visualize TCP sequence numbers, window size issues, packet loss
- **Key Benefits**:
  - Quickly identify performance bottlenecks
  - Visually communicate network issues
  - Compare normal vs. abnormal traffic patterns
  - Pinpoint timing of network events



## Practice Exercises

- **http-download-bad.pcapng**: Create IO Graphs for packet loss, DUP ACKs, retransmissions
- **http-download-good.pcapng**: Compare with previous file using same graphs
- **http-downloadvideo.pcapng**: Analyze window size issues
- **net-latency-au.pcapng**: Graph delays between packets
- **sec-clientdying.pcapng**: Identify SACK support
- **smb-filexfer.pcapng**: Analyze Expert issues
- **tcp-bad-download-again.pcapng**: Create proper TCP Time-Sequence graph
- **tcp-uploadproblem-largefile.pcapng**: Detect TCP issues in encrypted traffic
- **tcp-youtubebad.pcapng**: Use Window Scaling graph to analyze window size changes
- **udp-mcastream-queued2.pcapng**: Identify queuing issues
- **xfersmerged2.pcapng**: Differentiate traffic from merged trace files



## Review Questions

1. How much of a packet is counted when plotting an IO Graph?
2. What is the likely cause of an empty graph?
3. How can you use an IO Graph to plot overall traffic compared to a single conversation?
4. What is the purpose of the SUM(*) calculation in an advanced IO Graph?
5. On what data is the Round Trip Time graph based?
6. What is an ideal pattern to see in a TCP Time-Sequence graph?



## Answers to Review Questions

1. IO Graphs count the total packet size, including headers and data.
2. Empty graphs usually indicate selecting a unidirectional graph but choosing a packet flowing in the wrong direction.
3. Apply a filter to a specific graph channel while leaving another unfiltered to compare overall traffic to a conversation.
4. SUM(*) adds up the value of a field for all instances during the tick interval (e.g., tcp.len to measure TCP payload).
5. Round Trip Time graphs plot the time between a TCP data packet and its corresponding ACK.
6. An ideal TCP Time-Sequence graph shows a smooth diagonal line from the lower left to the upper right corner.



## Additional Resources

- Wireshark User's Guide: TCP Analysis
- Wireshark Wiki: TCP Analysis
- PacketLife.net: TCP Analysis with Wireshark
- SANS Institute: TCP/IP Analysis and Troubleshooting with Wireshark
- Protocol Analysis Institute: Advanced TCP Analysis
- YouTube: Wireshark TCP Analysis Tutorials
- Wireshark Support Forums: Graph Usage and Interpretation


#  Chapter 22 - Analyzing DHCP Traffic



## The Purpose of DHCP

- **DHCPv4**: Used on IPv4 networks (simply referred to as DHCP)
- **DHCPv6**: Used on IPv6 networks

- Enables clients to obtain IP addresses and configuration dynamically
- Based on BOOTP (for DHCPv4)
- Uses UDP for connectionless services
  - Client port: 68 (DHCPv4) / 546 (DHCPv6)
  - Server port: 67 (DHCPv4) / 547 (DHCPv6)
- Defined in RFC 2131 (DHCPv4) and RFC 3315 (DHCPv6)



## Normal DHCP Traffic Flow

**When client is outside its lease time:**
1. DHCP Discover (broadcast from client)
2. DHCP Offer (server response with configuration)
3. DHCP Request (client accepts offer)
4. DHCP Acknowledgment (server confirms)

**When client is inside its lease time:**
1. DHCP Request (client renewal)
2. DHCP Acknowledgment (server confirms)



## DHCP 4-Way Handshake (Visual)


```
CLIENT                                SERVER
  |                                     |
  |---- 1. DHCP Discover (Broadcast)--->|
  |                                     |
  |<---- 2. DHCP Offer (Unicast) -------|
  |                                     |
  |---- 3. DHCP Request (Broadcast)---->|
  |                                     |
  |<---- 4. DHCP Acknowledgment --------|
  |                                     |
```



![bg](https://cdn.markslides.ai/users/1280/images/xXKerdeUeHTs7PN-2Znu5)



## DHCP Message Types

1. **DHCP Discover** - Client broadcast to locate servers
2. **DHCP Offer** - Server response with configuration parameters
3. **DHCP Request** - Client accepting parameters or renewing lease
4. **DHCP Decline** - Client indicating address not acceptable
5. **DHCP Acknowledgment** - Server confirming parameters
6. **DHCP Negative Acknowledgment** - Server indicating incorrect address
7. **DHCP Release** - Client relinquishing address
8. **DHCP Informational** - Client requesting only local configuration



## DHCP Lease Timers

During address assignment, client obtains three time values:

- **Lease Time (LT)**: Total duration client can use the IP address
- **Renewal Time (T1)**: 0.5 × LT - Client sends unicast renewal request
- **Rebind Time (T2)**: 0.875 × LT - Client broadcasts renewal request

If LT expires without renewal, client returns to uninitialized state



## DHCP Lease Timeline (Visual)


```
Address      T1 (Renewal)     T2 (Rebinding)    Lease
Assignment   0.5 × Lease      0.875 × Lease     Expiration
    *            *                 *                *
    |------------|-----------------|----------------|
                 |                 |
          Unicast Renewal    Broadcast Renewal
```

- At T1: Client sends unicast renewal request to original server
- At T2: Client broadcasts renewal request to any available server
- At Lease Expiration: Client must stop using address and restart DHCP process




![DHCP Lease Timeline](https://cdn.markslides.ai/users/1280/images/A1kajowcnVPaGziKSv39D)




## DHCP Relay Agents

- Forward messages between DHCP clients and servers
- Required when DHCP server is not on the client's network segment
- Relay Agents add their IP address to DHCP messages
- Enable centralized DHCP server management across multiple subnets



## DHCP Relay Setup (Visual)



```
 DHCP Client        Relay Agent        DHCP Server
 (192.168.1.x)      (10.0.0.x)         (172.16.0.x)
     [PC]               [R]                [SRV]
       |                 |                   |
       |--DHCP Request-->|                   |
       |                 |--DHCP Request---->|
       |                 |                   |
       |                 |<---DHCP Reply-----|
       |<--DHCP Reply----|                   |
```

- Relay agent adds its IP address to the "Relay Agent IP" field
- DHCP server responds to the relay agent, not directly to client
- Relay agent forwards server response to correct client subnet



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/kgPiLyJ6ldHa1I_ALjOyV)



## Common DHCP Problems

- DHCP server unavailable
- IP address conflicts with statically assigned addresses
- Duplicate address assignments
- Relay agent misconfiguration
- Lease expiration without renewal



## DHCP Packet Structure

Key fields:
- **Message Type/Opcode**: 1 (request) or 2 (reply)
- **Hardware Type**: Type of hardware address (0x0001 for Ethernet)
- **Transaction ID**: Matches requests and responses
- **Client IP Address**: Filled in after assignment
- **Your (Client) IP Address**: Address offered by server
- **Client MAC Address**: Hardware address of requesting client
- **Magic Cookie**: 0x63825363 indicates DHCP options follow
- **Options**: IP address and configuration parameters




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:50% height:auto](https://cdn.markslides.ai/users/1280/images/6TaxtMbaZsRqa4dOJNjE5)



## Introduction to DHCPv6

- Uses ports 546 (client) and 547 (server)
- No broadcasts - uses multicast address ff02::1:2 for "All_DHCP_Relay_Agents_and_Servers"
- Basic sequence:
  1. DHCPv6 Solicit (client) → multicast
  2. DHCPv6 Advertise (server) → unicast
  3. DHCPv6 Request (client) → unicast
  4. DHCPv6 Reply (server) → unicast




![bg width:80%](https://cdn.markslides.ai/users/1280/images/fbMwNojklvsZVbxjtKFgd)



## DHCPv6 Message Types

- Solicit/Advertise/Request/Reply (basic sequence)
- Confirm: Client checking if addresses still appropriate
- Renew/Rebind: Similar to DHCPv4 process
- Release/Decline: Client giving up address
- Reconfigure: Server requesting client to get new info
- Information-Request: Client requesting config without address
- Relay-Forward/Relay-Reply: For relay agent communications



## Analyzing DHCP in Wireshark

- **Statistics**: Use BOOTP-DHCP Statistics window (DHCPv4 only)
- **Capture Filters**:
  - DHCPv4: `port 67 or port 68`
  - DHCPv6: `port 546 or port 547`
- **Display Filters**:
  - DHCPv4: `bootp`
  - DHCPv6: `dhcpv6`



## DHCP Display Filter Examples


- `bootp.option.value==0`: DHCPv4 Discover messages
- `bootp.option.value==4`: DHCPv4 Decline messages
- `bootp.hw.mac_addr==00:1b:9e:70:10:42`: DHCP for specific client
- `bootp.option.type==12`: Messages with hostname option
- `bootp.ip.relay!=0.0.0.0`: Messages via relay agent
- `dhcpv6.msgtype==9`: DHCPv6 Decline messages



![bg width:80%](https://cdn.markslides.ai/users/1280/images/PbpW60QybSqokshIKfmH0)



## Case Study: Declining Clients


**Problem**: Multiple hosts unable to get IP addresses
**Analysis**: 
- Client declines offered IP address after initial acceptance
- Further investigation showed address conflict with statically assigned printer
- DHCP server not checking if addresses already in use

**Solution**: 
- Configured DHCP server with static entries for printers
- Prevented server from offering those addresses to clients



![bg width:70%](https://cdn.markslides.ai/users/1280/images/Z7JZl-Rv5izY3r6zdd0xY)



## Practice Exercises


Sample trace files for practice:
- **dhcp-addressproblem.pcapng**: Server issue affecting clients
- **dhcp-boot.pcapng**: Standard DHCP communication
- **dhcp-decline.pcapng**: Client declining offered address
- **dhcp-jerktakesaddress.pcapng**: Client behavior when server is down
- **dhcp-relay-serverside.pcapng**: DHCP relay agent communication
- **dhcp-renewtorebind.pcapng**: Client renewal failure
- **pcaprnet-dhcpv6-decline.pcapng**: DHCPv6 decline message



## Review Questions


1. What is the purpose of DHCP?
2. What is the DHCP traffic sequence when a client boots outside its lease time?
3. What is the purpose of a DHCP Decline packet?
4. Why would a DHCP client enter the rebinding phase?
5. What is the syntax for capture and display filters for DHCPv4 and DHCPv6?
6. What is the IPv6 destination address used for DHCPv6 Solicit messages?



## Answers to Review Questions


1. DHCP enables clients to obtain IP addresses and configuration dynamically
2. Discover—Offer—Request—Acknowledge sequence
3. Sent when client believes offered address is already in use
4. When renewal process is unsuccessful (no response to unicast requests)
5. Capture: `port 67/68` (v4), `port 546/547` (v6) | Display: `bootp` (v4), `dhcpv6` (v6)
6. ff02::1:2 (All_DHCP_Relay_Agents_and_Servers multicast address)



## Additional Resources


- RFC 2131: DHCPv4 Specification
- RFC 3315: DHCPv6 Specification
- www.iana.org/assignments/bootp-dhcp-parameters: Complete DHCP parameters
- Wireshark Wiki: DHCP analysis tutorials
- Protocol field reference for BOOTP/DHCP in Wireshark documentation



# Chapter 23: Analyze Hypertext Transfer Protocol (HTTP) Traffic



## The Purpose of HTTP

- **HTTP (Hypertext Transfer Protocol)**:
  - "Distributed hypermedia information distribution application"
  - Application protocol for web browsing (unsecured)
  - Uses **request/response model**
  
- **HTTP Versions**:
  - HTTP v1.0 (older)
  - HTTP v1.1 (current) - RFC 2616

- **Transport Protocol**:
  - Uses TCP (typically port 80)
 



<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/D3ICNfyhqBSAwbqgHS4ll)







## Normal HTTP Communications

- **Communication Pattern**:
  - Client sends requests
  - Server responds with status codes
  - Uses TCP three-way handshake
  
- **Default HTTP Ports in Wireshark**:
  - 80, 3128, 3132, 5985, 8080, 8088, 11371, 1900, 2869
  - Additional ports can be added in preferences



## HTTP Status Codes

- **1xx - Informational**:
  - 100 Continue
  - 101 Switching Protocols

- **2xx - Success**:
  - 200 OK
  - 201 Created
  - 206 Partial Content

- **3xx - Redirection**:
  - 301 Moved Permanently
  - 304 Not Modified
  - 307 Temporary Redirect




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/YKRwFUcY7rJjZEfU17hwg)



## HTTP Status Codes (continued)

- **4xx - Client Error**:
  - 400 Bad Request
  - 401 Unauthorized
  - 403 Forbidden
  - 404 Not Found

- **5xx - Server Error**:
  - 500 Internal Server Error
  - 502 Bad Gateway
  - 503 Service Unavailable
  - 504 Gateway Timeout



## Wireshark TCP Reassembly Setting

- **Important Setting**: "Allow subdissector to reassemble TCP streams"
  - When enabled: Shows HTTP commands and responses, but not data packets
  - When disabled: Shows all HTTP commands, responses, and data packets
  - Located in Preferences → Protocols → TCP

- **Setting for HTTP Analysis**:
  - Disable to see HTTP requests/responses clearly in Packet List pane
  - Enable for following HTTP streams or exporting objects



## Common HTTP Problems

- **Site Name Resolution Issues**:
  - DNS Name Error
  - Always examine DNS traffic for web browsing problems

- **HTTP Daemon Issues**:
  - If not running: Server responds with TCP RST/ACK to client's SYN
  - No connection established
  - Similar pattern to port scan responses

- **Missing Pages/Content**:
  - 404 Not Found errors (client error code)
  - Redirection services may replace standard 404 message



## HTTP Server Errors

- **500-Level Errors**:
  - 500 Internal Server Error
  - Often indicates database or server infrastructure problems
  - Not a client or network issue

- **Permission/Configuration Errors**:
  - 403 Forbidden
  - May indicate server-side misconfiguration

- **Troubleshooting Priority**:
  - Look for TCP errors first
  - Then focus on HTTP-specific issues



## HTTP Packet Structure

- **Variable Length Packets**
- **HTTP Requests contain**:
  - Method (defines purpose)
  - Target host
  - Browser details
  - Accepted data types/formats

- **HTTP Responses contain**:
  - Status code (numerical response)
  - Headers
  - Content (if applicable)



## HTTP Methods

- **GET**: Retrieves information defined by URI
- **HEAD**: Retrieves metadata related to URI
- **POST**: Sends data to the HTTP server
- **OPTIONS**: Determines options for a resource
- **PUT**: Sends data to the HTTP server
- **DELETE**: Deletes resource defined by URI
- **TRACE**: Invokes remote loopback (often disabled)
- **CONNECT**: Connects to a proxy device



## HTTP Request Modifiers

- **Host**: Required in all HTTP/1.1 requests (identifies target host)
- **Accept**: Acceptable content types
- **Accept-Encoding**: Acceptable encodings
- **Authorization**: Authentication credentials
- **Cache-Control**: Caching directives
- **Cookie**: HTTP cookie
- **Content-Length**: Length of request body
- **User-Agent**: Browser and OS information
- **Referer**: Address of previous website



## HTTP Filtering

**Capture Filter for HTTP/HTTPS**:
```
tcp port http or tcp port https
```

**Display Filters**:
- `http` - Show HTTP packets only (no TCP handshake)
- `tcp.port==80` - All packets in HTTP session

**Common Mistake**:
- Using `http` filter excludes TCP handshake and ACKs




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/Gmg9SUe7vHTBL694_upF7)




## HTTP Filter Effectiveness

| Filter | TCP Reassembly: On | TCP Reassembly: Off |
|--------|---------------------|---------------------|
| `http` | Partial view: commands and response codes visible. No data packets, No TCP handshake/FIN/RST/ACK | Partial view: commands, response codes, and data visible. No TCP handshake/FIN/RST/ACK |
| `tcp.port==80` | Total view of all packets | Total view of all packets |



## HTTP-Specific Filters

- `http.request.method=="GET"` - HTTP GET requests
- `http.response.code > 399` - HTTP client or server errors
- `http contains "IfModified-Since"` - Cached pages
- `http.host=="www.wireshark.org"` - Target host filter
- `http.user_agent contains "Firefox"` - Browser filter
- `http.referer contains "wireshark.org"` - Referrer filter
- `tcp.port==443` - HTTPS traffic



## Exporting HTTP Objects

- **File > Export Objects > HTTP**
  - Saves downloaded objects with original names
  - Requires "Allow subdissector to reassemble TCP streams"

- **Usage**:
  - Select single object with "Save As"
  - Export all objects (may be time-consuming for busy sites)

- **Applications**:
  - Forensics
  - Content verification
  - Malware analysis



## HTTP Statistics

- **Statistics > HTTP**
  - Can apply display filters to statistics

- **Three types**:
  1. **HTTP Load Distribution**
     - Shows requests/responses by server
     - Excellent for finding redirections and dependencies

  2. **HTTP Packet Counter**
     - Shows status code distribution
     - Easily spot client or server errors

  3. **HTTP Requests**
     - Lists each requested item by server



## Flow Graphs for HTTP

- **Statistics > Flow Graph**
  - Visual representation of HTTP communication
  - Each host gets a column, each packet a row
  - Ideal for troubleshooting slow web browsing

- **Flow Graph Options**:
  - Packets: All packets or displayed packets
  - Flow Type: General flow or TCP flow
  - Node Address: Standard or network addresses

- **Advantages**:
  - Highlights dependencies between servers
  - Shows sequencing of requests and responses



## HTTPS Communications

- **HTTPS**: HTTP over TLS/SSL
  - Uses port 443 by default
  - RFC 2818 defines HTTP over TLS
  - TLS 1.0 based on SSL 3.0 (with minor differences)

- **HTTPS Process**:
  1. TCP handshake
  2. TLS handshake (secure connection)
  3. Encrypted HTTP communication

- **Wireshark Setting for HTTPS**:
  - Enable "Allow subdissector to reassemble TCP streams"



## TLS Handshake Process

- **Content Type 22 (Handshake)**
  - Filter: `ssl.record.content_type==22`

- **Handshake Components**:
  - Session identifier
  - Peer certificate (X509)
  - Compression method
  - Cipher spec (encryption algorithm)
  - Master secret (48-byte shared secret)





<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/xWwCLd3pUSetBfbtyW2s5)



## TLS Handshake Steps

1. **Client Hello**:
   - TLS version
   - Random bytes (for key generation)
   - Session ID (0 for new sessions)
   - Supported cipher suites
   - Extensions (e.g., server name)

2. **Server Response**:
   - Server Hello
   - Certificate
   - Server Hello Done
   - Selected cipher suite



## TLS Handshake Steps (continued)

3. **Client Key Exchange**:
   - Premaster secret computed from random values
   - Change Cipher Spec (future messages encrypted)

4. **Server Finalization**:
   - Change Cipher Spec (future messages encrypted)
   - Handshake complete

5. **Encrypted Communication Begins**



## TLS Encrypted Alerts

- **Content Type 21 (Alert)**
  - Usually `close_notify` alerts
  - Followed by TCP FIN or Reset packets

- **Common Alert Types**:
  - `close_notify` (0) - Normal closure
  - `handshake_failure` (40)
  - `certificate_expired` (45)
  - `internal_error` (80)

- **Fatal Alerts**:
  - Terminate the connection
  - Often generate client-visible errors



## Decrypting HTTPS Traffic

- **Requirements**:
  - Server's private RSA key
  - Configure Wireshark to use the key

- **Configuration Steps**:
  1. Place key file in accessible location
  2. Configure in Preferences > Protocols > SSL
  3. Add RSA keys list entry:
     - IP address
     - Port
     - Protocol
     - Key file path



## Decrypted HTTPS Results

- **Results After Decryption**:
  - HTTP traffic appears in Protocol column
  - Can use "Follow SSL Stream"
  - "Decrypted SSL data" tab appears in Packet Bytes pane

- **Export SSL Keys**:
  - File > Export SSL Session Keys



## Practice Exercise

- **Trace Files to Analyze**:
  - `http-500error.pcapng` - Server error example
  - `http-espn2007.pcapng` - Multiple redirections
  - `http-facebook.pcapng` - Multiple GET requests
  - `https-justlaunchpage.pcapng` - HTTPS handshake example
  - `http-winpcap.pcapng` - Browser caching example

- **Tasks**:
  - Filter for HTTP errors
  - Count redirections
  - Analyze page load performance
  - Examine cipher suite selection



## Review Questions

1. What HTTP response code indicates the page was found locally?
2. How is an HTTP 404 Not Found categorized?
3. How can you determine a client is loading web pages from cache?
4. What display filter should you avoid when viewing the TCP handshake?
5. What HTTP method is used to send data to a server?
6. What filter syntax should you use for HTTP traffic on port 80?
7. How do you configure Wireshark to recognize port 444 as SSL/TLS?
8. What steps are required to decrypt HTTPS traffic?
9. Which side offers cipher suites and which selects them?



## Answers to Review Questions

1. HTTP 200 OK
2. Client error (4xx category)
3. Look for "IfModified-Since" request or 304 Not Modified response
4. The `http` filter (use `tcp.port==80` instead)
5. HTTP POST method
6. Capture: `tcp port http`, Display: `http` or `tcp.port==80`
7. Edit Preferences > Protocols > HTTP > SSL/TLS Ports
8. Obtain server private key, configure in Wireshark SSL preferences
9. Client offers cipher suites, server selects



## Additional Resources

- RFC 2616: HTTP/1.1 Specification
- RFC 2818: HTTP over TLS
- www.iana.org/assignments/http-status-codes
- www.phonefactor.com/sslgap (TLS vulnerability info)
- Wireshark Wiki HTTP page
- Wireshark User's Guide - HTTP/HTTPS sections
- SSL/TLS Decryption documentation



# Chapter 24: Analyzing File Transfer Protocol (FTP) Traffic




### Learning Objectives

By the end of this session, students should be able to:
1. Understand the purpose and architecture of FTP
2. Differentiate between active and passive mode FTP connections
3. Analyze FTP traffic using Wireshark filters
4. Identify common FTP problems and security concerns
5. Reassemble files transferred via FTP
6. Recognize FTP command and response codes




### Required Materials

- Sample packet captures:
  - ftp-bounce.pcapng
  - ftp-clientside.pcapng
  - ftp-download-good.pcapng
  - ftp-download-good2.pcapng
  - ftp-filesizeproblem.pcapng
  - ftp-ioupload-partial.pcapng
  - ftp-pasv-fail.pcapng




## The Purpose of FTP

- File Transfer Protocol (FTP) is used to transfer files over TCP (port 21)
- Defined in RFC 959
- Contrasts with TFTP (Trivial File Transfer Protocol) which uses UDP
- Two-channel architecture:
  - Command channel (control connection) - typically port 21
  - Data channel - dynamic ports (specification says port 20, but reality differs)



## FTP Connection Flow

1. TCP handshake establishes command channel to server port 21
2. Client waits for banner from server
3. Client issues commands, server responds with numerical codes
4. For file transfers, a secondary data channel is established



## FTP Client Commands

| Command | Description |
|---------|-------------|
| USER | Identifies the user accessing the FTP server |
| PASS | Indicates the user's password |
| CWD | Change working directory |
| QUIT | Terminates the connection |
| PORT | Sets up data connection (active mode) |
| PASV | Requests server to listen on data port (passive mode) |
| TYPE | Indicates type of data to be transferred |
| RETR | Retrieve file (GET translated to RETR) |
| STOR | Send file (PUT translated to STOR) |
| DELE | Delete a file |
| RMD/MKD | Remove/Make directory |
| PWD | Print working directory contents |
| NLST | Name list—displays directory on server |



## FTP Server Response Codes

*[Display ftp-response-codes.svg diagram here]*

- 1xx: Positive Preliminary reply
- 2xx: Positive Completion reply
- 3xx: Positive Intermediate reply
- 4xx: Transient Negative Completion reply
- 5xx: Permanent Negative Completion reply

Key examples:
- 220: Service ready for new user
- 227: Entering Passive Mode (h1,h2,h3,h4,p1,p2)
- 230: User logged in, proceed
- 331: User name okay, need password
- 530: Not logged in/Password not accepted





<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:80% height:auto](https://cdn.markslides.ai/users/1280/images/Ck32VHoDjaN7rfc4Mc2hr)








## Active vs. Passive Mode

**Active Mode (PORT)**
- Client sends PORT command with IP and port to listen on
- Server initiates connection to client for data transfer
- Can be problematic with firewalls and NAT

**Passive Mode (PASV)**
- Client sends PASV command
- Server responds with IP and port it will listen on
- Client initiates data connection to server
- Better for clients behind firewalls




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/iUMjBt5sOBWr56QY4hXVO)



## Analyzing Passive Mode Connections

1. Client issues PASV command
2. Server responds with code 227 including IP and port
3. Client initiates data connection to specified IP:port
4. Data transfers over this secondary connection

Display filter: `ftp || ftp-data`

*Instructor Note: Demonstrate using the ftp-download-good2.pcapng file*



## Analyzing Active Mode Connections

1. Client issues PORT command with client's IP and port
2. Server acknowledges with code 200
3. Server initiates data connection to client's specified IP:port
4. Data transfers over this secondary connection

*Instructor Note: Demonstrate using the ftp-clientside.pcapng file*



## Common FTP Problems

- TCP handshake issues (server not running FTP daemon)
- Firewall blocking passive mode connections
- Configuration issues (wrong ports)
- Security concerns (bounce attacks)
- Authentication failures

*Instructor Note: Demonstrate using ftp-pasv-fail.pcapng and ftp-bounce.pcapng*



## FTP Packet Structure

**Command Channel**
- Commands follow immediately after TCP header
- Some commands include arguments (USER, PASS, RETR, etc.)
- Responses contain numerical code and text

**Data Channel**
- Pure data following TCP header
- No extra commands




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/LslZULxtsDNuBpAcsscws)



## Filtering on FTP Traffic


**Capture Filters**
- Command channel: `tcp port 21`
- Data channel (if port 20): `tcp port 20`

**Display Filters**
- Command traffic: `ftp`
- Data traffic: `ftp-data`
- Login attempts: `ftp.request.command=="USER" || ftp.request.command=="PASS"`
- Successful logins: `ftp.response.code==230`
- Passive mode requests: `ftp.request.command=="PASV"`

*Instructor Note: Demonstrate several of these filters on the sample capture files*




<!-- _header: '' -->
<!-- _footer: '' -->

![bg width:100% height:auto](https://cdn.markslides.ai/users/1280/images/QqjpCn6dzA-40JjbQrPwi)




## Reassembling FTP Traffic

1. Follow TCP Stream on the data channel
2. Define format as raw
3. Choose Save As
4. If possible, use original filename from command channel

*Instructor Note: Demonstrate reassembly with ftp-download-good.pcapng*



## Case Study: Secret FTP Communications

- New Windows XP laptop making unexpected FTP connections
- Connected to rockford.discoverconsole.com with username "discover"
- Discovered HP pre-installed "value-added" games auto-updating
- Users complained of slow startup times
- Important to analyze new systems immediately after setup

**Key Takeaways:**
- Even new systems can have unexpected network activity
- Preinstalled software may create security/privacy concerns
- Clear-text protocols reveal sensitive information
- Always verify network activity on new systems




## Practice Exercises

**Walkthrough with Students:**

Analyze provided packet captures with specific objectives:

1. **ftp-bounce.pcapng**
   - Identify the server message
   - Create display filters for FTP errors
   - Discuss security implications of bounce attacks



2. **ftp-download-good.pcapng**
   - Determine transfer mode (active vs passive)
   - Identify file type being transferred
   - Demonstrate file reassembly process
   - Point out the "hidden humor" in the file



3. **ftp-download-good2.pcapng**
   - Set time display format to analyze performance
   - Calculate total download time
   - Identify any packet loss or retransmissions


5. **ftp-filesizeproblem.pcapng and ftp-pasv-fail.pcapng**
   - Diagnose why transfers failed
   - Identify network/configuration issues



*Instructor Note: Allow students to analyze in small groups, then review findings together*



## Review Questions

1. What is the purpose of FTP?
2. What are the two connections used for in FTP communications?
3. What is the purpose of the FTP PORT command?
4. What is the purpose of the FTP PASV command?
5. How secure is FTP traffic?
6. What is the syntax for capture and display filters for FTP command traffic running over port 21?

*Instructor Note: Use these as discussion points or a quick quiz to reinforce learning*



## Answers to Review Questions

1. FTP is used to transfer files over TCP connections.
2. FTP uses a command channel for control commands and a data channel for transferring files or directory listings.
3. The PORT command is used for active mode FTP; the client specifies IP and port for the server to connect to.
4. The PASV command is used for passive mode FTP; the client requests the server to listen on a port for the client to connect to.
5. FTP is not secure - usernames, passwords, and data are transmitted in clear text.
6. Capture filter: `tcp port 21`; Display filter: `ftp`



## Additional Resources

- RFC 959: File Transfer Protocol specification
- Wireshark Wiki: https://wiki.wireshark.org/FTP
- The Wireshark Network Analysis Book (Chapter 10: Follow Streams and Reassemble Data)
- IETF FTP Extensions documentation
- SANS Reading Room - "FTP Security Considerations"

*Instructor Note: Emphasize that while FTP is declining in usage due to security concerns, understanding its protocol structure provides foundational knowledge for analyzing other application protocols*
