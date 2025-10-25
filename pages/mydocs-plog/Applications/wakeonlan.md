# Wakeonlan

##  To wake mymacbook pro at home by wakeonlan

![Mac Address](image-wol.png)

```shell
wakeonlan -i 10.242.123.95 3a:ff:db:c2:9d:32

```

```shell
wakeonlan -i 10.242.107.230 3a:21:58:68:66:a3

```

##  Wake-on-LAN

To send a **Wake-on-LAN (WOL)** message to an IP address, you can use a tool like `wakeonlan` or `etherwake`. WOL sends a "magic packet" to wake up a machine from a powered-off state, typically via the local network. Here's how you can do it:

### Prerequisites

1. **Enable Wake-on-LAN** on the target machine (usually done in the BIOS/UEFI settings and the operating system).
2. **Know the MAC address** of the target machine's network interface.

### Method 1: Using `wakeonlan`

1. **Install `wakeonlan`** (if not already installed):

   ```bash
   sudo apt install wakeonlan
   ```

   For macOS, you can install it via Homebrew:

   ```bash
   brew install wakeonlan
   ```

2. **Send the Wake-on-LAN Packet**:

   ```bash
   wakeonlan -i <ip_address> <mac_address>
   ```

   - Replace `<ip_address>` with the IP address of the target machine's network (broadcast IP if possible, like `192.168.1.255`).
   - Replace `<mac_address>` with the MAC address of the target machine.

### Method 2: Using `etherwake`

1. **Install `etherwake`**:

   ```bash
   sudo apt install etherwake
   ```

2. **Send the Wake-on-LAN Packet**:

   ```bash
   sudo etherwake -i <network_interface> <mac_address>
   ```

   - Replace `<network_interface>` with the name of the network interface (e.g., `eth0`).
   - Replace `<mac_address>` with the target machine's MAC address.

### Example Wake-on-LAN Command

If the target machine's MAC address is `00:11:22:33:44:55` and the network IP is `192.168.1.255`, the command would look like this:

```bash
wakeonlan -i 192.168.1.255 00:11:22:33:44:55
```

### Notes

- **Broadcast IP Address**: Sending the magic packet to the broadcast address (`192.168.1.255` in this case) ensures it reaches all devices on the network, including the target machine.
- **Firewall Settings**: Ensure that network firewalls allow WOL packets (usually UDP port 9).

Using these methods, you can successfully send a Wake-on-LAN message to wake up a machine over the network.
