from pydantic import BaseModel
from fastapi import HTTPException

# Define Tender schema for request validation
class Tender(BaseModel):
    tender_number: str
    description: str
    published_date: str
    closing_date: str
    briefing_date: str
    location: str
    tender_document_url: str
    tender_category: str
    tender_type: str
    tender_status: str
    contact_person: str
    contact_email: str

@app.post("/tenders")
def add_tender(tender: Tender):
    try:
        conn = sqlite3.connect("tenders.db")
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO tenders (
                tender_number, description, published_date, closing_date,
                briefing_date, location, tender_document_url, tender_category,
                tender_type, tender_status, contact_person, contact_email
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            tender.tender_number, tender.description, tender.published_date, tender.closing_date,
            tender.briefing_date, tender.location, tender.tender_document_url, tender.tender_category,
            tender.tender_type, tender.tender_status, tender.contact_person, tender.contact_email
        ))
        conn.commit()
        conn.close()
        return {"message": "Tender added successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
