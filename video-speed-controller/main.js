const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

speed.addEventListener("mousemove", function (e) {
  // get where we are on the bar
  const y = e.pageY - this.offsetTop;
  const percentY = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = `${Math.round(percentY * 100)}%`;
  const playbackRate = percentY * (max - min) + min;
  bar.style.height = height;
  bar.textContent = `${playbackRate.toFixed(1)}x`;
  video.playbackRate = playbackRate
});
