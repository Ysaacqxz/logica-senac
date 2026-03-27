function paraMaiusculas(texto) {  

    return texto.toUpperCase();  
    
    } 
    
console.log(paraMaiusculas("olá mundo")); // "OLÁ MUNDO"

function paraMinusculas(texto) {  

        return texto.toLowerCase();  
    
    } 
    
console.log(paraMinusculas("OLÁ MUNDO")); // "olá mundo" 

// função Math.floor() 
// arredonta um número para baixo. Exemplos 
console.log("*** Números com floor ***") 
console.log(Math.floor(4.9)); // 4 
console.log(Math.floor(2.3)); // 2 
 
// função Math.random() 
// gera números aleatórios 
console.log("*** Números aleatórios ***") 
// entre 0 e 1, onde 0 incluso e 1 excluso 
console.log(Math.random()); 
console.log(Math.floor(Math.random() * 11)); 
// entre 1 e 6 
console.log(Math.floor(Math.random() * 6) + 1)

//console.log(Math.ceil(//preco)); // 11 
// função Math.round() arredondamento normal 
console.log("*** Números com round ***") 
console.log(Math.round(4.4)); 
console.log(Math.round(4.7)); 
let media = 7.6; 
console.log(Math.round(media));

// função Math.max() e Math.min() 
console.log("*** Números max e min ***") 
console.log(Math.max(10, 20, 5, 30)); 
console.log(Math.min(10, 20, 5, 30));

// função Math.pow() = potência 
console.log("*** Números pow ***") 
console.log(Math.pow(2,3)); // 2³ 
let lado = 4; 
let area = Math.pow(lado,2) 
console.log("Área do quadrado: "+area);