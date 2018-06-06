import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# List of all urls
urls = [
  "http://www.cms.caltech.edu/people",
  "https://cse.nd.edu/people/faculty",
  "https://csweb.rice.edu/faculty",
  "https://engineering.vanderbilt.edu/eecs/faculty-staff/index.php",
  "https://csci.williams.edu/people/faculty/",
  "http://cs.brown.edu/people/faculty/",
  "https://www.cs.cornell.edu/people/faculty",
  "https://cse.wustl.edu/faculty/Pages/default.aspx",
  "https://science.rpi.edu/computer-science/faculty",
  "https://www.ccis.northeastern.edu/role/research-faculty/",
  "https://www.cs.jhu.edu/faculty/",
  "https://www.wellesley.edu/cs/faculty",
  "http://www.cs.umd.edu/people/faculty",
  "http://www.bowdoin.edu/computer-science/people/"
]

# Get html per url
def get_html(url):
  try:
    res = requests.get(url, timeout=int(10000))
    html = BeautifulSoup(res.content, 'html.parser')
    return html
  except requests.exceptions.Timeout as err:
    print(err)

# Write urls to file
def write_to_file(url):
    with open(os.path.dirname(os.path.abspath(__file__)) + '/links.txt', 'a+') as output_file:
        output_file.write(url)

# Get nested urls
def get_urls():
    links = []
    for i in range(len(urls)):
        html_content = get_html(urls[i])
        hrefs = html_content.find_all('a', href=True)
        for href in hrefs:
            link = urljoin(urls[i], href['href'])
            links.append(link)
    return links

links = list(set(get_urls()))
write_to_file(', \n'.join(str(x) for x in links))

