console.log("hi");
const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.error(err);
  }
);
