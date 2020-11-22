const delFriendBtn = customUser.querySelector(".del-friend-btn");

function handleDelFriendClick() {
    localStorage.removeItem(CUSTOMNAME_LS);
    askCustomUerName();
    friendNth.innerText = 2;
}

function init() {
    delFriendBtn.addEventListener("click", handleDelFriendClick);

}

init();