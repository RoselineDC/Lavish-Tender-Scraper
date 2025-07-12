import os
import subprocess
from fastapi.responses import JSONResponse
from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Set your frontend URL here in production
    allow_credentials=True,
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

# GET NEW TENDERS FROM TRANSNET@app.post("/refresh-tenders")
@app.post("/refresh-tenders")
def refresh_tenders():
    # 1. Run Scrapy spider
    spider_dir = os.path.dirname(os.path.abspath(__file__))
    result = subprocess.run(
        ["scrapy", "crawl", "transnet_tenders"], cwd=spider_dir
    )
    
    if result.returncode != 0:
        return JSONResponse(status_code=500, content={"error": "Scraper failed"})

    # 2. Load tenders from DB
    conn = sqlite3.connect("transnetTenders.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tenders ORDER BY published_date DESC")
    rows = cursor.fetchall()

    # Optional: Fetch column names
    column_names = [desc[0] for desc in cursor.description]
    conn.close()

    # 3. Convert to list of dicts
    tenders = [dict(zip(column_names, row)) for row in rows]

    # 4. Return scraped tenders
    return {"status": "done", "count": len(tenders), "tenders": tenders}

# get all tenders
@app.get("/tenders")
def get_tenders():
    conn = sqlite3.connect("transnetTenders.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tenders ORDER BY published_date DESC")
    rows = cursor.fetchall()
    conn.close()

    return [dict(row) for row in rows]

    # add tenders 

# add tenders to approved table
@app.patch("/tenders/{tender_id}/approve")
def approve_tender(tender_id: int):
    conn = sqlite3.connect("TransnetTenders.db")
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM tenders WHERE id = ?", (tender_id,))
    tender = cursor.fetchone()
    if not tender:
        conn.close()
        raise HTTPException(status_code=404, detail="Tender not found")

    cursor.execute("UPDATE tenders SET tender_status = 'Approved' WHERE id = ?", (tender_id,))
    conn.commit()
    cursor.close()
    conn.close()

    return {"message": f"Tender with id {tender_id} approved successfully"}

# add tenders to database
@app.get("/tenders/approved")
def get_approved_tenders():
    conn = sqlite3.connect("transnetTenders.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tenders WHERE tender_status = 'Approved' ORDER BY published_date DESC")
    rows = cursor.fetchall()
    conn.close()

    return [dict(row) for row in rows]