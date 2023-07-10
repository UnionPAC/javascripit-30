// What elements do we need to get?
// Main player, video element, progress bar and progress filled, play button, skip buttons and our sliders
const player = document.querySelector(".video-player");
const video = player.querySelector(".video");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipBtns = player.querySelectorAll("[data-skip]");
const sliders = player.querySelectorAll(".slider");
const fullScreenBtn = player.querySelector(".fullscreen");
let fullscreen = false;

// What functions do we need?

// Toggle play video
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Toggle Play / Pause button in UI, depending on if playing or paused
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

// Handle sliders (volume and playback rate)
function handleSliders() {
  video[this.name] = this.value;
}

// Fast Forward / Reverse Buttons
function skipTime() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// update progress bar
function handleProgress() {
  // update the flex-basis value of the progress_filled depending on progress value
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Handle scrubbing throughout video
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleFullScreen() {
  player.requestFullscreen();
}

// Add event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipBtns.forEach((btn) => btn.addEventListener("click", skipTime));
sliders.forEach((slider) => slider.addEventListener("change", handleSliders));
sliders.forEach((slider) =>
  slider.addEventListener("mousemove", handleSliders)
);

// scrub
let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

fullScreenBtn.addEventListener("click", handleFullScreen);
