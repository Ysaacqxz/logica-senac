/* Desenvolva um jogo de batalha naval
- crie uma matriz 5x5 que representa o oceano
- coloque o navio em uma coordenada, inserindo na posição
que você desejar o valor 1, preencha as demais posições
com 0
- o jogador deve tentar acertar o alvo, digitando a 
coordenada de linha e coluna
- o programa informa se na linha e coluna digitada o valor
é igual a 1, que é a posição do navio
*/
let matriz = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
let ponto = 0, colAntiga, lin, col;
for (let i=0; i<5; i++){
    col = Math.floor(Math.random()*5);
    lin = i;
    matriz[lin][col] = 1;
}

for (let i = 0; i < 5; i++) {
    lin = prompt('informe o número da linha');
    col = prompt('informe o número da coluna');
    if (lin > 5 || col > 5) {
        alert('Coordenada inválida');
        continue;
    }
    if (matriz[lin][col] == 1) {
        alert('Acertou!!!! Cabra bom');
        ponto++;
        matriz[lin][col] = 0;
        colAntiga = col;
        while (colAntiga == col) {
            col = Math.floor(Math.random()*5);
        }
        matriz[lin][col] = 1;
    } else {
        alert('Falhou na tentativa');
    }
}
alert('Sua pontuação foi: ' + ponto);