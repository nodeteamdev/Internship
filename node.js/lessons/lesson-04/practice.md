**1. Implement clientErrorHandler**

```javascript
app.use(clientErrorHandler)
```

**2. Implement logErrors**

```javascript
app.use(logErrors)
```

**3. Implement errorHandler**

```javascript
app.use(errorHandler)
```

**4. Implement JWT Auth**

- generate session only with access token
- set expire time 1d

**5. Implement Email Service**

- send email with new password
- use MailHog for SMTP delivery
