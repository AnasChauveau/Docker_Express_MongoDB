const db = require('../models/modelDoker'); // Requetes 

// const getUsers = async (req, res) => {

//     // Prelevé dans l'URL
//     let pseudo = req.params.pseudo;
//     let mdp = req.params.mdp;
//     //
    
//     await db.getAllUsers(table, pseudo, mdp)
//     .then((data) => {
//         console.log(data)
//         res.json(data)
//     }).catch((err) => {
//         console.log(err)
//         res.json(err)
//     })
// }

const getUsers = async (req, res) => {
    
    res.json(await db.getAllUsers());

}


module.exports={
    getUsers
}