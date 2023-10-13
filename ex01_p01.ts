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

const resultado = contarVogais("Diego");
console.log(`Numero de vogais é ${resultado}`);