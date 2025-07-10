import subprocess

from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000/"],  # Set your frontend URL here in production
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

# GET NEW TENDERS FROM TRANSNET
@app.post("/refresh-tenders")
def run_scraper(background_tasks: BackgroundTasks):
    def run_spider():
        # Dynamically get the directory of this file
        spider_dir = os.path.dirname(os.path.abspath(__file__))
        subprocess.run(["scrapy", "crawl", "transnet_tenders"], cwd=spider_dir)
    
    background_tasks.add_task(run_spider)
    return {"message": "Scraping started in background"}

# get all tenders
@app.get("/tenders")
def get_tenders():
    conn = sqlite3.connect("tenders.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tenders ORDER BY published_date ASC")
    rows = cursor.fetchall()
    conn.close()

    return [dict(row) for row in rows]

    # add tenders 

# add tenders to approved table
@app.patch("/tenders/{tender_id}/approve")
def approve_tender(tender_id: int):
    conn = sqlite3.connect("tenders.db")
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
    conn = sqlite3.connect("tenders.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tenders WHERE tender_status = 'Approved' ORDER BY published_date DESC")
    rows = cursor.fetchall()
    conn.close()

    return [dict(row) for row in rows]