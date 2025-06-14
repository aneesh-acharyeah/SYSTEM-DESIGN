const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const counter = document.querySelector(".counter");

textInput.addEventListener("input", () => {
    const count = textInput.value.length;
    charCount.textContent = count;

    counter.classList.remove("warning", "danger");

    if (count > 220 && count < 260) {
        counter.classList.add("warning");
    } else if (count >= 260) {
        counter.classList.add("danger");
    }
})