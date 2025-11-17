# Reading environment variables in shell scripts

```shell
export $(grep -v '^#' .env | xargs)
```
