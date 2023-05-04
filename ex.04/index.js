//? 4. Dado os três lados de um triângulo determinar o perímetro do mesmo.

function Triangle() {}

Triangle.prototype.Area = (base, altura) => {
  const area = (base * altura) / 2;
  return area;
};

Triangle.prototype.Perimetro = (l1, l2, l3) => {
  const perimetro = l1 + l2 + l3;
  return perimetro;
};

const t1 = new Triangle();
console.log(t1.Area(12, 8)); // 48
console.log(t1.Perimetro(15, 9, 12)); // 36
