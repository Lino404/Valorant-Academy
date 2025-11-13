// routes/userRoutes.js - Atualizado para Login e Cadastro
const express = require('express');
const router = express.Router();
const { users } = require('../database'); // Importa o array de usuários

// POST /api/users/register - Cadastro de Novo Usuário
router.post('/register', (req, res) => {
    const { login, senha } = req.body; // Seus campos são 'login' e 'senha'

    if (!login || !senha) {
        return res.status(400).json({ message: 'Login e Senha são obrigatórios.' });
    }

    // Verifica se o usuário já existe
    const existe = users.find(u => u.login === login);
    if (existe) {
        return res.status(409).json({ message: 'Este usuário já está cadastrado.' });
    }

    // Simula a criação de ID (Em um DB real, o DB faria isso)
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const newUser = { id: newId, login, senha };
    
    users.push(newUser);
    console.log(`✅ NOVO USUÁRIO CADASTRADO: ${newUser.login}. Total de usuários no array: ${users.length}`);

    // Retorna 201 Created
    res.status(201).json({ 
        message: 'Cadastro realizado com sucesso!',
        user: { id: newUser.id, login: newUser.login } // Não retorne a senha!
    });
});

// POST /api/users/login - Autenticação
router.post('/login', (req, res) => {
    const { login, senha } = req.body;

    const usuario = users.find(u => u.login === login && u.senha === senha);

    if (usuario) {
        // Sucesso no login. Em um app real, aqui você geraria um JWT (Token).
        res.status(200).json({ 
            message: 'Login bem-sucedido!', 
            // Exemplo de token simples para simulação
            token: `token-de-sessao-${usuario.id}`
        });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas: Usuario e/ou senha incorretos.' });
    }
});

// Rota GET simples para checar os usuários cadastrados (apenas para debug)
router.get('/', (req, res) => {
    const safeUsers = users.map(u => ({ id: u.id, login: u.login }));
    res.json(safeUsers);
});

module.exports = router;