const Person = require('./Person');

class Eleve extends Person {
    constructor(nom, prenom){
        super(nom, prenom);
        this._notes = [];  
    }

    ajouterNote(note) {
        this._notes.push(note);

        note.eleve = this;
        
        let noteLabel = this._notes.length > 1 ? "s" : "";
        console.log(`L'élève ${this.getPrenomNom()} a ${this._notes.length} note${noteLabel}`);

        console.log(`La note ${note.valeur} a été attribuée à l'élève ${this.getPrenomNom()} pour le cours ${note.cours.libelle}`);
    }

    afficherToutes(display) {
        for(var i=0; this._notes != null && i < this._notes.length; i++) {
            display(this._notes[i]);
        }
    }

    getMoyenne() {
        let total = 0;

        for(var i=0; this._notes != null && i < this._notes.length; i++)
            total += this._notes[i].valeur;

        return this._notes != null && this._notes.length > 0 ?  total / this._notes.length : 0;
    }

    getMaxNote() {
        let max = 0;

        for(var i=0; this._notes != null && i < this._notes.length; i++) {
            let valeur = this._notes[i].valeur;
            max = valeur > max ? valeur : max; 
        }

        return max;
    }

    getMinNote() {
        let min = 21;

        for(var i=0; this._notes != null && i < this._notes.length; i++) {
            let valeur = this._notes[i].valeur;
            min = valeur < min ? valeur : min; 
        }

        return min;
    }

    getPrenomNom() {
        return "(eleve) " + super.getPrenomNom();
    }
};

module.exports = Eleve;