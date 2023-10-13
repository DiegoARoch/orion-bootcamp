function contarVogais(palavra: string) {
    const letras: string = palavra;
    const palavraSeparada: string[] = letras.toLowerCase().split("");
    let contador: number = 0;

    for(let a of palavraSeparada) {
        if("aeiou".includes(a)) {
            contador++;
        }
    }

    return contador;
}

function suporteParaOClique() {
    const palavraInput: HTMLInputElement = document.querySelector('input#palavra').value;
    const palavra: string = palavraInput;
    const resultado: number = contarVogais(palavra);
    const resultadoElemento = document.querySelector('div#resultado');

    if (resultadoElemento) {
        resultadoElemento.innerHTML = `Número de vogais é ${resultado}`;
    }
}



