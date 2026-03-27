class Carro{
    constructor(marca, modelo, cor){
        //atributos
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor
    }
    //metodo(função)
    acelerar(){
        console.log('O ' + this.modelo + ' está acelerando');
    }
    freiar(){
        console.log('O ' + this.modelo + ' está freiando')
    }
}
let meuCarro = new Carro('Toyota','Corolla','Preto')
meuCarro.acelerar()
console.log(meuCarro)
let carrovelho = new Carro('Volksvagen','voyage','verde')
carrovelho.freiar()