// What do I need to do?
// 1. Play sound associated with the key ✅
// 2. Apply styles and animation to button when played ✅

const playSound = (e) => {
  // console.log("Key Code:", e.code);
  // grabbing the first audio element with a data-key=code attribute matching the pressed key (if there is one, otherwise: null)
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`div.key[data-key="${e.code}"]`);
  console.log(key);
  if (!audio) return;

  // add class of playing to key for animation
  key.classList.add("playing");

  // set audio file currentTime to zero, so if pressed again it will trigger the sound again w/o having to wait for the audio clip to finish playing
  audio.currentTime = 0;
  audio.play();
};

const removeTransition = (e) => {
  console.log("transition ended, time to remove!");
  // console.log(e);
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

// converts the NodeList to an array using Array.from()
const keys = Array.from(document.querySelectorAll(".key"));

// add event listener to each key: listen for transition end and apply removeTransition()
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// event Listener for listening to keys to play sounds
window.addEventListener("keydown", playSound);
