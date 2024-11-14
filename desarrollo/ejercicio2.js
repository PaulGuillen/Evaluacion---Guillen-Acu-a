function ejercicio2() {
    const nota = parseFloat(prompt("Ingresa la nota del examen (0-20):"));
    if (isNaN(nota) || nota < 0 || nota > 20) {
        alert("Por favor, ingresa un número válido entre 0 y 20.");
        console.log("Entrada inválida. Se esperaba un número entre 0 y 20.");
        return;
    }
    const resultado = nota >= 11 ? "Aprobado" : "Reprobado";
    alert("Clasificación de la nota: " + resultado);
    console.log("Clasificación de la nota:", resultado);
}
