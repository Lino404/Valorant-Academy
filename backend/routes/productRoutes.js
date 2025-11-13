// routes/productRoutes.js
const express = require('express');
const router = express.Router();
// Importa os dados de products e users (embora só precise de products aqui)
const { products } = require('../database'); 

// Rota GET /api/products (Listagem de produtos)
router.get('/', (req, res) => {
    res.json(products);
});

// Adicione aqui as outras rotas PUT, POST, DELETE se necessário.

// EXPORTA O OBJETO ROUTER
module.exports = router;