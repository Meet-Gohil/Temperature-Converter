const celsiusInput = document.getElementById("cel");
const fahrenheitInput = document.getElementById("fah");

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

celsiusInput.addEventListener("input", function () {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = celsiusToFahrenheit(celsius).toFixed(2);
    fahrenheitInput.value = isNaN(fahrenheit) ? "" : fahrenheit;
});

fahrenheitInput.addEventListener("input", function () {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = fahrenheitToCelsius(fahrenheit).toFixed(2);
    celsiusInput.value = isNaN(celsius) ? "" : celsius;
});