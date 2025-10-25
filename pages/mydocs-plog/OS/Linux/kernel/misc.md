#  Notes

## Explore Linux Kernel Programming with QEMU

<https://blog.leonardotamiano.xyz/tech/linux-kernel-qemu-setup/>

##  How to Install KVM QEMU on Ubuntu 24.04 LTS Server Linux

This is applied to Volkanmacpro

<https://linux.how2shout.com/how-to-install-kvm-qemu-on-ubuntu-24-04-lts-server-linux/>

## Running a compiled kernel with initramfs

```shell
qemu-system-x86_64 \
        -m 2G \
        -smp 2 \
        -kernel ./linux-stable/arch/x86/boot/bzImage \
 -initrd ./initramfs.cpio.gz \
        -enable-kvm \
        -nographic \
        -pidfile vm.pid \
 -append "console=ttyS0 root=/dev/sda earlyprintk=serial net.ifnames=0 nokaslr" \
        2>&1 | tee ./logs/vm.log
```

###  Adding a module to the current kernel

Executed commands log. Reusable maybe.

```shell
lscpu | grep Virtualization
sudo apt install qemu-kvm libvirt-clients libvirt-daemon-system bridge-utils virtinst libvirt-daemon virt-top libguestfs-tools libosinfo-bin qemu-system tuned
sudo usermod -aG libvirt $(whoami)
sudo usermod -aG kvm $(whoami)
sudo systemctl enable --now libvirtd
lsmod | grep kvm
```

On Volkammacpro. Kernel Path is **~/c2kp/linux-stable**

```shell
cd first-kernel-module/
make
cp hello.ko ./../../../linux-stable/initramfs/
cd ./../../../linux-stable/initramfs/
find . -print0 | cpio --null -ov --format=newc > initramfs.cpio
ls -la
gzip ./initramfs.cpio
cp initramfs.cpio.gz initramfs.cpio.gz.001
gzip ./initramfs.cpio
cd ..
cd ..
cp linux-stable/initramfs/initramfs.cpio.gz ./
```

Run the compiled kernel with initramfs and then inside the running kernel

```shell
ls -la 
~ # insmod hello.ko
[   14.962896] hello: loading out-of-tree module taints kernel.
[   14.967292] Hello, World!
~ # cat /proc/modules
hello 12288 0 - Live 0xffffffffc0000000 (O)
~ # rmmod hello
[   44.979873] Goodbye, World!
```

~ # insmod hello.ko
[   14.962896] hello: loading out-of-tree module taints kernel.
[   14.967292] Hello, World!
~ # cat /proc/modules
hello 12288 0 - Live 0xffffffffc0000000 (O)
~ # rmmod hello
[   44.979873] Goodbye, World!
```

<https://busybox.net/>

## Linux kernel QEMU setup

<https://vccolombo.github.io/cybersecurity/linux-kernel-qemu-setup/>

##  Code browser tools

### [CScope](https://cscope.sourceforge.net/)

###  [CTags](https://github.com/universal-ctags/ctags/tree/master/docs)

```shell title = 'MacOS Installation'

brew tap universal-ctags/universal-ctags
brew install --HEAD universal-ctags
```

## Kernel Documentation

```shell
sudo apt install sphinx graphviz
cd linux-stable/
make htmldocs
```

```shell
sudo apt update
sudo apt install texlive-xetex
cd linux-stable/
make pdfdocs
```

## Some preps for the book Linux Kernel Development by kaiwan

<https://github.com/PacktPublishing/Linux-Kernel-Programming_2E>

Ubuntu 24.04.1 LTS içinde yapıyoruz.

```shell
sudo apt-get update -y
sudo apt-get update -y
sudo apt install -y gcc make perl git build-essential dkms linux-headers-6.8.0-47-generic ssh
sudo su - 
useradd -m c2kp -s /bin/bash
passwd c2kp
usermod -a -G adm,sudo c2kp
grep -E -w "adm|sudo" /etc/group
# Install required packages for building the Linux Kernel
apt install -y \
bison build-essential flex libncurses5-dev ncurses-dev \
libelf-dev libssl-dev tar util-linux xz-utils
# To install the packages required for work we’ll do in other parts of this book, run the following command:
sudo apt install -y \
 bc bpfcc-tools bsdextrautils \
 clang cppcheck cscope curl exuberant-ctags \
 fakeroot flawfinder \
 gnome-system-monitor gnuplot hwloc indent \
 libnuma-dev linux-headers-$(uname -r) linux-tools-$(uname -r) \
 man-db net-tools numactl openjdk-22-jdk openssh-server \
 perf-tools-unstable psmisc python3-distutils \
 rt-tests smem sparse stress sysfsutils \
 tldr-py trace-cmd tree tuna virt-what
 # For other doings
 sudo apt install -y \
  bc bpfcc-tools bsdextrautils \
  clang cppcheck cscope curl exuberant-ctags \
  fakeroot flawfinder \
  gnome-system-monitor gnuplot hwloc indent \
  libnuma-dev linux-headers-$(uname -r) linux-tools-$(uname -r) \
  man-db net-tools numactl
# JDK 23
wget https://download.oracle.com/java/23/latest/jdk-23_linux-x64_bin.deb
dpkg -i  jdk-23_linux-x64_bin.deb
java --version
update-alternatives --config java
# Continue
apt install -y \
 openssh-server \
 perf-tools-unstable psmisc \
 rt-tests smem sparse stress sysfsutils \
 tldr-py trace-cmd tree tuna virt-what
# alternative to apt install python3-distutils
apt install python3-distutils-extra
# Qemu for ARM
apt install qemu-system-arm
```

[Cross compiling toolchains in Docker images]([https://](https://github.com/dockcross/dockcross.git)

- Login with c2kp

```shell
git clone https://github.com/dockcross/dockcross.git
cd dockcross
sudo usermod -aG docker $USER
# Logout and login again
docker run --rm dockcross/linux-armv7 > ./dockcross-linux-armv7
```

The command you provided:

```bash
docker run --rm dockcross/linux-armv7 > ./dockcross-linux-armv7
```

does the following:

1. **`docker run`**: This command is used to create and start a new container from a Docker image. In this case, the image being used is `dockcross/linux-armv7`, which is a toolchain image designed for cross-compiling software for the ARMv7 architecture.

2. **`--rm`**: This option ensures that the Docker container is automatically removed after it stops. It helps to avoid cluttering your system with stopped containers.

3. **`dockcross/linux-armv7`**: This is the name of the Docker image being run. It is a specialized image from the `dockcross` project, which provides cross-compilation toolchains for various platforms.

4. **`>`**: The `>` symbol is a redirection operator in Unix-like systems. It redirects the output of the command to a file. In this command, it is used to save the output of the Docker run to a file named `./dockcross-linux-armv7`.

5. **`./dockcross-linux-armv7`**: This specifies the file path where the output of the command will be saved. The single dot (`.`) represents the current directory, so this will create a file named `dockcross-linux-armv7` in the current working directory.

Result

The command downloads and runs the `dockcross/linux-armv7` image, and the output (which is a script to run the cross-compilation toolchain) is saved to the file `./dockcross-linux-armv7`. After this step, you would typically make the file executable (`chmod +x ./dockcross-linux-armv7`) and use it to build software for ARMv7 architectures.

Testing. Failed on the first try

```shell
./dockcross-linux-armv7 bash -c '$CC test/C/hello.c -o hello_arm'

```

##  From the repo nice Install4UbuntuScript

Customize and use it later

```shell
#!/bin/bash
# pkg_install4ubuntu_lkp.sh
# ***************************************************************
# This program is part of the source code released for the book
#  "Linux Kernel Programming" 2E
#  (c) Author: Kaiwan N Billimoria
#  Publisher:  Packt
#  GitHub repository:
#  https://github.com/PacktPublishing/Linux-Kernel-Programming_2E
#****************************************************************
# Brief Description:
# Helper script to install all required packages (as well as a few more
# possibly) for the Linux Kernel Programming 2E book.
#
# Currently biased toward Debian/Ubuntu systems only... (uses apt).
# To (slightly :) help folks on Fedora (and related), do:
# sudo dnf install ncurses-devel gcc-c++

function die
{
 echo >&2 "$@"
 exit 1
}
runcmd()
{
    [[ $# -eq 0 ]] && return
    echo "$@"
    eval "$@" || echo "*** failed ***"
}

#--- 'main'
echo "$(date): beginning installation of required packages..."

# Get the root partition; we ASSUME you're using it...
ROOT_PART=$(df |grep -w "/"|awk '{print $1}')
[[ -z "${ROOT_PART}" ]] && die "Couldn't get root partition"
spc1=$(df|grep ${ROOT_PART}|awk '{print $3}')
[[ ! -z "${spc1}" ]] && echo "Disk space in use currently: ${spc1} KB"

runcmd sudo apt update
echo "-----------------------------------------------------------------------"
# ensure basic pkgs are installed!
runcmd sudo apt install -y \
 gcc make perl

# packages typically required for kernel build
runcmd sudo apt install -y \
 asciidoc binutils-dev bison build-essential flex libncurses5-dev ncurses-dev \
 libelf-dev libssl-dev openssl pahole tar util-linux xz-utils zstd

echo "-----------------------------------------------------------------------"

# other packages...
# TODO : check if reqd
#sudo apt install -y bc bpfcc-tools build-essential \

runcmd sudo apt install -y \
 bc bpfcc-tools bsdextrautils \
 clang coccinelle coreutils cppcheck cscope curl exuberant-ctags \
 fakeroot flawfinder \
 git gnome-system-monitor gnuplot hwloc indent kmod \
 libnuma-dev linux-headers-$(uname -r) linux-tools-$(uname -r) \
 man-db net-tools numactl openjdk-22-jdk \
 perf-tools-unstable procps psmisc python3-distutils  \
 rt-tests smem sparse stress stress-ng sysfsutils \
 tldr-py trace-cmd tree tuna virt-what yad
echo "-----------------------------------------------------------------------"

#--- FYI, on Fedora-type systems:
#    Debian/Ubuntu pkg           Fedora/RedHat/CentOS equivalent pkg
#  --------------------------    -----------------------------------
#  rt-tests                        realtime-tests
#  ncurses-dev/libncurses5-dev     ncurses-devel
#  libssl-dev                      openssl-devel
#  libelf-dev                      elfutils-libelf-devel
#---

# As an aside, lets add ourseleves to the vboxsf group (to gain access to
# VirtualBox shared folders); will require you to log out and back in
# (or even reboot) to take effect
groups |grep -q -w vboxsf || runcmd sudo usermod -G vboxsf -a ${USER}

runcmd sudo apt autoremove

spc2=$(df|grep ${ROOT_PART}|awk '{print $3}')
[[ ! -z "${spc1}" && ! -z "${spc2}" ]] && echo "Disk space difference : ($spc2 - $spc1) : $((spc2-spc1)) KB"
exit 0

```

## Required Components in Linux

any modern Linux system, be it a supercomputer or a tiny, embedded device, has three required components:

- A bootloader
- An Operating System (OS) kernel
- A root filesystem

It additionally has two optional components:

- If the processor family is ARM or PPC (32- or 64-bit), a Device Tree Blob (DTB) image file
- An initramfs (or initrd) image file-

## Kernel Version

```shell
uname -r

```

```console
6.8.0-47-generic

```

- Major # (or w): 6
- Minor # (or x): 8
- [patchlevel] (or y): 0
- [-EXTRAVERSION] (or -z): -47-generic

## Linux-stable version and any version

git clone git://git.kernel.org/pub/scm/linux/kernel/git/stable/linux-stable.git
<https://cdn.kernel.org/pub/linux/kernel/v6.x/linux-6.11.4.tar.xz>

[Extracting a kernel](./../../../Applications/tar.md#extracting-a-kernel-file-to-a-specified-directory)

```shell
# Define a environment variable
 export LKP_KSRC=~/kernels/linux-6.11.4
c2kp@BMAPMBP133:~/kernels/linux-6.11.4$ head Makefile 
# SPDX-License-Identifier: GPL-2.0
VERSION = 6
PATCHLEVEL = 11
SUBLEVEL = 4
EXTRAVERSION =
NAME = Baby Opossum Posse

# *DOCUMENTATION*
# To see a list of typical targets execute "make help"
# More info can be located in ./README


```

##  From the kernel repo get-verified-tarball.sh

```shell
#!/bin/bash
# get-verified-tarball
# --------------------
# Get Linux kernel tarball and cryptographically verify it,
# retrieving the PGP keys using the Web Key Directory (WKD)
# protocol if they are not already in the keyring.
#
# Pass the kernel version as the only parameter, or
# we'll grab the latest stable kernel.
#
# Example: ./get-verified-tarball 4.4.145
#
# Configurable parameters
# -----------------------
# Where to download the tarball and verification data.
TARGETDIR="$HOME/Downloads"

# If you set this to empty value, we'll make a temporary
# directory and fetch the verification keys from the
# Web Key Directory each time. Also, see the USEKEYRING=
# configuration option for an alternative that doesn't
# rely on WKD.
GNUPGHOME="$HOME/.gnupg"

# For CI and other automated infrastructure, you may want to
# create a keyring containing the keys belonging to:
#  - autosigner@kernel.org
#  - torvalds@kernel.org
#  - gregkh@kernel.org
#
# To generate the keyring with these keys, do:
#   gpg --export autosigner@ torvalds@ gregkh@ > keyring.gpg
#   (or use full keyids for maximum certainty)
#
# Once you have keyring.gpg, install it on your CI system and set
# USEKEYRING to the full path to it. If unset, we generate our own
# from GNUPGHOME.
USEKEYRING=

# Point this at your GnuPG binary version 2.1.11 or above.
# If you are using USEKEYRING, GnuPG-1 will work, too.
GPGBIN="/usr/bin/gpg"
GPGVBIN="/usr/bin/gpgv"
# We need a compatible version of sha256sum, too
SHA256SUMBIN="/usr/bin/sha256sum"
# And curl
CURLBIN="/usr/bin/curl"
# And we need the xz binary
XZBIN="/usr/bin/xz"

# You shouldn't need to modify this, unless someone
# other than Linus or Greg start releasing kernels.
DEVKEYS="torvalds@kernel.org gregkh@kernel.org"
# Don't add this to DEVKEYS, as it plays a wholly
# different role and is NOT a key that should be used
# to verify kernel tarball signatures (just the checksums).
SHAKEYS="autosigner@kernel.org"

# What kernel version do you want?
VER=${1}
if [[ -z ${VER} ]]; then
    # Assume you want the latest stable
    VER=$(${CURLBIN} -sL https://www.kernel.org/finger_banner \
          | grep 'latest stable version' \
          | awk -F: '{gsub(/ /,"", $0); print $2}')
fi
if [[ -z ${VER} ]]; then
    echo "Could not figure out the latest stable version."
    exit 1
fi

MAJOR="$(echo ${VER} | cut -d. -f1)"
if [[ ${MAJOR} -lt 3 ]]; then
    echo "This script only supports kernel v3.x.x and above"
    exit 1
fi

if [[ ! -d ${TARGETDIR} ]]; then
    echo "${TARGETDIR} does not exist"
    exit 1
fi

TARGET="${TARGETDIR}/linux-${VER}.tar.xz"
# Do we already have this file?
if [[ -f ${TARGET} ]]; then
    echo "File ${TARGETDIR}/linux-${VER}.tar.xz already exists."
    exit 0
fi

# Start by making sure our GnuPG environment is sane
if [[ ! -x ${GPGBIN} ]]; then
    echo "Could not find gpg in ${GPGBIN}"
    exit 1
fi
if [[ ! -x ${GPGVBIN} ]]; then
    echo "Could not find gpgv in ${GPGVBIN}"
    exit 1
fi

# Let's make a safe temporary directory for intermediates
TMPDIR=$(mktemp -d ${TARGETDIR}/linux-tarball-verify.XXXXXXXXX.untrusted)
echo "Using TMPDIR=${TMPDIR}"
# Are we using a keyring?
if [[ -z ${USEKEYRING} ]]; then
    if [[ -z ${GNUPGHOME} ]]; then
        GNUPGHOME="${TMPDIR}/gnupg"
    elif [[ ! -d ${GNUPGHOME} ]]; then
        echo "GNUPGHOME directory ${GNUPGHOME} does not exist"
        echo -n "Create it? [Y/n]"
        read YN
        if [[ ${YN} == 'n' ]]; then
            echo "Exiting"
            rm -rf ${TMPDIR}
            exit 1
        fi
    fi
    mkdir -p -m 0700 ${GNUPGHOME}
    echo "Making sure we have all the necessary keys"
    ${GPGBIN} --batch --quiet \
        --homedir ${GNUPGHOME} \
        --auto-key-locate wkd \
        --locate-keys ${DEVKEYS} ${SHAKEYS}
    # If this returned non-0, we bail
    if [[ $? != "0" ]]; then
        echo "Something went wrong fetching keys"
        rm -rf ${TMPDIR}
        exit 1
    fi
    # Make a temporary keyring and set USEKEYRING to it
    USEKEYRING=${TMPDIR}/keyring.gpg
    ${GPGBIN} --batch --export ${DEVKEYS} ${SHAKEYS} > ${USEKEYRING}
fi
# Now we make two keyrings -- one for the autosigner, and
# the other for kernel developers. We do this in order to
# make sure that we never verify kernel tarballs using the
# autosigner keys, only using developer keys.
SHAKEYRING=${TMPDIR}/shakeyring.gpg
${GPGBIN} --batch \
    --no-default-keyring --keyring ${USEKEYRING} \
    --export ${SHAKEYS} > ${SHAKEYRING}
DEVKEYRING=${TMPDIR}/devkeyring.gpg
${GPGBIN} --batch \
    --no-default-keyring --keyring ${USEKEYRING} \
    --export ${DEVKEYS} > ${DEVKEYRING}

# Now that we know we can verify them, grab the contents
TXZ="https://cdn.kernel.org/pub/linux/kernel/v${MAJOR}.x/linux-${VER}.tar.xz"
SIG="https://cdn.kernel.org/pub/linux/kernel/v${MAJOR}.x/linux-${VER}.tar.sign"
SHA="https://www.kernel.org/pub/linux/kernel/v${MAJOR}.x/sha256sums.asc"

# Before we verify the developer signature, we make sure that the
# tarball matches what is on the kernel.org master. This avoids
# CDN cache poisoning that could, in theory, use vulnerabilities in
# the XZ binary to alter the verification process or compromise the
# system performing the verification.
SHAFILE=${TMPDIR}/sha256sums.asc
echo "Downloading the checksums file for linux-${VER}"
if ! ${CURLBIN} -sL -o ${SHAFILE} ${SHA}; then
    echo "Failed to download the checksums file"
    rm -rf ${TMPDIR}
    exit 1
fi
echo "Verifying the checksums file"
COUNT=$(${GPGVBIN} --keyring=${SHAKEYRING} --status-fd=1 ${SHAFILE} \
        | grep -c -E '^\[GNUPG:\] (GOODSIG|VALIDSIG)')
if [[ ${COUNT} -lt 2 ]]; then
    echo "FAILED to verify the sha256sums.asc file."
    rm -rf ${TMPDIR}
    exit 1
fi
# Grab only the tarball we want from the full list
SHACHECK=${TMPDIR}/sha256sums.txt
grep "linux-${VER}.tar.xz" ${SHAFILE} > ${SHACHECK}

echo
echo "Downloading the signature file for linux-${VER}"
SIGFILE=${TMPDIR}/linux-${VER}.tar.asc
if ! ${CURLBIN} -sL -o ${SIGFILE} ${SIG}; then
    echo "Failed to download the signature file"
    rm -rf ${TMPDIR}
    exit 1
fi
echo "Downloading the XZ tarball for linux-${VER}"
TXZFILE=${TMPDIR}/linux-${VER}.tar.xz
if ! ${CURLBIN} -L -o ${TXZFILE} ${TXZ}; then
    echo "Failed to download the tarball"
    rm -rf ${TMPDIR}
    exit 1
fi

pushd ${TMPDIR} >/dev/null
echo "Verifying checksum on linux-${VER}.tar.xz"
if ! ${SHA256SUMBIN} -c ${SHACHECK}; then
    echo "FAILED to verify the downloaded tarball checksum"
    popd >/dev/null
    rm -rf ${TMPDIR}
    exit 1
fi
popd >/dev/null

echo
echo "Verifying developer signature on the tarball"
COUNT=$(${XZBIN} -cd ${TXZFILE} \
        | ${GPGVBIN} --keyring=${DEVKEYRING} --status-fd=1 ${SIGFILE} - \
        | grep -c -E '^\[GNUPG:\] (GOODSIG|VALIDSIG)')
if [[ ${COUNT} -lt 2 ]]; then
    echo "FAILED to verify the tarball!"
    rm -rf ${TMPDIR}
    exit 1
fi
mv -f ${TXZFILE} ${TARGET}
rm -rf ${TMPDIR}
echo
echo "Successfully downloaded and verified ${TARGET}"

```
