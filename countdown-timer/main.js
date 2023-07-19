let countdown;
const timeLeft = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll(".timer__button");

function timer(seconds) {
  clearInterval(countdown); // clear any existing timers

  const now = Date.now(); // current time in milliseconds
  const then = now + seconds * 1000; // time when countdown is over in milliseconds

  displayTimeLeft(seconds);
  displayEndTime(then);

  // every second check how many seconds are left and display time, or stop the countdown if no time left
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000); // how many seconds remain

    // check if there is no time left
    if (secondsLeft < 0) {
      clearInterval();
      return;
    }

    // display the time
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const mins = Math.floor(seconds / 60);
  const leftoverSeconds = seconds % 60;
  const display = `${mins}:${
    leftoverSeconds < 10 ? "0" : ""
  }${leftoverSeconds}`;
  document.title = display; // set page title to time
  timeLeft.textContent = display; // set time on screen
  // result: HH:MM
}

function displayEndTime(timestamp) {
  const timerEnd = new Date(timestamp);
  const hour = timerEnd.getHours(); // The getHours() method of Date instances returns the hours for this date according to local time
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = timerEnd.getMinutes(); // The getMinutes() method of Date instances returns the minutes for this date according to local time.
  const display = `Be Back At ${adjustedHour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  endTime.textContent = display;
  // result: Be Back At: HH:MM
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));

// custom time request
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  const seconds = mins * 60;
  timer(seconds);
  this.reset();
});
