number = Math.floor(Math.random() * 101) + 1
if (number % 2 === 0){
    console.log(number + ' é par')
} else {
    console.log(number + ' é impar')
}

number2 = Math.floor(Math.random() *6) + 1
console.log('O dado deu ' + number2)

number3 = parseFloat(prompt('Escreva um número decimal'))
console.log(Math.ceil(number3))
console.log(Math.floor(number3))
console.log(Math.round(number3))

cateto1 = parseInt(prompt('Informe o cateto'))
cateto2 = parseInt(prompt('Informe o outro cateto'))
b2 = parseInt(Math.pow(cateto1,2))
c2 = parseInt(Math.pow(cateto2,2))
a2 = parseInt(b2 + c2)
hipotenusa = parseInt(Math.sqrt(a2))
console.log('A hipotenusa é ' + hipotenusa)

