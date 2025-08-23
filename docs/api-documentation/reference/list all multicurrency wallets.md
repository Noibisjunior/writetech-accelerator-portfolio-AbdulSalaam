# Retrieve a list of all multicurrency wallets linked to your Chimoney account.

## Description
Returns details of each wallet, including wallet ID, currency, and balance.


## Request

**Endpoint:**  
GET https://api-v2-sandbox.chimoney.io/v0.2.4/multicurrency-wallets/list


**Headers:**
| Header       | Value              | Required |
|--------------|--------------------|----------|
| X-API-KEY    | your_api_key_here  |yes |
| Content-Type | application/json   | yes |

---

## Response

**200 Success**
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
    }
  ]
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
