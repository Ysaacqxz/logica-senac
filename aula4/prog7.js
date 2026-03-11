/*
let num1 = Number(prompt('Escolha o primeiro número:'))
let num2 = Number(prompt('Escolha o segundo número:'))
let num3 = Number(prompt('Escolha o terceiro número:'))
let num4 = Number(prompt('Escolha o quarto número:'))
let num5 = Number(prompt('Escolha o quinto número:'))
let result = num1 + num2 + num3 + num4 + num5
document.write(result)
*/

/* estrutura de repetição */
/* i=x(onde começa)
   i<x(onde termina)
   i++(aumento a cada repetição)
*/

let num, soma = 0;
for (let i=0;i<5; i++){
    num = Number(prompt('informe um número'))
    soma += num /* mesma coisa que soma = soma + num */
}
document.write(soma)