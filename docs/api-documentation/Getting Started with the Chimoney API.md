# Getting Started with the Chimoney API

This guide will help you make your first API call to Chimoney. You'll learn how to authenticate requests, configure required headers, and test the API using a simple example.

## Prerequisites

Before you begin, ensure you have the following:

- **Chimoney developer account** – [Sign up for free](https://chimoney.io/) if you don't have one
- **API Key** – Generate this from your [Chimoney dashboard](https://chimoney.io/dashboard) under Settings > API Keys
- **Basic knowledge of [REST APIs](https://en.wikipedia.org/wiki/Representational_state_transfer)** – Understanding HTTP methods and JSON formatting
- **API testing tool** – [cURL](https://curl.se/), [Postman](https://www.postman.com/), or any HTTP client

## Base URL

All API requests should be made to the following base URL:

**Sandbox Environment:**
```
https://api-v2-sandbox.chimoney.io/v0.2.4
```

> **Note:** Use the sandbox environment for testing and development. Once you're ready for production, you'll receive a production API URL from Chimoney.

## Authentication

Chimoney uses [API key authentication](https://swagger.io/docs/specification/authentication/api-keys/) to secure all requests. Every API call must include your API key in the `Authorization` header using the [Bearer token](https://swagger.io/docs/specification/authentication/bearer-authentication/) scheme.

Once you have your API key from the dashboard, you can start making authenticated requests to the API.

### Authentication Header Format

```http
Authorization: Bearer YOUR_API_KEY
```

Replace `YOUR_API_KEY` with the actual key you generated from your Chimoney dashboard.

## Required Headers

Every API request must include these two headers:

| Header           | Value                     | Description |
|------------------|---------------------------|-------------|
| Authorization    | Bearer `your_api_key`     | Your API authentication token |
| Content-Type     | application/json          | Indicates you're sending JSON data |

Now that you understand authentication, let's make your first API call to verify everything is set up correctly.

## Making Your First API Call

Here's a simple example to test your API connection using cURL:

```bash
curl -X GET "https://api-v2-sandbox.chimoney.io/v0.2.4/info/airtime-countries" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

This endpoint retrieves the list of countries where airtime payouts are supported.

### Expected Response

If your request is successful, you'll receive a response similar to this:

```json
{
  "status": "success",
  "data": [
    {
      "countryCode": "NG",
      "countryName": "Nigeria"
    },
    {
      "countryCode": "KE",
      "countryName": "Kenya"
    },
    {
      "countryCode": "GH",
      "countryName": "Ghana"
    }
  ]
}
```

If you see a successful response, congratulations! You're now ready to explore other endpoints and build your integration.

## Troubleshooting

If you encounter issues, here are common problems and their solutions:

### 401 Unauthorized Error

**Problem:** You receive a 401 Unauthorized response.

```json
{
  "status": "error",
  "message": "Unauthorized"
}
```

**Solution:**
- Verify your API key is correct and copied completely from the dashboard
- Ensure the header format is exactly `Authorization: Bearer YOUR_API_KEY` (with "Bearer" and a space)
- Check that your API key hasn't been revoked or expired

### 400 Bad Request Error

**Problem:** You receive a 400 Bad Request response.

```json
{
  "status": "error",
  "message": "Invalid request"
}
```

**Solution:**
- Verify your request body is valid JSON
- Check that all required fields are included
- Ensure the endpoint URL is correct

### Connection Timeout

**Problem:** The request times out or fails to connect.

**Solution:**
- Verify your internet connection
- Check that the base URL is correct (including `https://`)
- Ensure your firewall isn't blocking outbound API requests

### Missing Content-Type Header

**Problem:** You receive an error about invalid content type.

**Solution:**
- Add the `Content-Type: application/json` header to all requests
- Ensure you're sending properly formatted JSON in the request body

## Next Steps

Now that you've successfully authenticated and made your first API call, you can:

1. Explore the **API Reference** section to learn about available endpoints
2. Review specific use cases like sending payments or redeeming gift cards
3. Test different endpoints in the sandbox environment
4. Build your integration following the examples provided

If you need additional help, refer to the [Chimoney documentation](https://chimoney.readme.io/) or contact their support team.


