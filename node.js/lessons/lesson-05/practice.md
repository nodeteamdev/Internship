**1. Import `books.csv` to MongoDB collection**

- Each document must have timestamp fields `createdAt`, `updatedAt`

**2. Implement component `books` in express app**

**3. Implement enpoints:**

- **Get count of books per country**

> return count of books per country

```bash
    curl --location --request GET 'localhost:3000/v1/books/count-per-country' \
    --header 'Content-Type: application/json' \
```

Response example:

```javascript
[{
    code3: 'BWA',
    value: 3,
},
{
    code3: 'CAF',
    value: 7,
},
{
    code3: 'CAN',
    value: 3,
}]
```

- **Get new books**

> return books added in the last day

```bash
    curl --location --request GET 'localhost:3000/v1/books/new-books' \
    --header 'Content-Type: application/json' \
```