let nota1 = parseFloat(prompt('informe a primeira nota'))
let nota2 = parseFloat(prompt('informe a segunda nota'))
let result = ((nota1 + nota2)/2)>=6 ? 'aprov' : 'reprov';
document.write('O aluno está ' + result)