import scrapy
import json

class TransnetTendersSpider(scrapy.Spider):
    name = "transnetTenders"
    allowed_domains = ["transnetetenders.azurewebsites.net"]
    start_urls = ["https://transnetetenders.azurewebsites.net/Home/GetAdvertisedTenders"]

    def start_requests(self):
        url = self.start_urls[0]

        # Customize if there are filters/pagination
        payload = {
            "page": 1,
            "pageSize": 10,
            "sort": "",
            "filter": ""
        }

        headers = {
            "Content-Type": "application/json",
            "Accept": "application/json, text/plain, */*",
            "Referer": "https://transnetetenders.azurewebsites.net/Home/AdvertisedTenders",
        }

        yield scrapy.Request(
            url=url,
            method="POST",
            body=json.dumps(payload),
            headers=headers,
            callback=self.parse
        )

    def parse(self, response):
        data = json.loads(response.text)

        # Print keys to know structure
        self.logger.info(f"JSON response keys: {list(data.keys())}")

        for tender in data.get("data", []):  # 'data' may need to be changed based on structure
            yield {
                "reference": tender.get("referenceNumber"),
                "title": tender.get("title"),
                "status": tender.get("status"),
                "closingDate": tender.get("closingDate"),
                "publishedDate": tender.get("publishedDate"),
                "description": tender.get("description"),
            }
