var Note = require("./Note");
var Eleve = require("./Eleve");
var Cours = require("./Cours");

var eleve = new Eleve("boissonnot", "evan");

var cours = new Cours("Programmation");
var cours2 = new Cours("Réseau");

var note = new Note(12, cours, new Date());
eleve.ajouterNote(note);

note = new Note(13, cours2, new Date());
eleve.ajouterNote(note);


eleve.afficherToutes(function(note) {
    console.log("Note " + note.getValeur() + " a été attribuée à l'élève " + 
                note.getEleve().getPrenom() + " " + note.getEleve().getNom() + " pour le cours " + note.getCours().getLibelle());
});

