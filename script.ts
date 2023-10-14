function contarVogais(palavra: string) {
    const palavraSeparada: string[] = palavra.toLowerCase().split("");
    let contador: number = 0;

    for(let a of palavraSeparada) {
        if("aeiou".includes(a)) {
            contador++;
        }
    }

    return contador;
}

function suporteParaOClique() {
    const palavraInput = (document.getElementById('palavra') as HTMLInputElement).value;
    const resultado: number = contarVogais(palavraInput);
    const resultadoElemento = document.querySelector('div#resultado');

    if (resultadoElemento) {
        resultadoElemento.innerHTML = `Número de vogais é ${resultado}`;
    }
}

let lista: Object = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];

function criarTabela() {
    const tabelaCorpo = document.getElementById('tabelaCorpo');

    for (let i = 0; i < lista.length; i++) {
        const linha = tabelaCorpo.insertRow();
        const cellId = linha.insertCell(0);
        const cellNome = linha.insertCell(1);
        const cellBio = linha.insertCell(2);

        cellId.innerHTML = lista[i]["id"].toString();
        cellNome.innerHTML = lista[i]["name"];
        cellBio.innerHTML = lista[i]["bio"];
    }
}

window.onload = criarTabela;

interface Pessoas {
    id: number;
    name: string;
    bio: string;
}

const listaDePessoas : Pessoas[] = [...lista]

function pegarBioPeloID(id: number): string | null {
    const pessoa = listaDePessoas.find((item) => item.id === id);

    if (pessoa) {
        return pessoa.bio;
    } else {
        return null;
    }
}

function consultarBiografia() {
    const consultaId = parseInt((document.getElementById('consultaId') as HTMLInputElement).value);
    const consultaResultado = document.getElementById('consultaResultado');

    const biografia = pegarBioPeloID(consultaId);

    if (biografia) {
        consultaResultado.innerHTML = `Biografia: ${biografia}`;
    } else {
        consultaResultado.innerHTML = "Pessoa não encontrada.";
    }
}

function pegarNomePeloID(id: number): string | null {
    const pessoa = listaDePessoas.find((item) => item.id === id);

    if (pessoa) {
        return pessoa.name;
    } else {
        return null;
    }
}

function consultarNomePorID() {
    const consultaNomeId = parseInt((document.getElementById('consultaNomeId') as HTMLInputElement).value);
    const consultaNomeResultado = document.getElementById('consultaNomeResultado');

    const nome = pegarNomePeloID(consultaNomeId);

    if (nome) {
        consultaNomeResultado.innerHTML = `Nome: ${nome}`;
    } else {
        consultaNomeResultado.innerHTML = "Pessoa não encontrada.";
    }
}

function apagarItemPeloID(id: number): void {
    for (let i = 0; i < listaDePessoas.length; i++) {
        if (listaDePessoas[i].id === id) {
            listaDePessoas.splice(i, 1);
            break;
        }
    }
}

function apagarItem() {
    const apagarId = parseInt((document.getElementById('apagarId') as HTMLInputElement).value);

    apagarItemPeloID(apagarId);

    const tabelaCorpo = document.getElementById('tabelaCorpo');
    const linhas = tabelaCorpo.getElementsByTagName('tr');

    for (let i = 0; i < linhas.length; i++) {
        const cells = linhas[i].getElementsByTagName('td');
        if (cells[0].innerHTML === apagarId.toString()) {
            tabelaCorpo.removeChild(linhas[i]);
            break;
        }
    }
}

function alterarItemPeloID(id: number, novoNome?: string, novaBio?: string): void {
    const pessoa = listaDePessoas.find((item) => item.id === id);

    if (pessoa) {
        if (novoNome !== undefined) {
            pessoa.name = novoNome;
        }
        if (novaBio !== undefined) {
            pessoa.bio = novaBio;
        }
    }
}

function alterarItem() {
    const alterarId = parseInt((document.getElementById('alterarId') as HTMLInputElement).value);
    const novoNome = (document.getElementById('novoNome') as HTMLInputElement).value;
    const novaBio = (document.getElementById('novaBio') as HTMLInputElement).value;


    alterarItemPeloID(alterarId, novoNome, novaBio);

    const tabelaCorpo = document.getElementById('tabelaCorpo');
    const linhas = tabelaCorpo.getElementsByTagName('tr');

    for (let i = 0; i < linhas.length; i++) {
        const cells = linhas[i].getElementsByTagName('td');
        if (cells[0].innerHTML === alterarId.toString()) {
            cells[1].innerHTML = novoNome;
            cells[2].innerHTML = novaBio;
            break;
        }
    }
}