function contarVogais() {
    const palavraInput: HTMLInputElement = document.querySelector('input#palavra');
    const resultado: HTMLDivElement = document.querySelector('div#resultado');

    if (palavraInput && resultado) {
        const palavra: string = palavraInput.value;
        const palavraSeparada: string[] = palavra.toLowerCase().split("");
        let contador: number = 0;

        for (const letra of palavraSeparada) {
            if ("aeiou".includes(letra)) {
                contador++;
            }
        }

        resultado.innerHTML = `Número de vogais é ${contador}`;
    }
}




