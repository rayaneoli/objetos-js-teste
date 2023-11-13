const clientes = require("./exercicio.json");

function filtrandoApartamentoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const encontrado = filtrandoApartamentoSemComplemento(clientes)

console.log(encontrado)