//? Faça um algoritmo que transforme uma velocidade fornecida em m/s pelo usuário para Km/h. Para tal, multiplique o valor em m/s por 3,6.

function conversor(metro) {
  const transform = metro * 3.6;
  return `${transform} km`;
}

console.log(conversor(14)); // 50.4 km