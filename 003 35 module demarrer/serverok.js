const http = require("http");
const port = 3000;
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text-plain");
    res.end("Prêt");
});

server.listen(port, host, () => {
    console.log(`Serveur ok http://${host}:${port}`);
});