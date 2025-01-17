// recuperation des dependance
require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");

// recuperation de la configuration de la bdd
require("./database/configDB");

// on indique que nous allons utiliser express
app.use(express.json());

// on accepte les requetes de toutes origines
app.use(
    cors({
        origin: "*",
    })
);

// on indique le chemin de
const routes = require("./routes/products")
const cartRoutes = require("./routes/cart");
app.use(routes);
app.use("/api",cartRoutes);

//on indique que l'application va ecouter sur le port 5000 et on retourne message dans le terminal
app.listen(5000, () => {
    console.log("Serveur lancer sur le port 5000");
});

