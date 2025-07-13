import os
import subprocess
import pandas as pd
import sqlite3
from fastapi.responses import JSONResponse
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Enable CORS for your frontend origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_NAME = "transnetTenders.db"
CSV_PATH = "transnetTenders.csv"
def ensure_tables_exist():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()

    # Ensure tenders table exists
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS tenders (
            tender_number TEXT PRIMARY KEY,
            description TEXT,
            published_date TEXT,
            closing_date TEXT,
            briefing_date TEXT,
            location TEXT,
            tender_document_url TEXT,
            tender_category TEXT,
            tender_type TEXT,
            tender_status TEXT,
            contact_person TEXT,
            contact_email TEXT
        )
    """)

    # Ensure approved_tenders table exists
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS approved_tenders (
            tender_number TEXT PRIMARY KEY,
            description TEXT,
            published_date TEXT,
            closing_date TEXT,
            briefing_date TEXT,
            location TEXT,
            tender_document_url TEXT,
            tender_category TEXT,
            tender_type TEXT,
            contact_person TEXT,
            contact_email TEXT
        )
    """)

    conn.commit()
    conn.close()

# Run this at startup
ensure_tables_exist()

def parse_csv_to_db(csv_path=CSV_PATH, db_name=DB_NAME):
    try:
        df = pd.read_csv(csv_path)

        conn = sqlite3.connect(db_name)
        cursor = conn.cursor()

        # Create table if not exists
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS tenders (
                tender_number TEXT PRIMARY KEY,
                description TEXT,
                published_date TEXT,
                closing_date TEXT,
                briefing_date TEXT,
                location TEXT,
                tender_document_url TEXT,
                tender_category TEXT,
                tender_type TEXT,
                tender_status TEXT,
                contact_person TEXT,
                contact_email TEXT
            )
        """)

        # Normalize date columns
        for date_col in ["Published Date", "Closing Date", "Briefing Date"]:
            if date_col in df.columns:
                df[date_col] = pd.to_datetime(df[date_col], dayfirst=True, errors='coerce').dt.strftime('%Y-%m-%d')

        insert_query = """
            INSERT OR REPLACE INTO tenders (
                tender_number, description, published_date, closing_date, briefing_date,
                location, tender_document_url, tender_category, tender_type,
                tender_status, contact_person, contact_email
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """

        for _, row in df.iterrows():
            cursor.execute(insert_query, (
                str(row.get("Tender Number", "")).strip(),
                str(row.get("Description", "")).strip(),
                str(row.get("Published Date", "")).strip(),
                str(row.get("Closing Date", "")).strip(),
                str(row.get("Briefing Date", "")).strip(),
                str(row.get("Location", "")).strip(),
                str(row.get("Tender Document URL", "")).strip(),
                str(row.get("Tender Category", "")).strip(),
                str(row.get("Tender Type", "")).strip(),
                str(row.get("Tender Status", "Open")).strip(),
                str(row.get("Contact Person", "")).strip(),
                str(row.get("Contact Email", "")).strip()
            ))

        conn.commit()
        cursor.close()
        conn.close()
        print(f"✅ Data inserted into {db_name}")

    except Exception as e:
        print(f"⚠️ Failed to parse and insert tenders: {e}")
        raise e

# Tender model for validation (optional, for future POST endpoints)
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

@app.post("/refresh-tenders")
def refresh_tenders():
    # Run scrapy spider
    result = subprocess.run(["scrapy", "crawl", "transnet_tenders"])
    if result.returncode != 0:
        return JSONResponse(status_code=500, content={"error": "Scraper failed"})

    # Parse CSV output into SQLite DB
    try:
        parse_csv_to_db()
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": f"Failed to parse CSV: {str(e)}"})

    # Return tenders from DB
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tenders ORDER BY published_date DESC")
    rows = cursor.fetchall()
    column_names = [desc[0] for desc in cursor.description]
    cursor.close()
    conn.close()

    tenders = [dict(zip(column_names, row)) for row in rows]

    return {"status": "done", "count": len(tenders), "tenders": tenders}

@app.get("/tenders")
def get_tenders():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tenders ORDER BY published_date DESC")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    return [dict(row) for row in rows]

@app.patch("/tenders/{tender_number:path}/approve")
def approve_tender(tender_number: str):
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    # Fetch tender to move
    cursor.execute("SELECT * FROM tenders WHERE tender_number = ?", (tender_number,))
    tender = cursor.fetchone()

    if not tender:
        conn.close()
        raise HTTPException(status_code=404, detail="Tender not found")
    tender_dict = dict(tender)

    # Insert into approved_tenders
    insert_query = """
        INSERT INTO approved_tenders (
            tender_number, description, published_date, closing_date, briefing_date,
            location, tender_document_url, tender_category, tender_type,
            contact_person, contact_email
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """
    
    cursor.execute(insert_query, tender)  # skip `id` field

    # Delete from general tenders
    cursor.execute("DELETE FROM tenders WHERE tender_number = ?", (tender_number,))

    conn.commit()
    conn.close()

    return {"message": f"Tender {tender_number} approved and moved successfully"}


@app.get("/tenders/approved")
def get_approved_tenders():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tenders WHERE tender_status = 'Approved' ORDER BY published_date DESC")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    return [dict(row) for row in rows]
