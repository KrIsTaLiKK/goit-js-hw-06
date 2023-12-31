let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", onDecrementValue);
incrementBtn.addEventListener("click", onIncrementValue);

function onDecrementValue() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onIncrementValue() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
