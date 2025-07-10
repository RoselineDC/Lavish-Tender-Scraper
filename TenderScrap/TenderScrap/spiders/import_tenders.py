import json
import sqlite3
import os

def parse(self, response):
    try:
        # Load the JSON response
        data = json.loads(response.text)
        tenders = data.get("result", [])

        # Resolve absolute DB path
        db_path = os.path.abspath("tenders.db")
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        # Prepare the insert statement
        insert_query = """
            INSERT OR REPLACE INTO tenders (
                tender_number, description, published_date, closing_date, briefing_date,
                location, tender_document_url, tender_category, tender_type,
                tender_status, contact_person, contact_email
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """

        # Insert each tender entry
        for tender in tenders:
            cursor.execute(insert_query, (
                tender.get("tenderNumber", "").strip(),
                tender.get("descriptionOfTender", "").strip(),
                tender.get("publishedDate", "").strip(),
                tender.get("closingDate", "").strip(),
                tender.get("briefingDate", "").strip(),
                tender.get("locationOfService", "").strip(),
                tender.get("attachment", "").strip(),
                tender.get("tenderCategory", "").strip(),
                tender.get("tenderType", "").strip(),
                tender.get("tenderStatus", "Open").strip(),
                tender.get("contactPersonName", "").strip(),
                tender.get("contactPersonEmailAddress", "").strip()
            ))

        # Finalize
        conn.commit()

    except Exception as e:
        self.logger.error(f"Failed to parse and insert tenders: {e}")
    
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()
