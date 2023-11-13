const dados = require('./exercicio.json');

function encontrar (lista,chave, valor) {
    return lista.find((item) => item[chave] === valor);
}

const encontrado = encontrar(dados, "nome", "Kirby");

console.log(encontrado)