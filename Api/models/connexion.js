const mongoose = require('mongoose');
const ini = require('ini');
const fs = require('fs');

// Lisez le fichier de configuration .ini
const configDB = ini.parse(fs.readFileSync('./db.ini', 'utf-8'));

// Créez une URL de connexion à partir des informations lues
const { host, port, user, password, database } = configDB.dev;

const uri = `mongodb://${user}:${password}@${host}:${port}/${database}`;

// Créez une connexion avec Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion :'));
db.once('open', () => {
  console.log('Connexion à la base de données MongoDB réussie');

  // Vous pouvez commencer à utiliser Mongoose pour interagir avec votre base de données MongoDB ici.
});