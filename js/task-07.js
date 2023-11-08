const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputChangeRange);

spanEl.style.fontSize = `${Number(inputEl.value)}px`;

function onInputChangeRange(event) {
  spanEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
}

// inputEl.addEventListener(
//   "input",
//   (event) => (spanEl.style.fontSize = `${Number(event.currentTarget.value)}px`)
// );
