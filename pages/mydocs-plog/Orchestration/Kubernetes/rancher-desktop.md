#  Rancher Desktop Installation Notes - Partial

```console
sudo usermod -a -G kvm "$USER"
gpg --generate-key
pass init 5943B74CA7B073D12C5A8A1C400A5A4AD2149F29
5943B74CA7B073D12C5A8A1C400A5A4AD2149F29
sudo sysctl -w net.ipv4.ip_unprivileged_port_start=80
```

/etc/sysctl.conf to make it permanent

```console
net.ipv4.ip_unprivileged_port_start=80

```

```console
curl -s https://download.opensuse.org/repositories/isv:/Rancher:/stable/deb/Release.key | gpg --dearmor | sudo dd status=none of=/usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg
echo 'deb [signed-by=/usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg] https://download.opensuse.org/repositories/isv:/Rancher:/stable/deb/ ./' | sudo dd status=none of=/etc/apt/sources.list.d/isv-rancher-stable.list
sudo apt update
sudo apt install rancher-desktop
```
