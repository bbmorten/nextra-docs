# My Digital Print

##  Disks

| Disk Name         | Description |
|-------------------|-------------|
| Volumes/CiscoD1   |   Backup          |
| Volumes/CiscoD2   |   tar files         |
| Volumes/CiscoD3   |   Documents         |
| Volumes/CiscoD4   |   Backup for BMAPMB0422    |

## BMAPMB0422

### iCloud Drive

- Full Mirrored

## Google Drive

- Streaming (Only on Google Drive)
- Some folders are in working online mode (mirrored)

## Backup Logs

### Report - 2025-02-18 13:47:57

- BMAPMB0422/iCloud/Documents synced with /Volumes/LacieBM/BMAPMB0422-iCloud-Documents by FreeFileSync
- tar -cvf /Volumes/CiscoD3/documents_backup.tar -C /Users/bulent Documents #Cancelled
- rsync -av --progress /Users/bulent/Documents/ /Volumes/CiscoD3/Documents_Backup/ #Cancelled

## Report - 2025-02-19 14:56:23

- Listedeki dosyalar /Volumes/LacieBM'den /Volumes/CiscoD2'ye taşındı

```shell
-rwx------  1 bulent  staff   46392577024 31 Eki  2021 CourseMaterial.tar
-rwx------  1 bulent  staff  110224632832 31 Eki  2021 Documents.tar
-rwx------  1 bulent  staff   63828713984  1 Kas  2021 Documents2.tar
-rwx------@ 1 bulent  staff  116113988608 31 Eki  2021 Pictures.tar
-rwx------  1 bulent  staff   18275509518 31 Eki  2021 SourceCodeArchive.tar.gz
-rwx------  1 bulent  staff   38459614208 31 Eki  2021 VirtualBoxVMs.tar
-rwx------@ 1 bulent  staff  241141615104 31 Eki  2021 VirtualMachines.tar
-rwx------  1 bulent  staff     116348928 31 Eki  2021 appEngineEnvs.tar
-rwx------@ 1 bulent  staff    6865454080 31 Eki  2021 npmEnvs.tar
-rwx------  1 bulent  staff    1068086784 31 Eki  2021 pythonEnvs.tar.gz
```

- node_modules dizinleri ~bulent altından temizlendi

```shell
find . -type d -name "node_modules" -print0 | xargs -0 rm -rf

```

##  Report 2025-03-06

```shell
➜  mydocs-plog git:(main) ✗ tree /Volumes/CiscoD2 
/Volumes/CiscoD2
├── CourseMaterial.tar
├── Documents.tar
├── Documents2.tar
├── Pictures.tar
├── SourceCodeArchive.tar.gz
├── VirtualBoxVMs.tar
├── VirtualMachines.tar
├── appEngineEnvs.tar
├── npmEnvs.tar
└── pythonEnvs.tar.gz

1 directory, 10 files
➜  mydocs-plog git:(main) ✗ 
```

```shell
/Volumes/CiscoD3
├── Archive
│   ├── Desktop
│   ├── GonulDocs
│   ├── MoodleBackups
│   ├── MyDocsBackup
│   ├── Oldbulent
│   ├── git-repos
│   └── wireshark
├── BMAPMB0422-iCloud-Documents
│   ├── $RECYCLE.BIN
│   ├── Adobe
│   ├── CourseMaterial
│   ├── DuyguMorten
│   ├── Obsidian Vault
│   ├── PersonalFiles
│   ├── Sirketler
│   ├── SoftwareProjects
│   ├── VSCodeWSS
│   ├── VTLog.txt
│   ├── VirtualEvents
│   ├── WebEx
│   ├── XCode-WS
│   ├── elearning
│   └── pythonWorkspaces
└── Tar
    ├── CourseMaterial.tar
    ├── Documents.tar
    ├── Documents2.tar
    ├── Pictures.tar
    ├── SourceCodeArchive.tar.gz
    ├── VirtualBoxVMs.tar
    ├── VirtualMachines.tar
    ├── appEngineEnvs.tar
    ├── npmEnvs.tar
    └── pythonEnvs.tar.gz

25 directories, 11 files

```

## Disk Copy Procedure

Disconnect the disks first.

```shell
/dev/disk0 (internal, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *1.0 TB     disk0
   1:             Apple_APFS_ISC Container disk1         524.3 MB   disk0s1
   2:                 Apple_APFS Container disk3         994.7 GB   disk0s2
   3:        Apple_APFS_Recovery Container disk2         5.4 GB     disk0s3

/dev/disk3 (synthesized):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      APFS Container Scheme -                      +994.7 GB   disk3
                                 Physical Store disk0s2
   1:                APFS Volume Macintosh HD            11.2 GB    disk3s1
   2:              APFS Snapshot com.apple.os.update-... 11.2 GB    disk3s1s1
   3:                APFS Volume Preboot                 6.9 GB     disk3s2
   4:                APFS Volume Recovery                1.0 GB     disk3s3
   5:                APFS Volume Data                    721.9 GB   disk3s5
   6:                APFS Volume VM                      12.9 GB    disk3s6

/dev/disk4 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *4.0 TB     disk4
   1:                        EFI EFI                     209.7 MB   disk4s1
   2:                  Apple_HFS LacieBM                 4.0 TB     disk4s2

/dev/disk5 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *4.0 TB     disk5
   1:                        EFI EFI                     209.7 MB   disk5s1
   2:       Microsoft Basic Data CiscoD3                 4.0 TB     disk5s2

/dev/disk6 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *4.0 TB     disk6
   1:                        EFI EFI                     209.7 MB   disk6s1
   2:       Microsoft Basic Data CiscoD2                 4.0 TB     disk6s2


```

didn't work because disks are EXFat

```shell
sudo asr restore --source /dev/disk5 --target /dev/disk6 --erase --noprompt

```

Success but wasn't finished. Machine shutdown

```shell
   sudo dd if=/dev/rdisk5 of=/Volumes/CiscoD2/CiscoD3.img bs=1m

```




##  Report 2025-03-12

- /Volumes/CiscoD3 duplicated to /Volumes/CiscoD2.
- /Volumes/CiscoD2 is stored in my room at the cabinet at the far right.




```shell
/Volumes/CiscoD3
├── Archive
│   ├── Desktop
│   ├── GonulDocs
│   ├── MoodleBackups
│   ├── MyDocsBackup
│   ├── Oldbulent
│   ├── git-repos
│   └── wireshark
├── BMAPMB0422-iCloud-Documents
│   ├── $RECYCLE.BIN
│   ├── Adobe
│   ├── CourseMaterial
│   ├── DuyguMorten
│   ├── Obsidian Vault
│   ├── PersonalFiles
│   ├── Sirketler
│   ├── SoftwareProjects
│   ├── VSCodeWSS
│   ├── VTLog.txt
│   ├── VirtualEvents
│   ├── WebEx
│   ├── XCode-WS
│   ├── elearning
│   └── pythonWorkspaces
└── Tar
    ├── CourseMaterial.tar
    ├── Documents.tar
    ├── Documents2.tar
    ├── Pictures.tar
    ├── SourceCodeArchive.tar.gz
    ├── VirtualBoxVMs.tar
    ├── VirtualMachines.tar
    ├── appEngineEnvs.tar
    ├── npmEnvs.tar
    └── pythonEnvs.tar.gz

25 directories, 11 files

```