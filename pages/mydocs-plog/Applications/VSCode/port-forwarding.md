#  Port-forwarding

The **port forwarding feature in VS Code for remote SSH hosts** works by setting up a **local-to-remote (or remote-to-local) SSH tunnel** through the `Remote - SSH` extension. This allows you to access services running on the remote machine from your local machine as if they were running locally.

---

### **How VS Code's Port Forwarding Works**

When you connect to a remote machine using **Remote - SSH**, VS Code leverages SSH tunneling to forward ports. Here’s how it works:

1. **VS Code opens an SSH connection**  
   - When you connect via **Remote - SSH**, VS Code establishes an SSH connection to the remote host.
   - It runs a server-side VS Code helper (`vscode-server` process) on the remote machine.

2. **Local Port Forwarding (`-L`)**
   - If you **forward a remote port to your local machine**, VS Code adds an SSH tunnel with the `-L` flag:

   ```sh
   ssh -L <local-port>:localhost:<remote-port> user@remote-host
   ```

   - Example: Forward **remote port 8080** (on the remote server) to **local port 8080**:

     ```sh
     ssh -L 8080:localhost:8080 user@remote-host
     ```

   - This allows you to access `http://localhost:8080` on your local machine, which actually points to the remote machine’s `8080` port.

3. **Remote Port Forwarding (`-R`)**
   - If you want the **local machine to expose a service to the remote machine**, VS Code can set up a reverse tunnel with the `-R` flag:

   ```sh
   ssh -R <remote-port>:localhost:<local-port> user@remote-host
   ```

   - Example: Expose a local development server running on `localhost:3000` to be accessible on the remote machine at `localhost:9000`:

     ```sh
     ssh -R 9000:localhost:3000 user@remote-host
     ```

4. **Auto-Forwarding in VS Code**
   - VS Code automatically detects ports opened by your remote applications and **suggests forwarding** them.
   - You can manually forward ports in **Remote Explorer > Forwarded Ports**.

5. **Persistent Port Forwarding**
   - You can add persistent port forwarding settings in your `~/.ssh/config`:

     ```ini
     Host myserver
       HostName remote-host
       User user
       LocalForward 8080 localhost:8080
     ```

   - This ensures that every SSH session automatically forwards ports.

---

### **How to Use Port Forwarding in VS Code**

#### **Option 1: Automatic Port Forwarding**

1. Open VS Code and connect to the remote machine using **Remote - SSH**.
2. Run your application on a specific port (e.g., a web app on port `3000`).
3. VS Code detects open ports and **shows a prompt** to forward them.
4. Click "Forward Port" and access it at `localhost:<forwarded-port>`.

#### **Option 2: Manual Port Forwarding**

1. Open **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
2. Type `Remote: Forward Port` and select it.
3. Enter the remote port number (e.g., `8080`).
4. Choose a local port (or use the same port number).
5. Open `http://localhost:<port>` in your browser.

---

### **Checking Active Port Forwarding**

To check which ports are currently forwarded:

- Open **Remote Explorer** (`Ctrl+Shift+X` → search "Remote Explorer").
- Select your SSH host.
- Look under **Forwarded Ports**.

---

### **Use Cases**

✅ **Access Remote Web Apps**: Run a web server remotely and access it via `localhost`.  
✅ **Database Forwarding**: Connect to a remote database (e.g., PostgreSQL on `5432`) securely.  
✅ **Remote Debugging**: Forward debugging ports from a remote machine to your local environment.  

Would you like help setting up port forwarding for a specific service? 🚀
