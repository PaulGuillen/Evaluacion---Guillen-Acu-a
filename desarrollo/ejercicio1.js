function ejercicio1() {
    const numeros = [23, 4, 6, 7, 99, 12, 19, 8, 43, 21, 65];
    const suma = numeros.reduce((acc, curr) => acc + curr, 0);
    console.log("Suma de los números del array:", suma);
}
