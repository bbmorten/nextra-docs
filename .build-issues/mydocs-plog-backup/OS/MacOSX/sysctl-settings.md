#  Tweaking TCP Parameters and similiar with `sysctl`

If you need to tweak multiple parameters using a **Launch Daemon** in macOS, you can include multiple `sysctl` commands in the `ProgramArguments` array of the `.plist` file. Alternatively, you can use a script that runs all the `sysctl` commands and call the script from the `.plist`.

Here are both approaches:

---

### **Approach 1: Multiple `sysctl` Commands in `ProgramArguments`**

For each parameter you wish to tweak, add a separate `ProgramArguments` entry for `sysctl`. Here's an example for modifying `net.inet.tcp.msl` and `kern.maxfiles`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.local.sysctl</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/sbin/sysctl</string>
        <string>-w</string>
        <string>net.inet.tcp.msl=1000</string>
        <string>/usr/sbin/sysctl</string>
        <string>-w</string>
        <string>kern.maxfiles=65536</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
```

---

### **Approach 2: Using a Script**

If you want better readability or more complex logic, you can place all the `sysctl` tweaks in a script and have the `.plist` file call that script.

#### Step 1: Create a Script

1. Create a script file to apply the settings:

   ```bash
   sudo nano /usr/local/bin/sysctl-tweaks.sh
   ```

2. Add the `sysctl` commands:

   ```bash
   #!/bin/bash
   /usr/sbin/sysctl -w net.inet.tcp.msl=1000
   /usr/sbin/sysctl -w kern.maxfiles=65536
   /usr/sbin/sysctl -w net.inet.tcp.msl=1000 # default 15000
   /usr/sbin/sysctl -w net.inet.ip.portrange.first=16384 # default 49152
   /usr/sbin/sysctl -w net.inet.tcp.blackhole=2 # default 0
   /usr/sbin/sysctl -w net.inet.udp.blackhole=1 # default 0
   /usr/sbin/sysctl -w net.inet.icmp.icmplim=50 # default 250
   ```

3. Make the script executable:

   ```bash
   sudo chmod +x /usr/local/bin/sysctl-tweaks.sh
   ```

---

#### Step 2: Reference the Script in the `.plist` File

Create the `.plist` file as follows:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.local.sysctl</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/sysctl-tweaks.sh</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
```

---

### **General Notes**

1. **File Placement:**
   - Place the `.plist` file in `/Library/LaunchDaemons/` for system-wide changes.
2. **Permissions:**
   - The `.plist` file should have ownership `root:wheel` and permissions `644`:

     ```bash
     sudo chown root:wheel /Library/LaunchDaemons/com.local.sysctl.plist
     sudo chmod 644 /Library/LaunchDaemons/com.local.sysctl.plist
     ```

3. **Load the Daemon:**

   ```bash
   sudo launchctl load /Library/LaunchDaemons/com.local.sysctl.plist
   ```
