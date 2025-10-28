# Retrieve All Wallets

This endpoint retrieves all multicurrency wallets linked to your Chimoney account. Each wallet represents a balance in a specific currency, allowing you to manage funds across multiple currencies simultaneously.

## Overview

Multicurrency wallets are essential for businesses operating in multiple countries or managing international payments. This endpoint returns comprehensive wallet information including unique identifiers, currency codes, and current balances.

**Use Cases:**
- Display available balances across different currencies in your application
- Check wallet balances before initiating payouts
- Monitor currency-specific fund allocation
- Build financial dashboards showing multicurrency holdings

## Request

To retrieve all wallets associated with your account, send a GET request to the endpoint below:

**Endpoint:**
```http
GET /v0.2.4/multicurrency-wallets/list
```

**Full URL:**
```
https://api-v2-sandbox.chimoney.io/v0.2.4/multicurrency-wallets/list
```

### Required Headers

| Header       | Value              | Required | Description |
|--------------|--------------------|----------|-------------|
| X-API-KEY    | your_api_key_here  | Yes      | Your Chimoney API authentication key |
| Content-Type | application/json   | Yes      | Indicates JSON response format |

### Example cURL Request

Here's how to retrieve your wallets using cURL:

```bash
curl -X GET "https://api-v2-sandbox.chimoney.io/v0.2.4/multicurrency-wallets/list" \
  -H "X-API-KEY: your_api_key_here" \
  -H "Content-Type: application/json"
```

## Response

### Success Response (200 OK)

When the request is successful, the API returns an array of wallet objects:

```json
{
  "status": "success",
  "wallets": [
    {
      "walletID": "wallet_abc123",
      "currency": "USD",
      "balance": 100.50
    },
    {
      "walletID": "wallet_def456",
      "currency": "EUR",
      "balance": 75.00
    },
    {
      "walletID": "wallet_ghi789",
      "currency": "NGN",
      "balance": 50000.00
    }
  ]
}
```

**Response Fields:**

- **status** – Indicates whether the request was successful
- **wallets** – Array of wallet objects
  - **walletID** – Unique identifier for the wallet
  - **currency** – ISO 4217 currency code (USD, EUR, NGN, etc.)
  - **balance** – Current balance in the specified currency

### Error Responses

**400 Bad Request**

This error occurs when the request format is invalid:

```json 
{
  "status": "error",
  "message": "Invalid request"
}
```

**Possible causes:**
- Malformed request headers
- Invalid content type
- Incorrect endpoint URL

**401 Unauthorized**

This error occurs when authentication fails:

```json
{
  "status": "error",
  "message": "Unauthorized"
}
```

**Possible causes:**
- Missing or invalid API key
- Expired API key
- API key not included in the `X-API-KEY` header

**Solution:** Verify your API key is correct and properly formatted in the request header.

## Best Practices

- **Cache wallet data** when appropriate to reduce API calls
- **Check balances** before initiating payouts to ensure sufficient funds
- **Handle errors gracefully** by implementing proper error handling in your application
- **Use webhook notifications** to receive real-time balance updates instead of pulling this endpoint frequently
