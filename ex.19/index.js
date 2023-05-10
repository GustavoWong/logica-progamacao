/*
19. Escreva um programa que calcule a raiz de uma equação do primeiro grau.
*/

const readline = require("readline-sync");

let b = parseFloat(readline.question("Digite o valor de b: "));
let a = parseFloat(readline.question("Digite o valor de a: "));

if (a !== 0) {
  let x = -b / a;
  console.log(x);
} else {
    console.log("A incógnita 'a' precisa ser diferente de zero.");
}
