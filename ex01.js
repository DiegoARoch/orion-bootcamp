"use strict";
function contarVogais(palavra) {
    const letras = palavra;
    const palavraSeparada = letras.toLowerCase().split("");
    let contador = 0;
    for (let a of palavraSeparada) {
        if ("aeiou".includes(a)) {
            contador++;
        }
    }
    return contador;
}
function suporteParaOClique() {
    const palavraInput = document.querySelector('input#palavra').value;
    const palavra = palavraInput;
    const resultado = contarVogais(palavra);
    const resultadoElemento = document.querySelector('div#resultado');
    if (resultadoElemento) {
        resultadoElemento.innerHTML = `Número de vogais é ${resultado}`;
    }
}
