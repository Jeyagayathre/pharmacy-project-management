function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (username === "malar" && password === "1234") {
        window.location.href = "dashboard.html"; // Admin page
    } else {
        error.textContent = "Invalid Username or Password";
    }
}
