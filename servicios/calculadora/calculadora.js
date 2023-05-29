// Funciones para las operaciones básicas
function sumar() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var resultado = num1 + num2;
  document.getElementById("resultadoBasico").textContent = "Resultado: " + resultado;
}

function restar() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var resultado = num1 - num2;
  document.getElementById("resultadoBasico").textContent = "Resultado: " + resultado;
}

function multiplicar() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var resultado = num1 * num2;
  document.getElementById("resultadoBasico").textContent = "Resultado: " + resultado;
}

function dividir() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var resultado = num1 / num2;
  document.getElementById("resultadoBasico").textContent = "Resultado: " + resultado;
}

// Funciones para las operaciones aritméticas
function potencia() {
  var num3 = parseFloat(document.getElementById("num3").value);
  var num4 = parseFloat(document.getElementById("num4").value);
  var resultado = Math.pow(num3, num4);
  document.getElementById("resultadoAritmetico").textContent = "Resultado: " + resultado;
}

function raiz() {
  var num3 = parseFloat(document.getElementById("num3").value);
  var num4 = parseFloat(document.getElementById("num4").value);
  var resultado;

  if (num4 === 2) {
    resultado = Math.sqrt(num3);
  } else if (num4 === 3) {
    resultado = Math.cbrt(num3); // Raíz cúbica
  } else {
    // En caso de otro valor de num4, mostrar un mensaje de error o manejarlo según tus necesidades
    resultado = "Error: Valor de referencia no válido";
  }

  document.getElementById("resultadoAritmetico").textContent = "Resultado: " + resultado;
}


// Funciones para el cálculo de resistencia y corriente
function calcularResistencia() {
  var voltaje = parseFloat(document.getElementById("voltaje").value);
  var corriente = parseFloat(document.getElementById("corriente").value);
  var resistencia = voltaje / corriente;
  document.getElementById("resultadoOhm").textContent = "Resultado: " + resistencia + " ohm";
}

function calcularCorriente() {
  var voltaje = parseFloat(document.getElementById("voltaje").value);
  var resistencia = parseFloat(document.getElementById("resistencia").value);
  var corriente = voltaje / resistencia;
  document.getElementById("resultadoOhm").textContent = "Resultado: " + corriente + " amperios";
}

// Función para calcular el resto
function calcularResto() {
  var num3 = parseFloat(document.getElementById("num3").value);
  var num4 = parseFloat(document.getElementById("num4").value);
  var resultado = num3 % num4;
  document.getElementById("resultadoAritmetico").textContent = "Resultado: " + resultado;
}


// Funciones para el cálculo de resistencia y corriente
function calcularVoltaje() {
  var resistencia = parseFloat(document.getElementById("resistencia").value);
  var corriente = parseFloat(document.getElementById("corriente").value);
  var voltaje = resistencia * corriente;
  document.getElementById("resultadoOhm").textContent = "Resultado: " + voltaje + " voltios";
}
