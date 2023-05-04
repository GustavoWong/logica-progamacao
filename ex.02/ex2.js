//? Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.
class FormulaQuadrado{
    constructor(lado){
        this.lado = lado;
    }
    area(){
        return this.lado ** 2
    }
    perimetro(){
        return this.lado * 4
    }
}

const quadrado = new FormulaQuadrado(10);
console.log(quadrado.perimetro()); // 20
console.log(quadrado.area()); // 25