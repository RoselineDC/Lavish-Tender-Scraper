import scrapy
import json

class TransnetTendersSpider(scrapy.Spider):
    name = "transnet_tenders"
    allowed_domains = ["transnetetenders.azurewebsites.net"]
    start_urls = ["https://transnetetenders.azurewebsites.net/Home/GetAdvertisedTenders"]

    def start_requests(self):
        headers = {
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Origin": "https://transnetetenders.azurewebsites.net",
            "Referer": "https://transnetetenders.azurewebsites.net/Home/AdvertisedTenders",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
        }

        yield scrapy.Request(
            url=self.start_urls[0],
            method="POST",
            headers=headers,
            body="",  # No data payload required
            callback=self.parse,
        )

   def parse(self, response):
    try:
        data = json.loads(response.text)
        self.logger.info(f"JSON keys: {list(data.keys())}")  # Log top-level keys

        tenders = data.get("tenders") or data.get("records") or data.get("data")  # Try common keys

        if tenders is None:
            self.logger.error("Could not find list of tenders in JSON data")
            self.logger.debug(response.text)
            return

        for tender in tenders:
            yield {
                "Tender Number": tender.get("tenderNumber"),
                "Description": tender.get("tenderDescription"),
                "Closing Date": tender.get("closingDate"),
                "Location": tender.get("location"),
                "Published Date": tender.get("publishedDate"),
                "CIDB Grade": tender.get("cidbGrade"),
            }

    except Exception as e:
        self.logger.error(f"Failed to parse JSON: {e}")
        self.logger.debug(response.text)

