#  Password related operations

##  Changing the password for `blog` user

To change the PostgreSQL database user `blog`'s password, follow these steps depending on your setup:

---

### **1. Change the Password via psql**

#### **Step A: Access the PostgreSQL Database**

1. Connect to the PostgreSQL container:

   ```bash
   docker exec -it new_blog_db psql -U blog -d blog
   ```

   Replace `new_blog_db` with the name of your PostgreSQL container.

2. Switch to the PostgreSQL superuser (if needed):

   ```sql
   \c postgres
   ```

#### **Step B: Change the Password**

Run the following SQL command:

```sql
ALTER USER blog WITH PASSWORD 'new_password';
```

- Replace `new_password` with the desired password.
- Ensure the password meets your security requirements.

---

### **2. Change the Password Using Environment Variables**

If your PostgreSQL instance is set up using Docker Compose, you can update the `POSTGRES_PASSWORD` environment variable in the `docker-compose.yml` file:

1. Edit the `docker-compose.yml` file:

   ```yaml
   environment:
     POSTGRES_PASSWORD: new_secure_password
   ```

2. Restart the PostgreSQL service to apply the changes:

   ```bash
   docker-compose down
   docker-compose up -d
   ```

---

### **3. Verify the New Password**

To confirm that the password has been updated, try reconnecting:

```bash
docker exec -it new_blog_db psql -U blog -W
```

You will be prompted to enter the new password. If it works, the password has been successfully changed.

---

### **4. Update the Django Project's `.env` File**

If your Django application connects to the database using the user `blog`, update the `.env` file to reflect the new password:

```env
DATABASE_URL=postgres://blog:new_password@new_db:5432/blog
```

Restart the Django container to ensure the changes are applied:

```bash
docker-compose restart django
```

---

### **5. Security Best Practices**

- Use a strong password with at least 12 characters, including uppercase, lowercase, numbers, and special characters.
- Avoid hardcoding passwords directly in the code. Use environment variables.

