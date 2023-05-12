/*
23. Escreva um programa que leia um número e imprima se este número é ou não par.
*/

const readline = require("readline-sync");
const BigNumber = require("bignumber.js");

let number = new BigNumber(readline.question("Digite o numero: ")); 

if (number.mod(2).isEqualTo(0)){
    console.log("Par");
} else {
    console.log("Impar");
}