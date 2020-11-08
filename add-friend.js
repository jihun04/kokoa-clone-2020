const addForm = document.querySelector(".add-friend-form"),
addInput = addForm.querySelector("input"),
customUser = document.querySelector(".custom-user"),
customName = customUser.querySelector(".custom-friend-name"),
friendNth = document.querySelector(".friends-nth"),
friendHeader = document.querySelector(".friends-screen__friend-header");

const CUSTOMNAME_LS = "custom-user-name",
MARGINBOTTOM25PX = "friends-screen__friend-header--margin25px";

function saveCustomUser(text) {
    localStorage.setItem(CUSTOMNAME_LS, text);
}

function paintCustomUser() {
    addForm.classList.remove(SHOWING_CN); 
    customUser.classList.add(SHOWING_CN);
    friendHeader.classList.remove(MARGINBOTTOM25PX);
    friendNth.innerText = 4;
    const currentCustomName = localStorage.getItem(CUSTOMNAME_LS);
    customName.innerText = currentCustomName;
}

function handleAddFormSubmit(event) {
    event.preventDefault();
    const currentAddInputValue = addInput.value;
    saveCustomUser(currentAddInputValue);
    paintCustomUser();
    addInput.value = "";
}

function askCustomUerName() {
    addForm.classList.add(SHOWING_CN); 
    customUser.classList.remove(SHOWING_CN);
    friendHeader.classList.add(MARGINBOTTOM25PX);
    addForm.addEventListener("submit", handleAddFormSubmit)
}

function loadCustomUser() {
    const customFriend = localStorage.getItem(CUSTOMNAME_LS);
    if(customFriend === null) {
        askCustomUerName();
    } else {
        paintCustomUser();
    }
}

function init() {
    loadCustomUser();
}

init();