from fastapi import FastAPI
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

@app.get("/tenders")
def get_tenders():
    conn = sqlite3.connect("tenders.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tenders ORDER BY published_date DESC")
    rows = cursor.fetchall()
    conn.close()

    return [dict(row) for row in rows]

# add tenders to approved table
