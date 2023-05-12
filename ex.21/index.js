/*
Escreva um programa que leia um número e exiba se ele é positivo ou negativo.
*/
// Porque utilizei esta biblioteca do js para está simples verificação???
//? Bem a resposta é que por padrão o javascript não sabe lidar com numeros muito grandes e por isso pode ocorrer algumas imprecisões em calculos muito grande e complexos. E por isso utilizei essa lib.

const readline = require("readline-sync");
const BigNumber = require("bignumber.js");

const num = parseInt(readline.question("Digite o numero: "));

//? Sem a lib
if (num > 0) {
  console.log("O numero informado é positivo");
} else if (num < 0) {
  console.log("O numero informado é negativo");
} else {
  console.log("O numero informado é neutro");
}


//* Com a lib
const numLib = new BigNumber(readline.question("Digite o numero: "));

if(numLib.isPositive()){
    console.log("numLib é positivo");
} else if (numLib.isNegative()){
    console.log("numLib é negativo");
} else {
    console.log("numLib é ZERO");
}