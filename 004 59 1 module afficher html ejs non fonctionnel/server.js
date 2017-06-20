const express = require("express");
const app = express();

app.set('views', "./views");
app.set('view engine', 'ejs')


app.get("/", (req, res) => {
    res.render('index', { title: 'Titre page 1', message: 'test contenu'});
});

app.post('/', (req, res) => {
    res.send("Post reçu !");
});



app.listen(1337, () =>  {
    console.log("tout est ok");
});