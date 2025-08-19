import requests
from bs4 import BeautifulSoup

URL = "https://www.csir.co.za/tender"
page = requests.get(URL)

# parse the page content
soup = BeautifulSoup(page.content, "html.parser")



# print result into a file
print(page.text)
