const customUserComponent = document.querySelector(".user-component--custom"),
customUserAvatarImg = customUserComponent.querySelector(".user-component__avatar--custom");

const CUSTOMAVATARIMG_LS = "custom-avatar-img";

function saveCustomAvatarImg(text) {
    localStorage.setItem(CUSTOMAVATARIMG_LS, text);
}

function changeCustomImg() {
    const randomNumber = genRandom();
    customUserAvatarImg.src = `images/${randomNumber + 1}.jpg`;
    saveCustomAvatarImg(customUserAvatarImg.src);
}

function loadAvatarImg() {
    const currentCustomAvatarImg = localStorage.getItem(CUSTOMAVATARIMG_LS);
    if(currentCustomAvatarImg !== null) {
        customUserAvatarImg.src = currentCustomAvatarImg;
    } else {
        customUserAvatarImg.src = `images/profileimg.jpg`
    }
}

function init() {
    loadAvatarImg();
    customUserComponent.addEventListener("click", changeCustomImg);
}

init();