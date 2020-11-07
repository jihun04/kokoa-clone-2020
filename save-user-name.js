const loginForm = document.querySelector("#login-form"),
loginInput = loginForm.querySelector(".js-user-name-input");

const USERNAME_LS = "user-name";

function saveName(text) {
    localStorage.setItem(USERNAME_LS, text);
}

function handleSubmit() {
    const currentName = loginInput.value;
    saveName(currentName);
}

function loginAskUserName() {
    loginForm.addEventListener("submit", handleSubmit);
}

function init() {
    loginAskUserName()
}

init();