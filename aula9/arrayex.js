/*let cidades = ['uberlandia','mesquita','Nova Iguaçu','nilópolis','São Paulo']
console.log(cidades)*/


/*let num1 = parseInt(prompt('Digite um número'))
let num2 = parseInt(prompt('Digite outro número'))
let num3 = parseInt(prompt('Digite outro número'))
let numbers = [num1, num2, num3]
console.log(Math.max(numbers[0], numbers[1], numbers[2]))*/

let semana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta','sábado']
let dia = parseInt(prompt('Informe o dia da semana de 1 a 7'));

if (dia == 1){
    console.log(semana[0])
} else if (dia == 2){
    console.log(semana[1])
} else if (dia == 3){
    console.log(semana[2])
} else if (dia == 4){
    console.log(semana[3])
} else if (dia == 5){
    console.log(semana[4])
} else if (dia == 6){
    console.log(semana[5])
} else if (dia == 7){
    console.log(semana[6])
} else {
    console.log('não é um dia da semana')
}

