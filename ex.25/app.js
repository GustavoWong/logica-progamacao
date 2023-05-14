/*
Escreva um programa que leia o número equivalente ao mês e imprima a quantidade de dias deste mês.
*/
const readline = require("readline-sync");

const mes = readline.questionInt("Digite o numero equivalente ao mes: ");

switch (mes){
    case 0: {
        console.log("Mês zero não existe");
    }
    case 1: 
        console.log(`Janeiro tem 31 dias`);
    break;
    case 2: 
        console.log("Fevereiro tem 28 ~ 29 dias");
    break;
    case 3: 
        console.log("Março tem 31 dias");
    break;
    case 4: 
        console.log("Abril tem 30 dias");
    break;
    case 5: 
        console.log("Maio tem 31 dias");
    break;
    case 6: 
        console.log("Junho tem 30 dias");
    break;
    case 7: 
        console.log("Julho tem 31 dias");
    break;
    case 8: 
        console.log("Agosto tem 31 dias");
    break;
    case 9: 
        console.log("Setembro tem 30 dias");
    break;
    case 10: 
        console.log("Outubro tem 31 dias");
    break;
    case 11: 
        console.log("Novembro tem 30 dias");
    break;
    case 12: 
        console.log("Dezembro tem 31 dias");
    break;
    default: 
        console.log("Digite um número do mês valido");
}

// Terminado
// Foi um jeito ruim na minha opnião, de concluir esse desafio. Acho que pode ser refatorado.