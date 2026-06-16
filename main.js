const botao = document.getElementById("btnSomar")
const numero1 = document.querySelector("#num1")
const numero2 = document.querySelector("#num2")
const resultado = document.querySelector("#resultado")
const botaoSubitracao = document.querySelector("#btnSubtrair")
const botaoLimpar = document.querySelector("#btnLimpar")
const caixaResultado = document.querySelectorAll(".box")[1]
const botaoDivisao = document.querySelector("#btnDividir")
const botaoMultiplicacao = document.querySelector("#btnMultiplicar")
 
 
function somar(){
let num1, num2, resCalculo;
 
if (validarEntradas() === true) {
    num1 = Number(numero1.value);
    num2 = Number(numero2.value);
    resCalculo = num1 + num2;
    caixaResultado.classList.remove("invisible")
    exibirResultado(resCalculo);
} else {
    mostrarMensagemErro();
}
 
}
 
function subtrair() {
let num1, num2, resCalculo;
 
if (validarEntradas() === true) {
    num1 = Number(numero1.value);
    num2 = Number(numero2.value);
    resCalculo = num1 - num2;
    caixaResultado.classList.remove("invisible")
    exibirResultado(resCalculo);
} else {
    mostrarMensagemErro();
}
}
 
function multiplicar() {
    let num1, num2, resCalculo;
 
    if (validarEntradas() === true) {
        num1 = Number(numero1.value);
        num2 = Number(numero2.value);
        resCalculo = num1 * num2;
        caixaResultado.classList.remove("invisible")
        exibirResultado(resCalculo);
    } else {
        mostrarMensagemErro();
    }
}
 
function dividir() {
    let num1, num2, resCalculo;
 
if (validarEntradas(numero1 && numero2 > 0) === true) {
    num1 = Number(numero1.value);
    num2 = Number(numero2.value);
    resCalculo = num1 / num2;
    caixaResultado.classList.remove("invisible")
    exibirResultado(resCalculo);
} else {
    mostrarMensagemErro("Valores Inválidos - Divisor por zero");
}
}
 
function LimparCampos() {
    numero1.value = ""
    numero2.value = ""
    resultado.innerHTML=""
    caixaResultado.classList.add("invisible")
}
    function validarEntradas(){
        if (isNaN(numero1.value) === "" || isNaN(numero2.value) === "") {
           
            resultado.innerHTML = "Valores inválidos. Insira novos valores (números)"
            return false
        } else {
           
            return true
        }
    }
 
    function mostrarMensagemErro(){
        resultado.innerHTML = "Valores inválidos. Insira novos valores (números)";
    }
 
    function exibirResultado(valor) {
        resultado.innerHTML = "Resultado: " + valor
    }
 
//O Programa começa aqui
 
botao.addEventListener("click", somar)
botaoSubitracao.addEventListener("click", subtrair)
botaoLimpar.addEventListener("click", LimparCampos)
botaoDivisao.addEventListener("click", dividir)
botaoMultiplicacao.addEventListener("click", multiplicar)