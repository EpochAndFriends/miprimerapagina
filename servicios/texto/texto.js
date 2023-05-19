function convertirMayusculas() {
    const texto = document.getElementById("textoInput").value;
    const resultado = texto.toUpperCase();
    document.getElementById("resultadoTexto").textContent = "Texto en mayúsculas: " + resultado;
}

function convertirMinusculas() {
    const texto = document.getElementById("textoInput").value;
    const resultado = texto.toLowerCase();
    document.getElementById("resultadoTexto").textContent = "Texto en minúsculas: " + resultado;
}

function invertirTexto() {
    const texto = document.getElementById("textoInput").value;
    const resultado = texto.split("").reverse().join("");
    document.getElementById("resultadoTexto").textContent = "Texto invertido: " + resultado;
}
