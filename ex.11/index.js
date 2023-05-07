//Faça um algoritmo para calcular a nota semestral de um aluno. A nota semestral é obtida pela média aritmética entre a nota de 2 bimestres. Cada nota de bimestre é composta por 2 notas de provas.

class Semestre{
    static NotaSemestre(n1=0, n2=0, n3=0, n4=0){
        console.log(`As notas digitadas foram: 1 bimestre ${n1} e ${n2}. 2 bimestre ${n3} e ${n4}`);

        const calc = (n1 + n2 + n3 + n4) / 4;
        const conceito = calc >= 6 ? "Aprovado" : "Reprovado";

        return `A média das notas foram: ${calc} ${conceito}`;
    }
}

console.log(Semestre.NotaSemestre(7,6,5)); // 4.5 Reprovado

//Não sei se a logica está igual a que o exercicio pedia. Mais ta ai meu código.