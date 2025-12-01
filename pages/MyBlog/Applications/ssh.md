# SSH

## Timeout Settings

To set an indefinite SSH timeout (i.e., prevent SSH sessions from timing out), you need to adjust the SSH server and client configurations to disable session timeouts and keep the connection alive.

### Steps to Set an Indefinite SSH Timeout

#### 1. **Configure the SSH Server**

Edit the SSH server configuration file:

```bash
sudo nano /etc/ssh/sshd_config
```

Look for or add the following settings:

```text
ClientAliveInterval 0
ClientAliveCountMax 0
```

- **`ClientAliveInterval 0`**: Disables the server sending "keep-alive" messages.
- **`ClientAliveCountMax 0`**: Ensures the server never terminates idle sessions.

After making these changes, restart the SSH service:

```bash
sudo systemctl restart sshd
```

---

#### 2. **Configure the SSH Client**

Edit the SSH client configuration file:

```bash
nano ~/.ssh/config
```

Add or modify the following:

```text
Host *
    ServerAliveInterval 0
    ServerAliveCountMax 0
```

- **`ServerAliveInterval 0`**: Disables client-side "keep-alive" messages.
- **`ServerAliveCountMax 0`**: Ensures the client never terminates idle sessions.

If the `~/.ssh/config` file does not exist, you can create it.

---

#### 3. **Alternative: Use Keep-Alive Messages**

If you want to maintain the session indefinitely but also ensure it remains active (in case of network interruptions), configure keep-alive intervals instead of disabling them:

**Server:**

```text
ClientAliveInterval 60
ClientAliveCountMax 0
```

**Client:**

```text
Host *
    ServerAliveInterval 60
    ServerAliveCountMax 0
```

This configuration sends keep-alive packets every 60 seconds, preventing the session from timing out due to inactivity.

---

#### 4. **Adjust Timeout Settings in Shell**

If your shell session still times out due to inactivity (controlled by the shell, not SSH), modify the following:

- For **Bash**, update or create the `~/.bashrc` file:

  ```bash
  TMOUT=0
  ```

- For **Zsh**, update or create the `~/.zshrc` file:

  ```bash
  unset TMOUT
  ```

## ssh jumping hosts

```shell
(base) bulent@BMAPMACPRO20 VagrantFileSamples % ssh -J vm@192.168.49.51 vm@192.168.100.100    
The authenticity of host '192.168.100.100 (<no hostip for proxy command>)' can't be established.
ED25519 key fingerprint is SHA256:Ev2qvfyR2YGH59sx1KsGE7xnSaXlEa7H3oYp9TS3z9g.
This host key is known by the following other names/addresses:
    ~/.ssh/known_hosts:20: 192.168.49.51
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '192.168.100.100' (ED25519) to the list of known hosts.
vm@192.168.100.100's password: 
Activate the web console with: systemctl enable --now cockpit.socket

Last login: Thu Dec  9 09:06:30 2021
[vm@srv1 ~]$ 

1122334455on!
```

## Adding the fingerprint

```shell
ssh-keyscan -H ndawn.btegitim.com >> ~/.ssh/known_hosts

```
