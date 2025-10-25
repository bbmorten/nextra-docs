# PYVMOMI for VMWARE

## Prerequisities

- Create a new python environment

```console
mkdir pyvmomi-test
cd pyvmomi-test
virtualenv .venv
source .venv/bin/activate
pip install pip --upgrade
```

```console title='Install necessary libraries'
git clone https://github.com/vmware/pyvmomi-community-samples
pip install -r pyvmomi-community-samples/requirements.txt

```

##  Common Settings

- Prepare the environment

```console title='.env file'
touch .env
# Open an editor and copy paste the following lines
VUSER='administrator@vsphere.local'
VPASS='*'
VSERVER=192.168.49.20
DATACENTER_NAME=Datacenter
DATASTORE_NAME=DS-01
ESX_IP_1=192.168.49.21
#PENV='/Users/bulent/Documents/CourseMaterial/BTKUB001/installations/powershell-scripts/pyvmomi-community-samples/samples'
PENV='./pyvmomi-community-samples/samples'
```

```console
source .env
cd $PENV
```

##  Samples

### Display Virtual Machine Names

```console
./get_vm_names.py -s $VSERVER -u $VUSER -p $VPASS -nossl
```

### Create a virtual machine

```console
chmod +x create_vm.py
VM_NAME=testvm

./create_vm.py -s $VSERVER -u $VUSER -p $VPASS -nossl -v $VM_NAME --datacenter-name $DATACENTER_NAME \
                    --datastore-name $DATASTORE_NAME --esx-ip $ESX_IP_1
```

```console
VM_NAME=clonevm
TEMPLATE=Ubuntu-22.04.4
RESOURCE_POOL='Docker Learning'
OPAQUE_NETWORK_NAME='Vlan-49'

./clone_vm.py -s $VSERVER -u $VUSER -p $VPASS -nossl -v $VM_NAME --template $TEMPLATE \
                --datacenter-name $DATACENTER_NAME \
                --datastore-name $DATASTORE_NAME \
                --resource-pool $RESOURCE_POOL --power-on \
                --opaque-network-name $OPAQUE_NETWORK_NAME
```


./list_datastore_cluster.py  -s $VSERVER -u $VUSER -p $VPASS -nossl  \
                    --datastorecluster-name DS-01