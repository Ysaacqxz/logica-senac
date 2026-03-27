// matriz

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(matriz)
console.log(matriz[1][1]);
matriz[1][1] = 99
console.log(matriz)

for (let i=0; i<matriz.length; i++){
    for (let j=0; j< matriz[i].length; j++){
        document.write(matriz[i][j] +'<br>')
    }
}

