// Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um valor de temperatura em Fahrenheit e exibi-lo em Celsius.

// CONVERSOR DE TEMPERATURA
function conversor(Fahre){
    const formula =  Math.round((Fahre - 32) / 1.8);
    return `O valor ${Fahre} Fahrenheit é igual a ${formula} °C`
}

console.log(conversor(82));

// ALT + 0176 --> °