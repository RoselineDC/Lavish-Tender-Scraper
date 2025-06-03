import pandas as pd

def clean_and_sort_csv(file_path='advert.csv'):
    df = pd.read_csv(file_path)

    df.columns = df.columns.str.strip()  # Clean column names

    for col in ["Published Date", "Closing Date"]:
        if col in df.columns:
            df[col] = pd.to_datetime(df[col], errors='coerce')

    df = df.drop_duplicates(subset=["Tender Number"], keep='last')
    df = df.sort_values(by="Published Date", ascending=False)

    print("Columns before saving:", df.columns.tolist())  # Debug print

    df.to_csv(file_path, index=False)
    print("✅ CSV cleaned, deduplicated and sorted.")

    df.to_excel("advert.xlsx", index=False, header=True)
    print("✅ Saved as advert.xlsx")

if __name__ == "__main__":
    clean_and_sort_csv()
