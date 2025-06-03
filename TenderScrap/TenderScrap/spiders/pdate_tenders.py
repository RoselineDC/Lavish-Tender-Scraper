import pandas as pd

def clean_and_sort_csv(file_path='advert.csv'):
    df = pd.read_csv(file_path)

    df.columns = df.columns.str.strip()  # Clean column names

    # for col in ["Published Date", "Closing Date"]:
    #     if col in df.columns:
    #         # You can specify format to avoid warnings
    #         df[col] = pd.to_datetime(df[col], format="%m/%d/%Y %I:%M:%S %p", errors='coerce')

    if "Tender Number" in df.columns:
        df = df.drop_duplicates(subset=["Tender Number"], keep='last')

    if "Published Date" in df.columns:
        df = df.sort_values(by="Published Date", ascending=False)

    # Save to CSV
    df.to_csv(file_path, index=False)
    print("✅ CSV cleaned, deduplicated and sorted.")

    # Save to XLS
    try:
        import xlwt  # for .xls format
        df.to_excel("advert.xlsx", index=False, header=True)
        print("✅ Also saved as advert.xls")
    except ImportError:
        print("⚠️ 'xlwt' not installed. Run: pip install xlwt")

if __name__ == "__main__":
    clean_and_sort_csv()