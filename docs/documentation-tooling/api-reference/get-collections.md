# GET /collections

This endpoint retrieves all collections of API requests associated with a user's account. Collections in Hoppscotch are used to organize and group related API requests, making it easier to manage and share your API testing workflows.

## Endpoint Overview

**Purpose:** Fetch all collections that belong to the authenticated user, including the requests contained within each collection.

**Use Case:** This is useful when you need to display a user's workspace, sync collections across devices, or export API request data.

## Request

To retrieve all collections, send a GET request to the `/collections` endpoint:

```http
GET /collections
```

### Example cURL Request

Here's how to make this request using cURL:

```bash
curl -X GET "https://api.hoppscotch.io/collections" \
  -H "Authorization: Bearer <token>"
```

### Required Headers

- **Authorization**: `Bearer <token>` – Your authentication token for accessing the API

> **Note:** Replace `<token>` with your actual API access token. You can generate a token from your Hoppscotch account settings.

## Response

### Success Response (200 OK)

When the request is successful, the API returns an array of collection objects:

```json
[
  {
    "id": "12345",
    "name": "User API Tests",
    "requests": [
      { 
        "id": "1", 
        "name": "Get Users", 
        "method": "GET", 
        "url": "/users" 
      }
    ]
  }
]
```

**Response Fields:**

- **id** – Unique identifier for the collection
- **name** – Display name of the collection
- **requests** – Array of API request objects within this collection
  - **id** – Unique identifier for the request
  - **name** – Display name of the request
  - **method** – HTTP method (GET, POST, PUT, DELETE)
  - **url** – API endpoint URL

### Error Responses

**401 Unauthorized**

This error occurs when the authentication token is missing or invalid:

```json
{
  "error": "Unauthorized",
  "message": "Invalid or missing authentication token"
}
```

**403 Forbidden**

This error occurs when the token is valid but doesn't have permission to access collections:

```json
{
  "error": "Forbidden",
  "message": "You do not have permission to access this resource"
}
```

**500 Internal Server Error**

This error indicates a server-side issue:

```json
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred while retrieving collections"
}
```

## Best Practices

- Always store your API tokens securely and never commit them to version control
- Implement proper error handling in your application to gracefully handle different response codes
- Cache collection data when appropriate to reduce unnecessary API calls