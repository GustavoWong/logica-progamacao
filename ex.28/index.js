//. Escreva um programa que leia uma letra e mostre se ela é vogal ou consoante

//const readline = require("readline-sync");

//let letra = readline.question("Digite a letra: ").toUpperCase();
let letra = prompt("Digite a letra: ").toUpperCase();
const isvogal = ["A", "E", "I", "O", "U"];

if (!isNaN(letra)) {
  console.log("Valor invalido");
} else if (isvogal.includes(letra)) {
  console.log(`${letra} é uma vogal`);
} else {
  console.log(`${letra} é uma consoante`);
}
