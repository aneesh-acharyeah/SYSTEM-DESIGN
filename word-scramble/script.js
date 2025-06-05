const scrambledWord = document.getElementById("scrambled-word");
const guessInput = document.getElementById("guess-input");
const checkBtn = document.getElementById("check-btn");
const message = document.getElementById("message");
const newWordBtn = document.getElementById("new-word-btn");


const words = ["banana", "laptop", "window", "javascript", "bottle", "python", "coffee"];
let currentWord = "";
let scrambled = "";

function shuffle(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function getNewWord() {
    message.textContent = "";
    guessInput.value = "";
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambled = shuffle(currentWord);
    while (scrambled === currentWord) {
        scrambled = shuffle(currentWord);
    }
    scrambledWord.textContent = scrambled;
}

checkBtn.addEventListener("click", () => {
    const guess = guessInput.value.trim().toLowerCase();
    if (!guess) {
        message.textContent = "Please enter a guess!"
        return;
    }
    if (guess === currentWord) {
        message.textContent = "✅ Correct!";
        message.style.color = "#22c55e";
    } else {
        message.textContent = "❌ Try again.";
        message.style.color = "#ef4444";
    }
})

newWordBtn.addEventListener("click", getNewWord);
window.addEventListener("load", getNewWord);