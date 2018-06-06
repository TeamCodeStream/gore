# gore
### Scrape Emails: [Group 3](https://docs.google.com/document/d/1V0v2nODcBbh-QWyBNPrbgS4CbmqD45O2VNChNMrwyQE/edit?usp=sharing)

Create a virtualenv:

`$ mkvirtualenv group3`

Install requirements:

`$ pip install -r requirements.txt`

Run python script to generate all urls in `links.txt`:

`$ python group3.py`

Scrape emails using `emails.pl` script:

`$ perl emails.pl < links.txt`
