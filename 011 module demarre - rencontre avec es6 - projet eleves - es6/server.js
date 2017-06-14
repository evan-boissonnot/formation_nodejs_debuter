const Note = require("./Note");
const Eleve = require("./Eleve");
const Cours = require("./Cours");

let eleve = new Eleve("boissonnot", "evan");

let cours = new Cours("Programmation");
let cours2 = new Cours("Réseau");

let note = new Note(12, cours, new Date());
eleve.ajouterNote(note);

note = new Note(13, cours2, new Date());
eleve.ajouterNote(note);

note = new Note(14, cours2, new Date());
eleve.ajouterNote(note);

note = new Note(8, cours2, new Date());
eleve.ajouterNote(note);

eleve.afficherToutes(note => {
    console.log(`Note ${note.valeur} a été attribuée à l'élève ${note.eleve.getPrenomNom()} pour le cours ${note.cours.libelle}`);
});

let nameSurname = eleve.getPrenomNom();

console.log(`La note maximale de l'élève ${nameSurname} est : ${eleve.getMaxNote()}`);
console.log(`La note minimale de l'élève ${nameSurname} est : ${eleve.getMinNote()}`);
console.log(`La note moyenne de l'élève ${nameSurname} est : ${eleve.getMoyenne()}`);