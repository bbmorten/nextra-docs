# Django Signals Example

##  Prompt

**Background:** I've developed a Django application called account, which includes a Profile model. This model extends Django's default authentication User model.

**Goal:** I aim to use Django signals to automatically create an associated `Profile` object each time a `User` object is created.

**Here’s some of my existing setup:**

Definition of the `Profile` model in `account/models.py`:

```python
class Profile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    date_of_birth = models.DateField(blank=True, null=True)
    photo = models.ImageField(
        upload_to='users/%Y/%m/%d/',
        blank=True
    )

    def __str__(self):
        return f'Profile of {self.user.username}'
```

##  Answer

To ensure that a `Profile` object is automatically created whenever a `User` object is created, you can use Django signals. Below is a step-by-step guide tailored to your `Profile` model:

---

### **1. Signal Setup**

#### Create a `signals.py` file in your `account` app

Add the following code to handle the automatic creation of a `Profile` object when a `User` object is created:

```python
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from .models import Profile

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()
```

---

### **2. Connect the Signal**

Update the `apps.py` file of your `account` app to connect the signal during app initialization.

#### Modify `account/apps.py`

```python
from django.apps import AppConfig

class AccountConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'account'

    def ready(self):
        import account.signals
```

---

### **3. Test the Signal**

#### Migrate the Database

Ensure that migrations are up to date:

```bash
python manage.py makemigrations
python manage.py migrate
```

#### Create a New User and Verify

You can test this by creating a new user and checking if the `Profile` is created automatically:

```python
from django.contrib.auth.models import User

# Create a new user
user = User.objects.create_user(username='johndoe', password='securepassword')

# Check if the profile is created
print(user.profile)  # Should return the associated Profile instance
```

---

### **4. Ensure `AUTH_USER_MODEL` Compatibility**

Since you are using `settings.AUTH_USER_MODEL` in your `Profile` model, this setup works even if you've customized the `User` model by extending Django’s default `AbstractUser` or `AbstractBaseUser`.

---

### **5. Notes**

1. **Accessing the Profile:** You can access the profile using the `profile` attribute of the `User` model:

   ```python
   user.profile.date_of_birth = '1990-01-01'
   user.profile.save()
   ```

2. **Admin Integration:** If you want to manage `Profile` objects directly in the Django admin interface, register it in `account/admin.py`:

   ```python
   from django.contrib import admin
   from .models import Profile

   @admin.register(Profile)
   class ProfileAdmin(admin.ModelAdmin):
       list_display = ['user', 'date_of_birth', 'photo']
   ```

With this setup, a `Profile` object will automatically be created whenever a new `User` is added to the database.
