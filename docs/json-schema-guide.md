# JSON Schema Guide for SmartSchema Extract API

## Supported field types

| JSON Schema type | Description | Example value |
|---|---|---|
| `string` | Text values | `"Alice Johnson"` |
| `number` | Decimals and integers | `149.99` |
| `integer` | Whole numbers only | `42` |
| `boolean` | True/false | `true` |
| `array` | List of items | `["red", "blue"]` |
| `object` | Nested object | `{"street": "Main St"}` |

## Example schemas

### Minimal schema
```json
{
  "type": "object",
  "properties": {
    "name":  {"type": "string"},
    "price": {"type": "number"}
  }
}
```

### With required fields
```json
{
  "type": "object",
  "properties": {
    "invoice_id": {"type": "string"},
    "total":      {"type": "number"},
    "items":      {"type": "array", "items": {"type": "string"}}
  },
  "required": ["invoice_id", "total"]
}
```

## Strict mode

Enable `strict_mode: true` to return `null` for fields not found (instead of inferring):

```json
{
  "text": "...",
  "schema": {...},
  "options": {"strict_mode": true}
}
```
