const express = require("express");
const app = express();

app.set('views', __dirname + "/views");
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.render('index', { title: 'Titre page 1', message: 'test contenu'});
});

app.post('/', (req, res) => {
    res.send("Post reçu !");
});



app.listen(1337, () =>  {
    console.log("tout est ok");
});