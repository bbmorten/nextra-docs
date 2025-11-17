# Using the Django authentication framework

Django comes with a built-in authentication framework that can handle user authentication, sessions, permissions, and user groups. The authentication system includes views for common user actions such as logging in, logging out, password change, and password reset.

The authentication framework is located at `django.contrib.auth` and is used by other Django contrib packages. Remember that we already used the authentication framework in Chapter 1, Building a Blog Application, to create a superuser for the blog application to access the administration site.

When we create a new Django project using the startproject command, the authentication framework is included in the default settings of our project. It consists of the django.contrib.auth application and the following two middleware classes found in the MIDDLEWARE setting of our project:

- **AuthenticationMiddleware**: Associates users with requests using sessions
- **SessionMiddleware**: Handles the current session across requests

Middleware is classes with methods that are globally executed during the request or response phase. You will use middleware classes on several occasions throughout this book, and you will learn how to create custom middleware in Chapter 17, Going Live.

The authentication framework also includes the following models that are defined in django.contrib.auth.models:

- **User**: A user model with basic fields; the main fields of this model are username, password, email, first_name, last_name, and is_active
- **Group**: A group model to categorize users
- **Permission**: Flags for users or groups to perform certain actions

The framework also includes default authentication views and forms, which you will use later.

