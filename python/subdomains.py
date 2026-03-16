import requests
import sys

domain=sys.argv[1]

subs=["www","mail","dev","api","test","admin","beta"]

for sub in subs:

url=f"http://{sub}.{domain}"

try:
requests.get(url,timeout=2)
print(url)

except:
pass
