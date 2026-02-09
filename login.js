// Define valid credentials (you can change these)
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "admin";

function login() {
  const userInput = document.getElementById("username");
  const passInput = document.getElementById("password");
  const error = document.getElementById("error");

  const username = userInput.value.trim();
  const password = passInput.value.trim();

  // Reset previous error message
  error.innerText = "";

  // Validate empty input
  if (username === "") {
    error.innerText = "Please enter your username.";
    userInput.focus();
    return;
  }

  if (password === "") {
    error.innerText = "Please enter your password.";
    passInput.focus();
    return;
  }

  // Check credentials (case-sensitive)
  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    // Optionally, add a brief success message or spinner here

    // Redirect after short delay for smooth UX
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 300);
  } else {
    error.innerText = "Invalid Username or Password";
    // Optionally clear password field after failed attempt
    passInput.value = "";
    passInput.focus();
  }
}
