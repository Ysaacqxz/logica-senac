let matriz = []

for (let i=0; i< 3; i++){
    matriz[i] = []
    for (let j=0; j<3; j++){
        matriz[i][j] = prompt('Informe um valor para ' + i + ', ' + j) 
    }
}
console.log(matriz)