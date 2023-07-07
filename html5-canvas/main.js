const canvas = document.getElementById("canvas");

// gets that element's context—the thing onto which the drawing will be rendered
const ctx = canvas.getContext("2d");

// set canvas to fill the whole screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// setting line styles
ctx.strokeStyle = "#09aa82";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (event) => {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(lastX, lastY);
  ctx.stroke();

  hue++;

  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 80 || ctx.lineWidth <= 20) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

  // ES6 Destructuring Syntax
  [lastX, lastY] = [event.offsetX, event.offsetY];
};

// draw when mouse down and is moving
canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener("mousemove", draw);

// stop drawing when mouse up
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
