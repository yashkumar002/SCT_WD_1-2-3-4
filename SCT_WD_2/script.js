const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const lapsContainer = document.getElementById('laps');

/* Created By Yash kumar Banjare...   */
let startTime = 0;
let elapsedTime = 0; // in ms
let timerInterval;
let running = false;
let lapCount = 0;

// Format time to HH:MM:SS.mmm
function formatTime(time) {
  const ms = time % 1000;
  const totalSeconds = Math.floor(time / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);
/* Created By Yash kumar Banjare...   */
  return (
    String(hours).padStart(2, '0') + ':' +
    String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0') + '.' +
    String(ms).padStart(3, '0')
  );
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  timeDisplay.textContent = formatTime(elapsedTime);
}

function start() {
  if (running) return;
  running = true;
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 10);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
  lapBtn.disabled = false;
}
/* Created By Yash kumar Banjare...   */
function pause() {
  if (!running) return;
  running = false;
  clearInterval(timerInterval);
  updateTime();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  lapBtn.disabled = true;
}

function reset() {
  running = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  lapCount = 0;
  timeDisplay.textContent = '00:00:00.000';
  lapsContainer.innerHTML = '';
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
  lapBtn.disabled = true;
}
/* Created By Yash kumar Banjare...   */
function recordLap() {
  if (!running) return;
  lapCount++;
  const lapTime = formatTime(elapsedTime);
  const lapElement = document.createElement('div');
  lapElement.classList.add('lap');
  lapElement.innerHTML = `<span class="lap-number">Lap ${lapCount}</span><span>${lapTime}</span>`;
  lapsContainer.prepend(lapElement); // show latest lap on top
}

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', recordLap);

/* Created By Yash kumar Banjare...   */