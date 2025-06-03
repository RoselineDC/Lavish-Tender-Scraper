import pandas as pd
from datetime import datetime

def clean_and_sort_csv(file_path='advert.csv'):
    df = pd.read_csv(file_path)

    # convert date columns to datetime 
    for col in ["published Da"]