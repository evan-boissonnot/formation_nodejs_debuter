const express = require("express");
const app = express();

app.set('views', "./views");
app.set('view engine', 'pug');


 app.get("/", (req, res) => {
	 let eleve = new Eleve();
	 
    res.render('index', { 
							title: 'Titre page 1', 
							message2: 'test contenu'
						});
 });

app.post('/', (req, res) => {
    res.send("Post reçu !");
});



app.listen(1337, () =>  {
    console.log("tout est ok");
});