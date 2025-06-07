const flipBtn = document.getElementById("flip-btn");
const colorCode = document.getElementById("color-code");

function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6, "0")}`;
}


flipBtn.addEventListener("click", () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    colorCode.textContent = newColor;
})