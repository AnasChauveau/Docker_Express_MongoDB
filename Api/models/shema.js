const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Définissez les champs de votre modèle utilisateur ici
  email: String,
  mdp: String
  // Ajoutez d'autres champs au besoin
});

const User = mongoose.model('User', userSchema);

const achatSchema = new mongoose.Schema({
    // Définissez les champs de votre modèle utilisateur ici
    idUser: String,
    idLivre: Number,
    date: Date
    // Ajoutez d'autres champs au besoin
  });
  
const Achat = mongoose.model('Achat', achatSchema);

const livreSchema = new mongoose.Schema({
    // Définissez les champs de votre modèle utilisateur ici
    idLivre: Number,
    nom: String,
    description: String,
    urlImg: String
    // Ajoutez d'autres champs au besoin
});
  
const Livre = mongoose.model('Livre', livreSchema);

module.exports = [
    User,
    Achat,
    Livre
]