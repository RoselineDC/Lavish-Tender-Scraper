import scrapy
import json


class TransnettendersSpider(scrapy.Spider):
    name = "transnetTenders"
    # allowed_domains = ["Advert"]
    start_urls = ["https://transnetetenders.azurewebsites.net/Home/AdvertisedTenders"]
    
    headers = {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "connection": "keep-alive",
    "content-length": "0",
    "content-type": "application/json; charset=utf-8",
    "cookie": "ARRAffinity=916b0c9bbabfe8217a4fe3e0b69b40c3672a7bf81a6c9e90e6916db91c03a9b4; ARRAffinitySameSite=916b0c9bbabfe8217a4fe3e0b69b40c3672a7bf81a6c9e90e6916db91c03a9b4; .AspNetCore.AzureADB2CCookie=CfDJ8CGn0dtydk9Fph5w8Agk5Xe4tLk6738SP4bGtAnww6TccabaKXYakMYjnZIe3FFJ_sQo3ut2UUC6THG16jY9z65GgBcB93CZau6euxPjTpg3vIX9XKNaX7pVRqqfhGr2lB-qMfv-E4CNR5bgfa2k2m0Ui5wZ1l3hQXYzMAL8JA0TnICBdL43UDtaNhlDBt-DUMdkor7F0cjIvt4NT2yT43x9IDHjkZraTHpCT6Vya-oMbrU41RlLJJWpj95wlCmtSUiEXYtdfd6v5B8LbdsTa7lKOgQaI8eAiYUteSpYm3bUKxNa02nucIci78uVXVhCjp61oyDtCNrYPRpBA1qBaPlI4Lsg_J_yzGwA49VLH6L2KON7tsNVIp8ECVsN1R2NzR58KWHPBfICDR97TEGgNThECwpo2N7ppEsVnQc9PEPe3qkDAWGaPVTzZoZv9HMXB88FKR2gE20glmaRDWAfXsLhSB0gAHawDnnVDBjxjGUF0ZPrur0fBrmqqD3cyynGHTkwtms302W90YgdqFyRYzxUMQn6OVkfmglz1GSe7dRlJXEUTBF96G_EEJvR0tH62ZM4oq5P4XDwVUahBb7IH06gKB7Vh4r2qUKp_cg-KZrANZ7MCkzhYVYDPswK5Lv2uJ9kdz2ZAcM3z3yaAGxSHpDQ6lqcAfdrIm3qTvVEkuxsHksTHA34eze7wQiFBxxJLXtaRLWrOe2ZNK3UbY6apDu7GjwuLt-wyZSbcyb7NPrQc7jf3FGSGcbJXZzmBF1ZOvEV8sHOmqgPDuH-_n1_itpHMEAVqvBsap8wFKrMpsljtQXMwFvK61ziqPe6XkLtTuunYTp3IrfN9jPvkbZ0dX_79HdOFuUhswIpUwPQAkkXBbElku3D_rnOiDbAUim5NZeaTWtbu2Tb50hCzRvkLi4vRDByzjDSeurOi3FAJrHOljUeZY_1qWwUDSGikVEh7ArF6uNVxZsnq5uVw6Io2b1Gohdog4X9s1Cn0hxwWjsg6maDYjgYM6BbFPCL3f6Q5oq2rD82Vc_YGfpW9nhCtsVdLLMfDz4v29K9YAy8nzNT-qPGTYOj42ogH4Xfbu3nWKtLggVYyjRFjA4yzW0gU-8XGfEEn5_7xr5agDTAbYedM4kj713DJHUwO61mdvzdhrWXObyo3V6hYGRW2JETz27WP478TEd0V_lT2FKnQGaPgW06P5yWsUyn04llfx_CiropaXOa5duJju9ydNTmVxkNz61u9FDyDzg0KmHghEtAaX1_Kk9uDJhbyd3NP652k7a_-paU8qlbhjIe8gzGbWlzwBjskzi4XE1_mPVGM0G2k5pKx62rg3HCNmoR7sHZgWhbhGia0JON5KXTUvsYwF7l7pWIqI0KRGP7IsOoP-QsRFEs0STlG5R7XRrGWbqOSIAuPjyIvSyvbMyZF_6kBj4PJ0gIlQwwVrc-APmQULw4-IO1nRtyK-0NzzB5FQ7icnBLxVGjVnSn3ZbdxclSKwcjwFFTIbLLUFVCz9pGwgow0ySSkWYCWDu4FRPo27UfwfVP5A5rL3_R9Fjk26ZkpAR3UN3XIBIokIjfjAAvolRIKsD5bUKgt1mLC5VcxQUfn44YgmqYuBniwaQDxXARlQ3Fztec_lZu4jkdev6DQCzJGBiOZqFrt--enzi3_wXzF1sjlx4783xuV3V47Uzz8I-3F1EPL_PVpD8siGSm_FGX_NPmxOvIcsiCq157zPKU1T7cKt6wI0xizm0bt4wKN--nGOND08JY0jlEIpqrbCoIbOFS-3kpZht2GV7DNRPJRXkkYJSNItYuGeYBuXIX9r3QXX0bOLMNP2jTUyruzUcDU-iFHsdVjOKCUCLwX1vYZuCCsCnhpR0CC7Y6kaWzSSEpGTN6ntpyoARCUgUhbKzGCuwnOl72X31Xat3moKR8dtpRD5Ttnstd3NEO7j9a-DV028Fg-UyUTjoiAZxt7cULhw5yXQKOl-fmCY0CAXSOuYG7a8gkHtZ0NLVBwK9cVC4wGfZ_Bf4KBaWOQSUDcXg7f_xeGyw1XSfmMocrAV2inXA6DKWxROOLOhM6NxGl1y0jHQc1JY0TMYWGRjBIoIG5n8dWigAs18qpIOsyjRuTCXBb8-tKLPJdxl40RNrsKF0qm-ocXXImaDNrwyZA2OtQ8CBHcJ2qe3DN7pjAtlEGlpON6FJZnUqNtOFEC1TqW4K5Hvy281Md4fUoPcvQJbEJMIrJCG7BijQ9--5jDm1_UqwfRb4WUpI29L3PwtPp97EEUT9IYBMVHhvZfT1AlW77jlNZAs7c4K-VlJKRYSInsLZ-vkOW3s9kmKKMmC4xScmGgJTbnR-M6BK8vexkQUtWPHRgHngXhTV-tIYQb2CN0aOcZhegVLPD1Ew32pWNnxzAvCdHDTYjOaDlm5L78Vdypf2iIj9iSQXCL_VFmmbAu7dJPF5B10Y7Rbk7PohUv26Ffa85eqo-srHEBNrEokUW_f_q317HmpvSyA0fZudZ69gYmyQHnFchpRGaGCUNapSERch66pA1RAzZl4LUUA1ua-y3bYXQccm3Mu8ZYdHYCkwZfDd5qRn5Savwzs61HU6nrqkeJs22mbOgBUoseCUYj0aVeXW9KdUMo2vT1j-O00Uz3xll6yNroD7Elk6-I57DGh10xLE09CtZkxTDpl2HCW-WKdz7nVkjA9L6vg-6a9fTKSM7hyoiy2bgvA36KPUku4bwAaf2zJUSp-qq0ruYKHwetAzkxcOWRDx3ImzoZxC2dHxFaxHwFO8RHqEtjj6053VtuOQW6DOkQDUsI0yC35ghnK7Izg2LRlu_4ZOaritE0BDQUklt4Ozanhij2OfmmDGeRPqYSKB50hNzplwOrTqXvNuZyZ0Lps4GzXPTx7yeBvY0UUsHgkP6yXKKeAWsEbq2FVverZF7EatX1jITTw8D-6Gtul194blwFns3vIKFjzD6t5cNTwys6hsCHeqc6vSrZ7Gq5v8hr-mU88JoHKrTEN7Znz9JCP75JifpM83nxLO8LjayrWfl59jgxBxCExJkid5KwgZTIC-0h8xa",
    "host": "transnetetenders.azurewebsites.net",
    "origin": "https://transnetetenders.azurewebsites.net",
    "pragma": "no-cache",
    "referer": "https://transnetetenders.azurewebsites.net/Home/AdvertisedTenders",
    "sec-ch-ua": '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}


    def parse(self, response):
        url = ['https://transnetetenders.azurewebsites.net/Home/GetAdvertisedTenders']
        
        # create a new request
        request = scrapy.Request(url,
                                  callback=self.parse_api,
                                    headers=self.headers)

        # yield the request
        yield request

    def parse_api(self, response):
        base_url = 'https://transnetetenders.azurewebsites.net/Home/TenderDetails?Id='
        raw_data = response.body
        data = json.loads(raw_data)
        #  get data  in loop
        for tender in data:
            tender_code = data['rowKey']
            tender_url = base_url+tender_code
            request = scrapy.Request(tender_url,
                                      callback=self.parse_tender,
                                      headers=self.headers
                                      )
            
            yield request
    
    def parse_school(self, response):
        raw_data = response.body
        data = data.loads(raw_data)
        yield {
            'Name': data['nameOfTender'],
            'Description': data['descriptionOfTender'],
            'Tender Number': data['tenderNumber'],
            'Briefing Date': data['briefingDate'],
            'Briefing Details': data['briefingDetails'],
            'Closing Date': data['closingDate'],
            'Contact Email': data['contactPersonEmailAddress'],
            'Contact Person': data['contactPersonName'],
            'Published Date': data['publishedDate'],
            'Attachment URL': data['attachment'],
            'Tender Type': data['tenderType'],
            'Location of Service': data['locationOfService'],
            'Institution': data['nameOfInstitution'],
            'Category': data['tenderCategory'],
            'Status': data['tenderStatus'],
            'Row Key': data['rowKey'],
            'Access Type': data['tenderAccessType'],
            'Selected Suppliers': data['selectedSuppliers']
    }

    

