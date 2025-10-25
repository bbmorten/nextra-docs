#  APT Resource Checking

To check the active repositories on an Ubuntu system, you can use one of the following methods:

### **1. Using `apt-cache`**

```sh
apt-cache policy
```

This command shows all repositories and their priority.

### **2. Listing Enabled Repositories**

```sh
grep ^deb /etc/apt/sources.list /etc/apt/sources.list.d/*
```

This will list all active repositories.

### **3. Using `apt` to Check Sources**

```sh
apt-add-repository --list
```

This command lists all repositories added via `add-apt-repository`.

### **4. Checking Installed Repository Files**

```sh
ls -l /etc/apt/sources.list.d/
```

This directory contains additional repository files.


