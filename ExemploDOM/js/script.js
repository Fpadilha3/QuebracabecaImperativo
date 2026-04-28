// Pega os elementos
const botao = document.getElementById("btnAtivar");
const statusTexto = document.getElementById("statusTexto");
const peca = document.getElementById("peca");
const icone = document.getElementById("iconePeca");
const titulo = document.getElementById("tituloPeca");
const texto = document.getElementById("textoPeca");
const btnIrSite = document.getElementById("btnIrSite");

// Estado da peça
let ativa = false;

// Clique no botão
botao.addEventListener("click", function () {

  ativa = !ativa;

  if (ativa) {
    // ATIVAR
    statusTexto.textContent = "Ativa";
    botao.textContent = "Desativar Peça";

    peca.classList.remove("bloqueada");
    peca.classList.add("ativa");

    icone.textContent = "🔓";
    titulo.textContent = "Peça Ativada";
    texto.textContent = "Você desbloqueou a peça!";

    // MOSTRA O BOTÃO
    btnIrSite.querySelector("button").style.display = "block";

  } else {
    // DESATIVAR
    statusTexto.textContent = "Bloqueada";
    botao.textContent = "Ativar Peça";

    peca.classList.remove("ativa");
    peca.classList.add("bloqueada");

    icone.textContent = "🔒";
    titulo.textContent = "Peça Bloqueada";
    texto.textContent = "Aguardando interação...";

    // ESCONDE O BOTÃO
    btnIrSite.querySelector("button").style.display = "none";
  }

});