import scrapy


class TransnetscraperSpider(scrapy.Spider):
    name = "transnetscraper"
    allowed_domains = ["transnetetenders.azurewebsites.net"]


    def parse(self, response):
        pass
