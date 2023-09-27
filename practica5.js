
class Poligono {
    constructor(lados) {
      this.lados = lados;
    }
  
    calcularPerimetro() {
      return this.lados.reduce((total, lado) => total + lado, 0);
    }
  }

  class Triangulo extends Poligono {
    constructor(lado1, lado2, lado3) {
      super([lado1, lado2, lado3]);
    }
  
    calcularArea() {
      const s = this.calcularPerimetro() / 2;
      const area = Math.sqrt(s * (s - this.lados[0]) * (s - this.lados[1]) * (s - this.lados[2]));
      return area;
    }
  }
  
  class Cuadrado extends Poligono {
    constructor(lado) {
      super([lado, lado, lado, lado]);
    }
  
    calcularArea() {
      return this.lados[0] * this.lados[0];
    }
  }
  
  class Pentagono extends Poligono {
    constructor(lado) {
      super([lado, lado, lado, lado, lado]);
    }
  
    calcularArea() {
      const apotema = this.lados[0] / (2 * Math.tan(Math.PI / 5));
      return (this.lados[0] * apotema) / 2;
    }
  }
  
  const triangulo = new Triangulo(3, 4, 5);
  console.log("Triángulo - Perímetro:", triangulo.calcularPerimetro());
  console.log("Triángulo - Área:", triangulo.calcularArea());
  
  const cuadrado = new Cuadrado(4);
  console.log("Cuadrado - Perímetro:", cuadrado.calcularPerimetro());
  console.log("Cuadrado - Área:", cuadrado.calcularArea());
  
  const pentagono = new Pentagono(5);
  console.log("Pentágono - Perímetro:", pentagono.calcularPerimetro());
  console.log("Pentágono - Área:", pentagono.calcularArea());