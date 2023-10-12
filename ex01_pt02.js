"use strict";
function contarVogais() {
    const palavraInput = document.querySelector('input#palavra');
    const resultado = document.querySelector('div#resultado');
    if (palavraInput && resultado) {
        const palavra = palavraInput.value;
        const palavraSeparada = palavra.toLowerCase().split("");
        let contador = 0;
        for (const letra of palavraSeparada) {
            if ("aeiou".includes(letra)) {
                contador++;
            }
        }
        resultado.innerHTML = `Número de vogais é ${contador}`;
    }
}
