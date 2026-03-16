const { exec } = require("child_process");

function scan() {

let target = document.getElementById("target").value;

document.getElementById("webview").src = "http://" + target;


// DNS lookup

exec(`python3 python/dnslookup.py ${target}`, (err, stdout) => {
document.getElementById("ip").innerText = stdout;
});


// Port scan

exec(`python3 python/portscan.py ${target}`, (err, stdout) => {
document.getElementById("ports").innerText = stdout;
});


// Page crawler

exec(`python3 python/crawler.py http://${target}`, (err, stdout) => {
document.getElementById("pages").innerText = stdout;
});

}
