import sqlite3
import csv


# create table
def create_table():
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
        contact_email TEXT
    )
    ''')

    # inssert data from csv file
    def inser