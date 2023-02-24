const http = require("http");
const PORT = 3001
const html = require("fs").readFileSync("./index.html");


const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(html);
    res.end();
})

server.listen(PORT, () => {
    console.log("接続完了");
})