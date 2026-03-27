console.log('1)')
class moto {
    constructor(marca,modelo,ano){
        this.marca=marca
        this.modelo=modelo
        this.ano=ano
    }
    dargrau(){
        console.log('A moto está dando grau')   
    }
}

let motoca = new moto('honda','titan','2007')
motoca.dargrau()
console.log(motoca)

//2
console.log('2)')
class pessoa {
    constructor(nome,idade,profissao){
        this.nome=nome
        this.idade=idade
        this.profissao=profissao
    }
    informacoes(){
        console.log('Nome:' + this.nome + ' Idade:' + this.idade + ' Profissão:' + this.profissao)
    }
}
let pessoa1 = new pessoa('Pedro','19','Engenheiro')
pessoa1.informacoes()

//3 e 6
console.log('3) e 6)')
class produto{
    constructor(nomeproduto, preco, quantidade){
        this.nomeproduto=nomeproduto
        this.preco=preco
        this.quantidade=quantidade
    }
    informacoesproduto(){
        console.log('Produto:' + this.nomeproduto + ' preço:R$' + this.preco + ' quantidade:' + this.quantidade)
    }
    vender(estoque){
        if(this.quantidade>0){
            this.quantidade-=estoque
            console.log('Produto vendido(' + estoque + ')')
            console.log('Estoque atual: ' + this.quantidade)
        } else {
            console.log('Não há mais ' + this.nomeproduto + ' para vender')
        }
    }
    repor(estoque){
        this.quantidade+=estoque
        console.log('Produto restocado(' + estoque + ')')
        console.log('Estoque atual: ' + this.quantidade)
    }
}
let alimento = new produto('Sucrilhos','10,00','250')
alimento.informacoesproduto()
alimento.vender(100)
alimento.vender(150)
alimento.vender(20)
alimento.repor(200)
alimento.vender(10)




//4
console.log('4)')
class filme{
    constructor(titulo, diretor, lancamento){
        this.titulo=titulo
        this.diretor=diretor
        this.lancamento=lancamento
    }
    informacoefilme(){
        console.log('O filme ' + this.titulo + ', dirigido por ' + this.diretor + ' foi lançado em ' + this.lancamento) 
    }
}
let movie = new filme('Interestelar','Christopher Nolan','6 de Novembro de 2014')
movie.informacoefilme()

// 5
console.log('5)')
class persona {
    constructor(personagem,energia,nivel){
        this.personagem=personagem
        this.energia=energia
        this.nivel=nivel
    }
    aumentarEnergia(ponto){
        this.energia+=ponto
        console.log('Ganhou ' + ponto + ' pontos de energia')
        console.log('energia total: ' + this.energia)
    }
    diminuirEnergia(ponto){
        if (this.energia>0){
            this.energia-=ponto
            console.log('Perdeu ' + ponto + ' pontos de energia')
            console.log('energia total: ' + this.energia)
        } else {
            console.log('Não é possível diminuir')
        }
    }
    subirNivel(){
        if (this.energia=100){
            this.nivel++
            console.log('Nivel aumentou!')
            console.log('Nível atual: ' + this.nivel)
            this.energia = 0
        } else {
            console.log('Ainda não é possível subir de nivel')
        }
    }
    verificarEnergia(){
        console.log('Energia total: ' + this.energia)
    }
}
let pa = new persona('Jorge',25,5)
console.log(pa)
pa.aumentarEnergia(75)
pa.subirNivel()
pa.verificarEnergia()
pa.aumentarEnergia(30)
pa.diminuirEnergia(25)





