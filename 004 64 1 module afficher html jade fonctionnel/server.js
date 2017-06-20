const express = require("express");
const app = express();

app.set('views', "./views");
app.set('view engine', 'jade')


app.get("/", (req, res) => {
    res.render('index', { title: 'Titre page 1', pageTitle: 'test contenu'});
});

app.get("/second-page", (req, res) => {
    res.render('secondpage', { title: 'Titre page 2', pageTitle: 'test contenu 2'});
});

app.post("/second-page", (req, res) => {
    res.render('secondpage', { title: 'Titre page 2 apres post', pageTitle: 'test contenu 2 apres post'});
});




app.listen(1337, () =>  {
    console.log("tout est ok");
});