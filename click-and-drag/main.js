const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (event) => {
  isDown = true;
  slider.classList.add("active");
  startX = event.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft; // how much the slider has been scrolled over
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (event) => {
  if (!isDown) return;
  // do something
  event.preventDefault();
  const x = event.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2 // how far are we from where we originally mouse down
  slider.scrollLeft = scrollLeft - walk;
});
