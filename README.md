## 🚀 Valorant Academy Store: Sistema Full-Stack

### ✨ Visão Geral

Este projeto é um sistema Full-Stack simples, criado para demonstrar a integração entre um **Backend** (Node.js/Express.js) e um **Frontend** (HTML/JS puro). O foco é o gerenciamento básico de produtos e o fluxo de autenticação de usuários (Login/Cadastro).

---

### 💻 Tecnologias Chave

#### Servidor (Backend - API) ⚙️
* **Node.js & Express.js:** Base do servidor e roteamento.
* **CORS:** Habilitado para comunicação segura com o Front-end.
* **Nodemon:** Usado para desenvolvimento (reinicialização automática).
* **Dados em Memória:** Simulação de persistência (dados voláteis).

---

### 🛠️ Como Iniciar a Demonstração (Passos Essenciais)

Para que o servidor funcione, você precisa instalar as dependências necessárias.

#### Passo 1: Instalação das Dependências

1.  Acesse a pasta **`backend`** no terminal.
2.  Instale as dependências principais (Express e CORS):
    ```bash
    npm install express cors
    ```
3.  Instale o Nodemon como ferramenta de desenvolvimento (necessário para o comando `npm run dev`):
    ```bash
    npm install nodemon --save-dev
    ```
4.  Certifique-se de que o script `"dev": "nodemon server.js"` está no seu `package.json`.

---

#### Passo 2: Iniciar o Backend (API)

1.  Execute o comando para ligar o servidor em modo de desenvolvimento:
    ```bash
    npm run dev
    ```
    ✅ O servidor estará pronto em **`http://localhost:3000`**.

#### Passo 3: Demonstração (Frontend)

1.  Abra as páginas HTML no seu navegador.
2.  **Comece em `cadastro.html`** para criar um novo usuário.
3.  Acesse **`produtos.html`** para ver o catálogo sendo carregado dinamicamente do servidor Node.js.

---

### ⚠️ Aviso (Persistência de Dados)

Os dados são armazenados **apenas na memória RAM**. Eles serão **perdidos** toda vez que o servidor for reiniciado.
