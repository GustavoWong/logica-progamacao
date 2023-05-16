/*
Escreva um programa que leia 3 valores e escreva a soma dos 2 maiores.
*/

const readline = require("readline-sync");

const v1 = parseInt(readline.questionInt("Digite o primeiro valor INTERIRO: "));
const v2 = parseInt(readline.questionInt("Digite o segundo valor INTERIRO: "));
const v3 = parseInt(readline.questionInt("Digite o terceiro valor INTERIRO: "));



if ( v1 == v2 && v2 == v3 ) {
    let somaDosMaiores = v1 * 2; // caso todos sejam iguais a soma é o dobro
    console.log(`As somas dos dois maiores é: ${somaDosMaiores}`);
} else {

let somaDosMaiores = 0;
// Verifica qual é o maior valor
let maior = Math.max(v1, v2, v3);

// Calcula a soma dos dois maiores.
if (v1 == maior) {
  somaDosMaiores += v1 + Math.max(v2, v3);
}
if (v2 == maior) {
  somaDosMaiores += v2 + Math.max(v1, v3);
}
if (v3 == maior) {
  somaDosMaiores += v3 + Math.max(v2, v1);
}

// Printa a soma.
console.log(`As somas dos dois maiores é: ${somaDosMaiores}`);

}
/*
? A função Math.max() é uma função embutida do JavaScript que retorna o maior valor entre dois ou mais valores passados como argumentos.
*/