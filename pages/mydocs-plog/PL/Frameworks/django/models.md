#  Models

##  Model Fields

### **How to Inspect a Model’s Fields**

Here are the correct ways to view a model's fields using Django:

#### **1. Using `_meta.get_fields()`**

This method gives you access to all fields, including relationships:

```python
from orders.models import Order

fields = Order._meta.get_fields()
for field in fields:
    print(f"Field Name: {field.name}")
```

#### **2. Using `_meta.local_fields`**

If you want only the fields explicitly defined on the model (excluding relationships like reverse foreign keys):

```python
fields = Order._meta.local_fields
for field in fields:
    print(f"Field Name: {field.name}, Type: {field.get_internal_type()}")
```

#### **3. Using `_meta.fields`**

This method also excludes relationships and gives detailed information about each field:

```python
fields = Order._meta.fields
for field in fields:
    print(f"Field: {field.name}, Type: {field.get_internal_type()}, Max Length: {getattr(field, 'max_length', None)}")
```

---

### **Example Output**

For the `Order` model in your case, you might see:

```
Field Name: id, Type: AutoField
Field Name: category, Type: ForeignKey
Field Name: name, Type: CharField
Field Name: slug, Type: SlugField
Field Name: image, Type: ImageField
Field Name: description, Type: TextField
Field Name: price, Type: DecimalField
Field Name: available, Type: BooleanField
Field Name: created, Type: DateTimeField
Field Name: updated, Type: DateTimeField
```

---

### **Using Django Extensions (`shell_plus`)**

If you want more automatic inspection features, Django Extensions provides an enhanced shell. Here's how to set it up and use it:

#### Install Django Extensions

```bash
pip install django-extensions
```

Add it to your `INSTALLED_APPS` in `settings.py`:

```python
INSTALLED_APPS = [
    # Other apps...
    'django_extensions',
]
```

Run the enhanced shell:

```bash
python manage.py shell_plus
```

Once in the shell, all models are automatically imported, and you can inspect fields:

```python
Order._meta.get_fields()
```

---

##  Using classes of apps models

When using `python manage.py shell` in a Django project, Django automatically sets up the environment for you, so you can access your models and other components easily. Here's how to access your classes in a Django app:

---

### **Steps to Access Classes in Django Shell**

1. **Ensure the App is Installed:**
   Make sure the app containing the class is listed in the `INSTALLED_APPS` setting in your `settings.py`.

2. **Start the Django Shell:**
   Run the following command:

   ```bash
   python manage.py shell
   ```

3. **Import the Classes:**
   Import the classes (e.g., models) from your app. For example, to access the `Order` class in the `orders` app:

   ```python
   from orders.models import Order
   ```

4. **Use the Imported Class:**
   You can now interact with the `Order` model or any other class:

   ```python
   # Example: Create a new Order
   new_order = Order.objects.create(field1=value1, field2=value2)

   # Fetch all orders
   orders = Order.objects.all()
   print(orders)
   ```

---

### **Using Django Extensions (Optional)**

If you have **Django Extensions** installed, you can use an enhanced shell with autocomplete and better features:

1. Install Django Extensions:

   ```bash
   pip install django-extensions
   ```

2. Add it to `INSTALLED_APPS` in `settings.py`:

   ```python
   INSTALLED_APPS = [
       # Other apps...
       'django_extensions',
   ]
   ```

3. Run the Enhanced Shell:

   ```bash
   python manage.py shell_plus
   ```

   This will automatically import all models, saving you the need to manually import them.

---

### **Tips for Model Imports**

- Use `get_model` to dynamically import models if the name of the app or model is determined at runtime:

  ```python
  from django.apps import apps
  Order = apps.get_model('orders', 'Order')
  ```

- Use `dir()` to inspect available attributes and methods:

  ```python
  dir(Order)
  ```

---

Now you can seamlessly access and manipulate classes in your Django app using the shell!

## related_name

In the given Django models, the `related_name` attribute is used in the `ForeignKey` relationship in the `Product` model:

```python
category = models.ForeignKey(
    Category, related_name="products", on_delete=models.CASCADE
)
```

Here, `related_name="products"` allows you to access all the products related to a specific `Category` instance using the attribute `products`.

### Example Explaining `related_name`

1. **Scenario:**
   - You have a `Category` instance named "Electronics."
   - The `Product` model has multiple products related to the "Electronics" category.

   Using `related_name`, you can fetch all products associated with the "Electronics" category directly from the `Category` instance.

2. **Using `related_name`:**
   With `related_name="products"`, Django automatically creates a reverse relationship. Here's how you can use it:

   ```python
   # Create a category
   electronics = Category.objects.create(name="Electronics", slug="electronics")

   # Add some products to this category
   Product.objects.create(
       category=electronics, name="Laptop", slug="laptop", price=1000.00
   )
   Product.objects.create(
       category=electronics, name="Smartphone", slug="smartphone", price=500.00
   )

   # Access all products related to the "Electronics" category
   related_products = electronics.products.all()

   # Print the products
   for product in related_products:
       print(product.name)
   ```

   **Output:**

   ```
   Laptop
   Smartphone
   ```

3. **Without `related_name`:**
   If `related_name` is not specified, Django uses the lowercase name of the related model followed by `_set` to create the reverse relationship. For example:

   ```python
   related_products = electronics.product_set.all()
   ```

   By defining `related_name="products"`, you make the reverse relationship more intuitive and readable (`electronics.products.all()` instead of `electronics.product_set.all()`).

4. **Why Use `related_name`?**
   - Improves code readability.
   - Avoids naming conflicts in case there are multiple `ForeignKey` fields pointing to the same model.
   - Makes reverse lookups explicit and descriptive.

### Summary

- The `related_name` attribute provides a user-defined, readable way to access related objects in reverse relationships.
- In this example, `related_name="products"` allows you to access all products of a category using the `products` attribute.
