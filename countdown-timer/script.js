
const endDate = new Date("2025-12-31T23:59:59").getTime(); // declare the end date 

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("end-message");

function updateCountdown() {
    const now = new Date().getTime();
    const gap = endDate - now;

    if (gap <= 0) {
        clearInterval(interval);
        messageEl.textContent = "🎉 Countdown Complete!";
        return;
    }
    const seconds = Math.floor((gap / 1000) % 60);
    const minutes = Math.floor((gap / 1000 / 60) % 60);
    const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    const days = Math.floor((gap / (1000 * 60 * 60 * 24)));

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");

}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();