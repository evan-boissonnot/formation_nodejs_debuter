const http = require('http');
const port = 3000;
const host = '127.0.0.0';

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text-plain');
	res.statusCode = 200;
	res.end("Pr�t");
});

server.listen(port, host, () => {
	console.log(`D�marrage serveur ok, sur http://${host}:${port}`);
});

server.on("error", (err) => {
	console.log(`Erreur ${err}`);
});