/*
24. Escreva um programa que leia três números e mostre o maior entre eles.
*/

const readline = require("readline-sync");

const n1 = parseFloat(readline.question("Digite o primeiro numero: "));
const n2 = parseFloat(readline.question("Digite o segundo numero: "));
const n3 = parseFloat(readline.question("Digite o terceiro numero: "));

if (n1 > n2 && n1 > n3) {
    console.log(`${n1} é o maior número`);
}
if (n2 > n1 && n2 > n3) {
    console.log(`${n2} é o maior número`);
}
if (n3 > n2 && n3 > n1) {
    console.log(`${n3} é o maior número`);
}