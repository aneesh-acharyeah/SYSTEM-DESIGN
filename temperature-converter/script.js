const inputTemp = document.getElementById("inputTemp");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");


inputTemp.addEventListener("input", convertTemp);
fromUnit.addEventListener("chnage", convertTemp);
toUnit.addEventListener("chnage", convertTemp);
resetBtn.addEventListener("click", () => {
    inputTemp.value = "";
    result.textContent = "Result: -";
})

function convertTemp() {
    const input = parseFloat(inputTemp.value);
    if (isNaN(input)) {
        result.textContent = "Result: -";
        return;
    }

    const from = fromUnit.value;
    const to = toUnit.value;

    if (from === to) {
        result.textContent = `Result: ${input.toFixed(2)}°`;
        return;
    }

    let tempInCelsius;


    if (from === "celsius") tempInCelsius = input;
    else if (from === "fahrenheit") tempInCelsius = (input - 32) * 5 / 9;
    else if (from === "kelvin") tempInCelsius = input - 273.15;



    let finalTemp;
    if (to === "celsius") finalTemp = tempInCelsius;
    else if (to === "fahrenheit") finalTemp = tempInCelsius * 9 / 5 + 32;
    else if (to === "kelvin") finalTemp = tempInCelsius + 273.15;

    result.textContent = `Result: ${finalTemp.toFixed(2)}°`;
}