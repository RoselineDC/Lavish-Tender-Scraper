import pandas as pd
import sqlite3
import os

def parse_csv_to_db(csv_path='transnet_enders.csv', db_name='transnet_Tenders.db'):
    try:
        # Read the CSV into a DataFrame
        df = pd.read_csv(csv_path, on_bad_lines='skip')
        print(df.shape)
        print(df.head())
          

        # Normalize date columns dynamically
         # Normalize date columns
        for date_col in ["published_date", "closing_date", "briefing_date"]:
            df[date_col] = pd.to_datetime(df[date_col], errors='coerce').dt.strftime('%Y-%m-%d')
            print(df[["published_date", "closing_date", "briefing_date"]])


        db_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "transnet_Tenders.db"))

        print(f"🛢️ Using database at: {db_path}")


        with sqlite3.connect(db_path, timeout=10) as conn:
            cursor = conn.cursor()

            # Create table if it doesn't exist
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS transnet_Tenders (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    tender_number TEXT UNIQUE,
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

            # Prepare records
            records = [
                (
                    row.get("tender_number", ""),
                    row.get("description", ""),
                    row.get("published_date", ""),
                    row.get("closing_date", ""),
                    row.get("briefing_date", ""),
                    row.get("location", ""),
                    row.get("tender_url", ""),
                    row.get("tender_document_url", ""),
                    row.get("tender_category", ""),
                    row.get("tender_type", ""),
                    row.get("tender_status", ""),
                    row.get("contact_person", ""),
                    row.get("contact_email", ""),
                    row.get("institution_name", "")
                )
                for _, row in df.iterrows()
            ]

            # Insert records
            before = cursor.execute("SELECT COUNT(*) FROM transnet_Tenders").fetchone()[0]

            cursor.executemany("""
                INSERT OR REPLACE INTO transnet_Tenders (
                    tender_number, description, published_date, closing_date, briefing_date,
                    location, tender_url, tender_document_url, tender_category, tender_type,
                    tender_status, contact_person, contact_email, institution_name
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, records)
            after = cursor.execute("SELECT COUNT(*) FROM transnet_Tenders").fetchone()[0]
            print(f"✅ Inserted {after - before} new rows. Skipped {len(records) - (after - before)} duplicates.")

            # Verification logs
            cursor.execute("SELECT COUNT(*) FROM transnet_Tenders")
            count = cursor.fetchone()[0]
            print(f"✅ Rows in table after insert: {count}")

            cursor.execute("PRAGMA table_info(transnet_Tenders)")
            schema = cursor.fetchall()
            print("🧾 Table schema:", schema)

            print(f"✅ Data inserted into {db_name,}")

    except Exception as e:
        print(f"⚠️ Failed to parse and insert tenders: {e}")

    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conn' in locals():
            conn.close()


if __name__ == "__main__":
    parse_csv_to_db()
    print("✅ Database operation completed.")
