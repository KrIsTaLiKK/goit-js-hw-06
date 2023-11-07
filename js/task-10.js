function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("#controls > input"),
  btnCreateEl: document.querySelector("button[data-create]"),
  btnDestroyEl: document.querySelector("button[data-destroy]"),
  elContainer: document.querySelector("#boxes"),
};

refs.btnCreateEl.addEventListener("click", createBoxes);
refs.btnDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = refs.input.value;
  let boxesMarkup = "";
  for (let i = 0; i < amount; i += 1) {
    let size = 30 + 10 * i;
    const bgColor = getRandomHexColor();
    const boxElMarkup = `<div style = "width:${size}px; height:${size}px; background-color: ${bgColor}; margin-top:${10}px"></div>`;

    boxesMarkup += boxElMarkup;
  }

  refs.elContainer.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  refs.elContainer.innerHTML = "";
  refs.input.value = "";
}
