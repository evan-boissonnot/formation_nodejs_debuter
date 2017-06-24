const BaseDataLayer = require('./BaseDataLayer.js');
const Eleve = require('../models/Eleve.js');

class EleveDataLayer extends BaseDataLayer {
    constructor(config, mysql) {
       super(config, mysql);
    }

    // plutot que deux callback, il est préférable d'utiliser le pattern :  return callback(err, result)
    selectAll(callback, callbackError) {
        super.connection.query("SELECT Eleve.Id, Nom, Prenom FROM Personne JOIN Eleve ON Personne.Id = Eleve.PersonneId ORDER BY Nom, Prenom;", 
                         (error, results, fields) => {
            if(error) 
                callbackError(error);
            else {
                var eleveList = [];

                results.forEach(function(item) {
                    let eleve = new Eleve(item.Id, item.Nom, item.Prenom);
                    eleveList.push(eleve);
                }, this);

                callback(eleveList);
            }
        });
    }
}

module.exports = EleveDataLayer;