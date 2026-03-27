let frutas = ['cereja ','maçã ','pera ','banana ','mirtilo ','goiaba ']


for (let i=0; i<6; i++){
    document.write(frutas[i].toUpperCase()+'<br>')
}

/*let numeros = []
let soma = 0 
for (let i=0; i<4; i++){
    let n =parseFloat(prompt('Insira o número'))
    numeros.push(n)
    soma = soma + n
}
let media = soma/numeros.length
document.write(media)*/

let numbers = [2 ,6 ,7 ,12 ,98 ,1178 ,9 ,54, 9 ,10]
document.write(numbers + '<br>')
for (let i2=0; i2<9; i2++){
    if (numbers[i2] % 3 == 0){
        document.write(numbers[i2] + '<br>')
    }
}

let palavras = []
for (let i3=0; i3<5; i3++){
    palavras.push(prompt('Insire uma palavra'))
}
for(i3=0; 3 < palavras.length; i3++){
    if (palavras[i3].length > 5){
    document.write(palavras[i3] + '<br>')
    }
}

numeros = []
parseInt(Math.random()*9)

switch (numeros){
    case 0:
        document.write
}