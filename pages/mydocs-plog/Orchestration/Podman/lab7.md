# Lab7 Solutions

Here are the commands to complete all the tasks in the lab:

## 1. Create index.html file

```bash
echo "version 1" > index.html
```

## 2. Create Containerfile

```bash
cat > Containerfile << EOF
FROM docker.io/bitnami/nginx
COPY index.html /app/
EOF
```

## 3. Build the image named lab7

```bash
podman build -t lab7 .
```

## 4. Run local registry on localhost port 5000

```bash
podman run -d --name registry -p 5000:5000 docker.io/library/registry:2
```

## 5. Push lab7 image to localhost registry

```bash
# Tag the image for the local registry
podman tag lab7 localhost:5000/lab7

# Push to local registry
podman push localhost:5000/lab7
```

## 6. Run container lab7 accessible on localhost port 8088

```bash
podman run -d --name lab7 -p 8088:8080 localhost:5000/lab7
```

## 7. Generate Systemd unit file

```bash
# Generate systemd unit file for the container
podman generate systemd --new --files --name lab7

# This will create a file named container-lab7.service
```

## 8. Stop current container and manage through systemd

```bash
# Stop the current running container
podman stop lab7
podman rm lab7

# Move the systemd unit file to user systemd directory
mkdir -p ~/.config/systemd/user
mv container-lab7.service ~/.config/systemd/user/

# Reload systemd daemon
systemctl --user daemon-reload

# Enable and start the service
systemctl --user enable container-lab7.service
systemctl --user start container-lab7.service

# Check status
systemctl --user status container-lab7.service
```

## Verification Commands

```bash
# Check if the container is running through systemd
systemctl --user status container-lab7.service

# Test the web service
curl http://localhost:8088

# Check container status
podman ps

# View logs
journalctl --user -u container-lab7.service -f
```

## Alternative: Using Quadlets (Modern Approach)

Not working this approach

If you want to use the recommended Quadlets approach instead:

```bash
# Create quadlet directory
mkdir -p ~/.config/containers/systemd

# Create quadlet file
cat > ~/.config/containers/systemd/lab77.container << EOF
[Container]
Image=localhost:5000/lab7
ContainerName=lab77
PublishPort=8089:8080
Restart=always

[Install]
WantedBy=default.target
EOF

# Reload and enable
systemctl --user daemon-reload
systemctl --user enable --now lab77.service
```

