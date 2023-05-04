//? Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado seu raio e sua altura.

// Formula = π.r^2.h

class VolumeCilindro {
  static Calcular(r, h) {
    const calc = Math.round(Math.PI * r ** 2 * h);
    return `${calc} cm^3`;
  }
}

console.log(VolumeCilindro.Calcular(3.1,10));