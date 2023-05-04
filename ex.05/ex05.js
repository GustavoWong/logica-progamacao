//? Ler um número inteiro e exibir o seu sucessor.

const sucessor = (n) => {
  if (typeof n !== "number") return "valor invalido";
  if ( n - Math.floor(n) !== 0) return "valor invalido";
  return n + 1;
};

console.log(sucessor(15)); // 16
