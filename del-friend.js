const delFriendBtn = customUser.querySelector(".del-friend-btn");

function handleDelFriendClick() {
    localStorage.removeItem(CUSTOMNAME_LS);
    askCustomUerName();
    friendNth.innerText = 3;
}

function init() {
    delFriendBtn.addEventListener("click", handleDelFriendClick);

}

init();