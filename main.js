const botao = document.getElementById("#btnCalcular")
const numero1 = document.querySelector("#num1")
const numero2 = document.querySelector("#num2")
const resultado = document.querySelector("#resultado")

function somar(){
let num1, num2, resCalculo;

num1 = Number(numero1.value);
num2 = Number(numero2.value);

alert(isNaN )

resCalculo = num1+num2;
resultado.innerHTML=resCalculo;
}

    function validarEntradas(){
        if (isNaN(numero1.value) === "" || isNaN(numero2.value) === "") {
            //não posso calcular
            resultado.innerHTML = "Valores inválidos. Insira novos valores (números)"
            return false
        } else {
            //posso calcular
            return ture
        }
    }

    function mostrarMensagemErro(){
        resultado.innerHTML = "Valores inválidos. Insira novos valores (números)";
    }

//O Programa começa aqui
if (validarEntradas()==true)
botao.addEventListener("click", somar)