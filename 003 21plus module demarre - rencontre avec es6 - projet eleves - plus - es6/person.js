class Person {
    constructor(nom, prenom) {
        this._nom = nom;
        this._prenom = prenom;
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
}

module.exports = Person;