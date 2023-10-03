const db = require('./connexion');
const shema = require('./shema');

const User = shema[0];
const Achat = shema[1];
const Livre = shema[2];

// const Authentification = async (table, pseudo, mdp) => {
//     return new Promise((resolve, reject) => {
//         let noSQL='SELECT * FROM';
//         db.query(noSQL, [pseudo, mdp], (err, data, fields) => {
//             if(data.length == 0){
//                 reject()
//             }
//             if(err){
//                 console.log(err)
//                 reject("Erreur lors de l'authentification !")
//             }else{
//                 resolve(data)
//             }
//         })
//     });
// }

const getAllUsers = async () => {
    try {
        console.log(User.find({}));
        const users = await User.find({});
        console.log("-----------------------------------");
        console.log(users);
        console.log("-----------------------------------");
        if (users.length === 0) {
          throw new Error("Aucun utilisateur trouvé !");
        }
        return users;
    } catch (err) {
        throw err;
    }
}

module.exports={
    getAllUsers
}