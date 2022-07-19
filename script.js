const loginForm = document.querySelector("#login");
const signupForm = document.querySelector("#signup");

const loginLink = document.querySelector("#login-link");
const signupLink = document.querySelector("#signup-link");

// Clearing inputs while switching forms

function clearForm() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => (message.innerText = ""));
  const inputs = document.querySelectorAll(".form-input");
  inputs.forEach((input) => {
    input.parentElement.classList.remove("success", "error");
    input.value = "";
  });
}

// Switching between forms

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("form-hidden");
  signupForm.classList.add("form-hidden");
  clearForm();
});

signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.remove("form-hidden");
  loginForm.classList.add("form-hidden");
  clearForm();
});

// Submitting forms

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateSignupInputs();
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateLoginInputs();
});

// Setting warning messages

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorDisplay = inputGroup.querySelector(".error-message");
  errorDisplay.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorDisplay = inputGroup.querySelector(".error-message");
  errorDisplay.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

// Email validation

function isValidEmail(email) {
  const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return reg.test(email);
}

// Sign up form validation

function validateSignupInputs() {
  const username = document.querySelector("#name");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const passwordConfirm = document.querySelector("#password-confirmation");
  const agreement = document.querySelector("#agreement");
  if (username.value === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (email.value === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (password.value === "") {
    setError(password, "Password is required");
  } else if (password.value.length < 8) {
    setError(password, "Password must be at least 8 characters long");
  } else {
    setSuccess(password);
  }

  if (passwordConfirm.value === "") {
    setError(passwordConfirm, "Password confirmation is required");
  } else if (passwordConfirm.value !== password.value) {
    setError(passwordConfirm, "Passwords should match");
  } else {
    setSuccess(passwordConfirm);
  }

  if (!agreement.checked) {
    setError(agreement, "Please accept our Terms of Use and Privacy Policy");
  } else {
    setSuccess(agreement);
  }
}

// Log in form validation

function validateLoginInputs() {
  const newEmail = document.querySelector("#new-email");
  const newPassword = document.querySelector("#new-password");
  if (newEmail.value === "") {
    setError(newEmail, "Email is required");
  } else if (!isValidEmail(newEmail.value)) {
    setError(newEmail, "Provide a valid email address");
  } else {
    setSuccess(newEmail);
  }

  if (newPassword.value === "") {
    setError(newPassword, "Password is required");
  } else if (newPassword.value.length < 8) {
    setError(newPassword, "Password must be at least 8 characters long");
  } else {
    setSuccess(newPassword);
  }
}
