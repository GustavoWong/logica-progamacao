// Tem que baixar a lib number-to-word para ele transfomar um number em uma string por extenso de acordo com o número!

const readline = require("readline-sync");
const numberToWords  = require("number-to-words");

const number = parseInt(readline.question("Digite um número: "));

const result = numberToWords.toWords(number);
console.log(result);

// Bem os números estão em inglês mais vai mesmo assim..