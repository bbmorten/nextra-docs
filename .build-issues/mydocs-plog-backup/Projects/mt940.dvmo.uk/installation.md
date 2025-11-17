# Deployment Procedure

## Installation Steps

### NGINX Reverse Proxy Configuration

- Create a new configuration file for the mt940 application.

```shell

bulent@NDAWN-Azure:/etc/nginx/sites-enabled$ more /etc/nginx/sites-available/mt940.dvmo.uk
server {
    server_name mt940.dvmo.uk;

    location / {
        proxy_pass http://127.0.0.1:8016;  # Update to the port your mt940 app u
ses
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

- Symbolic link the configuration file to the sites-enabled directory.

```shell
sudo ln -s /etc/nginx/sites-available/mt940.dvmo.uk /etc/nginx/sites-enabled/
```

- Restart NGINX to apply the changes.

```shell
sudo nginx -t
sudo systemctl restart nginx
```

- Certbot installation



```shell
https://certbot.eff.org/instructions?ws=nginx&os=pip

sudo apt update
sudo apt install python3 python3-dev python3-venv libaugeas-dev gcc
sudo apt-get remove certbot
sudo python3 -m venv /opt/certbot/
sudo /opt/certbot/bin/pip install --upgrade pip
sudo /opt/certbot/bin/pip install certbot certbot-nginx

```

- Check DNS settings to ensure the domain resolves to the correct IP address.

```shell
sudo certbot --nginx -d www.dvmo.uk -d mt940.dvmo.uk -d MyDjangoProjectSec.dvmo.uk -d moodle.dvmo.uk

```

