### Task
```
   https://drive.google.com/drive/folders/1yQd6eFhnbPAmuuFqaMJYszNBMXwpNtfx?usp=sharing
```

### Find User
```
   curl --location --request GET 'localhost:3000/v1/users'
```

### Create User
```
   curl --location --request POST 'localhost:3000/v1/users' \
   --header 'Content-Type: application/json' \
   --data-raw '{
      "email": "test@gmail.com",
      "fullName": "Wow Yay"
   }'
```

### Update User
```
   curl --location --request PUT 'localhost:3000/v1/users' \
   --header 'Content-Type: application/json' \
   --data-raw '{
      "id": "5e50265429fbb59255fb8428",
      "fullName": "Yay Foo"
   }'
```

### Delete User
```
   curl --location --request DELETE 'localhost:3000/v1/users' \
   --header 'Content-Type: application/json' \
   --data-raw '{
      "id": "5e502541bb617386c48f6a8c"
   }'
```