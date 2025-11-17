# How to Email from Django

##  Using app password with Gmail

- Create an App Password
    - Go to My Google Account(<https://myaccount.google.com>) .
    - Search for "App Password"
    - Create an "App Password". These are easy to delete and recreate, do this as needed.
    - Copy the App Password for your Django project's environment variables. Such as. a dotenv file .env or in your production systems environment variables (over time you should upgrade to a domain you own with a production-ready transactional email service)

```console title='.env'
EMAIL_HOST_USER=bbmorten@gmail.com
EMAIL_HOST_PASSWORD="teva bbfd rxgu fojy"
DEFAULT_FROM_EMAIL=My Shop <bbmorten@gmail.com>

```
