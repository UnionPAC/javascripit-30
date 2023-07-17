const divs = document.querySelectorAll("div");

function logText(e) {
  console.log(this.classList.value);
  //   console.log(this);
  //   e.stopPropagation(); // prevents event from reaching any objects other than the current object.
}

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: false, // true: fires on the way down, false: fires on the way back up
    once: true, // run once and then removes itself
  })
);
