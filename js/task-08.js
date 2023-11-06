const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const inputEl = event.currentTarget.elements;
  const email = inputEl.email.value.trim();
  const password = inputEl.password.value.trim();

  if (!email || !password) {
    alert("Заповніть, будь-ласка усі поля");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  event.currentTarget.reset();
}

// function onFormSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (!email.value || !password.value) {
//     alert("Заповніть, будь-ласка усі поля");
//     return;
//   }
//   const formData = { email: email.value, password: password.value };

//   console.log(formData);
//   event.currentTarget.reset();
// }
