//exercicio 1

let meuNome = "Larissa";
console.log(meuNome);

//exercício 2

let string1 = "Olá mundo";
let string2 = "Olá mundo";

if (string1 == string2) {
    console.log("as strings são iguais.");
} else {
    console.log("as strings são diferentes.");
}

//exercicio 3

let numero = 20;
if (numero > 10) {
    console.log("O número é maior que 10.");
} else {
    console.log("O número não é maior que 10.");
}

//Exercicio 4

let idade = 18; 

if (idade >= 18) {
    console.log("Parabéns!");
} else {
    console.log("Idade abaixo de 18.");
}

//Exercicio 5

let idade1 = 16;

if (idade1 >= 16) {
    console.log("Já pode votar");
} else {
    console.log("idade menor de 16")
}

//exercicio 6

let numero1 = 97; 

if (numero >= 50 && numero1 <= 100) {
    console.log("O número está entre 50 e 100.");
} else {
    console.log("O número não está entre 50 e 100.");
}

//exercicio 1 medio

let nome = ("Qual é o seu nome?");
let idade2 = ("Qual é a sua idade?");

if (idade2 >= 18) {
    console.log(nome + ", você é maior de idade.");
} else {
    console.log(nome + ", você não é maior de idade.");
}

//exercicio 2

let numero2 = 15;
let numero3 = 20; 

if (numero2 > numero3) {
    console.log("A maior é: " + numero2);
} else if (numero3 > numero2) {
    console.log("A maior é: " + numero3);
} else {
    console.log("Os números são iguais.");
}

//exercicio 3

let texto = "Olá, Senai!"; 

if (texto.length > 5) {
    console.log("O texto contém mais de 5 caracteres.");
} else {
    console.log("O texto contém 5 caracteres ou menos.");
}

//exercicio 4

let number = 1
let number0 = 6

if ( number % 2 === 0 && number0 % 2 === 1){
    console.log (`só ${number} é par`)
}

else if ( number % 2 === 0 && number0 % 2 === 0){
    console.log ( 'os dois numeros são pares')
}

else if ( number % 2 === 1 && number0 % 2 === 1){
    console.log ('os dois são números impares')
}

else (
    console.log (`só o ${number0} é par`)
)


//exercicio 5

let java = 'Hello World';

if (java.toLowerCase().includes('javascript')) {
    console.log('essa frase tem javascript');
} 
else {
    console.log('essa frase não contém javascript');
}

//exercicio 6

let salario = 2500

if ( salario < 2000){
    console.log ('o salário está abaixo de 2000')
    }

else if (salario === 2000){
    console.log ('o salário é 2000')
}

else (
    console.log ('o salário está acima de 2000')
)

//exercicio alta complexidade 1

