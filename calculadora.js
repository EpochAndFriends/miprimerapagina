// Funciones Básicas
function sumar() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const resultado = num1 + num2;
    document.getElementById("resultadoBasico").textContent = "Resultado de la suma: " + resultado;
  }
  
  function restar() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const resultado = num1 - num2;
    document.getElementById("resultadoBasico").textContent = "Resultado de la resta: " + resultado;
  }
  
  function multiplicar() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const resultado = num1 * num2;
    document.getElementById("resultadoBasico").textContent = "Resultado de la multiplicación: " + resultado;
  }
  
  function dividir() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    if (num2 === 0) {
      document.getElementById("resultadoBasico").textContent = "Error: No se puede dividir entre cero";
    } else {
      const resultado = num1 / num2;
      document.getElementById("resultadoBasico").textContent = "Resultado de la división: " + resultado;
    }
  }
  
  // Funciones Aritméticas
  function potencia() {
    const num3 = parseInt(document.getElementById("num3").value);
    const num4 = parseInt(document.getElementById("num4").value);
    const resultado = Math.pow(num3, num4);
    document.getElementById("resultadoAritmetico").textContent = "Resultado de la potencia: " + resultado;
  }
  
  function raiz() {
    const num3 = parseInt(document.getElementById("num3").value);
    const resultado = Math.sqrt(num3);
    document.getElementById("resultadoAritmetico").textContent = "Resultado de la raíz cuadrada: " + resultado;
  }
  
  function calcularResto() {
    const num3 = parseInt(document.getElementById("num3").value);
    const num4 = parseInt(document.getElementById("num4").value);
    const resultado = num3 % num4;
    document.getElementById("resultadoAritmetico").textContent = "Resultado del cálculo del resto: " + resultado;
  }
  
  // Ley de Ohm
  function calcularVoltaje() {
    const voltaje = parseInt(document.getElementById("voltaje").value);
    const corriente = parseInt(document.getElementById("corriente").value);
    const resultado = voltaje * corriente;
    document.getElementById("resultadoOhm").textContent = "Resultado del cálculo de voltaje: " + resultado;
  }
  
  function calcularCorriente() {
    const voltaje = parseInt(document.getElementById("voltaje").value);
    const resistencia = parseInt(document.getElementById("resistencia").value);
    const resultado = voltaje / resistencia;
    document.getElementById("resultadoOhm").textContent = "Resultado del cálculo de corriente: " + resultado;
  }
  
  function calcularResistencia() {
    const corriente = parseInt(document.getElementById("corriente").value);
    const voltaje = parseInt(document.getElementById("voltaje").value);
    const resultado = voltaje / corriente;
    document.getElementById("resultadoOhm").textContent = "Resultado del cálculo de resistencia: " + resultado;
  }
  