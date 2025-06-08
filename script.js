// Set your event time here (UTC)
const eventDate = new Date("2025-06-28T04:30:00Z");

function updateTimer() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("timer").innerText = "🎉 Event Started!";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerText =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

document.getElementById("eventTime").innerText = 
  `Event Time (UTC): ${eventDate.toUTCString()}`;

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();  // call once initially
