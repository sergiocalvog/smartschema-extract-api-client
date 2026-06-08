/**
 * SmartSchema Extract API — Basic Example (Node.js / ES Modules)
 * 
 * Extracts structured order data from plain text.
 * Get your free API key at: https://rapidapi.com/TU_USUARIO/api/smartschema-extract
 */

const RAPIDAPI_KEY  = 'YOUR_RAPIDAPI_KEY_HERE'; // Replace with your key
const RAPIDAPI_HOST = 'smartschema-extract.p.rapidapi.com';
const API_URL       = `https://${RAPIDAPI_HOST}/v1/extract`;

const payload = {
  text: `Order #1042 placed on June 3rd 2025.
         Customer: Alice Johnson. Email: alice@example.com
         Items: 2x Widget Pro @ $74.99. Total: $149.98. Status: shipped.`,
  schema: {
    type: 'object',
    properties: {
      order_id:       { type: 'string' },
      date:           { type: 'string' },
      customer_name:  { type: 'string' },
      customer_email: { type: 'string' },
      total_amount:   { type: 'number' },
      item_count:     { type: 'integer' },
      status:         { type: 'string' }
    },
    required: ['order_id', 'customer_name', 'total_amount']
  }
};

const response = await fetch(API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': RAPIDAPI_KEY,
    'X-RapidAPI-Host': RAPIDAPI_HOST
  },
  body: JSON.stringify(payload)
});

const result = await response.json();
console.log(JSON.stringify(result, null, 2));

/*
Expected output:
{
  "success": true,
  "data": {
    "order_id": "1042",
    "date": "June 3rd 2025",
    "customer_name": "Alice Johnson",
    "customer_email": "alice@example.com",
    "total_amount": 149.98,
    "item_count": 2,
    "status": "shipped"
  },
  "meta": { "model": "gemini-1.5-flash", "input_chars": 168, "processing_ms": 610 }
}
*/
