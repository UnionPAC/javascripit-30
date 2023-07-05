const url =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

// fetch using a promise
// const promise = fetch(url)
//   .then((res) => res.json())
//   .then((data) => cities.push(...data));

// fetch using async/await
(async () => {
  const res = await fetch(url);
  const data = await res.json();
  cities.push(...data);
})();

const findMatches = (wordToMatch, cities) => {
  return cities.filter((place) => {
    // figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
};

// helper function to turn a regular number into a number with commas
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  // console.log(matchArray);
  const html = matchArray
    .map((place) => {
      // highlight the input letters in the results
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
// The keyup event is fired when a key is released
searchInput.addEventListener("keyup", displayMatches);
