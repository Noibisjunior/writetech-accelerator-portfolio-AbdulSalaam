# Send Payment

This endpoint sends Chimoney payouts to one or more recipients via email or phone number. Recipients can redeem their Chimoney for various options including airtime, gift cards, mobile money, or bank transfers.

## Overview

Chimoney payouts provide flexible digital rewards that recipients can convert into the payout method of their choice. This makes them ideal for situations where you want to give recipients flexibility in how they receive value.

**Use Cases:**
- Employee rewards and incentive programs
- Customer loyalty rewards
- Survey compensation
- Referral bonuses
- Freelancer payments
- Charitable donations
- Contest prizes and giveaways

Each payout generates a unique transaction reference (`chiRef`) that recipients use to redeem their payment.

## Request

To send a Chimoney payout, submit a POST request with recipient details and amounts:

**Endpoint:**
```http
POST /v0.2.4/payouts/chimoney
```

**Full URL:**
```
https://api-v2-sandbox.chimoney.io/v0.2.4/payouts/chimoney
```

### Required Headers

| Header       | Value              | Required | Description |
|--------------|--------------------|----------|-------------|
| X-API-KEY    | your_api_key_here  | Yes      | Your Chimoney API authentication key |
| Content-Type | application/json   | Yes      | Indicates you're sending JSON data |

### Request Body Parameters

| Field          | Type   | Required | Description |
|----------------|--------|----------|-------------|
| `chimoneys`    | array  | Yes      | Array of payout objects (minimum 1 recipient) |
| `subAccountID` | string | Optional | Sub-account ID for payment tracking and organization |

**Payout Object Fields (inside `chimoneys` array):**

| Field          | Type   | Required | Description |
|----------------|--------|----------|-------------|
| `email`        | string | Yes      | Recipient's email address |
| `valueInUSD`   | number | Yes      | Payment amount in USD (minimum $0.01) |
| `twitter`      | string | Optional | Recipient's Twitter handle |
| `ref`          | string | Optional | Your custom reference ID for tracking |

### Example Request Body

**Single Recipient:**
```json
{
  "chimoneys": [
    {
      "email": "recipient@example.com",
      "valueInUSD": 10
    }
  ]
}
```

**Multiple Recipients:**
```json
{
  "chimoneys": [
    {
      "email": "user1@example.com",
      "valueInUSD": 25,
      "ref": "bonus_2024_001"
    },
    {
      "email": "user2@example.com",
      "valueInUSD": 15,
      "ref": "bonus_2024_002"
    }
  ],
  "subAccountID": "sub_acc_123"
}
```

### Example cURL Request

Here's how to send a payment using cURL:

```bash
curl -X POST "https://api-v2-sandbox.chimoney.io/v0.2.4/payouts/chimoney" \
  -H "X-API-KEY: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "chimoneys": [
      {
        "email": "recipient@example.com",
        "valueInUSD": 10
      }
    ]
  }'
```

## Response

### Success Response (200 OK)

When the payout is successfully created, the API returns transaction details:

```json
{
  "status": "success",
  "count": 1,
  "data": [
    {
      "issueID": "iss_abc123",
      "chiRef": "iss_abc123",
      "email": "recipient@example.com",
      "valueInUSD": 10,
      "status": "pending"
    }
  ]
}
```

**Response Fields:**

- **status** – Indicates whether the request was successful
- **count** – Number of payouts created
- **data** – Array of payout objects
  - **issueID** – Unique identifier for this transaction
  - **chiRef** – Chimoney reference used for redemption
  - **email** – Recipient's email address
  - **valueInUSD** – Payment amount in USD
  - **status** – Payout status ("pending", "sent", "redeemed")

### Error Responses

**400 Bad Request**

This error occurs when the request contains invalid data:

```json
{
  "status": "error",
  "message": "Invalid valueInUSD",
  "details": "valueInUSD must be a positive number"
}
```

**Possible causes:**
- Invalid `valueInUSD` (must be positive number, minimum $0.01)
- Empty `chimoneys` array
- Invalid email format
- Missing required fields
- Malformed JSON in request body

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
- API key has been revoked

**402 Payment Required**

This error occurs when you have insufficient balance:

```json
{
  "status": "error",
  "message": "Insufficient balance"
}
```

**Solution:** Add funds to your Chimoney account before sending payouts.

**422 Unprocessable Entity**

This error occurs when validation fails:

```json
{
  "status": "error",
  "message": "Validation failed",
  "errors": [
    "Email is required for all recipients",
    "valueInUSD must be greater than 0"
  ]
}
```

**Solution:** Review the error messages and correct the invalid fields.

## Best Practices

- **Check your balance** before sending large batches of payouts
- **Use custom references** (`ref` field) to track payouts in your system
- **Validate email addresses** before submission to reduce failed deliveries
- **Implement idempotency** by storing `issueID` values to prevent duplicate payouts
- **Use sub-accounts** to organize payouts by campaign, department, or project
- **Batch payouts** efficiently by sending multiple recipients in one request
- **Monitor payout status** using webhooks for real-time updates on redemptions
- **Store chiRef values** securely as recipients need these to redeem payments

