const expect = require('chai').expect;
const Eleve = require('./eleve');

describe("Eleve", () => {
    describe("#ajouterNote", () => {
        it("on doit pouvoir ajouter une note vide, une erreur typée nous est retournée", () => {
             let eleve = new Eleve("Nom", "Prenom");
             let error = null;

            try {
                eleve.ajouterNote(null);
            } catch(err) {
                error = err;    
            }
            expect(error).to.not.null;           
        });
    });
});