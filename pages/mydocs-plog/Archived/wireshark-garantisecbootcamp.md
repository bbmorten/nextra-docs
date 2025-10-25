#  Garanti BBVA Güvenlik Akademisi 301 Dersleri Network Security Part 3

##  Wireshark Introduction

### Introduction

Wireshark is a highly versatile and widely acclaimed open-source protocol analyzer. It is employed by network professionals around the world for network analysis, troubleshooting, software and communications protocol development, and education. This showcase aims to provide insights into its capabilities, focusing predominantly on packet dissections, filters, and numerous features that make Wireshark the tool of choice for network analysis.

### Outline

#### I. Overview of Wireshark

   a. Brief History & Evolution
   b. Purpose and Primary Use Cases
   c. User Interface Overview

#### II. Core Features

   a. Deep Packet Analysis
   b. Protocol Hierarchy Statistics
   c. Flow Graph Analysis
   d. IO Graph Analysis

#### III. Packet Dissection

   a. Definition and Importance
   b. Handling Different Protocols
      i. TCP/IP
      ii. HTTP/HTTPS
      iii. DNS
   c. Detailed Packet Views
   d. Reassembling Packet Fragments
   e. Decrypting SSL/TLS Sessions

#### IV. Filters

   a. Importance of Filtering
   b. Types of Filters
      i. Capture Filters
      ii. Display Filters
   c. Creating Custom Filters
   d. Advanced Filtering Techniques
   e. Analyzing Filtered Results

#### V. Advanced Features

   a. Remote Packet Capture
   b. Exporting and Importing Packet Data
   c. Command-Line Interface (TShark)
   d. Customization and Extensibility

#### VI. Case Studies & Examples

   a. Identifying Malicious Activity
   b. Diagnosing Network Issues
   c. Protocol Development and Verification

#### VII. Conclusion

   a. Summary of Wireshark's Capabilities
   b. Its Role in Network Analysis and Development
   c. Future Developments and Updates

### Detailed Outline

#### I. Overview of Wireshark

- Briefly cover the inception of Wireshark and its evolution.
- Introduce the audience to its fundamental purpose and where it is predominantly used.
- Present an overview of the interface and navigational elements of Wireshark.

#### II. Core Features

- Discuss the depth to which Wireshark can analyze packets and the information that can be gleaned from this.
- Introduce the protocol hierarchy and how it aids in analyzing traffic.
- Explain how flow graphs are used to visualize data communication.
- Discuss the importance of IO Graphs for analyzing network performance over time.

#### III. Packet Dissection

- Define packet dissection and its relevance in network analysis.
- Delve into the dissection of different protocols and the details that can be uncovered.
- Discuss how Wireshark presents packet information in detailed views and how to interpret it.
- Cover how Wireshark handles fragmented packets and how it can reassemble them for analysis.
- Discuss the ability of Wireshark to decrypt SSL/TLS sessions and why it is crucial.

#### IV. Filters

- Discuss the necessity of filters in managing and analyzing large amounts of network traffic.
- Introduce the different filter types and their uses in capturing and displaying packet information.
- Guide on creating and managing custom filters.
- Present advanced filtering techniques and their applications.
- Analyze the results obtained from filtered packet data and how to interpret them.

#### V. Advanced Features

- Introduce remote packet capture and its uses.
- Discuss how Wireshark handles export and import of packet data for collaborative analysis.
- Introduce TShark, the command-line interface of Wireshark.
- Discuss the customization and extensibility options available in Wireshark.

#### VI. Case Studies & Examples

- Present real-world examples where Wireshark was instrumental in identifying malicious network activity.
- Provide examples of how Wireshark is used in diagnosing network problems and verifying solutions.
- Discuss how Wireshark is used in the development and verification of new protocols.

#### VII. Conclusion

- Summarize the extensive capabilities of Wireshark in network analysis.
- Reinforce Wireshark’s pivotal role in network analysis, troubleshooting, and protocol development.
- Discuss upcoming features and future developments in Wireshark.

### Questions (single Choice)

#### Question 1

**Topic:** TCP Protocol Analysis  
**Question:**  
While analyzing a TCP stream in Wireshark, you observe a packet with the `FIN` flag set. What does the `FIN` flag signify in the TCP protocol, and what is the typical response to a packet with the `FIN` flag set?  

**Answer:**  
The `FIN` flag signifies the end of data transmission, indicating that the sender has finished sending data. The typical response to a packet with the `FIN` flag set is a packet with an `ACK` flag set, acknowledging the receipt of the `FIN` packet.

#### Question 2

**Topic:** IP Protocol  
**Question:**  
In Wireshark, you observe an IP packet with the Time to Live (TTL) field set to 1. What happens to the packet when it reaches a router, and why is this behavior significant for the network?  

**Answer:**  
When the packet with a TTL value of 1 reaches a router, the TTL value is decremented to 0, causing the router to discard the packet. This behavior is significant as it prevents IP packets from circulating indefinitely in the network, which could lead to network congestion.

#### Question 3

**Topic:** DNS Protocol  
**Question:**  
While analyzing DNS traffic in Wireshark, you notice a record type of “A” in a DNS response. What does the “A” record represent, and what information does it typically contain?  

**Answer:**  
The “A” record represents an Address Record in DNS. It typically contains the IP address associated with a domain name, mapping the domain to its corresponding IPv4 address.

#### Question 4

**Topic:** HTTP Protocol  
**Question:**  
In a Wireshark capture, you are reviewing HTTP traffic and notice an HTTP status code of 404 in a response packet. What does this status code signify, and what might be a possible cause for receiving this code?  

**Answer:**  
The HTTP status code 404 signifies that the requested resource could not be found on the server. A possible cause for receiving this code is that the requested URL is incorrect, or the requested resource has been deleted or moved.

#### Question 5

**Topic:** UDP Protocol  
**Question:**  
In a Wireshark capture, you observe a conversation between a client and a server using the UDP protocol. How can you determine if there were any lost packets in this conversation, considering the nature of UDP?  

**Answer:**  
UDP is a connectionless protocol and does not guarantee the delivery of packets, making it inherently difficult to definitively ascertain packet loss. However, you may infer packet loss by analyzing application layer protocols or sequence numbers if they are available, examining discrepancies in expected and observed sequence numbers, or observing retransmissions or gaps in conversation at the application layer. Keep in mind that this method might not be foolproof as UDP does not have built-in mechanisms like TCP to handle and report packet loss.

#### Question 6

**Question:**  
Which of the following is the correct way to set a display filter for TCP protocol in Wireshark?

**a) tcp.protocol**  
**b) protocol.tcp**  
**c) tcp**  
**d) set.protocol==tcp**  

**Correct Answer:**  
**c) tcp**

#### Question 7

**Question:**  
When setting a capture filter for capturing packets from IP address 192.168.1.1, which of the following filters is correct?

**a) ip.addr==192.168.1.1**  
**b) ip.src=192.168.1.1**  
**c) host 192.168.1.1**  
**d) src.ip=192.168.1.1**  

**Correct Answer:**  
**c) host 192.168.1.1**

#### Question 8

**Question:**  
Which filter can be used as a display filter to show packets that originated from port 80?

**a) tcp.port=80**  
**b) tcp.srcport==80**  
**c) src.port 80**  
**d) port.origin==80**  

**Correct Answer:**  
**b) tcp.srcport==80**

#### Question 9

**Question:**  
When you want to apply a display filter to see only DNS traffic, which filter should you use?

**a) protocol==dns**  
**b) dns.protocol**  
**c) udp.port==53**  
**d) dns**  

**Correct Answer:**  
**d) dns**

#### Question 10

**Question:**  
If you want to create a capture filter for packets going to or coming from the IP address 10.0.0.5, which of the following is correct?

**a) ip.addr==10.0.0.5**  
**b) host 10.0.0.5**  
**c) ip.src=10.0.0.5 or ip.dst=10.0.0.5**  
**d) address.ip==10.0.0.5**  

**Correct Answer:**  
**b) host 10.0.0.5**

### Questions (Multiple Choice, Multiple Answers)

#### Question 11

What are the primary functions of TCP in network communication? (Choose two)

- A. Providing a connectionless, unreliable service
- B. Encrypting data for secure transmission
- C. Providing a connection-oriented, reliable service
- D Facilitating congestion control and flow control
- E. Assigning IP addresses to devices on a network

**Correct Answers:** C, D

#### Question 12

Which of the following are features of TCP? (Choose three)

- A. Error Detection and Correction
- B. Quality of Service (QoS) Routing
- C. Stateless Communication
- D. Broadcast Transmission
- E. Ensuring ordered data transfer
- F. Providing end-to-end data delivery guarantees

   **Correct Answers:** A, E, F

#### Question 13

During the establishment and termination of a TCP connection, which of the following packets are involved? (Choose four)

- A. SYN
- B. SYN-ACK
- C. ACK
- D. FIN
- E. PSH
- F. URG

**Correct Answers for Establishment:** A, B, C
**Correct Answers for Termination:** C, D


#### Question 14

Which of the following statements are true about Display Filters in Wireshark? (Choose two)

- A. Display Filters can be used to change the captured data.
- B. Display Filters are applied in real-time to control what isdisplayed.
- C. Display Filters use a different syntax compared to Capture Filters.
- D. Display Filters are used to limit the amount of data being captured.

**Correct Answers:** B, C

#### Question 15

Which of these are valid examples of Display Filters in Wireshark? (Choose two)

- A. `ip.addr == 192.168.1.1`
- B. `tcp port 80`
- C. `src host 192.168.1.1`
- D. `http.request.method == "POST"`

**Correct Answers:** A, D

#### Question 16

Which of the following are true about Capture Filters in Wireshark? (Choose two)

- A. Capture Filters are set before starting a packet capture session.
- B. Capture Filters can be modified during an active capture session.
- C. Capture Filters are based on the Berkeley Packet Filter (BPF) syntax.
- D. Capture Filters are used to filter packets after they are captured.

**Correct Answers:** A, C

#### Question 17

Which of these are valid examples of Capture Filters in Wireshark? (Choose two)

- A. `host 192.168.1.1`
- B. `tcp.port == 80`
- C. `net 192.168.0.0/16`
- D. `frame contains "data"`

**Correct Answers:** A, C

#### Question 18

What are the primary functions of the Wireshark Expert System? (Choose two)

- A. To automatically resolve network conflicts
- B. To provide analysis and diagnostic information about captured packets
- C. To filter and capture packets based on specified criteria
- D. To identify patterns and anomalies in network traffic
- E. To enhance the security of network communications

**Correct Answers:** B, D

#### Question 19

Which of the following categories can be flagged by the Wireshark Expert System? (Choose three)

- A. Malware detection
- B. Protocol-specific issues
- C. Network latency problems
- D. Sequence number problems
- E. Chat and instant messaging traffic

**Correct Answers:** B, C, D

#### Question 20

How does the Wireshark Expert System assist in analyzing network traffic? (Choose three)

- A. By categorizing traffic into different severity levels like Error, Warning, and Note
- B. By automatically repairing corrupted packets
- C. By providing detailed explanations and context for each identified issue
- D. By highlighting unusual or suspicious packet sequences
- E. By optimizing network performance based on traffic analysis

**Correct Answers:** A, C, D

#### Question 21

What are the primary purposes of TLS? (Choose two)

- A. To provide a secure connection by encrypting data in transit
- B. To optimize the speed of data transfer over the internet
- C. To authenticate the server and optionally the client
- D. To assign IP addresses to devices in a network

**Correct Answers:** A, C

#### Question 22

Which cryptographic techniques are utilized in TLS? (Choose three)

- A. Symmetric encryption
- B. Asymmetric encryption
- C. Hash functions
- D. Quantum cryptography

**Correct Answers:** A, B, C

#### Question 23

What are components of a TLS handshake? (Choose three)

- A. Certificate exchange
- B. User authentication
- C. Key exchange
- D. Version negotiation

**Correct Answers:** A, C, D

#### Question 24

Which of the following protocols can be secured using TLS? (Choose three)

- A. HTTP (resulting in HTTPS)
- B. FTP
- C. SNMP
- D. SMTP

**Correct Answers:** A, B, D

#### Question 25

What are common features of TLS 1.3 compared to earlier versions? (Choose two)

- A. Removal of outdated cryptographic algorithms
- B. Support for quantum encryption methods
- C. Reduced number of round-trips required to establish a connection
- D. Mandatory client certificate authentication

**Correct Answers:** A, C

