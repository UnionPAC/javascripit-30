const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const GAME_DURATION = 10000;
let lastHole;
let timeUp = false;

// returns a random number of milliseconds
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// returns a random DOM element 'hole'
function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  // stops the mole popping up again in the same hole
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  // how long will the mole stay up?
  const time = randomTime(200, 1000);
  // which hole will the mole pop up from?
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove(".up");
    if (!timeUp) {
      peep();
    }
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => {
    timeUp = true;
  }, GAME_DURATION);
}

function bonk(e) {
  // check if the user is ACTUALLY using there mouse and not cheating!
  if (!e.isTrusted) return;
  // add score
  score++;
  // put mole back down
  this.parentNode.classList.remove("up");
  // change score element
  scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener("click", bonk));
