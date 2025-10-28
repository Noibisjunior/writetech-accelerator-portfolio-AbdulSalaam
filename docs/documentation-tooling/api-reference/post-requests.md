# POST /requests

This endpoint allows you to create a new API request inside a collection. In Hoppscotch, requests are the individual API calls you want to test or execute, and organizing them within collections helps maintain a structured workflow.

## Endpoint Overview

**Purpose:** Create a new API request definition within a specific collection, allowing you to save request configurations for repeated use.

**Use Case:** This is particularly useful when building a test suite, documenting API workflows, or sharing request configurations with team members.

## Request

To create a new request, send a POST request to the `/requests` endpoint:

```http
POST /requests
```

### Required Headers

- **Authorization**: `Bearer <token>` – Your authentication token for accessing the API
- **Content-Type**: `application/json` – Indicates that you're sending JSON data

### Request Body Parameters

The request body should contain the following fields in JSON format:

```json
{
  "name": "Create User",
  "method": "POST",
  "url": "/users",
  "body": {
    "username": "Noibisjunior",
    "email": "kolasjunior2@gmail.com"
  }
}
```

**Body Fields:**

- **name** – Display name for the request (e.g., "Create User", "Get Products")
- **method** – HTTP method to use (GET, POST, PUT, DELETE, PATCH)
- **url** – The API endpoint URL to call
- **body** – (Optional) Request payload data, used for POST/PUT/PATCH requests

### Example cURL Request

Here's how to create a new request using cURL:

```bash
curl -X POST "https://api.hoppscotch.io/requests" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"name":"Create User","method":"POST","url":"/users","body":{"username":"Noibi","email":"kolasjunior2@gmail.com"}}'
```

> **Note:** Replace `<token>` with your actual API access token from your Hoppscotch account settings.

## Response

### Success Response (201 Created)

When the request is successfully created, the API returns the newly created request object:

```json
{
  "id": "67890",
  "name": "Create User",
  "method": "POST",
  "url": "/users",
  "collectionId": "12345",
  "createdAt": "2024-10-28T09:30:00Z"
}
```

**Response Fields:**

- **id** – Unique identifier for the newly created request
- **name** – Display name of the request
- **method** – HTTP method for this request
- **url** – The API endpoint URL
- **collectionId** – ID of the collection this request belongs to
- **createdAt** – Timestamp of when the request was created

### Error Responses

**400 Bad Request**

This error occurs when the request body is malformed or missing required fields:

```json
{
  "error": "Bad Request",
  "message": "Missing required field: 'name'",
  "details": [
    "The 'name' field is required",
    "The 'method' field must be a valid HTTP method"
  ]
}
```

**401 Unauthorized**

This error occurs when the authentication token is missing or invalid:

```json
{
  "error": "Unauthorized",
  "message": "Invalid or missing authentication token"
}
```

**404 Not Found**

This error occurs when the specified collection doesn't exist:

```json
{
  "error": "Not Found",
  "message": "Collection not found"
}
```

**500 Internal Server Error**

This error indicates a server-side issue:

```json
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred while creating the request"
}
```

## Best Practices

- Use descriptive names for your requests to make them easy to identify
- Include all necessary headers and body parameters when defining POST/PUT requests
- Validate your JSON payload before sending to avoid 400 errors
- Organize related requests within the same collection for better project structure