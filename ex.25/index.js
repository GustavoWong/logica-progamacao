/*
Escreva um programa que leia o número equivalente ao mês e imprima a quantidade de dias deste mês.
*/
const readline = require("readline-sync");

const mes = readline.questionInt("Digite o numero equivalente ao mes: ");

const date = new Date();

switch (mes){
    case 0: {
        console.log("Mês zero não existe");
    }
    case 1: 
        console.log(`Janeiro`);
    break;
    case 2: 
        console.log("Fevereiro");
    break;
    case 3: 
        console.log("Março");
    break;
    case 4: 
        console.log("Abril");
    break;
    case 5: 
        console.log("Maio");
    break;
    case 6: 
        console.log("Junho");
    break;
    case 7: 
        console.log("Julho");
    break;
    case 8: 
        console.log("Agosto");
    break;
    case 9: 
        console.log("Setembro");
    break;
    case 10: 
        console.log("Outubro");
    break;
    case 11: 
        console.log("Novembro");
    break;
    case 12: 
        console.log("Dezembro");
    break;
    default: 
        console.log("Digite um número do mês valido");
}


// Falta terminar.