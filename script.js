// Pegando os elementos do HTML (histórico e visor principal)
let conta4 = document.querySelector(".conta4");
let conta3 = document.querySelector(".conta3");
let conta2 = document.querySelector(".conta2");
let conta = document.querySelector(".conta");

// Variáveis que armazenam os cálculos
let calculo = ""; // cálculo atual
let calculo2 = ""; // histórico 2
let calculo3 = ""; // histórico 3
let calculo4 = ""; // histórico 4

let resultado = ""; // guarda o resultado da conta
let contador = 0; // controla quantidade de contas feitas
let contador2 = 0; // (não está sendo usado no momento)

// Verifica se o visor está em "0" e limpa antes de adicionar outro número
function verificarZero() {
  if (conta.innerHTML === "0") {
    conta.innerHTML = "";
    calculo = "";
  }
}

// =========================
// FUNÇÕES DOS BOTÕES
// =========================

// Botão C → limpa tudo
function Fcancelar() {
  conta.innerHTML = "0";
  calculo = "";
}

// Botão de apagar (backspace)
function Fdeletar() {
  if (conta.innerHTML.length > 0) {
    // Remove o último caractere do visor
    conta.innerHTML = conta.innerHTML.slice(0, -1);

    // Remove o último caractere do cálculo interno
    calculo = calculo.slice(0, -1);

    // Se ficar vazio, volta para 0
    if (conta.innerHTML === "") {
      conta.innerHTML = "0";
      calculo = "";
    }
  }
}

function adicionar(valorInterno, valorVisivel = valorInterno) {
  verificarZero();

  // Mostra no visor
  conta.innerHTML += valorVisivel;

  // Guarda para cálculo
  calculo += valorInterno;
}

// =========================
// BOTÃO IGUAL
// =========================

function Figual() {
  try {
    // Executa o cálculo dinamicamente
    resultado = new Function("return " + calculo)();

    // Move histórico para baixo (efeito de "subir" as contas)
    conta4.innerHTML = conta3.innerHTML;
    calculo4 = calculo3;

    conta3.innerHTML = conta2.innerHTML;
    calculo3 = calculo2;

    // Salva a conta atual no histórico 2
    conta2.innerHTML = conta.innerHTML + " = " + resultado;
    calculo2 = calculo;

    // Mostra resultado no visor principal
    conta.innerHTML = resultado;

    // Agora o novo cálculo começa pelo resultado
    calculo = resultado.toString();

    contador++;
  } catch (e) {
    // Se der erro no cálculo (ex: 5++6)
    conta.innerHTML = "Erro";
    calculo = "";
  }
}

// =========================
// FUNÇÕES DO HISTÓRICO
// =========================

// Clica na conta4 e reaproveita ela
function chamarconta4() {
  // Converte * para x
  conta.innerHTML = calculo4.replace(/\*/g, "x");

  // Converte /100 para %
  conta.innerHTML = calculo4.replace(/\/100/g, "%");

  conta4.innerHTML = ""; // limpa histórico
  calculo = calculo4;
  contador--;
}

function chamarconta3() {
  if (conta3.innerHTML === "") return;

  conta.innerHTML = calculo3.replace(/\*/g, "x");
  conta.innerHTML = calculo3.replace(/\/100/g, "%");
  calculo = calculo3;

  // Faz histórico descer
  conta3.innerHTML = conta4.innerHTML;
  calculo3 = calculo4;

  conta4.innerHTML = "";
  calculo4 = "";

  if (contador > 0) contador--;
}

function chamarconta2() {
  if (conta2.innerHTML === "") return;

  conta.innerHTML = calculo2.replace(/\*/g, "x");
  conta.innerHTML = calculo2.replace(/\/100/g, "%");
  calculo = calculo2;

  // Move histórico para baixo
  conta2.innerHTML = conta3.innerHTML;
  calculo2 = calculo3;

  conta3.innerHTML = conta4.innerHTML;
  calculo3 = calculo4;

  conta4.innerHTML = "";
  calculo4 = "";

  if (contador > 0) contador--;
}

// Impede contador negativo
if (contador < 0) {
  contador = 0;
}
