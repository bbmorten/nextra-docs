# OAuth Protocol

##  OAuth 2.0

###  Links

| Heading                                | Link                                                                |
|----------------------------------------|---------------------------------------------------------------------|
| Using OAuth 2.0 to Access Google APIs  | [developers.google.com/identity/protocols/oauth2](https://developers.google.com/identity/protocols/oauth2) |
| Using OAuth 2.0 for Web Server Applications | [developers.google.com/identity/protocols/oauth2/web-server](https://developers.google.com/identity/protocols/oauth2/web-server) |

### Azure (App Registrations)


![All Services --> All Registrations](app-register.png)


AZUREAD_OAUTH2_KEY =70ed45b3-752a-4dc8-a911-7ed69d032396
AZUREAD_OAUTH2_SECRET =Fpx8Q~-SYT2zXPQxum.LjfYcLP8dUAxad4dVSbVj
AZUREAD_OAUTH2_TENANT_ID =ad953e9e-02a4-442b-af7c-170273503b6e
AZUREAD_OAUTH2_RESOURCE = 'https://graph.microsoft.com/'


curl -X POST \
  -d "client_id=70ed45b3-752a-4dc8-a911-7ed69d032396" \
  -d "client_secret=Fpx8Q~-SYT2zXPQxum.LjfYcLP8dUAxad4dVSbVj" \
  -d "code=<auth-code>" \
  -d "redirect_uri=<redirect-uri>" \
  -d "grant_type=authorization_code" \
  https://login.microsoftonline.com/<tenant-id>/oauth2/token