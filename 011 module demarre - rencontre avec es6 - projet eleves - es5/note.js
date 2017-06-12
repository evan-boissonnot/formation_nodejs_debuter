var Note = function(valeur, cours, date) {
    this._valeur = valeur;
    this._cours = cours;
    this._date = date;
    this._eleve = null;
}

Note.prototype.setEleve = function(eleve) {
    this._eleve = eleve;
}

Note.prototype.getEleve = function() {
    return this._eleve;
}

Note.prototype.getValeur = function() {
    return this._valeur;
};

Note.prototype.setValeur = function(valeur) {
    this._valeur = valeur;
};

Note.prototype.getCours = function() {
    return this._cours;
};

Note.prototype.setCours = function(cours) {
    this._cours = cours;
};

Note.prototype.getDate = function() {
    return this._date;
};

Note.prototype.setDate = function(date) {
    this._date = date;
};

module.exports = Note;