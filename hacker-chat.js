const reply = document.querySelector(".reply"),
replyInput = reply.querySelector("input"),
main = document.querySelector("main"),
delChatBtn = main.querySelector(".chat-del-btn"),
refChatBtn = main.querySelector(".chat-ref-btn");

let chats = [];
let chatsNumber = [];

const CHAT_LS = "chats",
CHATNUMBER_LS = "chats-number"
MESSAGEROW_CN = "message-row",
MESSAGEROWCONTENT_CN = "message-row__content",
MESSAGEINFO_CN = "message__info",
MESSAGEBUBBLE_CN = "message__bubble",
MESSAGETIME_CN = "message__time";

function loadChat() {
    const currentChat = localStorage.getItem(CHAT_LS);
    if(currentChat !== null) {
        const parsedChat = JSON.parse(currentChat);
        parsedChat.forEach(function(chat) {
            paintChat(chat.text, chat.time);
        });
    }
}

function paintChat(text, time) {
    const messageRow = document.createElement("div");
    const messageRowContent = document.createElement("div");
    const messageInfo = document.createElement("div");
    const messageBubble = document.createElement("span");
    const messageTime = document.createElement("span");
    messageRow.classList.add(MESSAGEROW_CN);
    messageRowContent.classList.add(MESSAGEROWCONTENT_CN);
    messageInfo.classList.add(MESSAGEINFO_CN);
    messageBubble.classList.add(MESSAGEBUBBLE_CN);
    messageTime.classList.add(MESSAGETIME_CN);
    main.appendChild(messageRow);
    messageRow.appendChild(messageRowContent);
    messageRowContent.appendChild(messageInfo);
    messageInfo.appendChild(messageBubble);
    messageInfo.appendChild(messageTime);
    messageBubble.innerText = text;
    const date = new Date;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const currentTime = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    const savedTime = time;
    const newId = chatsNumber.length + 1;
    messageRow.id = newId;
    if(savedTime !== undefined) {
        messageTime.innerText = savedTime;
    } else {
        messageTime. innerText = currentTime;
    }
}

function handleReplySubmit(event) {
    event.preventDefault();
    paintChat("You can't");
    replyInput.value = "";
}

function init() {
    loadChat();
    reply.addEventListener("submit", handleReplySubmit);
}

init();