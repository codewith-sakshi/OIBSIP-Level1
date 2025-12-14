document.getElementById('convertButton').addEventListener('click', convertTemperature);

function convertTemperature() {
    const inputElement = document.getElementById('temperatureInput');
    const tempValue = parseFloat(inputElement.value);

    // Input Validation
    if (isNaN(tempValue)) {
        alert("Please enter a valid number for the temperature.");
        inputElement.focus();
        return;
    }

    // Get the selected unit
    // Note: Assuming a radio button is always checked due to the 'checked' attribute in HTML
    const inputUnit = document.querySelector('input[name="inputUnit"]:checked').value;

    let celsius, fahrenheit, kelvin;

    // Direct Conversion Logic based on input unit
    if (inputUnit === 'C') {
        celsius = tempValue;
        // C to F: (C * 9/5) + 32
        fahrenheit = (tempValue * 9/5) + 32;
        // C to K: C + 273.15
        kelvin = tempValue + 273.15;
    } else if (inputUnit === 'F') {
        fahrenheit = tempValue;
        // F to C: (F - 32) * 5/9
        celsius = (tempValue - 32) * 5/9;
        // F to K: (F -> C) + 273.15
        kelvin = celsius + 273.15;
    } else if (inputUnit === 'K') {
        kelvin = tempValue;
        // K to C: K - 273.15
        celsius = tempValue - 273.15;
        // K to F: (K -> C) * 9/5 + 32
        fahrenheit = (celsius * 9/5) + 32;
    }

    // Helper function to format the output string
    const formatResult = (value, unitSymbol) => `${value.toFixed(2)} ${unitSymbol}`;

    // Update the DOM elements with the calculated values
    document.getElementById('resultC').textContent = `Celsius (°C): ${formatResult(celsius, '°C')}`;
    document.getElementById('resultF').textContent = `Fahrenheit (°F): ${formatResult(fahrenheit, '°F')}`;
    document.getElementById('resultK').textContent = `Kelvin (K): ${formatResult(kelvin, 'K')}`;
}