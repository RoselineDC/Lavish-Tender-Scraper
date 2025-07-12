import pandas as pd

def clean_and_sort_csv(file_path='tenders.csv'):
    df = pd.read_csv(file_path)
    df.columns = df.columns.str.strip()

    for col in ["Published Date", "Closing Date"]:
        if col in df.columns:
            df[col] = pd.to_datetime(df[col], errors='coerce')

    if "Tender Number" in df.columns:
        df = df.drop_duplicates(subset=["Tender Number"], keep='last')

    if "Published Date" in df.columns:
        df = df.sort_values(by="Published Date", ascending=False)

    df.to_csv(file_path, index=False)
    print("✅ CSV cleaned, deduplicated and sorted.")

    try:
        df.to_excel("advert.xlsx", index=False, header=True)  # ← .xlsx!
        print("✅ Also saved as advert.xlsx")
    except Exception as e:
        print(f"⚠️ Excel export failed: {e}")

if __name__ == "__main__":
    clean_and_sort_csv()