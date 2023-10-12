let lista: Object = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

// a) Crie uma função que retorne a bio do id passado

interface Pessoas {
    id: number;
    name: string;
    bio: string;
}

const listaDePessoas : Pessoas[] = [...lista]

//console.log(listaDePessoas)

function pegarBioPeloID(id: number): string | null {
    const pessoa = listaDePessoas.find((item) => item.id === id)

    if (pessoa) {
        return pessoa.bio;
    } else {
        return null;
    }
}

//console.log(pegarBioPeloID(1))

//b) Crie uma função que retorne o name do id passado

function pegarNomePeloID(id: number): string | null {
    const pessoa = listaDePessoas.find((item) => item.id === id)

    if (pessoa) {
        return pessoa.name;
    } else {
        return null;
    }
}

console.log(pegarNomePeloID(1))

