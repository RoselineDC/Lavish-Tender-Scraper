import pandas as pd
import sqlite3
import os

def parse_csv_to_db(csv_path='transnetTenders.csv', db_name='transnetTenders.db'):
    try:
        # Read the CSV into a DataFrame
        df = pd.read_csv(csv_path)

        # Normalize date columns dynamically
        for date_col in ["Published Date", "Closing Date", "Briefing Date"]:
            if date_col in df.columns:
                df[date_col] = pd.to_datetime(df[date_col], dayfirst=True, errors="coerce")
                df[date_col] = df[date_col].dt.strftime('%Y-%m-%d').fillna("")

        # Resolve absolute DB path
        db_path = os.path.abspath(db_name)
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        # Fix missing comma after tender_url in SQL table definition
        cursor.execute("""
           CREATE TABLE IF NOT EXISTS approved_tenders(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tender_number TEXT,
                description TEXT,
                published_date TEXT,
                closing_date TEXT,
                briefing_date TEXT,
                location TEXT,
                tender_url TEXT, 
                tender_document_url TEXT,
                tender_category TEXT,
                tender_type TEXT,
                tender_status TEXT,
                contact_person TEXT,
                contact_email TEXT,
                institution_name TEXT
           )
        """)

        # Insert rows into approved_tenders
        for _, row in df.iterrows():
            cursor.execute("""
                INSERT OR REPLACE INTO approved_tenders (
                    tender_number, description, published_date, closing_date, briefing_date,
                    location, tender_url, tender_document_url, tender_category, tender_type,
                    tender_status, contact_person, contact_email, institution_name
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                row.get("Tender Number", ""),
                row.get("Description", ""),
                row.get("Published Date", ""),
                row.get("Closing Date", ""),
                row.get("Briefing Date", ""),
                row.get("Location of Service", ""),
                row.get("Tender URL", ""),
                row.get("Attachment", ""),
                row.get("Tender Category", ""),
                row.get("Tender Type", ""),
                row.get("Tender Status", ""),
                row.get("Contact Person Name", ""),
                row.get("Contact Person Email Address", ""),
                row.get("Name of Institution", "")
            ))

        conn.commit()
        print(f"✅ Data inserted into {db_name}")

    except Exception as e:
        print(f"⚠️ Failed to parse and insert tenders: {e}")

    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conn' in locals():
            conn.close()
