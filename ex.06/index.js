//? Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

const division = (n1, n2) => {
  const quot = Math.floor(n1 / n2); //
  const rest = n1 % n2;

  return { quot: quot, rest: rest };
};

const { quot: cociente, rest: resto } = division(80, 9); // Desestruturação do valor retornado da função division.
console.log(cociente, resto); // 8 8 --> resultado
