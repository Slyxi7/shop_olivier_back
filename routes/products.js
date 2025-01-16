const { config } = require("dotenv");

const router = require("express").Router();
const connection = require("../database/configDB")

router.get('/', (req, res) =>{
    const sql = "SELECT * FROM products"
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

module.exports = router;