class Cours {
    constructor(libelle) {
        this._libelle = libelle;
    }

    set libelle(libelle) {
        this._libelle = libelle;
    }

    get libelle() {
        return this._libelle;
    }
}

module.exports = Cours;