/**
 * SmartSchema Extract API — Invoice Parser Example
 * 
 * Parses an invoice text into structured JSON fields.
 * Ideal for: accounting automation, ERP integrations, document processing pipelines.
 * 
 * Subscribe: https://rapidapi.com/TU_USUARIO/api/smartschema-extract
 */

const RAPIDAPI_KEY  = 'YOUR_RAPIDAPI_KEY_HERE';
const RAPIDAPI_HOST = 'smartschema-extract.p.rapidapi.com';

const invoiceText = `
INVOICE #INV-2025-0091
Date: May 15, 2025
Due Date: June 15, 2025

FROM: TechServices LLC | 456 Oak Avenue, San Francisco, CA 94102
TO:   Acme Corp | 123 Main Street, New York, NY 10001

ITEMS:
  Web Development Services (40hrs @ $87.50/hr)  ............  $3,500.00
  UI/UX Design Review  ...................................    $800.00
  Server Setup & Configuration  ..........................    $450.00

                                          Subtotal:  $4,750.00
                                          Tax (8%):    $380.00
                                          TOTAL DUE: $5,130.00

Payment: Bank transfer to Chase ****4821. Reference: INV-2025-0091
`;

const schema = {
  type: 'object',
  properties: {
    invoice_number: { type: 'string' },
    issue_date:     { type: 'string' },
    due_date:       { type: 'string' },
    vendor_name:    { type: 'string' },
    vendor_address: { type: 'string' },
    client_name:    { type: 'string' },
    client_address: { type: 'string' },
    subtotal:       { type: 'number' },
    tax_rate:       { type: 'number' },
    tax_amount:     { type: 'number' },
    total_due:      { type: 'number' },
    payment_ref:    { type: 'string' },
    line_items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          description: { type: 'string' },
          amount:      { type: 'number' }
        }
      }
    }
  }
};

const response = await fetch(`https://${RAPIDAPI_HOST}/v1/extract`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': RAPIDAPI_KEY,
    'X-RapidAPI-Host': RAPIDAPI_HOST
  },
  body: JSON.stringify({ text: invoiceText, schema })
});

const result = await response.json();
console.log(JSON.stringify(result.data, null, 2));
