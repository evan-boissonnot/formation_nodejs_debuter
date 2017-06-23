const express = require("express");
const app = express();
const mysql = require('mysql');
const Cours = require(__dirname + '/models/Cours.js');
const Eleve = require(__dirname + '/models/Eleve.js');
const Note = require(__dirname + '/models/Note.js');

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
    connection.query("SELECT Eleve.Id, Nom, Prenom FROM Personne JOIN Eleve ON Personne.Id = Eleve.PersonneId ORDER BY Nom, Prenom;", 
                     (error, results, fields) => {
        var list = [];

        if(error) {
            console.log("Erreur sur l'affichage des élèves : " + error.getMessage());
            throw error;
        }

        results.forEach(function(eleveItem) {
            let eleve = new Eleve(eleveItem.Nom, eleveItem.Prenom);
            list.push(eleve);

            connection.query('SELECT Valeur, CoursId FROM Note WHERE EleveId = ' + eleveItem.Id, (error, results, fields) => {
                if(! error) {
                    results.forEach(function(noteItem) {
                        let note = new Note(new Date(), noteItem.Valeur, null, eleve);                        
                        eleve.ajouterNote(note);
                        
                        connection.query('SELECT Nom FROM Cours WHERE Id = ' + noteItem.CoursId, (error, results, fields) => {
                            if(!error && results.length == 1) {       
                                let cours = new Cours(results[0].Nom);

                                note.cours = cours;
                            }
                        });
                    }, this);        
                }
            });
        }, this);

        res.render('index', { title: 'Mes élèves', message: 'test contenu', items: results}); 
    });
});


app.listen(1337, () =>  {
    console.log("tout est ok");
});