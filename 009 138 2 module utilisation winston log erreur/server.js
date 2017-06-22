process.env.NODE_CONFIG_DIR = __dirname + "/config";

const config = require("config");
const express = require("express");
const mysql = require('mysql');
const logger = require(__dirname + "/logger.js");

const app = express();

const connection = mysql.createConnection({
  host     : config.notes.database.host,
  user     : config.notes.database.user,
  password : config.notes.database.password,
  database : config.notes.database.name
});

app.set('views', __dirname + "/views");
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

logger.log('info', 'Now my debug messages are written to console!');

app.get("/", (req, res) => {
    connection.query("SELECT Nom, Prenom FROM Personne JOIN Eleve ON Personne.Id = Eleve.PersonneId ORDER BY Nom, Prenom;", 
                     (error, results, fields) => {
        if(error) {
            logger.log('error', 'Impossible de charger les données', error);
            throw error;
        }
        res.render('index', { title: 'Mes élèves', message: 'test contenu', items: results}); 
    });
});

app.get("/avec-erreur", (req, res) => {
    throw new Error("Test erreur");
});


app.listen(config.notes.server.port, () =>  {
    console.log("tout est ok, sur le port d'amsterdam : " + config.notes.server.port);
});