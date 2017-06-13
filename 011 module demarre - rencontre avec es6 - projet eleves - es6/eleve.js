class Eleve{
    constructor(nom, prenom){
        this._nom = nom;
        this._prenom = prenom;
        this._notes = [];  
    }

    ajouterNote(note) {
        this._notes.push(note);

        note.eleve = this;
        
        console.log("L'élève "  + this.getPrenomNom() + " a " + this._notes.length + " note" + (this._notes.length > 1 ? "s" : ""));

        console.log("La note " + note.valeur + " a été attribuée à l'élève " + 
                    this.getPrenomNom() + " pour le cours " + note.cours.libelle);
    }

    afficherToutes(display) {
        for(var i=0; this._notes != null && i < this._notes.length; i++) {
            display(this._notes[i]);
        }
    }

    getMoyenne() {
        var total = 0;

        for(var i=0; this._notes != null && i < this._notes.length; i++)
            total += this._notes[i].valeur;

        return this._notes != null && this._notes.length > 0 ?  total / this._notes.length : 0;
    }

    getMaxNote() {
        var max = 0;

        for(var i=0; this._notes != null && i < this._notes.length; i++) {
            var valeur = this._notes[i].valeur;
            max = valeur > max ? valeur : max; 
        }

        return max;
    }

    getMinNote() {
        var min = 21;

        for(var i=0; this._notes != null && i < this._notes.length; i++) {
            var valeur = this._notes[i].valeur;
            min = valeur < min ? valeur : min; 
        }

        return min;
    }

    getPrenomNom() {
        return this._prenom + " " + this._nom;
    }

    set nom(nom) {
        this._nom = nom;
    }
    get nom() {
        return this._nom;
    }

    set prenom(prenom) {
        this._prenom = prenom;
    }
    get prenom() {
        return this._prenom;
    }
};

module.exports = Eleve;