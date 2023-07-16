const nav = document.getElementById("main");

// where is the top of the nav
const topOfNav = nav.offsetTop;

const fixNav = () => {
  // console.log(topOfNav, window.scrollY);
  // has the topOfNav went off screen
  if (window.scrollY >= topOfNav) {
    // add fixed nav styles
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
};

window.addEventListener("scroll", fixNav);
