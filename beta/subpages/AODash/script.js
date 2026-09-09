function getTime() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'
  const formattedHours = hours.toString().padStart(2, '0');
  const timeString = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById('clock').textContent = timeString;
}

// Run the clock immediately when the page loads
getTime();

// Update the clock every 1000ms (1 second)
setInterval(updateClock, 1000);
