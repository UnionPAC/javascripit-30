const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;

function shadow(e) {
  // console.log(e);
  // get hero area (width & height)
  // The HTMLElement.offsetWidth read-only property returns the layout width of an element as an integer.
  // The HTMLElement.offsetHeight read-only property returns the height of an element, including vertical padding and borders, as an integer.
  //
  //   const width = hero.offsetWidth;
  //   const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height } = hero;
  //
  // where is the cursor?
  // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX
  // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetY
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // how much should the shadow move? (WALK)
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  // add the shadow style
  // https://www.w3schools.com/cssref/css3_pr_text-shadow.php
  // syntax -> text-shadow: h-shadow v-shadow blur-radius color
  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7), ${/* Pink */''}
  ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7), ${/* Cyan */''}
  ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7), ${/* Red */''}
  ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7) ${/* Blue */''}
`;
}

hero.addEventListener("mousemove", shadow);
