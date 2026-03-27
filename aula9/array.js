let frutas = ["Maça","Banana","Laranja"];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
frutas.push("Abacate");
frutas.push('cereja', 'mertilo')
console.log(frutas)
frutas.pop()
console.log(frutas)
console.log("ordenando o string do array");
frutas.sort();
console.log(frutas)

let copia = [...frutas]
console.log(copia)
console.log(frutas.length)

let indiceAleatorio = Math.floor(Math.random()*frutas.length);
console.log(frutas[indiceAleatorio]);
