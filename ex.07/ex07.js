//? Solicitar a idade de uma pessoa em dias e informar na tela a idade em anos, meses e dias.
//Irei focar mais na lógica e não em solicitação de valores.

// Receber a idade em dias.
// Transformar esta idade em dias para idade em anos
// Transformar esta idade em dias para idade em meses
class IdadePeople {
  constructor(idade) {
    this.idade = idade;
  }

  anos() {
    return parseInt(this.idade / 365);
  }

  Idademese() {
    const diasPerMes = 30.44;
    const idadeEmMes = Math.floor(this.idade / diasPerMes);
    return idadeEmMes;
  }

  resultado() {
    return `Você tem: ${this.anos()} anos, ${this.Idademese()} meses e ${this.idade} dias`;
  }
}

const p1 = new IdadePeople(6205); // Entrada da idade.
console.log(p1.resultado()); // Você tem: 17 anos, 203 meses e 6205 dias
