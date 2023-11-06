function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.body,
  btnChangeColor: document.querySelector(".change-color"),
  colorValue: document.querySelector(".color"),
};

refs.btnChangeColor.addEventListener("click", onChangeBodyColor);

function onChangeBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorValue.textContent = getRandomHexColor();
}
