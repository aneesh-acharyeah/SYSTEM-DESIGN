const display = document.getElementById("display");
const buttons = document.querySelector(".btn");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click"), () => {
        const value = button.getAttribute("data-value");

        if (value === "C") {
            currentInput = "";
            display.textContent = "0";
        } else if (value === "DEL") {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || "0";
        } else if (value === "=") {
            try {
                currentInput = eval(currentInput.replace(/%/g, "/100")).toString();
                display.textContent = currentInput;
            } catch {
                display.textContent = "Error";
                currentInput = "";
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    }

});