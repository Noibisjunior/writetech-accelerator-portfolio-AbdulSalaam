# Redeem a Chimoney payout into a specific gift card.

### Description
This endpoint converts a Chimoney payout into a partner gift card like Amazon. It requires a valid Chimoney transaction reference (chiRef).


## Request

**Endpoint:**  
POST https://api-v2-sandbox.chimoney.io/v0.2.4/redeem/gift-card


**Headers:**
| Header       | Value              | Required |
|--------------|--------------------|----------|
| X-API-KEY    | your_api_key_here  | yes|
| Content-Type | application/json   | yes|

**Body Parameters**
| Field         | Type   | Required | Description |
|---------------|--------|----------|-------------|
| `email`       | string | yes   | Recipient email |
| `countryCode` | string | yes      | ISO 2-letter country code (e.g., US) |
| `productId`   | string | yes      | Gift card product ID |
| `chiRef`      | string | yes      | Chimoney issue reference |

**Example Request**
```json
{
  "email": "recipient@example.com",
  "countryCode": "US",
  "productId": "amazon",
  "chiRef": "iss_abc123"
}
```

## Response

**200 Success**

```json
{
  "status": "success",
  "redemptionRef": "redeem_123",
  "productId": "amazon",
  "countryCode": "US"
}
```

**400 Bad Request**
```json
{
  "status": "error",
  "message": "Invalid request"
}
```

**401 Unauthorized**
```json
{
  "status": "error",
  "message": "Unauthorized"
}
```