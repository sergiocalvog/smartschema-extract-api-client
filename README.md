# SmartSchema Extract API — JavaScript & Python Client

> **Convert unstructured text to validated JSON using AI.**
> Extract structured data from any text, HTML, PDF content, or email — powered by Google Gemini Structured Output.

[![RapidAPI Badge](https://img.shields.io/badge/Available%20on-RapidAPI-blue?style=flat-square)](https://rapidapi.com/sergiocalvog/api/smartschema-extract-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![API Version](https://img.shields.io/badge/API-v1.0.0-orange)](https://rapidapi.com/sergiocalvog/api/smartschema-extract-api)

---

## What is SmartSchema Extract API?

**SmartSchema Extract API** is a REST API that transforms any unstructured text into a strictly validated JSON object based on a dynamic schema you define per request.

No more brittle regex. No more manual parsing. Just send your text and your desired JSON Schema — the API returns clean, validated structured data.

### Key features

- **Dynamic schemas:** define any JSON Schema per request, no pre-configuration needed
- **Strict validation:** output always matches your schema exactly
- **Any text format:** HTML, raw text, PDF content, email bodies, transcripts
- **Zero hallucinations mode:** `strict_mode: true` returns null instead of guessing
- **Low latency:** median response time under 800ms

---

## Quick Start (JavaScript)

### 1. Get your free API key

Subscribe at: **[rapidapi.com → SmartSchema Extract API](https://rapidapi.com/sergiocalvog/api/smartschema-extract-api)**

The **Free plan** includes 50 requests/month at no cost.

### 2. Basic call

```javascript
const response = await fetch(
  'https://smartschema-extract.p.rapidapi.com/v1/extract',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
      'X-RapidAPI-Host': 'smartschema-extract.p.rapidapi.com'
    },
    body: JSON.stringify({
      text: 'Order #1042. Customer: Alice Johnson. Total: $149.99. Status: shipped.',
      schema: {
        type: 'object',
        properties: {
          order_id:      { type: 'string' },
          customer_name: { type: 'string' },
          total_amount:  { type: 'number' },
          status:        { type: 'string' }
        }
      }
    })
  }
);

const { data } = await response.json();
console.log(data);
// → { order_id: "1042", customer_name: "Alice Johnson", total_amount: 149.99, status: "shipped" }
```

---

## Use Cases & Examples

| Use case | Example file |
|---|---|
| Basic order extraction | [`examples/basic-extraction.js`](examples/basic-extraction.js) |
| Invoice / receipt parser | [`examples/invoice-parser.js`](examples/invoice-parser.js) |
| E-commerce product scraper | [`examples/ecommerce-scraper.js`](examples/ecommerce-scraper.js) |
| Email entity extractor (Python) | [`examples/email-parser.py`](examples/email-parser.py) |

---

## API Reference

| Field | Type | Required | Description |
|---|---|---|---|
| `text` | string | ✅ | Unstructured text to extract data from (max 100,000 chars) |
| `schema` | object | ✅ | JSON Schema (type: object) defining output structure |
| `options.strict_mode` | boolean | ❌ | Return null for missing fields instead of inferring |

### Pricing

| Plan | Price | Requests/month | Max text |
|---|---|---|---|
| Free | $0 | 50 | 2,000 chars |
| Starter | $19/mo | 5,000 | 10,000 chars |
| Growth | $49/mo | 25,000 | 50,000 chars |
| Business | $149/mo | 100,000 | 100,000 chars |

**[View all plans and subscribe →](https://rapidapi.com/sergiocalvog/api/smartschema-extract-api)**

---

## Error Codes

| Code | HTTP | Description |
|---|---|---|
| `MISSING_FIELD` | 400 | `text` or `schema` not provided |
| `INVALID_SCHEMA` | 400 | Schema must be `type: object` with `properties` |
| `TEXT_TOO_LONG` | 400 | Text exceeds plan character limit |
| `FORBIDDEN` | 403 | Direct access without RapidAPI key |
| `RATE_LIMIT` | 429 | Plan request limit reached |
| `EXTRACTION_FAILED` | 500 | AI model error |

---

## Documentation

- [Quick Start Guide](docs/quickstart.md)
- [JSON Schema Guide](docs/json-schema-guide.md)
- [Use Cases](docs/use-cases.md)

---

## Contributing

Issues and PRs are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

**⭐ Star this repo if you find it useful.**

---

## License

MIT © 2025

**API on RapidAPI:** [rapidapi.com → SmartSchema Extract API](https://rapidapi.com/sergiocalvog/api/smartschema-extract-api)
