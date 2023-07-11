const slideInImages = document.querySelectorAll(".slide-in");

function checkSlide(event) {
  // console.count(event);
  // loop over all images and figure out WHERE the image needs to be shown
  slideInImages.forEach((img) => {
    // window.scrollY + window.innerHeight gives us the current px's at the bottom of the viewport
    // img.height / 2 is height of the middle of the image
    const slideInAt = window.scrollY + window.innerHeight - img.height / 2; // halfway through the image
    const imageBottom = img.offsetTop + img.height; // bottom of the image
    const isHalfShown = slideInAt > img.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener("scroll", debounce(checkSlide));
