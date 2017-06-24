const express = require("express");
const async = require("async");
const app = express();
const mysql = require('mysql');
const Cours = require(__dirname + '/models/Cours.js');
const Eleve = require(__dirname + '/models/Eleve.js');
const Note = require(__dirname + '/models/Note.js');

let nbResults = 0;
let nbNoteResults = 0;

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
    async.series({
        chargerEleves: function(callback) {
            connection.query("SELECT Eleve.Id, Nom, Prenom FROM Personne JOIN Eleve ON Personne.Id = Eleve.PersonneId ORDER BY Nom, Prenom;", 
                     (error, results, fields) => {
                var list = [];        
                if(error)
                    callback(error, null);

                async.each(results, (eleveItem, callbackeleve) => {
                    let eleve = new Eleve(eleveItem.Nom, eleveItem.Prenom);
                    list.push(eleve);

                    connection.query('SELECT Valeur, CoursId FROM Note WHERE EleveId = ' + eleveItem.Id, (error, results, fields) => {
                        if(error)
                            callback(error, null);
                        
                        async.each(results, (noteItem, callbacknote) => {
                            let note = new Note(noteItem.Valeur, null, new Date(), eleve);                        
                            eleve.ajouterNote(note);

                            connection.query('SELECT Nom FROM Cours WHERE Id = ' + noteItem.CoursId, (error, results, fields) => {
                                if(error)
                                    callback(error, null);
                                
                                let cours = new Cours(results[0].Nom);
                                note.cours = cours;

                                callbacknote();
                            });
                        }, callbackeleve);
                    });
                }, function(err) {
                    res.render('index', { title: 'Mes élèves', message: 'test contenu', items: list}); 
                })
            });
        }
    });


    // connection.query("SELECT Eleve.Id, Nom, Prenom FROM Personne JOIN Eleve ON Personne.Id = Eleve.PersonneId ORDER BY Nom, Prenom;", 
    //                  (error, results, fields) => {
    //     var list = [];

    //     if(error) {
    //         console.log("Erreur sur l'affichage des élèves : " + error.getMessage());
    //         throw error;
    //     }

    //     nbResults = results.length;

    //     results.forEach(function(eleveItem) {
    //         let eleve = new Eleve(eleveItem.Nom, eleveItem.Prenom);
    //         list.push(eleve);

    //         //nbResults --;  Si l'on met ici, que se passe-t-il ? :)

    //         connection.query('SELECT Valeur, CoursId FROM Note WHERE EleveId = ' + eleveItem.Id, (error, results, fields) => {
    //             if(error)
    //                 return;

    //             nbResults --;    // pourquoi c'est mieux de le mettre ici ?            
    //             nbResults += results.length;

    //             results.forEach(function(noteItem) {
    //                 let note = new Note(noteItem.Valeur, null, new Date(), eleve);                        
    //                 eleve.ajouterNote(note);

    //                 connection.query('SELECT Nom FROM Cours WHERE Id = ' + noteItem.CoursId, (error, results, fields) => {
    //                     if(!error && results.length == 1) {       
    //                         let cours = new Cours(results[0].Nom);

    //                         note.cours = cours;

    //                         nbResults --;

    //                         if(nbResults == 0)
    //                             res.render('index', { title: 'Mes élèves', message: 'test contenu', items: list}); 
    //                     }
    //                 });
    //             }, this);
                
    //         });
    //     }, this);

        /// Si l'on rend ici, on n'a pas la list, pourquoi ? ;)
        //res.render('index', { title: 'Mes élèves', message: 'test contenu', items: list}); 
    // });
});


app.listen(1337, () =>  {
    console.log("tout est ok");
});