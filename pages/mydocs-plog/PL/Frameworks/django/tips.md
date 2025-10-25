# Django Tips

## Backup/Dump Data

```shell
python manage.py dumpdata courses --indent=2

```

```shell
mkdir courses/fixtures
python manage.py dumpdata courses --indent=2 --output=courses/fixtures/subjects.json
```

```shell
python manage.py loaddata subjects.json

```

```shell
mkdir backups
python manage.py dumpdata > backups/db_backup_$(date +%F).json
```

##  Running with local certificate

```shell
python manage.py runserver_plus --cert-file cert.crt

```

##  Search

###  Single Field

python manage.py shell

from blog.models import Post
Post.objects.filter(title__search='django')

###  Searching against multiple fields

python manage.py shell

```python
from django.contrib.postgres.search import SearchVector
from blog.models import Post

Post.objects.annotate(search=SearchVector('title', 'body'),).filter(search='django')
Post.objects.annotate(search=SearchVector('title', 'body','status'),).filter(search='post')
```

Kitaptan devam et...

##  Searching with trigram similarity

Kitaptan devam et. Django 5 by example.

## Using a sitemap

Add on to Django 5 by example book sample.

The error message indicates that Django is trying to generate a sitemap (`/sitemap.xml`) but cannot find a `Site` object in the database that matches the query. This is due to Django's `django.contrib.sites` framework, which relies on a `Site` object in the database to match the current domain.

### Key Details

- **Error**: `Site matching query does not exist.`
- **Cause**: No `Site` object in the `django_site` table corresponds to the `Request URL` domain (`127.0.0.1:8000`).
- **Source**: The `sitemap` view in `django.contrib.sitemaps.views.sitemap` is calling the `Site` framework to determine the domain.

---

### How to Fix

1. **Check the Sites Framework**:
   Make sure the `django.contrib.sites` app is installed in your `INSTALLED_APPS` setting in `settings.py`:

   ```python
   INSTALLED_APPS = [
       ...
       'django.contrib.sites',
   ]
   ```

2. **Verify the Site in the Database**:
   Run the following command to access the database via the Django shell:

   ```bash
   python manage.py shell
   ```

   Then check if a `Site` object exists:

   ```python
   from django.contrib.sites.models import Site
   print(Site.objects.all())
   ```

   If no `Site` object exists, create one:

   ```python
   Site.objects.create(domain='127.0.0.1:8000', name='Localhost')
   ```

3. **Set the Default Site ID**:
   In your `settings.py`, set the `SITE_ID` to match the `id` of the appropriate `Site` object:

   ```python
   SITE_ID = 1  # Adjust this based on the ID of your Site object
   ```

4. **Migrate the Database**:
   If the `django_site` table doesn't exist, ensure migrations are applied:

   ```bash
   python manage.py migrate
   ```

5. **Test the Sitemap**:
   Restart the development server and revisit the sitemap URL:

   ```bash
   python manage.py runserver
   ```

   Visit: [http://127.0.0.1:8000/sitemap.xml](http://127.0.0.1:8000/sitemap.xml)

---

### Additional Notes

- If you're deploying the project in different environments (e.g., staging or production), ensure each has the correct `Site` object with the matching domain.
- You can manage sites via the Django admin under the "Sites" section (`/admin/sites/site/`).

This should resolve the issue. Let me know if you need further assistance!

## Set an app as a landing page

```python title='Test/mysitepsql/mysitepsql/urls.py'

urlpatterns = [
    path("admin/", admin.site.urls),
    path("blog/", include("blog.urls", namespace="blog")),
    path('personal/', include('personal.urls')),
    path('', lambda request: redirect('blog/', permanent=True)),  # Redirect root to /blog
    

]
```

## reverse() function

Use `<a href="{{ post.get_absolute_url }}">` instead of this `<a href="{% url 'blog:post_detail' post.id %}">` by changing the models.py

```python title='models.py class Post'
class Post(models.Model):
    class Status(models.TextChoices):
        DRAFT = "DF", "Draft"
        PUBLISHED = "PB", "Published"

    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="blog_posts"
    )
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=2, choices=Status, default=Status.DRAFT)
    objects = models.Manager()  # The default manager.
    published = PublishedManager()  # Our custom manager.

    class Meta:
        ordering = ["-publish"]
        indexes = [
            models.Index(fields=["-publish"]),
        ]

    def __str__(self):
        return self.title
    def get_absolute_url(self):
        return reverse(
            'blog:post_detail',
            args=[self.id]
    )

```

##  Slug

In programming, a **slug** is a human-readable, URL-friendly identifier that represents a resource, such as a web page, blog post, or product. Slugs are commonly used in URLs to make them more descriptive, readable, and SEO-friendly.

### Characteristics of a Slug

1. **Human-Readable**: It is derived from a resource's title or name, often using lowercase letters.
2. **URL-Safe**: Special characters are typically removed or replaced with dashes (`-`) to ensure compatibility with URLs.
3. **Descriptive**: It provides a hint about the content or purpose of the URL, which can improve SEO and make URLs more meaningful.

For example, if a blog post is titled "10 Tips for Learning Python," a corresponding slug might be:

```plaintext
10-tips-for-learning-python
```

### Usage of Slugs

- **Web URLs**: Used in place of database IDs or non-descriptive codes to make URLs user- and SEO-friendly. Instead of using `/posts/123`, you might use `/posts/10-tips-for-learning-python`.
- **Database Entries**: Slugs can be stored as unique fields in a database to identify records based on content rather than numeric IDs.
- **SEO (Search Engine Optimization)**: Including keywords in slugs can improve search engine rankings.

### Example of a Slug in Django

In a Django model, a slug field is often used to create URLs for blog posts or products. Django even provides a `SlugField` to handle this.

```python
from django.db import models
from django.utils.text import slugify

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, max_length=200, blank=True)
    content = models.TextField()

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
```

In this example:

- **`slugify`**: Django’s `slugify` function converts the title into a slug format, such as converting "10 Tips for Learning Python" to "10-tips-for-learning-python."
- **URL Patterns**: This slug can be used in a URL pattern like `/blog/<slug:slug>/` for a clean, readable URL.

### Summary

A slug is a simplified, URL-friendly string based on a resource’s title or name, making URLs readable, descriptive, and more compatible with SEO.
