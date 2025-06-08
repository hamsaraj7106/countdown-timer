// Set event time: June 28, 2025 at 10:30 PM PDT = 2025-06-29T05:30:00Z
const eventDate = new Date("2025-06-29T05:30:00Z");

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

// Format as: June 28, 2025 at 10:30 PM PDT
function formatDateWithTimezone(date) {
  return date.toLocaleString("en-US", {
    timeZoneName: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

// Update the event time display
document.getElementById("eventTime").innerHTML =
  `🕒 Event Time: ${formatDateWithTimezone(eventDate)}`;

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();  // call once initially
