

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("notify-me");
const loginErrorMsg = document.getElementById("error-message");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;

    if (email === "user@user.com") {
        console.log("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})