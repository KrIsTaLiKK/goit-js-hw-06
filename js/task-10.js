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

// refs.input.addEventListener("change", getValueInput);
refs.btnCreateEl.addEventListener("click", onCreateBtnClick);
refs.btnDestroyEl.addEventListener("click", destroyBoxes);

// --------------------------------------

// function getValueInput(event) {
//   return Number(event.currentTarget.value);
// }

function onCreateBtnClick() {
  const inputValue = refs.input.value;
  createBoxes(inputValue);
}

function createBoxes(amount) {
  let boxesMarkup = "";

  for (let i = 0; i < amount; i += 1) {
    let size = 30 + 10 * i;
    const bgColor = getRandomHexColor();
    const boxElMarkup = `<div style = "width:${size}px; height:${size}px; background-color: ${bgColor}; margin-bottom:${10}px"></div>`;

    boxesMarkup += boxElMarkup;
  }

  refs.elContainer.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  refs.elContainer.innerHTML = "";
  refs.input.value = "";
}
// -----------------------------------------
// function createBoxes(amount) {
//   const arrDivEl = [];
//   let basicFontSize = 30;
//   let step = 10;

//   for (let i = 0; i < amount; i += 1) {
//     const divEl = document.createElement("div");
//     divEl.style.width = `${basicFontSize + step * i}px`;
//     divEl.style.height = `${basicFontSize + step * i}px`;
//     divEl.style.backgroundColor = getRandomHexColor();
//     arrDivEl.push(divEl);
//   }

//   refs.elContainer.append(...arrDivEl);
// }

// function onCreateBtnClick() {
//   let inputValue = Number(refs.input.value);
//   createBoxes(inputValue);
// }

// function destroyBoxes() {
//   refs.elContainer.innerHTML = "";
//   refs.input.value = "";
// }
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// const inputRef = document.querySelector("#controls input");
// const createButtonRef = document.querySelector("button[data-create]");
// const destroyButtonRef = document.querySelector("button[data-destroy]");
// const boxesContainerRef = document.querySelector("#boxes");

// createButtonRef.addEventListener("click", createBoxes);
// destroyButtonRef.addEventListener("click", destroyBoxes);

// function createBoxes() {
//   const amount = inputRef.value;
//   const boxes = [];

//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement("div");
//     const size = 30 + i * 10;
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxes.push(box);
//   }

//   boxesContainerRef.append(...boxes);
// }

// function destroyBoxes() {
//   boxesContainerRef.innerHTML = "";
// }
