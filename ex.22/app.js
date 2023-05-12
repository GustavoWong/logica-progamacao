/*
22. Escreva um programa que leia um número e exiba o seu módulo.
*/

const readline = require("readline-sync");

const x = readline.question("Digite o numero: ");
let modulo;
if (x < 0){
    modulo = x * (-1);
} else {
    modulo = x;
}

console.log(`O modulo de ${x} é ${modulo}`);