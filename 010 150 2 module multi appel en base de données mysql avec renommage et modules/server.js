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

function chargerEleves(callback) {
    connection.query("SELECT Eleve.Id, Nom, Prenom FROM Personne JOIN Eleve ON Personne.Id = Eleve.PersonneId ORDER BY Nom, Prenom;", 
                     (error, results, fields) => {
        var list = [];


        if(error) {
            console.log("Erreur sur l'affichage des élèves : " + error.getMessage());
            return callback(error, null)
        }

        results.forEach(function(eleveItem) {
            let eleve = new Eleve(eleveItem.Nom, eleveItem.Prenom);
            list.push(eleve);

            chargerNotes(eleve, eleveItem.Id, callback);
        }, this);
    });
}

// Voir : https://caolan.github.io/async/docs.html#each

function chargerNotes(eleve, eleveId, callback) {
    connection.query('SELECT Valeur, CoursId FROM Note WHERE EleveId = ' + eleveId, (error, results, fields) => {
        if(error)
            return callback(error, null);

        results.forEach(function(noteItem) {
            let note = new Note(new Date(), noteItem.Valeur, null, eleve);                        
            
            eleve.ajouterNote(note);
            chargeCours(note, noteItem.CoursId, callback);
        }, this);
    });
}

function chargeCours(note, coursId) {
    connection.query('SELECT Nom FROM Cours WHERE Id = ' + coursId, (error, results, fields) => {
        if(!error && results.length == 1) {       
            let cours = new Cours(results[0].Nom);
            note.cours = cours;
        }
    });
}

app.get("/", (req, res) => {
    
});


app.listen(1337, () =>  {
    console.log("tout est ok");
});