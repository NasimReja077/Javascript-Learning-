const Display = document.getElementById("Display");

let timer = null;
let StartTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    StartTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - StartTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  StartTime = 0;
  elapsedTime = 0;
  isRunning = false;
  Display.textContent = "00:00:00:000";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - StartTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
  let seconds = Math.floor(elapsedTime / 1000) % 60;
  let millisecond = Math.floor(elapsedTime % 1000);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  millisecond = String(millisecond).padStart(3, "0");

  Display.textContent = `${hours}:${minutes}:${seconds}:${millisecond}`;
}
