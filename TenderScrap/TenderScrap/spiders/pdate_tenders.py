import pandas as pd
from datetime import datetime

def clean_and_sort_csv(file_path='advert.csv'):
    df = pd.read_csv(file_path)

    # convert date columns to datetime 
    for col in ["published Date", "Closing Date"]:
        df[col] = pd.to_datetime(df[col], errors='coerce')

    # drop rows with NaT in 'published Date' or 'Closing Date'
    df = df.drop_duplicates(subset=["Tender Number"], keep='last')

    #sort by published date decending
    df = df.sort_values(by="published Date", ascending=False)

    # save cleaned and sorted DataFrame to a new CSV file
    df.to_csv("CSV cleaned, dedup") 