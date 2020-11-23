const hackerBadge = document.querySelector(".hacker-badge");

const CHAT_LS = "chats";

function paintHackerBadge() {
    const currentChats = localStorage.getItem(CHAT_LS);
    const parsedChats = JSON.parse(currentChats);
    const hackerBadgeNumber = parsedChats.length + 2;
    hackerBadge.innerText = hackerBadgeNumber;
}

function init() {
    paintHackerBadge();
}

init();