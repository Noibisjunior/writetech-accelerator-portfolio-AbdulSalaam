# POST Send a payment

Send a Chimoney payout to one or more recipients via email or phone number.

## Description
This endpoint issues Chimoney payouts. Each payout contains a value in USD and an optional sub-account ID.

---

## Request

**Endpoint:**  
POST https://api-v2-sandbox.chimoney.io/v0.2.4/payouts/chimoney


**Headers:**
| Header       | Value              | Required |
|--------------|--------------------|----------|
| X-API-KEY    | your_api_key_here  | yes |
| Content-Type | application/json   | yes |

**Body Parameters**
| Field          | Type   | Required | Description |
|----------------|--------|----------|-------------|
| `chimoneys`    | array  | yes      | List of payout objects (at least 1) |
| `subAccountID` | string | optional | ID of subaccount |
| `email`        | string | yes    | Recipient email |
| `valueInUSD`   | number | yes     | Amount to send |

**Example Request**
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

## Response

**200 Success**
```json
{
  "status": "success",
  "count": 1,
  "data": [
    {
      "issueID": "iss_abc123",
      "email": "recipient@example.com",
      "valueInUSD": 10
    }
  ]
}
```

**400 Bad Request**

```json
{
  "status": "error",
  "message": "Invalid valueInUSD"
}
```

**401 Unauthorized**

```json
{
  "status": "error",
  "message": "Unauthorized"
}
```

