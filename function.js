function saudar(nome){ //com parâmetro
    alert(`${nome}, Seja bem vindo ao nosso site!`);
}

function media(numero1, numero2){ //com parâmetro com retorno
    let media;
    media = (numero1 + numero2)/2;
    return media;
}

//Function com parametro e sem retorno
saudar("Juquinha");

function { //sem parametro e com retorno
    return Math.PI;
}

//Function com parametro e com retorno
//O retorno pode ser adcionado a uma variavél
let testandoRetorno = media(8,10);
//Ou exibido na tela
console.log(media(8,10));
alert(media(8,10));
document.getElementById('resultado').innerHTML = media(8,10);

function helloWorld(){ //Sem retorno
    alert("Hello World!!!");
}

console.log(mostrarPI());
alert(mostrarPI());
document.getElementById('resultado').innerHTML = mostrarPI();