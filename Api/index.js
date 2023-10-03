// inclure les dépendances et middlewares 

const express = require('express');
const mongoose = require('mongoose');
const ini = require('ini');
const Routeur = require('./routes.js');

// activation des dépendances 
let app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Définition du port de l'application  
const port = process.env.port || 3001;

// DÉMARRAGE DE L'APPLICATION
app.listen(port, () => {
    console.log(`Serveur HTTP fonctionnel. Go http://localhost:${port}`);
  })

app.use('/DockerBook/Api', Routeur);

module.exports = app;