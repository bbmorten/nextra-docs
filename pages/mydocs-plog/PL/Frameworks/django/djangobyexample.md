# Django 5 by Example

##  Creating recommendations

```python
import random
from shop.models import Product
from shop.recommender import Recommender

# Fetch all products
products = Product.objects.all()

# Instantiate the Recommender
r = Recommender()

# Generate 10 randomized pairs
for _ in range(10):
    # Generate random indices for two products
    I = random.randint(0, len(products) - 1)
    J = random.randint(0, len(products) - 1)

    # Ensure the indices are not the same
    while I == J:
        J = random.randint(0, len(products) - 1)

    # Pass the selected products to the recommender
    recommended_products = r.products_bought([products[I], products[J]])

    # Print the results
    print(f"Random Pair: {products[I].name} and {products[J].name}")

```

##  Creating Products using Faker (Chapter 10)

```python
To create 20 fake products and 5 fake categories using `python manage.py shell`, and implement recommendations similar to the example provided, follow these steps:

---

### **1. Use the `Faker` Library**
`Faker` is a Python library that generates fake data, making it ideal for populating your database with test data.

#### Install `Faker`:
```bash
pip install faker
```

---

### **2. Create Fake Categories and Products**

Run the following script in the Django shell to generate fake categories and products:

#### Django Shell

```bash
python manage.py shell
```

#### Inside the Shell

```python
import random
from faker import Faker
from shop.models import Category, Product

# Initialize Faker
fake = Faker()

# Create 5 fake categories
categories = []
for _ in range(5):
    category = Category.objects.create(
        name=fake.word(),
        slug=fake.slug()
    )
    categories.append(category)

# Create 20 fake products
for _ in range(20):
    Product.objects.create(
        category=random.choice(categories),
        name=fake.word(),
        slug=fake.slug(),
        description=fake.text(),
        price=round(random.uniform(10, 100), 2),
        available=True
    )

print("Fake categories and products created successfully!")
```

---

### **3. Implement the Recommender Logic**

Assume your `Recommender` class is defined in `shop/recommender.py`. Here's how you can implement a `products_bought` method:

#### `shop/recommender.py`

```python
class Recommender:
    def products_bought(self, products):
        # Fake recommendation logic
        recommended_products = Product.objects.exclude(id__in=[p.id for p in products])[:5]
        return recommended_products
```

This method:

- Takes a list of `Product` objects that were "bought."
- Excludes these products from the recommendation.
- Returns 5 other products.

---

### **4. Test Recommendations**

After populating the database with products and categories, test the recommendations:

#### Django Shell

```bash
python manage.py shell
```

#### Inside the Shell

```python
from shop.models import Product
from shop.recommender import Recommender

# Select two products
black_tea = Product.objects.first()
red_tea = Product.objects.last()

# Get recommendations
r = Recommender()
recommended = r.products_bought([black_tea, red_tea])

# Print recommended products
for product in recommended:
    print(product.name)
```

---

### **5. Results**

- **Fake Categories and Products**:
  The script creates 5 random categories and 20 products associated with these categories.
- **Recommendations**:
  The `products_bought` method recommends 5 products excluding those already "bought."

---

This approach ensures that your database is populated with test data and includes a simple logic for recommending products. You can further enhance the recommendation system using user purchase history or collaborative filtering algorithms. Let me know if you need help implementing advanced recommendations!

```

##  Site-ID Problem

To view the `Site ID` in your database, you can query the `django_site` table. Here's how to do it:

---

### **Option 1: Using Django Shell**

1. Open the Django shell:

   ```bash
   python manage.py shell
   ```

2. Query the `Site` table:

   ```python
   from django.contrib.sites.models import Site
   sites = Site.objects.all()
   for site in sites:
       print(f"ID: {site.id}, Domain: {site.domain}, Name: {site.name}")
   ```

   This will list all `Site` entries with their `ID`, `Domain`, and `Name`.

#### Adding a site

```shell
from django.contrib.sites.models import Site
Site.objects.create(domain='test.dvmo.uk', name='Production Site')
```

---

### **Option 2: Using SQL Command in PostgreSQL**

1. Access your PostgreSQL database:

   ```bash
   docker exec -it new_blog_db psql -U blog blog
   ```

2. Run the SQL query to see all entries in the `django_site` table:

   ```sql
   SELECT id, domain, name FROM django_site;
   ```

   This will display the `Site ID` along with the domain and name.

3. Exit the database:

   ```sql
   \q
   ```

---

### **Option 3: Using Admin Panel (If Enabled)**

1. Log in to the Django admin panel (usually accessible at `/admin/`).
2. Navigate to **Sites** under the **Sites** section.
3. View the `ID`, `Domain`, and `Name` of all configured sites.

---

### **Option 4: Using a Database Client**

If you are using a database client (e.g., pgAdmin, DBeaver), you can directly query the `django_site` table as follows:

```sql
SELECT id, domain, name FROM django_site;
```

---

These steps will help you identify the `Site ID` in your database. Let me know if you need further assistance!

##  Transferring database from local to production (docker ndawn)

Given the provided `docker-compose.yml` file, here’s how you can execute the PostgreSQL database export and import commands for transferring data between instances:

### **Step 1: Export the Database**

1. **Access the PostgreSQL Container (`new_blog_db`)**:
   Run the following command to access the `new_blog_db` container:

   ```bash
   docker exec -it new_blog_db bash
   ```

2. **Export the Database**:
   Inside the container, use the `pg_dump` command:

   ```bash
   pg_dump -U blog blog > /var/lib/postgresql/data/database_backup.sql
   ```

   This creates a backup of the `blog` database in the mounted volume (`docker_mysitepsql_data/data`).

3. **Locate the Backup File**:
   On your host system, the backup file will be saved under:

   ```
   ./docker_mysitepsql_data/data/database_backup.sql
   ```

---

### **Step 2: Transfer the Backup to Another System**

1. **Copy the Backup File**:
   Use `scp` or any file transfer tool to copy the backup file to the target server.

   Example:

   ```bash
   scp ./docker_mysitepsql_data/data/database_backup.sql bulent@ndawn.btegitim.com:/home/bulent/Projects
   ```

---

### **Step 3: Import the Database**

1. **Deploy PostgreSQL on the Target Instance**:
   Ensure PostgreSQL is running on the target instance, either via Docker or directly on the system.

   If using Docker, you can create a service like `new_db` in the target `docker-compose.yml`.

2. **Access the Target PostgreSQL Container**:
   Example:

   ```bash
   docker exec -it <target_postgres_container_name> bash
   ```

3. **Restore the Database**:
   Copy the `database_backup.sql` file to the target system's mounted data directory, then execute:

   ```bash
   psql -U blog blog < /var/lib/postgresql/data/database_backup.sql
   ```

---

### **Step 4: Update Django Configuration**

1. **Modify the `.env` File**:
   Update the `mysitepsql/.env` file with the new database connection details.

2. **Rebuild and Restart the Services**:

   ```bash
   docker-compose down
   docker-compose up --build
   ```

---

These steps align with your current `docker-compose.yml` configuration. Let me know if you need additional assistance!

##  Sending mails from django shell

```python
from django.core.mail import send_mail
send_mail('Django mail',
          'This e-mail was sent with Django.',
          'bbmorten@gmail.com',
          ['bulent@btegitim.com'],
          fail_silently=False)
```

## 08112024 - Book reading continues

###  w/Local PostgreSQL Connection

Derse workout1 branchinden devam edeceğim. DB bağlantısı loca PostgreSQL'i kullanıyor

```shell
git log --oneline --graph --all --decorate  
```

* a297092 (origin/volkanmacpostgresql, volkanmacpostgresql) Remote Postgresql
| * 04e8bd4 (HEAD -> workout1, origin/workout1, origin/localpostgresql-initial, localpostgresql-initial) Initialized
|/  
* 947604a (origin/initial_3, initial_3) 3 different DB connections for starting version 2
* 9b3420c (origin/main, main) Sync
* db95c6a first commit

###  Fetch or create

```shell
>>> user, created = User.objects.get_or_create(username='user2')

```

### Retrieving objects

```shell
>>> all_posts = Post.objects.all()
```

### Filtering objects

```shell
>>> posts = Post.objects.filter(title='Who was Django Reinhardt?')
>>> print(posts.query)
```

###  Deleting objects

```shell
>>> post = Post.objects.get(id=1)
>>> post.delete()
```

###  Q Objects in Django

In Django, `Q` objects provide a way to build complex lookups in your queries, allowing you to use logical operations such as AND, OR, and NOT to combine multiple query filters. This becomes particularly useful when you need to perform queries with multiple conditions on your data.

#### Basics of Q Objects

Normally, Django queries use **AND** logic by default. For example:

```python
from myapp.models import Product

# Filter by both name and category
products = Product.objects.filter(name="Laptop", category="Electronics")
```

This query will return only products that match both conditions. But if you need more complex filtering logic, like using OR or negating conditions, `Q` objects make this possible.

#### Importing Q

To use `Q` objects, first import them:

```python
from django.db.models import Q
```

#### Using Q Objects

Here’s how you can use `Q` objects to create complex queries:

##### 1. **OR Conditions**

To perform an OR lookup, use the `|` (bitwise OR) operator between `Q` objects:

```python
# Filter products that are either Laptops or in the Electronics category
products = Product.objects.filter(Q(name="Laptop") | Q(category="Electronics"))
```

##### 2. **AND Conditions**

To explicitly use AND logic, combine `Q` objects with the `&` (bitwise AND) operator. While this is the default behavior in `filter`, sometimes you may need this for more complex queries.

```python
# Filter products that are both Laptops and in the Electronics category
products = Product.objects.filter(Q(name="Laptop") & Q(category="Electronics"))
```

##### 3. **NOT Conditions**

To negate a condition, use the `~` (bitwise NOT) operator:

```python
# Filter products that are not in the Electronics category
products = Product.objects.filter(~Q(category="Electronics"))
```

##### 4. **Combining Multiple Q Objects**

You can combine multiple `Q` objects in complex ways using `&`, `|`, and `~` operators. For example:

```python
# Find products that are either Laptops or are in the Electronics category,
# but exclude those that are out of stock.
products = Product.objects.filter(
    (Q(name="Laptop") | Q(category="Electronics")) & ~Q(stock=0)
)
```

#### Practical Use Cases

- **Complex Search Functionality**: Use `Q` objects to implement search features that look for results matching multiple possible fields or conditions.
- **Advanced Filtering**: For filtering records with criteria that vary based on user input or multiple conditions, `Q` objects allow you to build dynamic queries.
- **Exclude Certain Results**: With the `~` operator, you can exclude specific records from the query result.

#### Example: Advanced Query with Multiple Conditions

Here’s an example in which you’re querying a `User` model to find users who are either active administrators or staff members who have been inactive for over a year.

```python
from django.utils import timezone
from datetime import timedelta

# Calculate the cutoff date for inactivity (1 year ago)
cutoff_date = timezone.now() - timedelta(days=365)

# Complex query with Q objects
users = User.objects.filter(
    (Q(is_active=True) & Q(is_admin=True)) |
    (Q(is_staff=True) & Q(last_login__lt=cutoff_date))
)
```

In this example:

- The first condition (`is_active=True` and `is_admin=True`) selects active administrators.
- The second condition selects inactive staff members who haven’t logged in within the past year.

#### Summary

`Q` objects are powerful tools for performing complex lookups in Django. They allow you to build sophisticated query logic by combining conditions with `&`, `|`, and `~` operators, making it easy to implement advanced search and filtering functionalities in your application.

##  PostgreSQL Generic Notes

- Running as a secondary database created problems because of the relation to the auth_user table.
- Create the database first and then do the migrations
- Yetkili kullanıcı olayında schema meselesine bakmak lazım.

### Running an app with the secondary database

```psql
CREATE DATABASE mysite;
CREATE USER userdbadmin WITH PASSWORD 'user1Pass@';
GRANT USAGE ON SCHEMA public TO userdbadmin;
GRANT CREATE ON SCHEMA public TO userdbadmin;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO userdbadmin;
GRANT ALL PRIVILEGES ON DATABASE mysite TO userdbadmin;
\q
```

```shell
python manage.py startapp blogpsql
python manage.py makemigrations blogpsql  
python manage.py migrate --database=secondary
```

auth.User is not available in the second db.

```psql
CREATE TABLE auth_user (
    id SERIAL PRIMARY KEY,
    password VARCHAR(128) NOT NULL,
    last_login TIMESTAMP NULL,
    is_superuser BOOLEAN NOT NULL,
    username VARCHAR(150) NOT NULL UNIQUE,
    last_name VARCHAR(150) NOT NULL,
    email VARCHAR(254) NOT NULL,
    is_staff BOOLEAN NOT NULL,
    is_active BOOLEAN NOT NULL,
    date_joined TIMESTAMP NOT NULL,
    first_name VARCHAR(150) NOT NULL
);

```

```shell
python manage.py migrate auth --database=secondary
```

##  useful Commands

python manage.py dumpdata auth.User --database=default --output=auth_user_data.json
python manage.py loaddata data.json --database=secondary  

##  Killing runserver

pkill -f "manage.py runserver"

##  Sample Code

<https://github.com/PacktPublishing/Django-5-by-Example>

##  Django’s design philosophies

[https://docs.djangoproject.com/en/5.0/misc/design-philosophies/](https://docs.djangoproject.com/en/5.0/misc/design-philosophies/)

## mysite

```shell
python -m pip install Django~=5.0.4
django-admin startproject mysitepsql2
cd mysite
python manage.py migrate
```

```shell
python manage.py startapp blog

```

Edit the models.py file

Edit the settings.py file and add blog.apps.BlogConfig to the INSTALLED_APPS setting. It should look like this; the new lines are highlighted in bold:

```python
    'blog.apps.BlogConfig',
]
```

```shell
python manage.py makemigrations blog
python manage.py sqlmigrate blog 0001
python manage.py migrate

```

python manage.py createsuperuser

```python
python manage.py shell

from django.contrib.auth.models import User
from blog.models import Post
user = User.objects.get(username='user1')
post = Post(title='Another post',
            slug='another-post',
            body='Post body.',
            author=user)
post.save()

Post.objects.create(title='One more post',
                    slug='one-more-post',
                    body='Post body.',
                    author=user)

                    
```

>>> user, created = User.objects.get_or_create(username='user2')
