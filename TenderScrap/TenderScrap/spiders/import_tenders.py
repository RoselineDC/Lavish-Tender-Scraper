import sqlite3

def parse(self, response):        
    try:
        data = json.loads(response.text)
        tenders = data.get("result", [])

        conn = sqlite3.connect("tenders.db")
        cursor = conn.cursor()

        for tender in tenders:
            cursor.execute("""
                INSERT OR REPLACE INTO tenders (
                    tender_number, description, published_date, closing_date, briefing_date,
                    location, tender_document_url, tender_category, tender_type,
                    tender_status, contact_person, contact_email
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                tender.get("tenderNumber", ""),
                tender.get("descriptionOfTender", ""),
                tender.get("publishedDate"),
                tender.get("closingDate"),
                tender.get("briefingDate", ""),
                tender.get("locationOfService", ""),
                tender.get("attachment", ""),
                tender.get("tenderCategory", ""),
                tender.get("tenderType", ""),
                tender.get("tenderStatus", "Open"),
                tender.get("contactPersonName", ""),
                tender.get("contactPersonEmailAddress", "")
            ))

        conn.commit()
        conn.close()

    except Exception as e:
        self.logger.error(f"Failed to parse JSON: {e}")
