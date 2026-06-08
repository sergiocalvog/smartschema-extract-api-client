"""
SmartSchema Extract API — Email Entity Extractor (Python)

Extracts structured entities from email bodies: dates, contacts, budgets, links.
Useful for: CRM automation, calendar integration, invoice detection in email.

Subscribe: https://rapidapi.com/TU_USUARIO/api/smartschema-extract
"""

import requests
import json

RAPIDAPI_KEY  = "YOUR_RAPIDAPI_KEY_HERE"
RAPIDAPI_HOST = "smartschema-extract.p.rapidapi.com"
API_URL       = f"https://{RAPIDAPI_HOST}/v1/extract"

email_body = """
Hi Sarah,

Following up on our call — confirming the project kickoff meeting for
Thursday, June 12th at 2:00 PM EST.

Details:
- Zoom link: https://zoom.us/j/99887766554
- Agenda: Review Q3 roadmap, assign tasks, set sprint-1 deadlines
- Budget approved for Phase 1: $25,000 (PO #PO-2025-441)
- Next payment milestone: August 1st, 2025 — $12,500

Please bring the wireframes from last week. If you can't make it,
contact me at: james.miller@techcorp.com or call +1 (415) 555-0192.

Best,
James Miller
Senior Product Manager, TechCorp
"""

schema = {
    "type": "object",
    "properties": {
        "recipient_name":   {"type": "string"},
        "sender_name":      {"type": "string"},
        "sender_email":     {"type": "string"},
        "sender_phone":     {"type": "string"},
        "sender_title":     {"type": "string"},
        "meeting_date":     {"type": "string"},
        "meeting_time":     {"type": "string"},
        "meeting_timezone": {"type": "string"},
        "zoom_url":         {"type": "string"},
        "total_budget":     {"type": "number"},
        "first_payment":    {"type": "number"},
        "payment_date":     {"type": "string"},
        "po_number":        {"type": "string"}
    }
}

response = requests.post(
    API_URL,
    json={"text": email_body, "schema": schema},
    headers={
        "Content-Type": "application/json",
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": RAPIDAPI_HOST
    }
)

result = response.json()
print(json.dumps(result["data"], indent=2))
