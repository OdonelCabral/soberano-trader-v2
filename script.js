let operacoes = 0;
let prejuizo = 0;
const limiteOperacoes = 5;
const limitePrejuizo = 100;

function atualizarPainel() {
    document.getElementById("operacoes").textContent = operacoes;
    document.getElementById("prejuizo").textContent = prejuizo;
}

function realizarOperacao() {
    if (operacoes >= limiteOperacoes || prejuizo >= limitePrejuizo) {
        alert("Limite atingido! Dia bloqueado.");
        return;
    }
    operacoes++;
    let resultado = Math.floor(Math.random() * 40 - 20); // entre -20 e +19 ZAR
    prejuizo += resultado < 0 ? Math.abs(resultado) : 0;
    atualizarPainel();
}

function resetarDia() {
    operacoes = 0;
    prejuizo = 0;
    atualizarPainel();
}

window.onload = atualizarPainel;