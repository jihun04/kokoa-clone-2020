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
MESSAGEROWOWN_CN = "message-row--own",
MESSAGEROWCONTENT_CN = "message-row__content",
MESSAGEINFO_CN = "message__info",
MESSAGEBUBBLE_CN = "message__bubble",
MESSAGETIME_CN = "message__time",
DELICON_CN = "fa-times",
REFICON_CN = "fa-redo-alt",
FAS_CN = "fas",
CHATBTNBOX_CN = "chat-btn-box",
DELBTN_CN = "chat-del-btn",
REFBTN_CN = "chat-ref-btn",
MESSAGECOLUMN_CN = "message__column";

function countNumber() {
    const newId = chatsNumber.length + 1;
    const chatsNumberObj = {
        id: newId
    }
    chatsNumber.push(chatsNumberObj);
}

function loadChat() {
    const currentChat = localStorage.getItem(CHAT_LS);
    const currentChatNumber = localStorage.getItem(CHATNUMBER_LS);
    if(currentChat !== "[]") {
        const parsedChat = JSON.parse(currentChat);
        parsedChat.forEach(function(chat) {
            paintChat(chat.text, chat.time);
        });
    } else {
        chatsNumber = [];
        saveChats();
    }
    
    if(currentChatNumber !== null) {
        const parsedChatNumber = JSON.parse(currentChatNumber);
        parsedChatNumber.forEach(function() {
            countNumber();
        });
    }
}

function saveChats() {
    localStorage.setItem(CHAT_LS, JSON.stringify(chats));
    localStorage.setItem(CHATNUMBER_LS, JSON.stringify(chatsNumber));
}

function paintChat(text, time) {
    const messageRow = document.createElement("div");
    const messageRowContent = document.createElement("div");
    const messageInfo = document.createElement("div");
    const messageBubble = document.createElement("span");
    const messageColumn = document.createElement("div");
    const messageTime = document.createElement("span");
    const btnBox = document.createElement("div");
    const delBtn = document.createElement("i");
    const refBtn = document.createElement("i");
    delBtn.addEventListener("click", handleDelClick);
    refBtn.addEventListener("click", handleRefClick);
    messageRow.classList.add(MESSAGEROW_CN);
    messageRow.classList.add(MESSAGEROWOWN_CN);
    messageRowContent.classList.add(MESSAGEROWCONTENT_CN);
    messageInfo.classList.add(MESSAGEINFO_CN);
    messageBubble.classList.add(MESSAGEBUBBLE_CN);
    messageColumn.classList.add(MESSAGECOLUMN_CN);
    messageTime.classList.add(MESSAGETIME_CN);
    btnBox.classList.add(CHATBTNBOX_CN);
    delBtn.classList.add(DELICON_CN);
    delBtn.classList.add(FAS_CN);
    delBtn.classList.add(DELBTN_CN);
    refBtn.classList.add(REFICON_CN);
    refBtn.classList.add(FAS_CN);
    refBtn.classList.add(REFBTN_CN);
    main.appendChild(messageRow);
    messageRow.appendChild(messageRowContent);
    messageRowContent.appendChild(messageInfo);
    messageInfo.appendChild(messageBubble);
    messageInfo.appendChild(messageColumn);
    messageColumn.appendChild(messageTime);
    messageColumn.appendChild(btnBox);
    btnBox.appendChild(refBtn); 
    btnBox.appendChild(delBtn);
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
        const chatObj = {
            text: text,
            time: savedTime,
            id: newId
        };
        chats.push(chatObj);
    } else {
        messageTimeinnerText = currentTime;
        const chatObj = {
            text: text,
            time: currentTime,
            id: newId
        };
        chats.push(chatObj);
    }
    countNumber();
    saveChats();
}

function handleReplySubmit(event) {
    event.preventDefault();
    const currentChat = replyInput.value;
    paintChat(currentChat);
    replyInput.value = "";
}

function handleDelClick(event) {
    const delBtn = event.target;
    const messageRow = delBtn.parentNode.parentNode.parentNode.parentNode.parentNode;
    main.removeChild(messageRow);
    const cleanChats = chats.filter(function(chat) {
        return parseInt(messageRow.id) !== chat.id;
    });
    chats = cleanChats;
    saveChats();
}

function handleRefClick(event) {
    const refBtn = event.target;
    const messageRow = refBtn.parentNode.parentNode.parentNode.parentNode.parentNode;
    const reSendMessage = chats.filter(function(chat) {
        return parseInt(messageRow.id) === chat.id;
    });
    reSendMessage.forEach(function(chat) {
        paintChat(chat.text, chat.time);
    })
    main.removeChild(messageRow);
    const cleanChats = chats.filter(function(chat) {
        return parseInt(messageRow.id) !== chat.id;
    });
    chats = cleanChats
    saveChats();
}

function init() {
    loadChat();
    reply.addEventListener("submit", handleReplySubmit);
}

init();