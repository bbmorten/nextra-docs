#  wget

## Examples

###  Download a single file

```shell
wget https://cm.lf.training/LFS260/LFS260_V2024-09-25_SOLUTIONS.tar.xz \
    --user=LFtraining --password=Penguin2014
```

###  Download the folder ignoring robots.txt

```shell
wget --user=LFtraining --password=Penguin2014 -r -np -nH --cut-dirs=1 -P ./downloads --no-check-certificate --execute robots=off https://cm.lf.training/LFS260/
```
