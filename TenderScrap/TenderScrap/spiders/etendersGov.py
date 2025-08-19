import scrapy
import json


class ETendersGovSpider(scrapy.Spider):
    name = "etenders_gov_spider"
    allowed_domains = ["etenders.gov.za"]
    start_urls = [
        "https://www.etenders.gov.za/Home/PaginatedTenderOpportunities"
    ]

    # ✅ Force consistent CSV column order
    custom_settings = {
        "FEED_EXPORT_FIELDS": [
            "tender_id",
            "tender_number",
            "description",
            "eSubmission",
            "category",
            "type",
            "organ_of_state",
            "status",
            "closing_date",
            "published_date",
            "contact_person",
            "email",
            "telephone",
            "province",
            "department",
            "address",
            "briefing_session",
            "briefing_compulsory",
            "conditions",
            "support_documents"
        ]
    }

    def start_requests(self):
        self.headers = {
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                          "AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/138.0.0.0 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest",
            "Referer": "https://www.etenders.gov.za/Home/opportunities?id=1",
        }

        # Start pagination at 0
        yield from self.fetch_page(start=0)

    def fetch_page(self, start):
        """Generate a request for a specific page."""
        query = f"?draw=1&start={start}&length=100&status=1"
        yield scrapy.Request(
            url=self.start_urls[0] + query,
            method="GET",
            headers=self.headers,
            callback=self.parse,
            cb_kwargs={"start": start},  # pass start value for pagination
            dont_filter=True
        )

    def parse(self, response, start):
        try:
            # ✅ Check JSON validity before parsing
            if "application/json" not in response.headers.get("Content-Type", b"").decode():
                self.logger.error("Response is not JSON. Possible site change or session issue.")
                self.logger.debug(response.text[:1000])
                return

            data = json.loads(response.text)
            tenders = data.get("data", [])
            total_records = data.get("recordsTotal", 0)

            self.logger.info(f"Fetched {len(tenders)} tenders from start={start} (Total: {total_records}).")

            for tender in tenders:
                yield self.parse_tender(tender)

            # ✅ Continue pagination until all tenders are fetched
            if start + len(tenders) < total_records:
                next_start = start + len(tenders)
                yield from self.fetch_page(start=next_start)

        except Exception as e:
            self.logger.error(f"Error parsing response: {e}")
            self.logger.debug(response.text[:1000])

    def parse_tender(self, tender):
        """Transform a tender JSON object into our structured dictionary."""
        support_docs = []
        if tender.get("supportDocument"):
            for doc in tender["supportDocument"]:
                support_docs.append({
                    "file_name": doc.get("fileName"),
                    "document_url": f"https://www.etenders.gov.za/File/ViewTenderFile?fileId={doc.get('supportDocumentID')}"
                })

        return {
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
