/*
Escreva um programa que imprima todos os números de 1 até 100, inclusive, e a soma de todos eles.
*/

const BigNums = () => {
    let soma = 0;    
    for (let i = 1; i <= 100; i ++){
        console.log(i);
        soma += i
    }
    return console.log(soma);
};


BigNums();

// Tá esse foi o jeito mais facil que eu vi na web o primeiro foi meu, mais eese aqui eu nunca tinha conhecido porque é uma progressão aritmética. Mais ele não lista os números de 1 a 100. :/
const n = 100;
const soma = (n / 2) * (1 + n);

console.log(soma);
