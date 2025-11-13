## 🚀 Valorant Academy Store: Sistema Full-Stack

### ✨ Visão Geral

Este projeto é um sistema Full-Stack simples, criado para demonstrar a integração entre um **Backend** (Node.js/Express.js) e um **Frontend** (HTML/JS puro). O foco é o gerenciamento básico de produtos e o fluxo de autenticação de usuários (Login/Cadastro).

---

### 💻 Tecnologias Chave

#### Servidor (Backend - API) ⚙️
* **Node.js & Express.js:** Base para criar o servidor e as rotas REST.
* **CORS:** Habilitado para comunicação segura.
* **Dados em Memória:** Simulação de banco de dados (dados temporários).

#### Cliente (Frontend) 🌐
* **HTML, CSS, JavaScript:** Páginas de interface e lógica de consumo da API.
* **`fetch`:** Método usado para comunicação direta com o servidor (`http://localhost:3000`).

---

### 🎯 Requisitos e Funcionalidades

| Funcionalidade | Implementação |
| :--- | :--- |
| **Listagem de Produtos** | O `produtos.html` carrega dinamicamente o catálogo via `GET /api/products`. |
| **Cadastro de Usuário** | Rota `POST /api/users/register` para salvar (temporariamente) novos logins. |
| **Login de Usuário** | Rota `POST /api/users/login` para autenticação. |
| **Rotas CRUD** | Estrutura de rotas básicas implementadas no Backend. |
| **Integração Completa** | JavaScript consumindo e exibindo dados da API. |

---

### 🛠️ Como Iniciar a Demonstração

Para começar, você precisa ligar o servidor da API.

#### Passo 1: Iniciar o Backend (API)
1.  Acesse a pasta **`backend`** no terminal.
2.  Execute o comando:
    ```bash
    npm run dev
    ```
    *(A API estará pronta em **http://localhost:3000**)*

#### Passo 2: Demonstração (Frontend)
1.  Abra as páginas HTML no seu navegador.
2.  **Comece em `cadastro.html`** para criar um novo usuário e, em seguida, teste o login.
3.  Acesse **`produtos.html`** para ver o catálogo sendo carregado dinamicamente do servidor Node.js.

---

### ⚠️ Aviso (Persistência de Dados)

Os dados de usuários e quaisquer alterações são armazenados **apenas na memória RAM**. Eles serão **perdidos** toda vez que o servidor for reiniciado.
