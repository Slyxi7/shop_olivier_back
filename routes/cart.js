const express = require("express");
const db = require("../database/configDB");
const router = express.Router();

// Ajouter un produit au panier
router.post("/cart", (req, res) => {
    const { productId, quantity } = req.body;

    if (!productId || !quantity || quantity <= 0) {
        return res.status(400).json({ message: "Données invalides." });
    }

    // Vérifier si le produit existe déjà dans le panier
    const checkCartQuery = "SELECT * FROM cart WHERE product_id = ?";
    db.query(checkCartQuery, [productId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Erreur serveur." });
        }

        if (results.length > 0) {
            // Mise à jour de la quantité si le produit existe déjà
            const updateCartQuery = "UPDATE cart SET quantity = quantity + ? WHERE product_id = ?";
            db.query(updateCartQuery, [quantity, productId], (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: "Erreur lors de la mise à jour du panier." });
                }
                res.status(200).json({ message: "Quantité mise à jour dans le panier." });
            });
        } else {
            // Ajouter le produit au panier
            const insertCartQuery = "INSERT INTO cart (product_id, quantity) VALUES (?, ?)";
            db.query(insertCartQuery, [productId, quantity], (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: "Erreur lors de l'ajout au panier." });
                }
                res.status(201).json({ message: "Produit ajouté au panier." });
            });
        }
    });
});

// Récupérer les articles du panier
router.get("/cart", (req, res) => {
    const getCartQuery = `
        SELECT cart.id, cart.quantity, products.title, products.price, products.image
        FROM cart
        INNER JOIN products ON cart.product_id = products.id
    `;
    db.query(getCartQuery, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Erreur lors de la récupération du panier." });
        }
        res.status(200).json(results);
    });
});

module.exports = router;
