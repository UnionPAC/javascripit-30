const videos = Array.from(document.querySelectorAll(".videos [data-time]"));

const seconds = videos
  .map((video) => video.dataset.time)
  .map((time) => {
    const [mins, seconds] = time.split(":").map(parseFloat);
    return mins * 60 + seconds;
  })
  .reduce((accumulator, currentValue) => (accumulator += currentValue));

// convert seconds to hh:mm:ss
const convertSecondsToTime = (seconds) => {
  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / (60 * 60));
  secondsLeft = secondsLeft % (60 * 60);
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;
  return `Total Time: ${hours}:${mins}:${secondsLeft}`;
};

console.log(convertSecondsToTime(17938));
