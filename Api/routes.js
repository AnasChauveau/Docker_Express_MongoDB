// création du routeur Express pour ce module
const express = require('express');
let app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const routeur = express.Router();


// Ajout des controllers //
const ctrlDocker = require('./controllers/ctrlDocker');

// Enregistrement des routeurs

    // ------------------------ Api User -------------------------- //

//affiche tous les utilisateurs
routeur.get('/Users', ctrlDocker.getUsers);




// Exportation //
module.exports = routeur;