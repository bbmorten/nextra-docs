# MyDjangoProjectSec

##  To set up multiple websites

To set up multiple websites with Nginx as a reverse proxy on an Ubuntu server, here’s a step-by-step guide. This includes configuring each subdomain, generating SSL certificates with Let’s Encrypt, and setting up Nginx as a reverse proxy for each application.

### Prerequisites

- **Ubuntu Server** with `sudo` privileges.
- **Nginx** installed.
- **Certbot** for SSL certificates (Let’s Encrypt).

### Step 1: Install Required Packages

Install Nginx and Certbot (for Let’s Encrypt certificates):

```bash
sudo apt update
# sudo apt install nginx certbot python3-certbot-nginx
sudo apt remove certbot python3-certbot-nginx
sudo apt install python3 python3-venv libaugeas0
sudo python3 -m venv /opt/certbot/
sudo /opt/certbot/bin/pip install --upgrade pip
sudo /opt/certbot/bin/pip install certbot certbot-nginx
sudo ln -s /opt/certbot/bin/certbot /usr/bin/certbot
```

### Step 2: Configure Nginx as a Reverse Proxy

For each domain/subdomain, create a separate Nginx configuration file in `/etc/nginx/sites-available/`.

#### Example Configurations

##### 1. Static Website: `www.dvmo.uk`

Create a configuration file for `www.dvmo.uk`:

```bash
sudo nano /etc/nginx/sites-available/www.dvmo.uk
```

Add the following content:

```nginx
server {
    listen 80;
    server_name www.dvmo.uk;

    location / {
        root /var/www/www.dvmo.uk;  # Adjust to the path of your static site
        index index.html;
    }
}
```

##### 2. Django Application: `/MyDjangoProjectSec.dvmo.uk`

Create a configuration file for `/MyDjangoProjectSec.dvmo.uk`:

```bash
sudo nano /etc/nginx/sites-available//MyDjangoProjectSec.dvmo.uk
```

Add the following configuration (assuming the Django application is running on port `8000`):

```nginx
server {
    listen 80;
    server_name MyDjangoProjectSec.dvmo.uk;

    location / {
        proxy_pass http://127.0.0.1:8009;  # Update to the port your Django app uses
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Add to settings.py

```python
ALLOWED_HOSTS = [mydjangoprojectsec.dvmo.uk]

```

The provided code snippet is a configuration block for an Nginx server, which is commonly used as a reverse proxy server to handle incoming web traffic and forward it to a backend server, such as a Django application.

The `server` block begins with the `listen 80;` directive, which tells Nginx to listen for incoming HTTP requests on port 80, the default port for HTTP traffic. The `server_name` directive specifies the domain name for which this server block is responsible. In this case, it is set to `MyDjangoProjectSec.dvmo.uk`.

Within the `location /` block, several directives are used to configure how Nginx should handle requests to the root URL path (`/`). The `proxy_pass` directive is crucial as it forwards incoming requests to the specified backend server. Here, it is set to `http://127.0.0.1:8009`, which means that Nginx will forward requests to a Django application running on the local machine (localhost) on port 8009. You should update this port number to match the port your Django application is actually using.

The `proxy_set_header` directives are used to modify or set HTTP headers that are passed to the backend server. `proxy_set_header Host $host;` ensures that the original host header from the client request is preserved. `proxy_set_header X-Real-IP $remote_addr;` forwards the client's IP address to the backend server. `proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;` adds the client's IP address to the `X-Forwarded-For` header, which can be useful for tracking the original client IP in a chain of proxy servers. Finally, `proxy_set_header X-Forwarded-Proto $scheme;` forwards the protocol (HTTP or HTTPS) used by the client to the backend server.

Overall, this configuration sets up Nginx to act as a reverse proxy, forwarding requests to a Django application while preserving important client information through HTTP headers.

##### 3. Moodle Application: `moodle.dvmo.uk`

Create a configuration file for `moodle.dvmo.uk`:

```bash
sudo nano /etc/nginx/sites-available/moodle.dvmo.uk
```

Add the following configuration (assuming Moodle is running on port `9000`):

```nginx
server {
    listen 80;
    server_name moodle.dvmo.uk;

    location / {
        proxy_pass http://127.0.0.1:9000;  # Update to the port your Moodle app uses
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Step 3: Enable the Nginx Configurations

1. **Enable** each configuration by creating a symbolic link in the `sites-enabled` directory:

   ```bash
   sudo ln -s /etc/nginx/sites-available/www.dvmo.uk /etc/nginx/sites-enabled/
   sudo ln -s /etc/nginx/sites-available/MyDjangoProjectSec.dvmo.uk /etc/nginx/sites-enabled/
   sudo ln -s /etc/nginx/sites-available/moodle.dvmo.uk /etc/nginx/sites-enabled/
   ```

2. **Test** the Nginx configuration for syntax errors:

   ```bash
   sudo nginx -t
   ```

3. **Reload Nginx** to apply the changes:

   ```bash
   sudo systemctl reload nginx
   ```

### Step 4: Obtain SSL Certificates from Let’s Encrypt

Check DNS records first.

Run Certbot to obtain SSL certificates for each domain/subdomain:

```bash
sudo certbot --nginx -d www.dvmo.uk -d MyDjangoProjectSec.dvmo.uk -d moodle.dvmo.uk
```

Certbot will automatically update your Nginx configuration files with SSL settings.

####  Automatic renewal

```shell
echo "0 0,12 * * * root /opt/certbot/bin/python -c 'import random; import time; time.sleep(random.random() * 3600)' && sudo certbot renew -q" | sudo tee -a /etc/crontab > /dev/null

```

#### Upgrade certbot

It's important to occasionally update Certbot to keep it up-to-date. To do this, run the following command on the command line on the machine.

```shell
sudo /opt/certbot/bin/pip install --upgrade certbot certbot-nginx

```

If this step leads to errors, run sudo rm -rf /opt/certbot and repeat all installation instructions.

### Step 5: Test the Setup

- Open a browser and go to `https://www.dvmo.uk`, `https://app1.dvmo.uk`, and `https://moodle.dvmo.uk` to ensure each site is accessible and correctly serves the intended application.
- Certbot will handle SSL certificate renewals automatically, but it’s good to periodically check with:

  ```bash
  sudo certbot renew --dry-run
  ```

### Summary of the Configuration Files

1. **Nginx Reverse Proxy** for each subdomain:
   - `www.dvmo.uk`: serves static files.
   - `app1.dvmo.uk`: proxies to Django running on `localhost:8000`.
   - `moodle.dvmo.uk`: proxies to Moodle running on `localhost:9000`.

2. **SSL Certificates**: Managed by Let’s Encrypt with automatic renewal.

This setup should allow Nginx to handle multiple subdomains, each directed to a separate application on your server. Let me know if you need additional details on any specific part of this setup!

### Working nginx site config

```shell
bulent@NDAWN-Azure:/etc/nginx/sites-available$ ls -la
total 20
drwxr-xr-x 2 root   root   4096 Nov 11 08:28 .
drwxr-xr-x 8 root   root   4096 Nov 11 09:01 ..
-rw-rw-r-- 1 bulent bulent 4381 Nov 11 09:01 default
-rw-r--r-- 1 root   root    972 Nov 11 09:01 MyDjangoProjectSec.dvmo.uk
```

```shell

bulent@NDAWN-Azure:/etc/nginx/sites-available$ more MyDjangoProjectSec.dvmo.uk
server {
    server_name MyDjangoProjectSec.dvmo.uk;

    location / {
        proxy_pass http://127.0.0.1:8009;  # Update to the port your Django app
uses
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/www.dvmo.uk/fullchain.pem; # managed b
y Certbot
    ssl_certificate_key /etc/letsencrypt/live/www.dvmo.uk/privkey.pem; # managed
 by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host = mydjangoprojectsec.dvmo.uk) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name MyDjangoProjectSec.dvmo.uk;
    return 404; # managed by Certbot


}
```

```shell

bulent@NDAWN-Azure:/etc/nginx/sites-available$ more /etc/letsencrypt/options-ssl-nginx.conf
# This file contains important security parameters. If you modify this file
# manually, Certbot will be unable to automatically provide future security
# updates. Instead, Certbot will print and log an error message with a path to
# the up-to-date file that you will need to refer to when manually updating
# this file. Contents are based on https://ssl-config.mozilla.org

ssl_session_cache shared:le_nginx_SSL:10m;
ssl_session_timeout 1440m;
ssl_session_tickets off;

ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers off;

ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA3
84:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-A
ES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
```
