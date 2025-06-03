import sqlite3
import csv


# create table
def create_table():
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS tenders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tender_number TEXT,
        title TEXT,
        published_date TEXT,
        closing_date TEXT,
        description TEXT
    )
    ''')