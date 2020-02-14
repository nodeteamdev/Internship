### Validation
```
    https://hapi.dev/family/joi/
```

### Find User
```
    curl --location --request GET 'localhost:3000/v1/users/find' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com"
    }'
```

### Create User
```
    curl --location --request POST 'localhost:3000/v1/users/create' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com",
        "fullName": "Test User"
    }'
```

### Update User
```
    curl --location --request PUT 'localhost:3000/v1/users/update' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "fullName": "Update User"
    }'
```

### Delete User
```
    curl --location --request DELETE 'localhost:3000/v1/users/delete' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com"
    }'
```