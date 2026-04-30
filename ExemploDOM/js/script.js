const pecas = document.querySelectorAll(".peca");
const contadorTexto = document.getElementById("contador");
const mensagemFinal = document.getElementById("mensagemFinal");

// guarda quais já foram desbloqueadas
let desbloqueadas = [false, false, false, false];

pecas.forEach((peca, index) => {

  peca.addEventListener("click", () => {

    // remove todas (só uma ativa)
    pecas.forEach(p => {
      p.classList.remove("ativa");
      p.classList.add("bloqueada");

      p.querySelector(".icone").textContent = "🔒";
      p.querySelector(".texto").textContent = "Clique para desbloquear";
    });

    // ativa a clicada
    peca.classList.add("ativa");
    peca.classList.remove("bloqueada");

    const icone = peca.querySelector(".icone");
    const texto = peca.querySelector(".texto");

    // emojis diferentes
    const emojis = ["✨", "⚡", "🔥", "🚀"];

    icone.textContent = emojis[index];
    texto.textContent = "Desbloqueado!";

    // marca como desbloqueada
    desbloqueadas[index] = true;

    // 🔥 CONTADOR CORRETO (ACUMULADO)
    const totalDesbloqueadas = desbloqueadas.filter(v => v).length;
    contadorTexto.textContent = totalDesbloqueadas;

    // 🔥 VERIFICA SE COMPLETOU
    if (desbloqueadas.every(v => v)) {
      mensagemFinal.textContent = "🎉 Parabéns, você completou a fase 1!";
    }

  });

  // evita bug do botão
  const botao = peca.querySelector(".btn-abrir");
  botao.addEventListener("click", (e) => {
    e.stopPropagation();
  });

});