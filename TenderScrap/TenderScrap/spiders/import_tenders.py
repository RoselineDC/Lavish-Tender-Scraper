import sqlite3
import csv

def create_table(cursor):
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS tenders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tender_number TEXT UNIQUE,
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
        contact_email TEXT,
                   
                   
    )
    ''')

def insert_tender(cursor, row):
    cursor.execute('''
        INSERT OR IGNORE INTO tenders (
            tender_number, description, published_date, closing_date,
            briefing_date, location, tender_document_url, tender_category,
            tender_type, tender_status, contact_person, contact_email
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (
        row['Tender Number'], row['Description'], row['Published Date'], row['Closing Date'],
        row['Briefing Date'], row['Location'], row['Tender Document URL'], row['Tender Category'],
        row['Tender Type'], row['Tender Status'], row['Contact Person'], row['Contact Email']
    ))

def main():
    # Connect or create database file
    conn = sqlite3.connect('tenders.db')
    cursor = conn.cursor()

    # Create the tenders table
    create_table(cursor)

    # Open CSV file and read data
    with open('advert.csv', newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            insert_tender(cursor, row)

    # Commit changes and close connection
    conn.commit()
    conn.close()
    print("✅ Data imported successfully into tenders.db")

if __name__ == "__main__":
    main()