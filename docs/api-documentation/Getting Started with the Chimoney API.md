## API User Requirements
- Chimoney developer account: [Sign up](https://chimoney.io/)
- API Key from the Chimoney dashboard
- Familiarity with REST APIs

## Base URL for the sandbox enviroment
https://api-v2-sandbox.chimoney.io/v0.2.4


## Authentication
All requests must include your Chimoney **API key** in the `Authorization` header.

### Example
Authorization: Bearer `YOUR_API_KEY`

## Required Headers
| Header           | Value                     |
|------------------|---------------------------|
| Authorization    | Bearer `your_api_key`     | 
| Content-Type     | application/json          |

## Sample cURL Request
```bash
curl -X GET "https://api-v2-sandbox.chimoney.io/v0.2.4" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
  ```


