var Eleve = function(nom, prenom) {
    this._nom = nom;
    this._prenom = prenom;
    this._notes = [];  
};

Eleve.prototype.setNom = function(nom) {
    this._nom = nom;
};

Eleve.prototype.getNom = function() {
    return this._nom;
};

Eleve.prototype.setPrenom = function(valeur) {
    this._prenom = valeur;
};

Eleve.prototype.getPrenom = function() {
    return this._prenom;
};

Eleve.prototype.ajouterNote = function(note) {
    this._notes.push(note);

    note.setEleve(this);
    
    console.log("L'élève "  + this.getPrenom() + " " + this.getNom() + " a " + this._notes.length + " note" + (this._notes.length > 1 ? "s" : ""));

    console.log("La note " + note.getValeur() + " a été attribuée à l'élève " + 
                this.getPrenom() + " " + this.getNom() + " pour le cours " + note.getCours().getLibelle());

};

Eleve.prototype.afficherToutes = function(display) {
    for(var i=0; i < this._notes.length; i++)
        display(this._notes[i]);
}

module.exports = Eleve;