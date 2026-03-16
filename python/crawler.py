import requests
from bs4 import BeautifulSoup
import sys
from urllib.parse import urljoin

url = sys.argv[1]

visited=set()

try:

    r = requests.get(url)

    soup = BeautifulSoup(r.text,"html.parser")

    for link in soup.find_all("a",href=True):

        full = urljoin(url,link["href"])

        if full not in visited and url in full:
            visited.add(full)
            print(full)

except:
    print("crawl error")
