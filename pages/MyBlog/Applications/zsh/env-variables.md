#  Environment Variables

##  General Knowledge

In a Linux shell, **variables** are used to store data that can be referenced and manipulated throughout the session. They are essential for writing scripts, customizing the environment, and interacting with the system.

### Types of Variables in Linux Shell

1. **User-Defined Variables (Local Variables):**
   - These are variables defined by the user and are only available in the current shell session. They are used for temporary data storage within scripts or interactive sessions.
   - Example:

     ```bash
     my_var="Hello, World!"
     echo $my_var
     ```

   - In this example, `my_var` is a local variable that holds the string `"Hello, World!"`. The value is accessed using `$my_var`.

2. **Environment Variables:**
   - Environment variables are a special type of variable that affect the behavior of the shell and user applications. They are available to any child process created by the shell, making them accessible to programs launched from the shell.
   - Common environment variables include `PATH`, `HOME`, `USER`, `SHELL`, etc.
   - Example:

     ```bash
     echo $HOME
     ```

   - This command outputs the current user's home directory, which is stored in the `HOME` environment variable.

### Creating and Using Variables

- **Local Variables:**
    - To create a local variable, simply assign a value:

    ```bash
    name="John"
    ```
    - Access the variable using the `$` symbol:

    ```bash
    echo $name
    ```

- **Exporting Variables as Environment Variables:**
    - To make a local variable an environment variable, use the `export` command:

    ```bash
    export MY_VAR="Some value"
    ```
    - This makes `MY_VAR` available to any child processes started by the current shell.

### Common Environment Variables

- **`PATH`**: Lists directories where the shell looks for commands. When you type a command, the shell searches these directories in the order they are listed.
- **`HOME`**: Represents the current user's home directory (e.g., `/home/username`).
- **`USER`**: The name of the currently logged-in user.
- **`SHELL`**: The path to the current shell being used (e.g., `/bin/bash`).
- **`PWD`**: The current working directory.

### Viewing and Managing Environment Variables

- **View all environment variables**: Use the `printenv` or `env` command.

  ```bash
  printenv
  ```

- **Set an environment variable**: Use `export` as shown earlier.
- **Unset an environment variable**: Use the `unset` command.

  ```bash
  unset MY_VAR
  ```

### Special Variables in the Shell

- **Positional Parameters** (`$1`, `$2`, ...): Used in scripts to refer to the command-line arguments.
- **`$0`**: The name of the script itself.
- **`$#`**: The number of command-line arguments passed to the script.
- **`$?`**: The exit status of the last command executed.

### Summary

Variables in the Linux shell help in customizing the environment and managing data within scripts. Environment variables, in particular, are inherited by child processes, making them crucial for configuring the shell and application behavior.

##  $PATH

```shell
realpath ~bulent/.zshenv 
/Users/bulent/.zshenv
```

##  printenv

```shell
# Local variable
LKP_KSRC_L=~/kernels/linux-6.11.4
echo $LKP_KSRC_L
## Not working
printenv LKP_KSRC_L
# Environment variable
export LKP_KSRC=~/kernels/linux-6.11.4
printenv LKP_KSRC
```
