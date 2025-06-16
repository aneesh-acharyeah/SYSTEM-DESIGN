const endDate = new Date("2025-12-31T23:59:59").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("end-message");

function updateCountdown() {
    const now = newDate().getTime();
    const gap = endDate - now;

    if (gap <= 0) {
        clearInterval(interval);
        messageEl.textContent = "🎉 Countdown Complete!";
        return;
    }
    const seconds = Math.floow((gap / 1000) % 60);
    const minutes = Math.floow((gap / 1000) % 60);
    const hours = Math.floow((gap / 1000) % 60);
    const days = Math.floow((gap / 1000) % 60);

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");

}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();