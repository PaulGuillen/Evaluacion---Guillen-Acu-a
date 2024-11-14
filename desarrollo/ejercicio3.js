function ejercicio3() {
    const temperaturas = [0, 10, 20, 30, 40];
    temperaturas.forEach(temp => {
        console.log(`${temp}°C a Fahrenheit: ${celsiusAFahrenheit(temp)}°F`);
    });
}

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}