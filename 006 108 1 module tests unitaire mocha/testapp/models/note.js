class Note {
    constructor(valeur, cours, date) {
        this._valeur = valeur;
        this._cours = cours;
        this._date = date;
        this._eleve = null;    
    }

    set eleve(eleve) {
        this._eleve = eleve;    
    }
    get eleve() {
        return this._eleve;
    }

    set valeur(valeur) {
        this._valeur = valeur;    
    }
    get valeur() {
        return this._valeur;
    }

    set cours(cours) {
        this._cours = cours;    
    }
    get cours() {
        return this._cours;
    }

    set date(date) {
        this._date = date;    
    }
    get date() {
        return this._date;
    }
}

module.exports = Note;