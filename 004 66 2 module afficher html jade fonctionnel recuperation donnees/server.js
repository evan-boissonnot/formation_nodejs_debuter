const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.set('views',  __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false })); // pour les paramètre GET
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render('index', { title: 'Titre page 1', pageTitle: 'test contenu'});
});

app.get("/second-page", (req, res) => {
    res.render('secondpage', { title: 'Titre page 2', pageTitle: 'test contenu 2'});
});

app.post("/second-page", (req, res) => {
    res.render('secondpage', { title: 'Titre page 2 apres post', pageTitle: 'test contenu 2 apres post ' + req.body.nom});
});


app.listen(1337, () =>  {
    console.log("tout est ok");
});