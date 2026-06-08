/**
 * SmartSchema Extract API — E-Commerce Product Scraper Example
 * 
 * Extracts product data from raw HTML or plain product description text.
 * Useful for: price monitoring, catalog normalization, competitor analysis.
 * 
 * Subscribe: https://rapidapi.com/TU_USUARIO/api/smartschema-extract
 */

const RAPIDAPI_KEY  = 'YOUR_RAPIDAPI_KEY_HERE';
const RAPIDAPI_HOST = 'smartschema-extract.p.rapidapi.com';

const productText = `
iPhone 15 Pro Max — 256GB Natural Titanium
Price: $1,199.00  |  Was: $1,299.00  |  Save: $100
★★★★½  4.7 out of 5 stars (3,241 reviews)
In Stock — Usually ships within 1–2 business days
Free delivery on orders over $50

Key specs:
- Display: 6.7" Super Retina XDR, ProMotion 120Hz
- Chip: A17 Pro — 6-core CPU, 6-core GPU
- Camera: 48MP Main, 12MP Ultrawide, 12MP 5x Telephoto
- Battery: Up to 29 hours video playback
- Colors available: Natural Titanium | Blue Titanium | White Titanium | Black Titanium
- Storage options: 256GB | 512GB | 1TB
`;

const schema = {
  type: 'object',
  properties: {
    product_name:     { type: 'string' },
    sku_storage:      { type: 'string' },
    color:            { type: 'string' },
    current_price:    { type: 'number' },
    original_price:   { type: 'number' },
    discount_amount:  { type: 'number' },
    rating:           { type: 'number' },
    review_count:     { type: 'integer' },
    in_stock:         { type: 'boolean' },
    chip:             { type: 'string' },
    display_size:     { type: 'string' },
    battery_hours:    { type: 'integer' },
    available_colors: { type: 'array', items: { type: 'string' } },
    storage_options:  { type: 'array', items: { type: 'string' } }
  }
};

const response = await fetch(`https://${RAPIDAPI_HOST}/v1/extract`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': RAPIDAPI_KEY,
    'X-RapidAPI-Host': RAPIDAPI_HOST
  },
  body: JSON.stringify({ text: productText, schema })
});

const result = await response.json();
console.log(JSON.stringify(result.data, null, 2));
