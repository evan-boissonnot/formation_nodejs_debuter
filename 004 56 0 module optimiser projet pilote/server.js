const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Réussi");
});

app.listen(port, () => {
    console.log("Tout est ok");
});