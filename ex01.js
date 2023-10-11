"use strict";
function contarVogais(palavra) {
    let letras = palavra;
    const palavraSeparada = letras.toLowerCase().split("");
    let cont = 0;
    for (const a of palavraSeparada) {
        if ("aeiou".includes(a)) {
            cont++;
        }
    }
    return cont;
}
const resultado = contarVogais("Diego");
console.log(`Numero de vogais é ${resultado}`);
