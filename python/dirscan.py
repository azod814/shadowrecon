import requests
import sys

domain=sys.argv[1]

dirs=["admin","login","dashboard","panel","backup","config"]

for d in dirs:

url=f"http://{domain}/{d}"

try:

r=requests.get(url,timeout=2)

if r.status_code==200:
print(url)

except:
pass
