let pessoa = {
    nome: 'Emerson',
    sobrenome: 'Paduan'
}

console.log(pessoa);

console.log(pessoa.nome);

// let meu_nome = pessoa.nome
const {nome, sobrenome} = pessoa

console.log("-> "+ nome);
console.log("-> "+ sobrenome);