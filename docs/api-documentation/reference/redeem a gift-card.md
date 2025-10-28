# Redeem Gift Card

This endpoint converts a Chimoney payout into a gift card from popular retailers like Amazon, iTunes, Google Play, and more. Recipients receive the gift card code via email, which they can use immediately for purchases.

## Overview

Gift card redemption is one of the most popular payout options in the Chimoney ecosystem. This endpoint allows you to convert Chimoney credits into branded gift cards across 200+ retailers in 20+ countries.

**Use Cases:**
- Reward program payouts to employees or customers
- Incentive campaigns for surveys or referrals
- International remittance where recipients prefer gift cards
- Flexible compensation options for gig workers
- Contest prizes and promotional giveaways

Before redeeming a gift card, you must first issue a Chimoney payout to obtain a transaction reference (`chiRef`), which is required for redemption.

## Request

To redeem a Chimoney payout as a gift card, send a POST request with the redemption details:

**Endpoint:**
```http
POST /v0.2.4/redeem/gift-card
```

**Full URL:**
```
https://api-v2-sandbox.chimoney.io/v0.2.4/redeem/gift-card
```

### Required Headers

| Header       | Value              | Required | Description |
|--------------|--------------------|----------|-------------|
| X-API-KEY    | your_api_key_here  | Yes      | Your Chimoney API authentication key |
| Content-Type | application/json   | Yes      | Indicates you're sending JSON data |

### Request Body Parameters

| Field         | Type   | Required | Description |
|---------------|--------|----------|-------------|
| `email`       | string | Yes      | Recipient's email address where the gift card will be sent |
| `countryCode` | string | Yes      | ISO 3166-1 alpha-2 country code (e.g., US, GB, CA) |
| `productId`   | string | Yes      | Gift card product identifier (e.g., "amazon", "itunes") |
| `chiRef`      | string | Yes      | Chimoney transaction reference from the initial payout |

### Example Request Body

```json
{
  "email": "recipient@example.com",
  "countryCode": "US",
  "productId": "amazon",
  "chiRef": "iss_abc123"
}
```

### Example cURL Request

Here's how to redeem a gift card using cURL:

```bash
curl -X POST "https://api-v2-sandbox.chimoney.io/v0.2.4/redeem/gift-card" \
  -H "X-API-KEY: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "recipient@example.com",
    "countryCode": "US",
    "productId": "amazon",
    "chiRef": "iss_abc123"
  }'
```

## Response

### Success Response (200 OK)

When the redemption is successful, the API returns confirmation details:

```json
{
  "status": "success",
  "redemptionRef": "redeem_123",
  "productId": "amazon",
  "countryCode": "US",
  "email": "recipient@example.com",
  "deliveryStatus": "sent"
}
```

**Response Fields:**

- **status** – Indicates whether the redemption was successful
- **redemptionRef** – Unique reference ID for this redemption transaction
- **productId** – Gift card product that was redeemed
- **countryCode** – Country where the gift card is valid
- **email** – Email address where the gift card was sent
- **deliveryStatus** – Email delivery status ("sent", "pending", "failed")

### Error Responses

**400 Bad Request**

This error occurs when the request contains invalid data:

```json
{
  "status": "error",
  "message": "Invalid request",
  "details": "Invalid country code or product ID"
}
```

**Possible causes:**
- Invalid `countryCode` (must be ISO 3166-1 alpha-2 format)
- Invalid `productId` (product not available in specified country)
- Invalid `chiRef` (transaction doesn't exist or already redeemed)
- Missing required fields
- Invalid email format

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
- API key not included in the `X-API-KEY` header

**404 Not Found**

This error occurs when the Chimoney reference is invalid:

```json
{
  "status": "error",
  "message": "Chimoney transaction not found"
}
```

**Solution:** Verify the `chiRef` value is correct and the transaction exists.

**409 Conflict**

This error occurs when the Chimoney payout has already been redeemed:

```json
{
  "status": "error",
  "message": "This Chimoney has already been redeemed"
}
```

**Solution:** Each `chiRef` can only be redeemed once. Check your transaction history.

## Best Practices

- **Validate product availability** by checking supported gift cards for each country before redemption
- **Store redemption references** for tracking and customer support purposes
- **Handle email delivery** by implementing retry logic for failed deliveries
- **Provide clear instructions** to recipients on how to use their gift card codes
- **Monitor redemption status** using webhook notifications for real-time updates
- **Implement error handling** to gracefully manage invalid redemptions and inform users