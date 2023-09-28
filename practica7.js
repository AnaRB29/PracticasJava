function calcularFactorial(numero) {
   
    if (numero < 0 || !Number.isInteger(numero)) {
      return "El número debe ser un entero positivo.";
    }
  
    
    if (numero === 0) {
      return 1;
    }
  
    
    let factorial = 1;
  
    
    while (numero > 0) {
      factorial *= numero;
      numero--;
    }
  
    return factorial;
  }
  
  console.log(calcularFactorial(5)); // Resultado: 120
  console.log(calcularFactorial(4)); // Resultado: 24
  console.log(calcularFactorial(3)); // Resultado: 6
  console.log(calcularFactorial(-2)); // Resultado: "El número debe ser un entero positivo."