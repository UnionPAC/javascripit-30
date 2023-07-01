// How does the clock work?
// It takes in the current time from our JavaScript and updates the hands accordingly

// Apply a rotate to each of the hands depending on what time it currently is
// 90deg = 12
// 180deg = 3
// 270deg = 6
// 360deg = 9

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

// need to run every second -> setInterval
const setTime = () => {
  // console.log("test");
  const currentTime = new Date();

  const seconds = currentTime.getSeconds(); // we need to turn these seconds into their equivalent degrees
  const secondsDegs = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegs}deg)`;

  const minutes = currentTime.getMinutes();
  const minutesDegs = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegs}deg)`;

  const hour = currentTime.getHours();
  const hourDegs = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegs}deg)`;

  // console.log(`${hour}:${minutes}:${seconds}`);
};

setInterval(setTime, 1000);
