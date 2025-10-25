#  Retirement Logs

Dashboard'a girmek için bir container ve bir python app çalışması gerekiyor.

## Python FastAPI App

```shell
cd /Users/bulent/git-repos/0sOvCWFmrtA
uvicorn app.main:app --reload

```

## NGINX

- Retirement Logs App Path : /Users/bulent/git-repos/elearning/oreilly-courses/javascript/mjfb-brad-traversy/09-asynchronous-javascript/README.md

Retirement dosyaları web-api branchinde duruyor.

```shell
❯ git remote -v
origin  https://github.com/bbmorten/mjfb-brad-traversy.git (fetch)
origin  https://github.com/bbmorten/mjfb-brad-traversy.git (push)

mjfb-brad-traversy on  webapi on ☁️  bulent@btegitim.com 
❯ git branch   
  iterators-generators-ds
  main
  modules
  node-js
  oop
  search
  tracalorie
  unit-testing-algos
* webapi
  youtube-list
  youtube-playlist-items
  youtube-playlist-webpack-bootstrap
```

```shell
export FOLDERHOME='/Users/bulent/git-repos/elearning/oreilly-courses/javascript/mjfb-brad-traversy/workout-files/09-asynchronous-javascript'
export SVCPORT=8081
docker run \
    --hostname=455095bcef69 \
    --mac-address=02:42:ac:11:00:02 \
    --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
    --env=NGINX_VERSION=1.25.2 \
    --env=NJS_VERSION=0.8.0 \
    --env=PKG_RELEASE=1~bookworm \
    --volume="${FOLDERHOME}:/usr/share/nginx/html" \
    -p ${SVCPORT}:80 \
    --restart=no \
    --label='maintainer=NGINX Docker Maintainers <docker-maint@nginx.com>' \
    --runtime=runc \
    -d nginx:latest


```

```javascript
export FOLDERHOME='/Users/bulent/git-repos/temp/shopping-w-js'
export SVCPORT=8083
docker run \
    --hostname=455095bcef69 \
    --mac-address=02:42:ac:11:00:02 \
    --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
    --env=NGINX_VERSION=1.25.2 \
    --env=NJS_VERSION=0.8.0 \
    --env=PKG_RELEASE=1~bookworm \
    --volume="${FOLDERHOME}:/usr/share/nginx/html" \
    -p ${SVCPORT}:80 \
    --restart=no \
    --label='maintainer=NGINX Docker Maintainers <docker-maint@nginx.com>' \
    --runtime=runc \
    -d nginx:latest
```
