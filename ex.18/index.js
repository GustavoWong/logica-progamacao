/*
Escreva um programa que permute o valor de duas variáveis inteiras.
*/

//* para ficar um pouco dificil, não utilizar variavel auxiliar

let a = 23;
let b = 18;

a = a + b; // Soma a + b e atribui o resultado a "a" --> 41
b = a - b; // Subtrai o valor original de b pela soma anterior de a, (novo valor) --> 23
a = a - b; // Subtrai o valor de a -> 41, menos o valor original de b -> 18. NOVO VALOR DE B -> 18

console.log(a, b); // 18, 23
