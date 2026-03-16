const { exec } = require("child_process")

function log(msg){
let logs=document.getElementById("logs")
logs.innerHTML+="<br>"+msg
logs.scrollTop=logs.scrollHeight
}

function searchTarget(){

let target=document.getElementById("target").value

document.getElementById("browser").src="http://"+target

log("[+] Target loaded")

exec(`python3 python/dnslookup.py ${target}`,(e,o)=>{
document.getElementById("ip").innerText=o
log("[+] IP detected")
})

exec(`python3 python/portscan.py ${target}`,(e,o)=>{
document.getElementById("ports").innerText=o
log("[+] Ports scanned")
})

exec(`python3 python/subdomains.py ${target}`,(e,o)=>{
document.getElementById("subdomains").innerText=o
log("[+] Subdomains found")
})

exec(`python3 python/crawler.py http://${target}`,(e,o)=>{
document.getElementById("pages").innerText=o
log("[+] Pages discovered")
})

exec(`python3 python/dirscan.py ${target}`,(e,o)=>{
document.getElementById("dirs").innerText=o
log("[+] Hidden directories found")
})

exec(`python3 python/techdetect.py ${target}`,(e,o)=>{
document.getElementById("tech").innerText=o
log("[+] Technology detected")
})

}


const ctx=document.getElementById("trafficChart")

const chart=new Chart(ctx,{
type:"line",
data:{
labels:[],
datasets:[{
label:"Traffic",
data:[],
borderColor:"#00ff9c"
}]
}
})

setInterval(()=>{

let time=new Date().toLocaleTimeString()

chart.data.labels.push(time)
chart.data.datasets[0].data.push(Math.random()*100)

if(chart.data.labels.length>15){
chart.data.labels.shift()
chart.data.datasets[0].data.shift()
}

chart.update()

},2000)
