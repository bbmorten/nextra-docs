#  Ubuntu DNS Config

##  Discovering

To find the DNS configuration of your Ubuntu machine, you can check various files and commands that provide DNS settings and related network information. Here’s how to view your DNS configuration:

### 1. Check `/etc/resolv.conf`

The primary DNS configuration file on most Linux systems, including Ubuntu, is `/etc/resolv.conf`. This file contains the IP addresses of DNS servers used by your machine.

```bash
cat /etc/resolv.conf
```

In a typical `/etc/resolv.conf` file, you’ll see lines like this:

```plaintext
nameserver 8.8.8.8
nameserver 1.1.1.1
```

Each `nameserver` entry specifies the IP address of a DNS server. Note that on modern Ubuntu systems, especially those using `systemd-resolved`, this file might be managed dynamically.

### 2. Check `systemd-resolved` Status (For Ubuntu 18.04 and Later)

Ubuntu versions starting from 18.04 often use `systemd-resolved` for DNS resolution, which manages DNS settings and can override `/etc/resolv.conf`.

1. **Check the DNS Configuration with `systemd-resolved`**:

   ```bash
   systemd-resolve --status
   ```

   This command provides detailed DNS information, including DNS servers, search domains, and the current link status for each network interface.

2. **Directly View `systemd-resolved` DNS Settings**:

   To see only the DNS servers, you can use:

   ```bash
   resolvectl dns
   ```

   This shows the DNS servers for each network interface.

### 3. NetworkManager Configuration (if Applicable)

If you’re using NetworkManager (common on desktop versions of Ubuntu), DNS settings might be managed through NetworkManager.

1. **View DNS Settings for NetworkManager**:

   ```bash
   nmcli device show | grep IP4.DNS
   ```

   This command lists the DNS servers configured for each device managed by NetworkManager.

2. **Check NetworkManager Configuration Files**:

   NetworkManager may also store DNS settings in its configuration files, often found in `/etc/NetworkManager/`.

   ```bash
   cat /etc/NetworkManager/NetworkManager.conf
   ```

   Additionally, specific DNS settings might be in `/etc/NetworkManager/system-connections/` if you have per-connection configurations.

### 4. Using `nmcli` to Check Active DNS Settings

The `nmcli` tool can also be used to show active DNS configurations on Ubuntu:

```bash
nmcli dev show | grep DNS
```

This will output the DNS IP addresses currently being used by NetworkManager.

### Summary

- **Primary DNS File**: `/etc/resolv.conf`
- **systemd-resolved** (Ubuntu 18.04+): `systemd-resolve --status` or `resolvectl dns`
- **NetworkManager**: `nmcli device show | grep IP4.DNS`

Each of these commands can provide insight into the DNS configuration for your Ubuntu system, depending on which service is managing DNS.

## Stub Resolver

To change the configuration of the **stub resolver** managed by `systemd-resolved` on Ubuntu, you need to adjust the `systemd-resolved` settings. This will allow you to modify the DNS servers, search domains, and other DNS settings the stub resolver uses.

Here’s how you can configure it:

### 1. Edit `systemd-resolved` Configuration File

The main configuration file for `systemd-resolved` is located at `/etc/systemd/resolved.conf`.

1. Open the file in a text editor with `sudo` privileges:

   ```bash
   sudo nano /etc/systemd/resolved.conf
   ```

2. Update the desired settings under the `[Resolve]` section. Common options include:

   - **DNS**: Sets the IP addresses of the DNS servers. Multiple servers are separated by spaces.
   - **FallbackDNS**: DNS servers to use if the main `DNS` servers are unavailable.
   - **Domains**: Sets the search domains.
   - **LLMNR** and **MulticastDNS**: Enable or disable Link-Local Multicast Name Resolution and Multicast DNS.

   Example configuration:

   ```ini
   [Resolve]
   DNS=8.8.8.8 1.1.1.1               # Primary DNS servers
   FallbackDNS=8.8.4.4 1.0.0.1       # Fallback DNS servers
   Domains=example.com               # Search domain
   LLMNR=no                          # Disable LLMNR if not needed
   MulticastDNS=no                   # Disable Multicast DNS if not needed
   ```

3. Save and close the file (`Ctrl + O`, then `Enter` to save, and `Ctrl + X` to exit in nano).

### 2. Restart `systemd-resolved` to Apply Changes

After modifying the configuration, restart `systemd-resolved` to apply the changes:

```bash
sudo systemctl restart systemd-resolved
```

### 3. Verify the New Configuration

You can check the current DNS settings to confirm your changes with:

```bash
systemd-resolve --status
```

This command will show the active DNS servers, search domains, and other DNS-related settings for each network interface.

### Optional: Make `systemd-resolved` the Default Resolver

In some cases, you might find that `/etc/resolv.conf` is not pointing to `127.0.0.53`, the stub resolver address used by `systemd-resolved`. You can make `systemd-resolved` the default resolver by creating a symbolic link from `/etc/resolv.conf` to `/run/systemd/resolve/stub-resolv.conf`:

```bash
sudo ln -sf /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf
```

This will ensure that all DNS queries go through the stub resolver managed by `systemd-resolved`.

### Summary

1. **Edit `/etc/systemd/resolved.conf`** to change DNS servers, search domains, etc.
2. **Restart `systemd-resolved`** with `sudo systemctl restart systemd-resolved`.
3. **Verify the Configuration** with `systemd-resolve --status`.
4. **(Optional)** Ensure `/etc/resolv.conf` points to the stub resolver.

By configuring `systemd-resolved` this way, you control DNS settings for all applications that rely on the system's DNS resolver.
