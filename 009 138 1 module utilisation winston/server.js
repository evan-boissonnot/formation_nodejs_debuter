const express = require("express");
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '192.168.1.192',
  user     : 'nodejs',
  password : 'nodejs!',
  database : 'mesnotes'
});

app.set('views', __dirname + "/views");
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    connection.query("SELECT Nom, Prenom FROM Personne JOIN Eleve ON Personne.Id = Eleve.PersonneId ORDER BY Nom, Prenom;", 
                     (error, results, fields) => {
        if(error) {
            console.log("Erreur sur l'affichage des élèves : " + error.getMessage());
            throw error;
        }
        res.render('index', { title: 'Mes élèves', message: 'test contenu', items: results}); 
    });
});


app.listen(1337, () =>  {
    console.log("tout est ok");
});