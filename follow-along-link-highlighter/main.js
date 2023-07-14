const triggers = document.querySelectorAll("a");

const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
  // how big is the element that we have hovered?
  // where is the element?
  // returns a DOMRect object providing information about the size of an element and its position relative to the viewport
  const linkCoords = this.getBoundingClientRect();
  const { width, height, top, left } = linkCoords;
  const coords = {
    width,
    height,
    top: top + window.scrollY,
    left: left + window.scrollX,
  };
  console.log(coords);

  // style the link
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", highlightLink)
);
