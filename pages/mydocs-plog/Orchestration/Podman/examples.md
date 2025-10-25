# MYSQL with Persistent Volume and Network

```shell
podman volume create mysqldata
podman network create datanet
podman run -d --name persistent-mysql -e MARIADB_ROOT_PASSWORD=password -v mysqldata:/va/lib/mysql --network=datanet dock
er.io/bitnami/mariadb
```

```shell
➜  ex188 podman volume create microservice
microservice
➜  ex188 podman network create microservice
microservice
➜  ex188 podman run --name backend --network=microservice -v microservice:/data -e MARIADB_ROOT_PASSWORD=password bitnami/mariadb
```
