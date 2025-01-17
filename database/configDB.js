// recuperation de la dependance
const mysql = require("mysql2");

// creation d'une connexion avec les identifiants necessaires
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Riemglagla0705',
    database: 'shop',
});

// connexion a la base de donnée
connection.connect((err) => {
    if (err) throw err;
    console.log("Connecter a la base de donnée")
});

// export de la connexion 
module.exports = connection;
