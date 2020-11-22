const hackerUserComponentSubtitle = document.querySelector(".hacker-user-component__subtitle");

const USERNAME_LS = "user-name";

function paintHackerSubtitle() {
    const currentUserName = localStorage.getItem(USERNAME_LS);
    hackerUserComponentSubtitle.innerText = `Hi, ${currentUserName}`;
}

function init() {
    paintHackerSubtitle();
}

init();