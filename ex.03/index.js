//? Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

class Circunferencia {
  static area(raio) {
    const area = Math.PI.toFixed(2) * raio ** 2;
    return area;
  }
  static perimetro(raio) {
    const p = 2 * Math.PI.toFixed(2) * raio;
    return p.toFixed(2);
  }
}

console.log(Circunferencia.area(4)); // 50.24...
console.log(Circunferencia.perimetro(5)); //31.4
