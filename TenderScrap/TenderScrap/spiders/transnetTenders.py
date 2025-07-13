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
            tenders = data.get("result", [])
            for tender in tenders:
                row_key = tender.get("rowKey")
                tender_url = f"https://transnetetenders.azurewebsites.net/Home/TenderDetails?Id={row_key}"
                yield {
                    "tender_number": tender.get("tenderNumber", ""),
                    "description": tender.get("descriptionOfTender", ""),
                    "published_date": tender.get("publishedDate"),
                    "closing_date": tender.get("closingDate"),
                    "briefing_date": tender.get("briefingDate", ""),
                    "location": tender.get("locationOfService", ""),
                    
                    "Ttender_document_url": tender.get("attachment", ""),
                    "tender_category": tender.get("tenderCategory", ""),
                    "tender_type": tender.get("tenderType", ""),
                    "tender_status": tender.get("tenderStatus", ""),
                    "contact_person": tender.get("contactPersonName", ""),
                    "contact_email": tender.get("contactPersonEmailAddress", ""),
                    "institution_name": tender.get("nameOfInstitution"),
                }
        except Exception as e:
            self.logger.error(f"Failed to parse JSON: {e}")
            self.logger.debug(response.text)
