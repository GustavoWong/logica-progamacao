//? Um circuito elétrico é composto de duas resistências R1 e R2 em paralelo, e ambas em sequência de uma resistência R3. Faça um algoritmo para calcular a resistência equivalente desse circuito.
// Tive que pegar uma ajuda ai na web porque encontrei varias formulas fiquei perdido e eu não tinha visto isso ainda.

function Circuito(r1, r2, r3) {
  this.r1 = r1;
  this.r2 = r2;
  this.r3 = r3;

  this.Req = () => {
    const req_inverse = 1 / this.r1 + 1 / this.r2 + 1 / this.r3;
    const Req = 1 / req_inverse;
    return `${Req.toFixed(2)} Ohms`;
  };
}

const circuito1 = new Circuito(20, 30, 30);

console.log(circuito1.Req()); // 10 Ohms
