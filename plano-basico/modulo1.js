function responder(correto) {
  const resultado = document.getElementById("resultado");
  if (correto) {
    resultado.textContent = "✅ Correto! Duelistas criam espaço e buscam eliminações.";
    resultado.style.color = "#4ade80";
  } else {
    resultado.textContent = "❌ Errado! Essa é a função dos Sentinelas.";
    resultado.style.color = "#f87171";
  }
}
