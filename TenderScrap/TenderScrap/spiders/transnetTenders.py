import scrapy
import json

class TransnetTendersSpider(scrapy.Spider):
    name = "transnet_get_spider"
    allowed_domains = ["transnetetenders.azurewebsites.net"]
    start_urls = [
        "https://transnetetenders.azurewebsites.net/Home/GetAdvertisedTenders"
    ]

    def start_requests(self):
        headers = {
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest",
            "Referer": "https://transnetetenders.azurewebsites.net/Home/AdvertisedTenders",
        }

        yield scrapy.Request(
            url=self.start_urls[0],
            method="GET",
            headers=headers,
            callback=self.parse,
            dont_filter=True
        )

    def parse(self, response):
        try:
            data = json.loads(response.text)
            tenders = data.get("result", [])
            self.logger.info(f"Fetched {len(tenders)} tenders.")

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
                    "tender_url": tender_url,
                    "tender_document_url": tender.get("attachment", ""),
                    "tender_category": tender.get("tenderCategory", ""),
                    "tender_type": tender.get("tenderType", ""),
                    "tender_status": tender.get("tenderStatus", ""),
                    "contact_person": tender.get("contactPersonName", ""),
                    "contact_email": tender.get("contactPersonEmailAddress", ""),
                    "institution_name": tender.get("nameOfInstitution"),
                    "rowKey": row_key
                }

        except Exception as e:
            self.logger.error(f"JSON parsing failed: {e}")
            self.logger.debug(response.text[:1000])
