from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set your frontend URL here in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize SQLite database
def get_db_connection():
    conn = sqlite3.connect("tenders.db")
    conn.row_factory = sqlite3.Row
    return conn
# Define schema for POST
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

# get all tenders

@app.get("/tenders")
def get_tenders():
    conn = sqlite3.connect("tenders.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tenders ORDER BY published_date DESC")
    rows = cursor.fetchall()
    conn.close()

    return [dict(row) for row in rows]

    # add tenders 
@app.post("/tenders")
def add_tender(tender: Tender):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            """
            INSERT INTO tenders (
                tender_number, description, published_date, closing_date,
                briefing_date, location, tender_document_url, tender_category,
                tender_type, tender_status, contact_person, contact_email
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                tender.tender_number,
                tender.description,
                tender.published_date.isoformat(),
                tender.closing_date.isoformat(),
                tender.briefing_date.isoformat(),
                tender.location,
                tender.tender_document_url,
                tender.tender_category,
                tender.tender_type,
                tender.tender_status,
                tender.contact_person,
                tender.contact_email,
            ),
        )
        conn.commit()
        tender_id = cursor.lastrowid
        conn.close()
        return {"message": "Tender added successfully", "id": tender_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
  
# get approved tenders
@app.get("/tenders/approved")
def get_approved_tenders():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        """
        SELECT * FROM tenders
        WHERE tender_status = 'Approved'
        ORDER BY published_date DESC
        """
    )
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

# add tenders to approved table
@app.post("/tenders/approved")
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
# get approved tenders
@app.get("/tenders/approved")
def get_approved_tenders():
    conn = sqlite3.connect("tenders.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tenders ORDER BY published_date DESC")
    rows = cursor.fetchall()
    conn.close()

    return [dict(row) for row in rows]