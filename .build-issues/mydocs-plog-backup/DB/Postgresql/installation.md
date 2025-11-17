# Postgre Installation Samples

## Moving a postgres container contents to a new docker compose service

To migrate the PostgreSQL database contents from your running container to the host system and map it to another Docker Compose service, follow these steps:

---

### **1. Export the Database Contents**

You can use `pg_dump` to export the database from the existing container.

#### **Step A: Use `docker exec` to Access the Container**

Run the following command to dump the database to a file:

```bash
docker exec -t blog_db pg_dump -U blog -F c -d blog > blog_backup.dump
```

Explanation:

- `pg_dump`: Exports the database.
- `-U blog`: Specifies the PostgreSQL user.
- `-F c`: Dumps the file in a custom format (you can also use `-F t` for tar).
- `-d blog`: Specifies the database name.

The `blog_backup.dump` file will be created in your current directory on the host.

---

### **2. Prepare the Host Directory for Mapping**

Create a directory on the host to store the database contents:

```bash
mkdir -p ~/docker_postgres_data
```

---

### **3. Restore the Database to a New Docker Compose Service**

Create a `docker-compose.yml` file for the new PostgreSQL service. Map the database directory or restore the dump into a new database.

#### **Option A: Restore from the Dump File**

1. Define the new service in `docker-compose.yml`:

   ```yaml
   version: "3.8"
   services:
     new_db:
       image: postgres:latest
       container_name: new_blog_db
       environment:
         POSTGRES_DB: blog
         POSTGRES_USER: blog
         POSTGRES_PASSWORD: xxxxx@1X
       ports:
         - "5433:5432"
       volumes:
         - ./docker_postgres_data:/var/lib/postgresql/data
   ```

2. Start the new service:

   ```bash
   docker-compose up -d
   ```

3. Restore the database:
   Run the `pg_restore` command to load the `blog_backup.dump` into the new instance:

   ```bash
   docker exec -i new_blog_db pg_restore -U blog -d blog -v /var/lib/postgresql/data/blog_backup.dump
   ```

---

#### **Option B: Map Existing Data Directory**

If you want to copy the database contents from the original container to the host:

1. Stop the existing container to ensure data consistency:

   ```bash
   docker stop blog_db
   ```

2. Copy the data directory from the container to the host:

   ```bash
   docker cp blog_db:/var/lib/postgresql/data ~/docker_postgres_data
   ```

3. Update the `docker-compose.yml` file to map the copied data directory:

   ```yaml
   version: "3.8"
   services:
     new_db:
       image: postgres:latest
       container_name: new_blog_db
       environment:
         POSTGRES_DB: blog
         POSTGRES_USER: blog
         POSTGRES_PASSWORD: xxxxx@1X
       ports:
         - "5433:5432"
       volumes:
         - ./docker_postgres_data:/var/lib/postgresql/data
   ```

4. Start the new service:

   ```bash
   docker-compose up -d
   ```

---

### **4. Verify the New Setup**

Check if the database is working correctly:

1. Connect to the new database:

   ```bash
   docker exec -it new_blog_db psql -U blog -d blog
   ```

2. List tables and data to ensure everything has been restored:

   ```sql
   \dt
   SELECT * FROM your_table;
   ```

---

### **5. Clean Up (Optional)**

If the migration is successful, you can remove the original container:

```bash
docker rm -f blog_db
```

---

Would you like assistance with writing the `docker-compose.yml` file or troubleshooting any step?

##  from Docker for Django

```shell
docker pull postgres
docker scout quickview postgres
docker scout cves postgres
```

```shell
docker run --name=blog_db -e POSRGRES_DB=blog -e POSTGRES_USER=blog -e POSTGRES_PASSWORD=xxxxx@1X -p 5433:5432 -d postgres
```

### Transferring data from an existing Django DB to a new one on Postgres

```shell
python manage.py dumpdata --indent=2 --output=mysite_data.json
python -Xutf8 manage.py dumpdata --indent=2 --output=mysite_data.json
```

```text title=".env"
EMAIL_HOST_USER=bbmorten@gmail.com
EMAIL_HOST_PASSWORD="raqn oufg jnyk zals"
DEFAULT_FROM_EMAIL=My Blog <bbmorten@gmail.com>

DB_NAME=blog
DB_USER=blog
DB_PASSWORD=xxxx@1X
DB_HOST=localhost
DB_PORT=5433

```

```python title='settings.py'
DATABASES = {
    "default": {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config('DB_NAME'),
        'USER': config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST': config('DB_HOST'),
        "PORT": config('DB_PORT'),
    },
}

```

```shell
python manage.py shell
from django.contrib.sites.models import Site
Site.objects.create(domain='127.0.0.1:8000', name='Localhost')
python manage.py migrate
```

```shell
python manage.py loaddata mysite_data.json

```

Problemler çıktı. Bazı kayıtları .json dosyasından kaldırdık.
