const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  const medicamento = document.querySelector("#InMed").value;
  const preco = Number(document.querySelector("#InPreco").value);

  const resp = document.querySelector("#resp");
  const resp2 = document.querySelector("#resp2");

  const calc = Math.floor(preco + preco);

  resp.textContent = `Promoção do ${medicamento}`;
  resp2.textContent = `Leve 2 por apenas ${calc.toFixed(2)}`;
});