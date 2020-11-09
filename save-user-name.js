const loginForm = document.querySelector("#login-form"),
loginNameInput = document.querySelector(".js-user-name-input");

const USERNAME_LS = "user-name";

function saveName(text) {
    localStorage.setItem(USERNAME_LS, text);
}

function handleSubmit() {
    const currentName = loginNameInput.value;
    saveName(currentName);
}

function loginAskUserName() {
    loginForm.addEventListener("submit", handleSubmit);
}

function init() {
    loginAskUserName()
}

init();