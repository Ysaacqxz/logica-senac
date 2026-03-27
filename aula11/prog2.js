class contabancaria {
    #saldo
    constructor(titular, saldo){
        this.titular=titular
        this.#saldo=saldo // # atributo privado
    }

    depositar(valor){
        this.#saldo += valor;
        console.log('Depósito de R$' + valor +' -saldo' + this.#saldo);
    }
    consultarSaldo(){
        console.log('Saldo de R$' + this.#saldo)
    }
    debitar(valor){
        if(valor>this.#saldo){
            console.log('Não ha saldo para débito')
        } else {
            this.#saldo -= valor;
            this.consultarSaldo()
        }
        
    }
}
// criando uma conta

let conta1 = new contabancaria('Ysaac', 20000)
console.log(conta1)
conta1.depositar(20000000)
conta1.consultarSaldo()
conta1.debitar(20019999)
conta1.consultarSaldo