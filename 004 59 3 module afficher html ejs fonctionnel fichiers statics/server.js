const express = require("express");
const app = express();

app.set('views',  __dirname + "/views");
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get("/", (req, res) => {
    res.render('index', { title: 'Titre page 1', message: 'test contenu'});
});



app.listen(1337, () =>  {
    console.log("tout est ok");
});