const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

// The Navigator.mediaDevices read-only property returns a MediaDevices object, which provides access to connected media input devices like cameras and microphones, as well as screen sharing.
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices
async function getVideo() {
  let stream = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    // need to set the stream object to a URL
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
    // console.dir(video);
    video.srcObject = stream;
    video.play();
  } catch (err) {
    console.error(err);
  }
}

function displayOnCanvas() {
  // get width and height of the video
  const { videoWidth: width, videoHeight: height } = video;
  // set canvas size to video size
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    // The CanvasRenderingContext2D.drawImage() method of the Canvas 2D API provides different ways to draw an image onto the canvas.
    // example syntax: drawImage(image, dx, dy, dWidth, dHeight)
    ctx.drawImage(video, 0, 0, width, height);

    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);

    // mess with them
    // pixels = redFilter(pixels);
    pixels = rgbSplit(pixels);

    // pixels = greenScreen(pixels);

    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // play sound
  snap.currentTime = 0;
  snap.play();

  // how do we take a picture
  // .. we need to take the data out of the canvas
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
  const data = canvas.toDataURL("image/jpeg", 1.0);
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "photo");
  link.innerHTML = `<img src=${data} />`;
  strip.insertBefore(link, strip.firstChild);
}

function redFilter(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // r
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // g
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // b
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // r
    pixels.data[i + 500] = pixels.data[i + 1]; // g
    pixels.data[i - 550] = pixels.data[i + 2]; // b
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener("canplay", displayOnCanvas);
