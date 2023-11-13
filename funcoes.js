const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@teste.com',
    telefone: ['11111111111', '2222222222'],
    saldo: 200,
    efetuaPagamento: function(valor){
        if (valor > this.saldo){
            console.log('Saldo insuficiente')
        }else{
            this.saldo -= valor;
            console.log(`Compra aprovada. Seu novo saldo é ${this.saldo}`)
        }
    }
}
cliente.efetuaPagamento(150)