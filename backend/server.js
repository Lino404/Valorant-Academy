// server.js (Certifique-se de que está assim)
const express = require('express');
const cors = require('cors'); // Instale: npm install cors
const app = express();
const port = 3000;

// Configura o CORS (permissão para o Front-end acessar)
app.use(cors()); 

// Middleware para parsear o corpo das requisições como JSON
app.use(express.json()); 

const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); 

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});