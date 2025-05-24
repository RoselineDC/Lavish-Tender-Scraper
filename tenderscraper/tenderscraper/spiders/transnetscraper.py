import scrapy


class TransnetscraperSpider(scrapy.Spider):
    name = "transnetscraper"
    allowed_domains = ["transnetetenders.azurewebsites.net"]
    start_urls = ["https://transnetetenders.azurewebsites.net/Home/AdvertisedTenders"]

    def parse(self, response):
        pass
