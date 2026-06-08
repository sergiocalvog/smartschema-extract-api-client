# Quick Start — SmartSchema Extract API

## 1. Get your API key

Subscribe (free) at: **[rapidapi.com → SmartSchema Extract API](https://rapidapi.com/TU_USUARIO/api/smartschema-extract)**

The Free plan includes 50 requests/month at $0.

## 2. Make your first call

```bash
curl -X POST https://smartschema-extract.p.rapidapi.com/v1/extract \
  -H "Content-Type: application/json" \
  -H "X-RapidAPI-Key: YOUR_KEY" \
  -H "X-RapidAPI-Host: smartschema-extract.p.rapidapi.com" \
  -d '{
    "text": "Order #1042. Customer: Alice. Total: $149.99. Status: shipped.",
    "schema": {
      "type": "object",
      "properties": {
        "order_id":      {"type": "string"},
        "customer_name": {"type": "string"},
        "total_amount":  {"type": "number"},
        "status":        {"type": "string"}
      }
    }
  }'
```

## 3. Expected response

```json
{
  "success": true,
  "data": {
    "order_id": "1042",
    "customer_name": "Alice",
    "total_amount": 149.99,
    "status": "shipped"
  },
  "meta": {
    "model": "gemini-1.5-flash",
    "input_chars": 65,
    "processing_ms": 598
  }
}
```

See `/examples` for JavaScript and Python samples.
