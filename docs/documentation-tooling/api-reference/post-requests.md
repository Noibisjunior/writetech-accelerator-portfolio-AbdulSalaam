# POST /requests

### Create a new API request inside a collection.

### Headers
- **Authorization**: `Bearer <token>`
- **Content-Type**: `application/json`

### Body Parameters
```json
{
  "name": "Create User",
  "method": "POST",
  "url": "/users",
  "body": {
    "username": "Noibisjunior",
    "email": "Noibi@example.com"
  }
}
```

### An example of a post request
```bash
curl -X POST "https://api.hoppscotch.io/requests" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"name":"Create User","method":"POST","url":"/users","body":{"username"Noibi","email":"noibi@example.com"}}'
```
### Response
```json
{
  "id": "67890",
  "name": "Create User",
  "method": "POST",
  "url": "/users"
}
```