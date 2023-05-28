/*
Escreva um programa que imprima todos os números pares do intervalo fechado de 1 a 100.
*/

for (let i = 1; i < 100; i++) {
  let isPar = i % 2 === 0 ? false : isPar;
  if(isPar){
      console.log(isPar);
    return 'impar'
  } else {
    console.log(isPar);
    return 'isPar[i]'
  }
}
