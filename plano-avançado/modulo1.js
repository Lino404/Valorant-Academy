function responder(correto) {
  const resultado = document.getElementById("resultado");
  if (correto) {
    resultado.textContent = "✅ Correto!";
    resultado.style.color = "#4ade80";
  } else {
    resultado.textContent = "❌ Errado!";
    resultado.style.color = "#f87171";
  }
}
