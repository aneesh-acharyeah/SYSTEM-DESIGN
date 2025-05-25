function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Optional: for 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);