# Express Installations

## Bitname Express (Node.js) Docker Image

```shell

mkdir ~/randomideas-api && cd ~/randomideas-api
curl -LO https://raw.githubusercontent.com/bitnami/containers/main/bitnami/express/docker-compose.yml
docker-compose up



```

##  Express-Generator

```shell
mkdir ~/randomideas-api && cd ~/randomideas-api
npx express-generator
DEBUG=myapp:* npm start
```

##  A working mongo+mongo-express+app

```yaml
# Use root/example as user/password credentials
version: '3.8'

services:

  mongo:
    image: mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    ports:
      - 27017:27017
    volumes:
      - ./data:/data/db
    networks:
      - mongo-network

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
      ME_CONFIG_MONGODB_URL: mongodb://root:example@mongo:27017/
      ME_CONFIG_BASICAUTH: false
    networks:
      - mongo-network
    depends_on:
      - mongo

  express:
    image: bitnami/express:latest
    ports:
      - '3000:3000'
    environment:
      - PORT=3000
      - NODE_ENV=development
      - EXPRESS_DATABASE_TYPE=mongodb
      - EXPRESS_DATABASE_HOST=mongo
      - EXPRESS_DATABASE_PORT_NUMBER=27017
      - DATABASE_URL=mongodb://root:example@mongo:27017
      - EXPRESS_SKIP_DB_WAIT=0
      - EXPRESS_SKIP_DB_MIGRATION=0
      - EXPRESS_SKIP_NPM_INSTALL=0
      - EXPRESS_SKIP_BOWER_INSTALL=0
    volumes:
      - './app:/app'
    networks:
      - mongo-network
    depends_on:
      - mongo


networks:
  mongo-network:
    driver: bridge

```

##  An containerized express front-end with webpack

Basis for the client in randomideas-api.

Need to be documented and regenerated for the reuse.

- Use Webpack serve during development, serve public folder using node serve.js. Serve.js tells that public folder will be hosted.

To start a new project using the following repo as a template use:

```shell
git clone -b frontend-apiserver-db-mongo-express-all-together-initial https://github.com/bbmorten/randomideas-api.git
cd randomideas-api
cd client
npm install
cd ../app
npm install
cd ..
docker compose build
docker compose up -d 
```

### Mongo DB Permission

İlk başta kullanılan username/password ile aynı değil.

```shell

mongosh -u root -p example

use randomideas

db.createUser(
{
  user: "root",
  pwd: "example",
  roles: [
    { role: "dbOwner", db: "randomideas" }
  ]
}
)

db.runCommand({ usersInfo: { user: "root", db: "randomideas" }, showPrivileges: true })
```

Restart the express-1 container

```shell
docker compose ps
docker container restart randomideas-api-express-1
```

###  Postman Tests

```json
{
  "collection": {
    "info": {
      "_postman_id": "0548389c-4cbd-4f42-a02b-5d9d212db04a",
      "name": "Tests",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
      "updatedAt": "2024-06-04T12:20:23.000Z",
      "uid": "188863-0548389c-4cbd-4f42-a02b-5d9d212db04a",
      "createdAt": null,
      "lastUpdatedBy": null
    },
    "item": [
      {
        "name": "{{base_url}}/api/ideas",
        "id": "4141bc9a-c31c-46a5-8938-d7d7d7d96fb7",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "GET",
          "header": [],
          "url": {
            "raw": "{{base_url}}/api/ideas",
            "host": [
              "{{base_url}}"
            ],
            "path": [
              "api",
              "ideas"
            ]
          }
        },
        "response": [],
        "uid": "188863-4141bc9a-c31c-46a5-8938-d7d7d7d96fb7"
      },
      {
        "name": "{{base_url}}/api/ideas - x-www-form-urlencoded",
        "id": "6b414668-1196-47c4-bcc4-08ac2ae1d6fc",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "POST",
          "header": [],
          "body": {
            "mode": "urlencoded",
            "urlencoded": [
              {
                "key": "text",
                "value": "This is a new idea",
                "type": "text"
              },
              {
                "key": "tag",
                "value": "Technology",
                "type": "text"
              },
              {
                "key": "username",
                "value": "geneteker",
                "type": "text"
              }
            ]
          },
          "url": {
            "raw": "{{base_url}}/api/ideas",
            "host": [
              "{{base_url}}"
            ],
            "path": [
              "api",
              "ideas"
            ]
          }
        },
        "response": [],
        "uid": "188863-6b414668-1196-47c4-bcc4-08ac2ae1d6fc"
      },
      {
        "name": "{{base_url}}/api/ideas - raw body",
        "id": "e60ee0ce-ef6f-480f-90c0-8bad65b939ca",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "POST",
          "header": [],
          "body": {
            "mode": "raw",
            "raw": "{\n    \"text\": \"This is not a new idea\",\n    \"tag\": \"Technology Marvel\",\n    \"username\": \"geneteker\"\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "{{base_url}}/api/ideas",
            "host": [
              "{{base_url}}"
            ],
            "path": [
              "api",
              "ideas"
            ]
          }
        },
        "response": [],
        "uid": "188863-e60ee0ce-ef6f-480f-90c0-8bad65b939ca"
      },
      {
        "name": "{{base_url}}/api/ideas - raw body",
        "id": "31bd0cdd-4f49-4bba-8776-57b0b739682e",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "PUT",
          "header": [],
          "body": {
            "mode": "raw",
            "raw": "{\n    \"text\": \"This is not a new idea updated\",\n    \"tag\": \"Technology Marvelx\",\n    \"username\": \"geneteker\"\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "{{base_url}}/api/ideas/4",
            "host": [
              "{{base_url}}"
            ],
            "path": [
              "api",
              "ideas",
              "4"
            ]
          }
        },
        "response": [],
        "uid": "188863-31bd0cdd-4f49-4bba-8776-57b0b739682e"
      },
      {
        "name": "{{base_url}}/api/ideas - x-www-form-urlencoded",
        "id": "49d88f3b-c35f-436c-853f-9ac768ad522d",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "PUT",
          "header": [],
          "body": {
            "mode": "urlencoded",
            "urlencoded": [
              {
                "key": "text",
                "value": "This is a new idea totallay not",
                "type": "text"
              },
              {
                "key": "tag",
                "value": "Technology",
                "type": "text"
              },
              {
                "key": "username",
                "value": "geneteker",
                "type": "text"
              }
            ]
          },
          "url": {
            "raw": "{{base_url}}/api/ideas/4",
            "host": [
              "{{base_url}}"
            ],
            "path": [
              "api",
              "ideas",
              "4"
            ]
          }
        },
        "response": [],
        "uid": "188863-49d88f3b-c35f-436c-853f-9ac768ad522d"
      },
      {
        "name": "{{base_url}}/api/ideas/:id",
        "id": "d3fa20d4-70ec-4d4c-9355-ff0fdfb96555",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "DELETE",
          "header": [],
          "body": {
            "mode": "urlencoded",
            "urlencoded": []
          },
          "url": {
            "raw": "{{base_url}}/api/ideas/4",
            "host": [
              "{{base_url}}"
            ],
            "path": [
              "api",
              "ideas",
              "4"
            ]
          }
        },
        "response": [],
        "uid": "188863-d3fa20d4-70ec-4d4c-9355-ff0fdfb96555"
      }
    ]
  }
}
```
