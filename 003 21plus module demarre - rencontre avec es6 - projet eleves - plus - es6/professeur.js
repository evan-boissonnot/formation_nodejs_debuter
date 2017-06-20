var Person = require('./Person');

class Professeur extends Person {
    constructor(nom, prenom){
        super(nom, prenom);
        this._eleves = [];  
        this._cours = [];
    }

    ajouterResponsabilite(eleve) {
        this._eleves.push(eleve);
    }

    supprimerResponsabilite(eleve) {
        remove(this._eleves, eleve);
    }

    dispenser(cours) {
        this._cours.push(cours);
        console.log(`Le professeur ${this.getPrenomNom()} dispense le cours ${cours.libelle}`);
    }

    remove(array, element) {
        const index = array.indexOf(element);

        if(index !== -1)
            array.splice(index, 1);
    }

    getPrenomNom() {
        return "(professeur) " + super.getPrenomNom();
    }

    get eleves() {
        return this._eleves;
    }
    set eleves(list) {
        this._eleves = list;
    }

    get cours() {
        return this._cours;
    }
    set cours(list) {
        this._cours = list;
    }
}

module.exports = Professeur;