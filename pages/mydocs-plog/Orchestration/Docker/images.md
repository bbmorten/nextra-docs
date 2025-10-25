# Images

##  Links

- [Building the container images the modern way](https:/youtu.be/nZLz0o4duRs)

## ko: Easy Go Containers

```shell
brew install ko // MACOSX
docker login // Login to docker hub or another registry supported. Documentation! 
mkdir ko-test && cd ko-test
export KO_DOCKER_REPO=bbmorten

go mod init go.mod
mkdir -p cmd/app
cd cmd/app
cat <<EOF >> hello.go
// main.go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
EOF
go build hello.go
cd ../..
ko build ./cmd/app


```
