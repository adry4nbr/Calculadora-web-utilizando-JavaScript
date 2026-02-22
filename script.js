let conta4 = document.querySelector('.conta4')
let conta3 = document.querySelector('.conta3')
let conta2 = document.querySelector('.conta2')
let conta = document.querySelector('.conta')

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
    conta.innerHTML += "%"
    calculo += '/100'
}

function Fdividir(){
    verificarZero()
    conta.innerHTML += "/"
    calculo += "/"
}

function Fsete(){
    verificarZero()
    conta.innerHTML += 7
    calculo += 7
}

function Foito(){
    verificarZero()
    conta.innerHTML += 8
    calculo += 8
}

function Fnove(){
    verificarZero()
    conta.innerHTML += 9
    calculo += 9
}

function Fvezes(){
    verificarZero()
    conta.innerHTML += 'x'
    calculo += "*"
}

function Fquatro(){
    verificarZero()
    conta.innerHTML += 4
    calculo += 4
}

function Fcinco(){
    verificarZero()
    conta.innerHTML += 5
    calculo += 5
}

function Fseis(){
    verificarZero()
    conta.innerHTML += 6
    calculo += 6
}

function Fmenos(){
    verificarZero()
    conta.innerHTML += "-"
    calculo += "-"
}


function Fum(){
    verificarZero()
    conta.innerHTML += 1
    calculo += 1
}

function Fdois(){
    verificarZero()
    conta.innerHTML += 2
    calculo += 2
}

function Ftres(){
    verificarZero()
    conta.innerHTML += 3
    calculo += 3
}

function Fmais(){
    verificarZero()
    conta.innerHTML += "+"
    calculo += "+"
}

function Fzero(){
    verificarZero()
    conta. innerHTML += 0
    calculo += 0
}

function Fponto(){
    verificarZero()
    conta.innerHTML += "."
    calculo += "."
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