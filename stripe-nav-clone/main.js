const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      // if (this.classList.contains("trigger-enter")) {
      //   this.classList.add("trigger-enter-active");
      // }
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  background.classList.add("open");

  // what dropdown (ul) are we on? where is it? how is it?
  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();

  // where is our nav?
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top, // dropdown offset by top nav
    left: dropdownCoords.left - navCoords.left, // dropdown offset by left nav
  };

  // set background to the size of the dropdown
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

// listen for when we scroll into our dropdown and when we leave
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
