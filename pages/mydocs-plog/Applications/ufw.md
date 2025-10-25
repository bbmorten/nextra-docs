# UFW (uncomplicated firewall)

If you meant **UFW** (Uncomplicated Firewall), here’s how to check its status, enable it, and configure it on Ubuntu.

### Step 1: Check if UFW is Installed

On Ubuntu, UFW typically comes pre-installed. You can check if it's installed by running:

```bash
sudo ufw status
```

If UFW is installed, this command will display its current status (`active` or `inactive`). If it’s not installed, you can install it with:

```bash
sudo apt update
sudo apt install ufw
```

### Step 2: Enable UFW

To enable the firewall, use:

```bash
sudo ufw enable
```

This will activate UFW with default settings (which usually deny all incoming connections and allow all outgoing connections).

### Step 3: Configure UFW Rules

You can set up rules to allow or deny specific traffic. Here are a few common examples:

1. **Allow SSH** (port 22):

   ```bash
   sudo ufw allow ssh
   ```

   Or specify the port directly:

   ```bash
   sudo ufw allow 22
   ```

2. **Allow HTTP and HTTPS** (for web servers):

   ```bash
   sudo ufw allow http
   sudo ufw allow https
   ```

3. **Allow a Specific Port** (e.g., port 8080):

   ```bash
   sudo ufw allow 8080
   ```

4. **Allow a Range of Ports**:

   ```bash
   sudo ufw allow 1000:2000/tcp
   ```

5. **Deny Specific Traffic** (e.g., deny access to port 21):

   ```bash
   sudo ufw deny 21
   ```

### Step 4: Check UFW Status and Rules

To view the current status and a list of active rules, run:

```bash
sudo ufw status verbose
```

This will show whether UFW is active and all configured rules.

### Step 5: Disable UFW (if needed)

To disable UFW, use:

```bash
sudo ufw disable
```

### Summary

1. **Check UFW Status**: `sudo ufw status`
2. **Enable UFW**: `sudo ufw enable`
3. **Configure Rules**: Use `allow` and `deny` commands to manage traffic.
4. **View Rules**: `sudo ufw status verbose`

This should set up and manage UFW on your Ubuntu system to control network access securely.
