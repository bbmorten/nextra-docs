# Project's that means something

## [contracts](https://github.com/bbmorten/contracts.git)

An angular framework project acting as a frontend to a FAST API backend. Fundamental techniques of Angular are applied.

- Course : [Angular Fundamentals](https://app.pluralsight.com/library/courses/fundamentals-angular/table-of-contents)

###  Using json-server with Contacts part

Start the json-server. Using the proxy.conf.json, we are directing /api/contacts request to json-server /contacts

```shell
json-server db.json --routes routes.json

```

```json title="proxy.conf.json"
{
  "/login": {
    "target": "http://127.0.0.1:8000",
    "secure": false
  },
  "/retirement/summary": {
    "target": "http://127.0.0.1:8000",
    "secure": false
  },
  "/api/contacts": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

```json title="routes.json"
{
    "/api/contacts/": "/contacts/"
}
```

```json title="db.json"
{
    "contacts": [
        {
            "id": "5CehW",
            "firstName": "Percival",
            "lastName": "Doodleplumb",
            "dateOfBirth": "1994-05-04T21:00:00.000Z",
            "favoritesRanking": 0,
            "phone": {
                "phoneNumber": "555-765-4321",
                "phoneType": "mobile"
            },
            "address": {
                "streetAddress": "777 Whimsy Lane",
                "city": "Gleeberg City",
                "state": "Colohoma",
                "postalCode": "A4321",
                "addressType": "home"
            }
        },
        {
            "id": "A6rwe",
            "firstName": "Mortimer",
            "lastName": "Flungford",
            "dateOfBirth": "1988-10-04T21:00:00.000Z",
            "favoritesRanking": 0,
            "phone": {
                "phoneNumber": "555-877-5678",
                "phoneType": "mobile"
            },
            "address": {
                "streetAddress": "543 Lullaby Lane",
                "city": "Sleepytown",
                "state": "Ulaska",
                "postalCode": "F2231",
                "addressType": "other"
            }
        },
        {
            "id": "3bNGA",
            "firstName": "Wanda",
            "lastName": "Giggleworth",
            "dateOfBirth": "1986-11-07T21:00:00.000Z",
            "favoritesRanking": 1,
            "phone": {
                "phoneNumber": "555-123-4567",
                "phoneType": "mobile"
            },
            "address": {
                "streetAddress": "123 Merriment Avenue",
                "city": "Dorado City",
                "state": "Mezona",
                "postalCode": "Z2345",
                "addressType": "work"
            }
        }
    ]
}
```

