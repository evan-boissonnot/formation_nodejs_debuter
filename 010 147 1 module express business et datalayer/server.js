process.env.NODE_CONFIG_DIR = __dirname + "/config";

const express = require("express");
const config = require('config');
const app = express();
const mysql = require('mysql');
const EleveDataLayer = require(__dirname + '/datalayers/EleveDataLayer.js');
const EleveBusiness = require(__dirname + '/businesses/EleveBusiness.js');

app.set('views', __dirname + "/views");
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));


let eleveDataLayer = new EleveDataLayer(config, mysql);
let eleveBusiness = new EleveBusiness(eleveDataLayer);

app.get("/", (req, res) => {
    eleveBusiness.getAll((list) => {
        res.render('index', { title: 'Mes élèves', message: 'test contenu', items: list}); 
    }, (error) => {
        throw error;
    });
});


app.listen(1337, () =>  {
    console.log("tout est ok");
});