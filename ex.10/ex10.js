//? 10. Converter um inteiro informado menor que 32 para sua representação em binário

function TransformaBin(n) {
  if (n > 32) return "O número precisa ser menor que 32";

  return (n >>> 0).toString(2);
};
console.log(TransformaBin(33)); // 100000

/* const numBin = (n) =>{
    if (n > 32) return 'numero precisa ser menor que 32';

    return (n >>> 0).toString(2)
} */
