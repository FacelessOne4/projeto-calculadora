function somar(){
let numero1, numero2, resultado;

numero1 = document.querySelector('#num1').value;
numero1 = document.querySelector('#num2').value;
numero1 = document.querySelector('#resultado').innerHTML;

resultado = numero1 + numero2;

document.querySelector("#resultado").innerHTML=resultado;
}

somar()