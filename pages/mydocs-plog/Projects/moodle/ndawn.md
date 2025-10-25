# Moodle Instance running on ndawn

##  Starting the service

```shell
systemctl enable  mysql.service
systemctl start  mysql.service
```

```shell
systemctl enable apache2.service
systemctl start apache2.service
```

##  Stopping the service

```shell
systemctl stop apache2.service
systemctl stop  mysql.service
```

```shell
systemctl disable apache2.service
systemctl disable  mysql.service
```
