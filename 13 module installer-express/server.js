const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<html><head></head><body><form action='/' method='post'><input type='submit' value='Envoyer' /></form></body></html>");
});

app.post('/', (req, res) => {
    res.send("Post reçu !");
});

app.listen(1337, () =>  {
    console.log("tout est ok");
});