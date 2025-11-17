# mongodb and mongo-express (docker compose version)

- docker-compose.yml
- .env
- docker-entrypoint.sh

Working seemlesly. Tree structure is as follows

```shell title='Directory Structure'
➜  data tree
.
└── mongo
    ├── docker-compose.yml
    ├── docker-entrypoint.sh
    └── my-property-pulse
        ├── mongo_express_password.txt
        ├── mongo_express_username.txt
        ├── mongo_password.txt
        └── mongo_username.txt

3 directories, 6 files
➜  data 
```

```yml title='docker-compose.yml'
services:
  mongo:
    image: mongo:latest
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME_FILE: /run/secrets/mongo_username
      MONGO_INITDB_ROOT_PASSWORD_FILE: /run/secrets/mongo_password
    secrets:
      - mongo_username
      - mongo_password
    volumes:
      - mongo_data:/data/db
    ports:
      - "27017:27017"
    networks:
      - mongo_network

  mongo-express:
    image: mongo-express:latest
    restart: always
    ports:
      - "${MONGO_EXPRESS_PORT_EXTERNAL:-8081}:8081"
    environment:
      ME_CONFIG_BASICAUTH_USERNAME_FILE: /run/secrets/mongo_express_username
      ME_CONFIG_BASICAUTH_PASSWORD_FILE : /run/secrets/mongo_express_password
      ME_CONFIG_MONGODB_ADMINUSERNAME_FILE: /run/secrets/mongo_username
      ME_CONFIG_MONGODB_ADMINPASSWORD_FILE: /run/secrets/mongo_password

    volumes:
      - ./docker-entrypoint.sh:/docker-entrypoint.sh

    secrets:
      - mongo_username
      - mongo_password
      - mongo_express_username
      - mongo_express_password
    depends_on:
      - mongo
    networks:
      - mongo_network

volumes:
  mongo_data:

networks:
  mongo_network:
    driver: bridge

secrets:
  mongo_username:
    file: ./my-property-pulse/mongo_username.txt
  mongo_password:
    file: ./my-property-pulse/mongo_password.txt
  mongo_express_username:
    file: ./my-property-pulse/mongo_express_username.txt
  mongo_express_password:
    file: ./my-property-pulse/mongo_express_password.txt
```

```shell title='docker-entrypoint.sh'
#!/bin/bash
# This file is auto-generated. Do not edit directly!
set -eo pipefail

# if command does not start with mongo-express, run the command instead of the entrypoint
if [ "${1}" != "mongo-express" ]; then
    exec "$@"
fi

function wait_tcp_port {
    local host="$1" port="$2"
    local max_tries="$3" tries=1

    # see http://tldp.org/LDP/abs/html/devref1.html for description of this syntax.
    while ! exec 6<>/dev/tcp/$host/$port && [[ $tries -lt $max_tries ]]; do
        sleep 1s
        tries=$(( tries + 1 ))
        echo "$(date) retrying to connect to $host:$port ($tries/$max_tries)"
    done
    exec 6>&-
}

export ME_CONFIG_MONGODB_ADMINUSERNAME=$(cat /run/secrets/mongo_username)
export ME_CONFIG_MONGODB_ADMINPASSWORD=$(cat /run/secrets/mongo_password)

export ME_CONFIG_MONGODB_URL="mongodb://${ME_CONFIG_MONGODB_ADMINUSERNAME}:${ME_CONFIG_MONGODB_ADMINPASSWORD}@mongo:27017/"
echo "Using MongoDB URL: $ME_CONFIG_MONGODB_URL"

echo $ME_CONFIG_MONGODB_URL
# if ME_CONFIG_MONGODB_URL has a comma in it, we're pointing to a replica set (https://github.com/mongo-express/mongo-express-docker/issues/21)
if [[ "$ME_CONFIG_MONGODB_URL" != *,* ]]; then
    work=$ME_CONFIG_MONGODB_URL
    # Remove the scheme (should be "mongodb://" or "mongodb+srv://").
    work=${work#*://}
    # Remove the path component of the URL (should just be a "/").
    work=${work%%/*}
    # Remove the userinfo.
    work=${work#*@}
    if [[ "$work" = *:* ]]; then
        # Match the host.
        host=${work%:*}
        # Match the port.
        port=${work#*:}
    else
        host=$work
        port=27017
    fi

    # wait for the mongo server to be available
    echo "Waiting for $host:$port..."
    wait_tcp_port "$host" "$port" "${ME_CONFIG_CONNECT_RETRIES:-10}"
fi

# run mongo-express
exec node app
```

```shell title='.env'
MONGO_EXPRESS_PORT_EXTERNAL=8081
ME_CONFIG_BASICAUTH_ENABLED=true
```
