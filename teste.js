const cliente = {
    nome: 'rayane',
    idade: 24,
    email: 'rayane@teste.com',
    telefone: ['111111111111', '22222222222'],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor >this.saldo) {
            console.log('Saldo insuficiente');
        }else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
}

cliente.efetuaPagamento(150)