import pandas as pd
import sqlite3
import os

def parse_csv_to_db(csv_path='transnetTenders.csv', db_name='transnetTenders.db'):
    try:
        # Read the CSV into a DataFrame
        df = pd.read_csv(csv_path)

        # Resolve absolute DB path
        db_path = os.path.abspath(db_name)
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        # Create table if it doesn't exist
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

        # Prepare the insert statement
        insert_query = """
            INSERT OR REPLACE INTO tenders (
                tender_number, description, published_date, closing_date, briefing_date,
                location, tender_document_url, tender_category, tender_type,
                tender_status, contact_person, contact_email
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """

        # Insert each row from the CSV
        for _, row in df.iterrows():
            cursor.execute(insert_query, (
            str(row.get("Tender Number", "")).strip(),
            str(row.get("Description", "")).strip(),
            pd.to_datetime(row.get("Published Date", ""), dayfirst=True).strftime('%Y-%m-%d') if pd.notna(row.get("Published Date", "")) else "",
            pd.to_datetime(row.get("Closing Date", ""), dayfirst=True).strftime('%Y-%m-%d') if pd.notna(row.get("Closing Date", "")) else "",
            str(row.get("Briefing Date", "")).strip(),
            str(row.get("Location", "")).strip(),
            str(row.get("Tender Document URL", "")).strip(),
            str(row.get("Tender Category", "")).strip(),
            str(row.get("Tender Type", "")).strip(),
            str(row.get("Tender Status", "Open")).strip(),
            str(row.get("Contact Person", "")).strip(),
            str(row.get("Contact Email", "")).strip()
        ))

        # Finalize
        conn.commit()
        print(f"✅ Data inserted into {db_name}")

    except Exception as e:
        print(f"⚠️ Failed to parse and insert tenders: {e}")

    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conn' in locals():
            conn.close()

if __name__ == "__main__":
    parse_csv_to_db()
