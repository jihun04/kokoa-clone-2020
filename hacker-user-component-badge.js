const hackerUserComponentColumnLastChild = document.querySelector(".hacker-user-component__column--last-child"),
hackerBadge = hackerUserComponentColumnLastChild.querySelector(".hacker-badge");

const CHAT_LS = "chats";

function paintHackerBadge() {
    const currentChats = localStorage.getItem(CHAT_LS);
    if(currentChats !== null) {
        const parsedChats = JSON.parse(currentChats);
        const hackerBadgeNumber = parsedChats.length + 2;
        hackerBadge.innerText = hackerBadgeNumber;
    } else {
        hackerUserComponentColumnLastChild.removeChild(hackerBadge);
    }
}

function init() {
    paintHackerBadge();
}

init();