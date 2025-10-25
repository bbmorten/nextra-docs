#!/bin/bash



# Gönderen: Yahya Yazıcı <yahyayazici@morten.com.tr>
# Gönderildi: Thursday, January 6, 2022 1:08:37 PM
# Kime: Bülent Morten <bulent@btegitim.com>
# Konu: VMware sanal makine oluşturma script
 
# Selam Hocam,
 
# Powershell script, sanal makineleri oluşturmak için CSV dosyası üzerinden bilgileri alıp sanal makineleri oluşturuyor.
 
# Sanal makineleri bir Template üzerinden oluşturuyor ve ağ ayarlarını yapılandırıyor. Sanal makine ağ ayarlarını özelleştirme politikasını uygulamadan önce  ip adresi kullanımını kontrol ediyor (PING).
 
# Eğer kullanımda ise farklı bir ip adresini yazmanızı istiyor. Ubuntu Template üzerinden testleri yaptım. Başarılı bir şekilde sanal makineleri oluşturdu ve ip adreslerini tanımladı.
# Eksik ya da yeni ihtiyaçları doğrultusunda script’i şekillendirmeye çalışırım.
 
# Windows’da PowerCLI yüklemek gerekiyor. Bunun için powershell üzerinde “Install-Module -Name VMware.PowerCLI” komutunu yürütmek yeterli olacaktır.
# CSV dosya örneği aşağıdaki gibi;
 
 
# template,datastore,vmhost,vmname,ipaddress,subnet,gateway,vlan
# Ubuntu-20.4,DS-01,192.168.49.21,STD-01,192.168.49.101,255.255.255.0,192.168.49.1,Vlan-49
# Ubuntu-20.4,DS-01,192.168.49.21,STD-02,192.168.49.102,255.255.255.0,192.168.49.1,Vlan-49
# Ubuntu-20.4,DS-02,192.168.49.22,STD-03,192.168.49.103,255.255.255.0,192.168.49.1,Vlan-49
# Ubuntu-20.4,DS-02,192.168.49.22,STD-04,192.168.49.104,255.255.255.0,192.168.49.1,Vlan-49
 
# MacOS içinde uyarlamaya çalıştım ama bazı özellikleri desteklemiyor ya da nasıl olacağını bulamadım. IP adresi kontrol, pencere açma, şifreyi maskeleme gibi.
 
# MacOS Powershell yükleme;
 
# Installing PowerShell on macOS - PowerShell | Microsoft Docs
 
# Vmware Power CLI yükleme : Powershell yüklendikten sonra terminal ekranında “pwsh”  yazarak powershell’i çağırıyoruz.
 
# Powershell üzerinde aşağıdaki komutu çalıştırdığımız zaman Vmware ile ilgili modülü yükleyecektir.
 
# Install-Module -Name VMware.PowerCLI
 
# Kullanım için; VMwareDeployvm-MAC.ps1 -csvfile ./vms.csv


# 21.01.2022
# Bülent Morten <
# Powershell for MacOSX
brew install --cask powershell


# open PowerShell
pwsh
    Install-Module -Name VMware.PowerCLI
    




