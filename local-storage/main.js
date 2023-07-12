const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const clearAllBtn = document.getElementById("clearAll");
const checkAllBtn = document.getElementById("checkAll");
const uncheckAllBtn = document.getElementById("uncheckAll");

const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  // get item name inputted
  const text = this.querySelector("[name=item]").value;
  // create new item object (with text and done properties)
  const item = {
    text,
    done: false,
  };
  items.push(item);

  // display item
  displayItems(items, itemsList);

  // set to local storage
  localStorage.setItem("items", JSON.stringify(items));

  // clear form
  this.reset();
}

function displayItems(tapas = [], tapaList) {
  tapaList.innerHTML = tapas
    .map((tapa, index) => {
      return `
        <li>
          <input type="checkbox" data-index=${index} id="item-${index}" ${
        tapa.done ? "checked" : ""
      } />
          <label for="item-${index}">${tapa.text}</label>
        </li>
        `;
    })
    .join("");
}

function toggleDone(e) {
  // if not an input - return
  if (!e.target.matches("input")) return;
  //
  const el = e.target;
  const index = el.dataset.index;
  // toggle item[index]
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  displayItems(items, itemsList);
}

// listen to form submit
addItems.addEventListener("submit", addItem);

// listen on our already existing ul element (can't listen on dynamic children)
itemsList.addEventListener("click", toggleDone);

// button events
clearAllBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});

checkAllBtn.addEventListener("click", () => {
  items.forEach((item) => {
    item.done = true;
    localStorage.setItem("items", JSON.stringify(items));
    window.location.reload();
  });
});

uncheckAllBtn.addEventListener("click", () => {
  items.forEach((item) => {
    item.done = false;
    localStorage.setItem("items", JSON.stringify(items));
    window.location.reload();
  });
});

displayItems(items, itemsList);
