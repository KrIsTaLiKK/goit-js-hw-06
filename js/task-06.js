const inputEl = document.querySelector('input[data-length="6"]');

inputEl.addEventListener("blur", onCheckInputValid);

function onCheckInputValid(event) {
  const input = event.currentTarget;
  if (input.value.trim().length === Number(input.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
