import pandas as pd

def clean_and_export():
    file_path = "advert.csv"
    
    # Read CSV
    df = pd.read_csv(file_path)
    
    # Convert date columns to datetime, errors coerced to NaT if parsing fails
    date_cols = ["Published Date", "Closing Date", "Briefing Date"]
    for col in date_cols:
        df[col] = pd.to_datetime(df[col], errors='coerce')
    
    # Remove duplicates based on 'Tender Number', keep the last occurrence
    df = df.drop_duplicates(subset=["Tender Number"], keep='last')
    
    # Sort by Published Date descending so newest tenders come first
    df = df.sort_values(by="Published Date", ascending=False)
    
    # Save cleaned CSV
    df.to_csv(file_path, index=False)
    
    # Save Excel file with headers
    df.to_excel("advert.xlsx", index=False)
    
    print("✅ CSV cleaned, deduplicated, sorted and exported to Excel successfully.")

if __name__ == "__main__":
    clean_and_export()
