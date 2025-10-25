# lsof commands

##  How can I kill a process which is bound to a specific port

```shell
sudo lsof -i :11880
kill <PID>
```

## Apple’s built-in FTP-proxy daemon that’s holding port 8021

```shell
sudo grep -R "8021" /System/Library/LaunchDaemons /System/Library/LaunchAgents

```

### Unload the job right now

```shell
sudo launchctl bootout system/com.apple.ftp-proxy

```

### (Or, on older macOS releases:)

```shell
sudo launchctl unload -w /System/Library/LaunchDaemons/com.apple.ftp-proxy.plist

```

### To prevent it from ever re-loading on reboot

```shell
sudo launchctl disable system/com.apple.ftp-proxy

```

## Show me applications using a specific port

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN
```

## Show me applications using a specific port with PID

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t
```

## Show me applications using a specific port with PID and process name

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p
```

## Show me applications using a specific port with PID and process name in a single command

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | awk '{print $1, $4}'
```

## Show me applications using a specific port with PID and process name in a single command with grep

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}'
```

## Show me applications using a specific port with PID and process name in a single command with grep and sort

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort
```

## Show me applications using a specific port with PID and process name in a single command with grep, sort and uniq

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort | uniq
```

## Show me applications using a specific port with PID and process name in a single command with grep, sort, uniq and wc

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort | uniq | wc -l
```

## Show me applications using a specific port with PID and process name in a single command with grep, sort, uniq and wc in a single line

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort | uniq | wc -l
```

## Show me applications using a specific port with PID and process name in a single command with grep, sort, uniq and wc in a single line with awk

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort | uniq | wc -l | awk '{print "Number of applications using port 8021:", $1}'
```

## Show me applications using a specific port with PID and process name in a single command with grep, sort, uniq and wc in a single line with awk and sed

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort | uniq | wc -l | awk '{print "Number of applications using port 8021:", $1}' | sed 's/Number/Total/'
```

## Show me applications using a specific port with PID and process name in a single command with grep, sort, uniq and wc in a single line with awk, sed and tr

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort | uniq | wc -l | awk '{print "Total applications using port 8021:", $1}' | sed 's/Total/Count/' | tr '[:upper:]' '[:lower:]'
```

## Show me applications using a specific port with PID and process name in a single command with grep, sort, uniq and wc in a single line with awk, sed, tr and cut

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort | uniq | wc -l | awk '{print "Count of applications using port 8021:", $1}' | sed 's/Count/Total/' | tr '[:upper:]' '[:lower:]' | cut -d' ' -f5
```

## Show me applications using a specific port with PID and process name in a single command with grep, sort, uniq and wc in a single line with awk, sed, tr, cut and head

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort | uniq | wc -l | awk '{print "Total count of applications using port 8021:", $1}' | sed 's/Total/Count/' | tr '[:upper:]' '[:lower:]' | cut -d' ' -f5 | head -n 1
```

## Show me applications using a specific port with PID and process name in a single command with grep, sort, uniq and wc in a single line with awk, sed, tr, cut, head and tail

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort | uniq | wc -l | awk '{print "Count of applications using port 8021:", $1}' | sed 's/Count/Total/' | tr '[:upper:]' '[:lower:]' | cut -d' ' -f5 | head -n 1 | tail -n 1
```

## Show me applications using a specific port with PID and process name in a single command with grep, sort, uniq and wc in a single line with awk, sed, tr, cut, head, tail and wc

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort | uniq | wc -l | awk '{print "Total count of applications using port 8021:", $1}' | sed 's/Total/Count/' | tr '[:upper:]' '[:lower:]' | cut -d' ' -f5 | head -n 1 | tail -n 1 | wc -l
```

## Show me applications using a specific port with PID and process name in a single command with grep, sort, uniq and wc in a single line with awk, sed, tr, cut, head, tail, wc and xargs

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort | uniq | wc -l | awk '{print "Count of applications using port 8021:", $1}' | sed 's/Count/Total/' | tr '[:upper:]' '[:lower:]' | cut -d' ' -f5 | head -n 1 | tail -n 1 | xargs echo
```

## Show me applications using a specific port with PID and process name in a single command with grep, sort, uniq and wc in a single line with awk, sed, tr, cut, head, tail, wc, xargs and echo

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort | uniq | wc -l | awk '{print "Total count of applications using port 8021:", $1}' | sed 's/Total/Count/' | tr '[:upper:]' '[:lower:]' | cut -d' ' -f5 | head -n 1 | tail -n 1 | xargs echo "Applications using port 8021:"
```

## Show me applications using a specific port with PID and process name in a single command with grep, sort, uniq and wc in a single line with awk, sed, tr, cut, head, tail, wc, xargs and echo in a single line

```shell
sudo lsof -nP -iTCP:8021 -sTCP:LISTEN -t | xargs ps -p | grep -v PID | awk '{print $1, $4}' | sort | uniq | wc -l | awk '{print "Count of applications using port 8021:", $1}' | sed 's/Count/Total/' | tr '[:upper:]' '[:lower:]' | cut -d' ' -f5 | head -n 1 | tail -n 1 | xargs echo "Applications using port 8021:"
```
