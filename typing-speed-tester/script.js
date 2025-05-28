const quote = document.getElementById('quote');
const input = document.getElementById('input');
const timerDisplay = document.getElementById('timer');
const wpmDisplay = document.getElementById('wpm');
const restartBtn = document.getElementById('restart');

const quotes = [
  "JavaScript is fun and powerful.",
  "Practice makes a programmer perfect.",
  "Typing fast helps in coding interviews.",
  "Frontend and backend work together."
];

let startTime, interval, currentQuote;

function startTest() {
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.textContent = currentQuote;
  input.value = '';
  input.disabled = false;
  input.focus();
  timerDisplay.textContent = '0';
  wpmDisplay.textContent = '0';
  startTime = null;

  clearInterval(interval);
}

function calculateWPM(chars, seconds) {
  const words = chars / 5;
  const minutes = seconds / 60;
  return Math.round(words / minutes);
}

input.addEventListener('input', () => {
  if (!startTime) {
    startTime = Date.now();
    interval = setInterval(() => {
      const seconds = Math.floor((Date.now() - startTime) / 1000);
      timerDisplay.textContent = seconds;
    }, 1000);
  }

  if (input.value === currentQuote) {
    clearInterval(interval);
    input.disabled = true;
    const seconds = Math.floor((Date.now() - startTime) / 1000);
    const wpm = calculateWPM(input.value.length, seconds);
    wpmDisplay.textContent = wpm;
  }
});

restartBtn.addEventListener('click', startTest);

window.addEventListener('load', startTest);
