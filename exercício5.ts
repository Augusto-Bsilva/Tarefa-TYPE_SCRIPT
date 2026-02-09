type Genero = "masculino"|"feminino";

interface Pessoa {
    nome:string;
    idade:number;
    genero:Genero;
}

const testPessoa: Pessoa = {
    nome:'Augusto',
    idade:19,
    genero:'masculino'
}

function apresentarPessoa(pessoa:Pessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}`
}

console.log(apresentarPessoa(testPessoa))