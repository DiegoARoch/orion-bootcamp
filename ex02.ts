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
    const pessoa = listaDePessoas.find((item) => item.id === id) //funcional

    if (pessoa) { // Imperativo
        return pessoa.bio;
    } else {
        return null;
    }
}

//console.log(pegarBioPeloID(1))

//b) Crie uma função que retorne o name do id passado

function pegarNomePeloID(id: number): string | null {
    const pessoa = listaDePessoas.find((item) => item.id === id) //funcional

    if (pessoa) { // Imperativo
        return pessoa.name;
    } else {
        return null;
    }
}

//console.log(pegarNomePeloID(1))

//c) Crie uma função que apague um item da lista a partir de um id passado

function apagarItemPeloID(id: number): void {
    for (let i = 0; i < listaDePessoas.length; i++) { //imperativo
        if (listaDePessoas[i].id === id) {
            listaDePessoas.splice(i, 1);//splice funcional
            break;
        }
    }
}

//apagarItemPeloID(2)
//console.log(listaDePessoas)

// d) Crie uma função que altere a bio ou o name a partir de um id passado

function alterarItemPeloID(id: number, novoNome?: string, novaBio?: string): void {
    const pessoa = listaDePessoas.find((item) => item.id === id)//funcional

    if (pessoa) { //imperativo
        if (novoNome !== undefined) {
            pessoa.name = novoNome;
        }
        if (novaBio !== undefined) {
            pessoa.bio = novaBio;
        }
    }
}

//const bioClapton: string = "Eric Clapton é um renomado músico britânico nascido em 30 de março de 1945 em Ripley, Surrey, Inglaterra. Ele é amplamente considerado um dos maiores guitarristas de todos os tempos e é conhecido por sua carreira solo de sucesso, bem como por seu trabalho com várias bandas e músicos notáveis."

//alterarItemPeloID(2, undefined, bioClapton)
//console.log(listaDePessoas)

//alterarItemPeloID(2, "Eric Clapton", bioClapton)
//console.log(listaDePessoas)

// e) Demonstre todas as funções com o paradigma funcional e com o imperativo

//QUESTÂO A - FUNCIONAL

function pegarBioPeloIDFuncional(id: number): string | undefined {
    const pessoa = listaDePessoas.find((item) => item.id === id);
    return pessoa ? pessoa.bio : null;
}

//QUESTÃO A - IMPERATIVO

function pegarBioPeloIDImperativo(id: number): string | undefined {
    for (let i = 0; i < listaDePessoas.length; i++) {
        if (listaDePessoas[i].id === id) {
            return listaDePessoas[i].bio;
        }
    }
    return null;
}

//QUESTÃO B - FUNCIONAL

function pegarNomePeloIDFuncional(id: number): string | undefined {
    const pessoa = listaDePessoas.find((item) => item.id === id)
    return pessoa ? pessoa.name : null;
}

//QUESTÃO B - IMPERATIVO

function pegarNomePeloIDImperativo(id: number): string | undefined {
    for (let i = 0; i < listaDePessoas.length; i++) {
        if (listaDePessoas[i].id === id) {
            return listaDePessoas[i].name;
        }
    }
    return null;
}

//QUESTÃO C - FUNCIONAL

function apagarItemPeloIDFuncional(id: number): void {
   const listaRemover = listaDePessoas.findIndex((pessoa) => pessoa.id === id);

   listaRemover !== -1 && listaDePessoas.splice(listaRemover, 1);
}


//QUESTÃO C - IMPERATIVO

function apagarItemPeloIDImperativo(id: number): void {
    for (let i = 0; i < listaDePessoas.length; i++) {
        if (listaDePessoas[i].id === id) {
            for (let j = i; j < listaDePessoas.length - 1; j++) {
                listaDePessoas[j] = listaDePessoas[j + 1];
            }
            listaDePessoas.length--;
            break;
        }
    }
}

//QUESTÃO D - FUNCIONAL

function alterarItemPeloIDFuncional(id: number, novoNome?: string, novaBio?: string): void {
    const pessoaIndex = listaDePessoas.findIndex((item) => item.id === id);

    if (pessoaIndex !== -1) {
        listaDePessoas[pessoaIndex] = {
            ...listaDePessoas[pessoaIndex],
            name: novoNome ?? listaDePessoas[pessoaIndex].name,
            bio: novaBio ?? listaDePessoas[pessoaIndex].bio,
        };
    }
}

//QUESTÃO D - IMPERATIVO

function alterarItemPeloIDImperativo(id: number, novoNome?: string, novaBio?: string): void {
    for (let i = 0; i < listaDePessoas.length; i++) {
        if (listaDePessoas[i].id === id) {
            if (novoNome !== undefined) {
                listaDePessoas[i].name = novoNome;
            }
            if (novaBio !== undefined) {
                listaDePessoas[i].bio = novaBio;
            }
            break;
        }
    }
}





