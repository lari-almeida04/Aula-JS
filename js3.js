//exercicio 1 

let numeros = [];  

numeros.push(10); 
numeros.push(20);  
numeros.push(30);  
console.log(numeros);

//exercicio 2

let num = [13, 23]; 

let primeiroElemento = num[0];

console.log(primeiroElemento);

//Exercicio 3   

let numeros1 = [10, 30, 50]; 

numeros[1] = 100;

console.log(numeros); 

//Exercicio 4

let colors = ["azul", "roxo", "amarelo", "laranja", "amarelo"]; 

console.log(colors.length); 

//Exercicio 5

let numeross = [1, 2, 3, 4, 5]; 

let soma1 = 0;

for (let i = 0; i < numeross.length; i++) {
    soma += numeross[i]; 
}

console.log(soma); 

//Exercicio 6

let cores = ["rosa", "branco", "verde", "laranja", "preto"]; 

cores.pop();

console.log(cores); 

//Exercicio 7

let frutas = ["banana", "laranja", "uva"];

frutas.unshift("maçã");

console.log(frutas); 

//exercicio 8

let array1 = [1, 2, 3];  
let array2 = [4, 5, 6];  


let arrayCombinado = array1.concat(array2);

console.log(arrayCombinado); 


// exercicio 1 de médio

let numbers = [1, 2, 3, 4, 5]; 

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Exercicio 2

let livros = [
    { nome: 'Eu e esse meu coração', autor: 'C. C. Hunter' },
    { nome: 'É assim que começa', autor: 'Colleen Hoover' },

];

for (let i = 0; i < livros.length; i++) {
    console.log(livros[i].nome);
}

//Exrcicio 3

let numeroos = [2, 3, 6, 4];

let dobrados = numeroos.map(x => x * 2);

console.log(dobrados);

//Exercicio 4

let n = [2, 12, 5, 20, 35]; 

let maioresQueDez = n.filter(x => x > 10);

console.log(maioresQueDez); 

//Exercicio 5

let numeros2 = [2, 1, 6, 8]; 

let todosPares = numeros2.every(x => x % 2 === 0);

console.log(todosPares); 

//Exercicio 6

let ns = [99, 10, -3, 34, 15];

let primeiroNegativo = ns.find(x => x < 0);

console.log(primeiroNegativo); 

//Exercicio 7

let numeros = [5, 3, 8, 1, 4]; 

numeros.sort((a, b) => a - b);

console.log(numeros); 

//Exercicio 8

let nombres = [2, 3, 4, 6];

nombres.splice(4, 0, 5);

console.log(nombres);

//exercicio dificil 1

function interseccao(arrayd1, arrayd11) {
    return arrayd1.filter(elemento => arrayd11.includes(elemento));
}

let arrayd1 = [1, 2, 3, 4];
let arrayd11 = [3, 4, 5, 6];
console.log(interseccao(arrayd1, arrayd11));



//exercicio 2
function mediaAritmetica(arrayd2) {
    const soma2 = arrayd2.reduce((acc, num) => acc + num, 0);
    return soma2 / arrayd2.length;
}

let arrayd21 = [10, 20, 30, 40];
console.log(mediaAritmetica(arrayd21));


