import socket
import sys

domain = sys.argv[1]

try:
    ip = socket.gethostbyname(domain)
    print(ip)
except:
    print("IP not found")
