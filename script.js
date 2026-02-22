let conta4 = document.querySelector('.conta4')
let conta3 = document.querySelector('.conta3')
let conta2 = document.querySelector('.conta2')
let conta = document.querySelector('.conta')

let porcentagem = '%'
let dividir = '/'
let sete = '7'
let oito = '8'
let nove = '9'
let vezes = '*'
let quatro = '4'
let cinco = '5'
let seis = '6'
let menos = '-'
let um = '1'
let dois = '2'
let tres = '3'
let zero = '0'
let mais = '+'
let ponto = '.'
let igual = '='

let calculo = ''
let calculo2 = ''
let calculo3 = ''
let calculo4 = ''
let resultado = ''
let contador = 0
let contador2 = 0

function verificarZero() {
    if (conta.innerHTML === "0") {
        conta.innerHTML = "";
        calculo = "";
    }
}

// Funções que estão ligadas aos botões da calculadora
function Fcancelar(){
    conta.innerHTML = "0"
    calculo = ''
}

function Fdeletar(){
    if (conta.innerHTML.length > 0) {
        // Remove o último caractere do texto e da variável de cálculo
        conta.innerHTML = conta.innerHTML.slice(0, -1);
        calculo = calculo.slice(0, -1);
        
        // Se ficar vazio, volta para o zero
        if (conta.innerHTML === "") {
            conta.innerHTML = "0";
            calculo = "";
        }
    }
}

function Fporcentagem(){
    verificarZero()
    conta.innerHTML += porcentagem
    calculo += '/100'
}

function Fdividir(){
    verificarZero()
    conta.innerHTML += dividir
    calculo += dividir
}

function Fsete(){
    verificarZero()
    conta.innerHTML += sete
    calculo += sete
}

function Foito(){
    verificarZero()
    conta.innerHTML += oito
    calculo += oito
}

function Fnove(){
    verificarZero()
    conta.innerHTML += nove
    calculo += nove
}

function Fvezes(){
    verificarZero()
    conta.innerHTML += 'x'
    calculo += vezes
}

function Fquatro(){
    verificarZero()
    conta.innerHTML += quatro
    calculo += quatro
}

function Fcinco(){
    verificarZero()
    conta.innerHTML += cinco
    calculo += cinco
}

function Fseis(){
    verificarZero()
    conta.innerHTML += seis
    calculo += seis
}

function Fmenos(){
    verificarZero()
    conta.innerHTML += menos
    calculo += menos
}


function Fum(){
    verificarZero()
    conta.innerHTML += um
    calculo += um
}

function Fdois(){
    verificarZero()
    conta.innerHTML += dois
    calculo += dois
}

function Ftres(){
    verificarZero()
    conta.innerHTML += tres
    calculo += tres
}

function Fmais(){
    verificarZero()
    conta.innerHTML += mais
    calculo += mais
}

function Fzero(){
    verificarZero()
    conta. innerHTML += zero
    calculo += zero
}

function Fponto(){
    verificarZero()
    conta.innerHTML += ponto
    calculo += ponto
}

function Figual(){
    try {
        resultado = new Function('return ' + calculo)();

        // Sempre sobe os valores antes de mostrar o novo na conta2
        conta4.innerHTML = conta3.innerHTML;
        calculo4 = calculo3;

        conta3.innerHTML = conta2.innerHTML;
        calculo3 = calculo2;

        // Adiciona a conta que acabou de ser feita no histórico 2
        conta2.innerHTML = conta.innerHTML + " = " + resultado;
        calculo2 = calculo;

        // Mostra o resultado atual na tela principal
        conta.innerHTML = resultado;
        calculo = resultado.toString();
        
        contador++;
    } catch (e) {
        conta.innerHTML = "Erro";
        calculo = "";
    }
}

function chamarconta4(){
    conta.innerHTML = calculo4.replace(/\*/g, 'x') // troca todos os * por x
    conta.innerHTML = calculo4.replace(/\/100/g, '%')
    conta4.innerHTML = ""
    calculo = calculo4
    contador--
}

function chamarconta3(){
    if (conta3.innerHTML === "") return;
    conta.innerHTML = calculo3.replace(/\*/g, 'x');
    conta.innerHTML = calculo3.replace(/\/100/g, '%')
    calculo = calculo3;
    
    conta3.innerHTML = conta4.innerHTML;
    calculo3 = calculo4;
    
    conta4.innerHTML = "";
    calculo4 = "";
    
    if (contador > 0) contador--;
}

function chamarconta2(){
if (conta2.innerHTML === "") return; // Evita erro se estiver vazio
    conta.innerHTML = calculo2.replace(/\*/g, 'x'); // /g troca todos os *
    conta.innerHTML = calculo2.replace(/\/100/g, '%')
    calculo = calculo2;
    
    // Faz a conta3 descer para a conta2 e a conta4 para a 3
    conta2.innerHTML = conta3.innerHTML;
    calculo2 = calculo3;
    
    conta3.innerHTML = conta4.innerHTML;
    calculo3 = calculo4;
    
    conta4.innerHTML = "";
    calculo4 = "";
    
    if (contador > 0) contador--;
}

if (contador < 0 ){
    contador = 0
}