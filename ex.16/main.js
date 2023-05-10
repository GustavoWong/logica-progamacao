/*
Escreva um programa para gerar o invertido de um número com três algarismos (exemplo: o invertido de 498 é 894). 
*/

class Inverted {
  constructor(number) {
    this.number = number;
  }

  generate() {
    if (this.number < 100 || this.number > 999) return "APENAS TRÊS CARACTERES";

    // Transforma o número em uma string
    let numeros = this.number.toString();

    // Divide a string em um array de caracteres
    numeros = numeros.split("");

    // Inverte a ordem dos caracteres no array.
    numeros = numeros.reverse();

    // Junta os caracteres de volta em uma string
    numeros = numeros.join("");

    // Transforma a string já invertida de volta em um number.
    numeros = parseInt(numeros);

    return numeros;
  }
}

const n1 = new Inverted(498); //894

console.log(n1.generate());

/*
? NOTAS

Apesar de ter outros metódos mais fáceis ou dificeis eu utilizei este porque juguei ser o mais facíl e também porque eu queria saber e ver mais sobre manipulação de strings e arrays.
*/