# Docker Contexts

##  Create a new context for podman

```shell
docker context create lima-podman \
  --description "Podman via Lima VM" \
  --docker "host=unix:///Volumes/LimaData/podman/sock/podman.sock"
```

## Remote context for docker



```shell
Host ndawn.btegitim.com
    User bulent
    HostName ndawn.btegitim.com
    IdentityFile ~/.ssh/id_rsa_ndawn
```

```shell
docker context create ndawn-docker \
  --description "Remote Docker Engine on ndawn.btegitim.com" \
  --docker "host=ssh://ndawn.btegitim.com"
```

## Use the context

```shell
docker context use lima-podman
```

## List contexts

```shell
docker context ls
```

## Remove a context

```shell
docker context rm lima-podman
```

## Inspect a context

```shell
docker context inspect lima-podman
```

## Set the current context

```shell
docker context use lima-podman
```

## Get the current context

```shell
docker context show
```

## Update a context

```shell
docker context update lima-podman \
  --description "Updated Podman via Lima VM" \
  --docker "host=unix:///Volumes/LimaData/podman/sock/podman.sock"
```

## Rename a context

```shell
docker context rename lima-podman new-context-name
```

## Export a context

```shell
docker context export lima-podman > lima-podman-context.tar
```

## Import a context

```shell
docker context import new-context-name < lima-podman-context.tar
```

## Use a context with a specific command

```shell
docker --context lima-podman run hello-world
```

## View context details

```shell
docker context inspect lima-podman --pretty
```

## Set environment variables for a context

```shell
export DOCKER_CONTEXT=lima-podman
```

## Check if a context is active

```shell
docker context ls --format '{{.Name}}' | grep -q '^lima-podman$' && echo "Context is active" || echo "Context is not active"
```

## List all available contexts

```shell
docker context ls --format '{{.Name}}'
```

## Switch back to the default context

```shell
docker context use default
```

## Remove all contexts

```shell
docker context ls -q | xargs -r docker context rm
```

## Create a context with TLS

```shell
docker context create my-tls-context \
  --description "Context with TLS" \
  --docker "host=tcp://localhost:2376,ca=/path/to/ca.pem,cert=/path/to/cert.pem,key=/path/to/key.pem"
```

## List contexts with detailed information

```shell
docker context ls --format "table {{.Name}}\t{{.Description}}\t{{.DockerEndpoint}}\t{{.TLSVerify}}"
```

## Set a context as the default

```shell
docker context use lima-podman
```

## Create a context with a custom endpoint

```shell
docker context create custom-endpoint-context \
  --description "Context with custom endpoint" \
  --docker "host=tcp://custom-endpoint:2375"
```

## Create a context with a specific orchestrator

```shell
docker context create my-orchestrator-context \
  --description "Context with specific orchestrator" \
  --docker "host=unix:///var/run/docker.sock" \
  --orchestrator=kubernetes
```

## Create a context with multiple endpoints

```shell
docker context create multi-endpoint-context \
  --description "Context with multiple endpoints" \
  --docker "host=tcp://endpoint1:2375,tcp://endpoint2:2375"
```

## Create a context with a specific API version

```shell
docker context create api-version-context \
  --description "Context with specific API version" \
  --docker "host=tcp://localhost:2375,api-version=1.41"
```

## Create a context with a specific namespace

```shell
docker context create namespace-context \
  --description "Context with specific namespace" \
  --docker "host=unix:///var/run/docker.sock,namespace=my-namespace"
```

## Create a context with a specific logging driver

```shell
docker context create logging-driver-context \
  --description "Context with specific logging driver" \
  --docker "host=unix:///var/run/docker.sock,log-driver=json-file"
```

## Create a context with a specific storage driver

```shell
docker context create storage-driver-context \
  --description "Context with specific storage driver" \
  --docker "host=unix:///var/run/docker.sock,storage-driver=overlay2"
```

## Create a context with a specific network

```shell
docker context create network-context \
  --description "Context with specific network" \
  --docker "host=unix:///var/run/docker.sock,network=my-network"
```

## Create a context with a specific registry

```shell
docker context create registry-context \
  --description "Context with specific registry" \
  --docker "host=unix:///var/run/docker.sock,registry=my-registry:5000"
```

## Create a context with a specific logging level

```shell
docker context create logging-level-context \
  --description "Context with specific logging level" \
  --docker "host=unix:///var/run/docker.sock,log-level=debug"
```

## Create a context with a specific resource limit

```shell
docker context create resource-limit-context \
  --description "Context with specific resource limit" \
  --docker "host=unix:///var/run/docker.sock,resources='{\"cpus\": 2, \"memory\": \"4g\"}'"
```

## Create a context with a specific security option

```shell
docker context create security-option-context \
  --description "Context with specific security option" \
  --docker "host=unix:///var/run/docker.sock,security-opt='no-new-privileges=true'"
```

## Create a context with a specific DNS server
<!--  -->
```shell
docker context create dns-server-context \
  --description "Context with specific DNS server" \
  --docker "host=unix:///var/run/docker.sock,dns=8.8.8.8"
```

## Create a context with a specific user namespace

```shell
docker context create user-namespace-context \
  --description "Context with specific user namespace" \
  --docker "host=unix:///var/run/docker.sock,userns=host"
```

## Create a context with a specific cgroup driver

```shell
docker context create cgroup-driver-context \
  --description "Context with specific cgroup driver" \
  --docker "host=unix:///var/run/docker.sock,cgroup-driver=cgroupfs"
```

## Create a context with a specific container runtime

```shell
docker context create container-runtime-context \
  --description "Context with specific container runtime" \
  --docker "host=unix:///var/run/docker.sock,container-runtime=containerd"
```

## Create a context with a specific image repository

```shell
docker context create image-repository-context \
  --description "Context with specific image repository" \
  --docker "host=unix:///var/run/docker.sock,image-repository=my-repo"
```

## Create a context with a specific buildkit configuration

```shell
docker context create buildkit-context \
  --description "Context with specific BuildKit configuration" \
  --docker "host=unix:///var/run/docker.sock,buildkit=true"
```

## Create a context with a specific plugin configuration

```shell
docker context create plugin-context \
  --description "Context with specific plugin configuration" \
  --docker "host=unix:///var/run/docker.sock,plugins='{\"my-plugin\": {\"enabled\": true}}'"
```

## Create a context with a specific health check configuration

```shell
docker context create health-check-context \
  --description "Context with specific health check configuration" \
  --docker "host=unix:///var/run/docker.sock,health-check='{\"test\": \"CMD-SHELL [\"curl -f http://localhost/ || exit 1\"]\", \"interval\": \"30s\", \"timeout\": \"30s\", \"retries\": 3}'"
```

## Create a context with a specific logging configuration

```shell
docker context create logging-config-context \
  --description "Context with specific logging configuration" \
  --docker "host=unix:///var/run/docker.sock,logging='{\"driver\": \"json-file\", \"options\": {\"max-size\": \"10m\", \"max-file\": \"3\"}}'"
```

## Create a context with a specific resource reservation

```shell
docker context create resource-reservation-context \
  --description "Context with specific resource reservation" \
  --docker "host=unix:///var/run/docker.sock,reservation='{\"cpus\": 1, \"memory\": \"2g\"}'"
```

## Create a context with a specific resource limit and reservation

```shell
docker context create resource-limit-reservation-context \
  --description "Context with specific resource limit and reservation" \
  --docker "host=unix:///var/run/docker.sock,resources='{\"limits\": {\"cpus\": 2, \"memory\": \"4g\"}, \"reservations\": {\"cpus\": 1, \"memory\": \"2g\"}}'"
```

## Create a context with a specific network configuration

```shell
docker context create network-config-context \
  --description "Context with specific network configuration" \
  --docker "host=unix:///var/run/docker.sock,network='{\"driver\": \"bridge\", \"options\": {\"com.docker.network.bridge.name\": \"my-bridge\"}}'"
```

## Create a context with a specific volume configuration

```shell
docker context create volume-config-context \
  --description "Context with specific volume configuration" \
  --docker "host=unix:///var/run/docker.sock,volume='{\"driver\": \"local\", \"driver_opts\": {\"type\": \"tmpfs\", \"device\": \"tmpfs\"}}'"
```

## Create a context with a specific secret configuration

```shell
docker context create secret-config-context \
  --description "Context with specific secret configuration" \
  --docker "host=unix:///var/run/docker.sock,secret='{\"driver\": \"file\", \"driver_opts\": {\"file\": \"/path/to/secret\"}}'"
```

## Create a context with a specific config configuration

```shell
docker context create config-config-context \
  --description "Context with specific config configuration" \
  --docker "host=unix:///var/run/docker.sock,config='{\"driver\": \"file\", \"driver_opts\": {\"file\": \"/path/to/config\"}}'"
```
