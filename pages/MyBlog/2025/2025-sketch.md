# 2025 Sketch Notes

## 2025-08-01

### Openweb-UI

- **Openweb-UI** is a new project that aims to create a unified interface for web applications.
- It focuses on enhancing user experience by providing a consistent design language across different platforms.

```shell
ollama serve
ollama pull deepseek-r1:latest
```

- Run the Openweb-UI Docker container with the following command:

```shell
docker run -d -p 3034:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

## 2025-08-07

### Tailwind CSS

Froggy Frog is a Tailwind CSS component library that provides a collection of pre-designed components to speed up development.

## Git

### Standard Merge Operations

```shell
# Step 1: Make sure you're on main branch
git checkout main

# Step 2: Pull the latest changes (if working with remote)
git pull origin main

# Step 3: Merge the other branch into main
git merge rbac-by-account

# Step 4 (optional): Push to remote if all goes well
git push origin main

# Step 5: If there are conflicts, resolve them
git status  # Check for conflicts
git add .  # Stage resolved files
git commit -m "Resolved merge conflicts"
git push origin main
```
