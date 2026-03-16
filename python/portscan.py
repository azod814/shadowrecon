import nmap
import sys

target = sys.argv[1]

nm = nmap.PortScanner()

nm.scan(target, '1-100')

for host in nm.all_hosts():
    for proto in nm[host].all_protocols():
        ports = nm[host][proto].keys()
        for port in ports:
            print(port)
