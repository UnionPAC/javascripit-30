const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

// get rid of 'the' or 'a' from band names
// solution: replace 'the' or 'a' with ''
function strip(bandName) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  const regex = /^(a |the |an)/i;
  return bandName.replace(regex, "").trim()
}

// sort in alphabetical order
const sortedBandName = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// get band list element
const bandList = document.getElementById("bands");
// display bands to bandList
bandList.innerHTML = sortedBandName
  .map((band) => {
    return `<li>${band}</li>`;
  })
  .join("");
