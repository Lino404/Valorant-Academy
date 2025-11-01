let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  const totalElem = document.getElementById('total');
  lista.innerHTML = '';

  let total = 0;
  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    li.onclick = () => removerItem(index);
    lista.appendChild(li);
    total += item.preco;
  });

  totalElem.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function limparCarrinho() {
  carrinho = [];
  atualizarCarrinho();
}

