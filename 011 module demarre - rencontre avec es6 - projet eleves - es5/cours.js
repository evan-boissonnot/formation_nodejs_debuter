var Cours = function(libelle) {
    this._libelle = libelle;
};

Cours.prototype.getLibelle = function() {
    return this._libelle;
}

Cours.prototype.setLibelle = function(libelle) {
    this._libelle = libelle;
}

module.exports = Cours;