## This guide explains how to retrieve all collections of API requests for a user.

### Request
`GET /collections`

```bash
curl -X GET "https://api.hoppscotch.io/collections" \
  -H "Authorization: Bearer <token>"
```
### Headers
- **Authorization**: `Bearer <token>`

**Note: Replace `<token>` with your own token**

## Response
```json
[
  {
    "id": "12345",
    "name": "User API Tests",
    "requests": [
      { "id": "1", "name": "Get Users", "method": "GET", "url": "/users" }
    ]
  }
]