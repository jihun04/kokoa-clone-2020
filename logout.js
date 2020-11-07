const logoutBtn = document.querySelector(".logout-btn");

const USERNAME_LS = "user-name";

function handleLogOut() {
    localStorage.removeItem(USERNAME_LS)
}

function init() {
    logoutBtn.addEventListener("click", handleLogOut)
}

init();