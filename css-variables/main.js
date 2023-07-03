// selecting all inputs (controls)
const inputs = document.querySelectorAll(".controls input");
console.log(inputs);

// NOTE: using an arrow function for handleUpdate, which does not have its own `this` value. Instead, it lexically captures the `this` value from its surrounding context, which is the global context in this case (e.g., window in a browser environment)

// To fix this, we can make handleUpdate a regular function instead of an arrow function
const handleUpdate = function () {
  // console.log(this.value);

  // corresponds to the HTML data-sizing attribute
  const suffix = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
};

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
