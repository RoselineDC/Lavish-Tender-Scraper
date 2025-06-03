#!/bin/bash

cd /projects/Lavish-Tender-Scraper/TenderScrap/TenderScrap/spiders
scrapy runspider transnetTenders.py -o advert.csv
python pdate_t