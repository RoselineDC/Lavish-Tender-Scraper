import scrapy
import json

class ETendersGovSpider(scrapy.Spider):
    name = "etenders_gov_spider"
    allowed_domains = ["etenders.gov.za"]
    start_urls = [
        "https://www.etenders.gov.za/Home/PaginatedTenderOpportunities"
    ]

    def start_requests(self):
        headers = {
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest",
            "Referer": "https://www.etenders.gov.za/Home/opportunities?id=1",
        }

        # Adjust length to get more results per request (max seems to be 100)
        query = "?draw=1&start=0&length=100&status=1"

        yield scrapy.Request(
            url=self.start_urls[0] + query,
            method="GET",
            headers=headers,
            callback=self.parse,
            dont_filter=True
        )

    def parse(self, response):
        try:
            data = json.loads(response.text)
            tenders = data.get("data", [])
            self.logger.info(f"Fetched {len(tenders)} tenders.")

            for tender in tenders:
                support_docs = []
                if tender.get("supportDocument"):
                    for doc in tender["supportDocument"]:
                        support_docs.append({
                            "file_name": doc.get("fileName"),
                            "document_url": f"https://www.etenders.gov.za/File/ViewTenderFile?fileId={doc.get('supportDocumentID')}"
                        })

                yield {
                    "tender_id": tender.get("id"),
                    "tender_number": tender.get("tender_No"),
                    "description": tender.get("description"),
                    "eSubmission": tender.get("eSubmission"),
                    "category": tender.get("category"),
                    "type": tender.get("type"),
                    "organ_of_state": tender.get("organ_of_State"),
                    "status": tender.get("status"),
                    "closing_date": tender.get("closing_Date"),
                    "published_date": tender.get("date_Published"),
                    "contact_person": tender.get("contactPerson"),
                    "email": tender.get("email"),
                    "telephone": tender.get("telephone"),
                    "province": tender.get("province"),
                    "department": tender.get("department"),
                    "address": tender.get("delivery"),
                    "briefing_session": tender.get("briefingSession"),
                    "briefing_compulsory": tender.get("briefingCompulsory"),
                    "conditions": tender.get("conditions"),
                    "support_documents": support_docs
                }

        except Exception as e:
            self.logger.error(f"Error parsing response: {e}")
            self.logger.debug(response.text[:1000])
