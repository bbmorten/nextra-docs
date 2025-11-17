# nc, mkfifo and script

## script

> Make a typescript file of a terminal session.
> More information: <https://manned.org/script>.

- Start recording in file named "typescript":

`script`

- Stop recording:

`exit`

- Start recording in a given file:

`script {{logfile.log}}`

- Append to an existing file:

`script -a {{logfile.log}}`

- Execute quietly without start and done messages:

`script -q {{logfile.log}}`

## mkfifo

> Make FIFOs (named pipes).
> More information: <https://www.gnu.org/software/coreutils/mkfifo>.

- Create a named pipe at a given path:

`mkfifo {{path/to/pipe}}`

- Send data through a named pipe and send the command to the background:

`echo {{"Hello World"}} > {{path/to/pipe}} &`

- Receive data through a named pipe:

`cat {{path/to/pipe}}`

- Share your terminal session in real-time:

`mkfifo {{path/to/pipe}}; script -f {{path/to/pipe}}`

##  Providing a shell to the remote user

From man page of nc on ubuntu 24.04.01;

```shell
rm -f /tmp/f; mkfifo /tmp/f
cat /tmp/f | /bin/sh -i 2>&1 | nc -l 127.0.0.1 1234 > /tmp/f
```

## Explaination

The command:

```bash
cat /tmp/f | /bin/sh -i 2>&1 | nc -l 127.0.0.1 1234 > /tmp/f
```

performs several operations to set up a simple reverse shell-like behavior. Here's a breakdown of each component:

1. **`cat /tmp/f`**:
   - This reads the contents of the file `/tmp/f`. Initially, this file may be empty or may contain some initial data, which is passed to the next command in the pipeline.

2. **`| /bin/sh -i`**:
   - The pipe (`|`) sends the output from `cat /tmp/f` to the input of `/bin/sh -i`.
   - `/bin/sh -i` launches an interactive shell. The `-i` flag indicates that the shell should be interactive, meaning it will keep running and accept commands.

3. **`2>&1`**:
   - This redirects standard error (file descriptor 2) to standard output (file descriptor 1), meaning any error messages produced by the shell will be sent along with standard output. This is important for ensuring that both regular output and error messages are forwarded correctly in the pipeline.

4. **`| nc -l 127.0.0.1 1234`**:
   - The pipe connects the output of the shell (`/bin/sh -i`) to `nc`, which is the Netcat utility.
   - `nc -l 127.0.0.1 1234` makes Netcat listen on IP address `127.0.0.1` (localhost) and port `1234`. Any data sent to this address and port will be forwarded to the interactive shell.

5. **`> /tmp/f`**:
   - The output from `nc` is redirected back to the file `/tmp/f`, effectively creating a feedback loop where any commands received by the Netcat listener are stored in `/tmp/f` and then executed by the shell.

### What It Does Overall

The command sets up a loop where:

- Netcat listens on `127.0.0.1:1234` for incoming connections.
- Any data sent to this port is written to `/tmp/f`.
- The contents of `/tmp/f` are executed by the interactive shell.
- The output (including errors) is sent back through Netcat, creating a simple reverse shell that allows remote command execution.

### Security Implications

- This command creates a backdoor that can execute arbitrary commands sent over the network. It poses a significant security risk, especially if run with elevated privileges.
- Use cases for this kind of command are usually associated with penetration testing or malicious exploitation.

### Summary

The command essentially creates a loop where commands sent over a network connection are executed by a shell, and the results are transmitted back, allowing for remote code execution.
