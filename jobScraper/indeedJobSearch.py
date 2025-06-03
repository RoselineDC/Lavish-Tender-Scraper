
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

import pandas as pd
import time

# Setup
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# LinkedIn URL (Adjust role/location as needed)
url = 'https://www.linkedin.com/jobs/search?keywords=Marketing%20Data%20Analyst&location=Berlin%2C%20Berlin%2C%20Germany'
driver.get(url)

# Wait and get job count
job_count_text = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, 'results-context-header__job-count'))
).text
total_jobs = pd.to_numeric(job_count_text)

# Scroll to load more jobs
i = 2
while i <= int((total_jobs + 200) / 25) + 1:
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(2)

    try:
        load_more_btn = driver.find_element(By.XPATH, "//button[@aria-label='Load more results']")
        driver.execute_script("arguments[0].click();", load_more_btn)
        time.sleep(3)
    except:
        time.sleep(2)
    i += 1

# Extract job titles and company names
companyname = []
titlename = []

company_elements = driver.find_elements(By.CLASS_NAME, 'base-search-card__subtitle')
title_elements = driver.find_elements(By.CLASS_NAME, 'base-search-card__title')

for company in company_elements:
    companyname.append(company.text.strip())

for title in title_elements:
    titlename.append(title.text.strip())

# Save jobs to DataFrame
df = pd.DataFrame({
    "company": companyname,
    "title": titlename
})
df.to_csv("linkedin.csv", index=False)

# Extract job links
job_links = [elem.get_attribute('href') for elem in driver.find_elements(By.CLASS_NAME, 'base-card__full-link')]
pd.DataFrame(job_links, columns=["joblinks"]).to_csv("linkedinlinks.csv", index=False)

# Done
driver.quit()