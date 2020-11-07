const userName = document.querySelector(".js-user-name"),
userNameForm = document.querySelector(".user-name-form"),
userNameInput = userNameForm.querySelector("input");

const SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USERNAME_LS, text);
}

function handlesubmit(event) {
    event.preventDefault();
    const currentName = userNameInput.value;
    saveName(currentName);
    paintUserName(currentName);

}

function noneAskUserName() {
    userName.classList.remove(SHOWING_CN);
    userNameForm.classList.add(SHOWING_CN);
    userNameForm.addEventListener("submit", handlesubmit);
}

function paintUserName(text) {
    userName.classList.add(SHOWING_CN);
    userNameForm.classList.remove(SHOWING_CN);
    userName.innerText = text;
}

function loadUserName() {
    const currentName = localStorage.getItem(USERNAME_LS);
    if(currentName === null) {
        noneAskUserName();
    } else {
        paintUserName(currentName);
    }
}

function init() {
    loadUserName();
}

init();