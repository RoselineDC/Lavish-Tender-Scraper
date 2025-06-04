#!/bin/bash

echo "Starting Transnet Tenders Automation..."

# Step 1: Run Scrapy Spider
echo "Running Scrapy spider..."
scrapy runspider transnetTenders.py -o advert.csv

# Check if CSV was created
if [ ! -f advert.csv ]; then
    echo "Error: advert.csv not created. Exiting."
    exit 1
fi

# Step 2: Export tenders to Excel
echo "Exporting tenders to Excel..."
python pdate_tenders.py

# Step 3: Import tenders into SQLite DB
echo "Importing tenders to SQLite database..."
python import_tenders.py

echo "Automation complete!"
