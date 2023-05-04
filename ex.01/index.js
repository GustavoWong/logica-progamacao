//? Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.

function formulaRetangulo(base, altura) {
  const area = base * altura;
  const perimetro = 2 * (base + altura);

  return {
    area: area,
    perimetro: perimetro,
  };
}

console.log(formulaRetangulo(4,10)); // 40, 28

/* 
class formulaRetangulo {
    constructor(){

    }
  static area(base, altura) {
    const areaR = base * altura;
    return areaR;
  }
  static perimetro(base, altura){
    const p = 2 * (base + altura);
    return p;
  }
}

console.log(formulaRetangulo.area(5,5)); // 25
console.log(formulaRetangulo.perimetro(5,5)); // 20 */
