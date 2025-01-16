const { config } = require("dotenv");

const router = require("express").Router();
const connection = require("../database/configDB")
// creation de la route pour recuperer toutes les données de la table products
// url : http//loclahost:5000

router.get('/', (req, res) =>{
    const sql = "SELECT * FROM products"
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

module.exports = router;