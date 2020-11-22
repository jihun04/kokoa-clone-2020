const userComponentOwn = document.querySelector(".user-component--own"),
userAvatarImg = userComponentOwn.querySelector(".user-component__avatar--own"),
customUserComponent = document.querySelector(".user-component--custom"),
customUserAvatarImg = customUserComponent.querySelector(".user-component__avatar--custom");

const IMG_NUMBER = 17,
AVATARIMG_LS = "avatar-img",
CUSTOMAVATARIMG_LS = "custom-avatar-img";

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function saveAvatarImg(text) {
    localStorage.setItem(AVATARIMG_LS, text);
}

function saveCustomAvatarImg(text) {
    localStorage.setItem(CUSTOMAVATARIMG_LS, text);
}

function changeOwnImg() {
    const randomNumber = genRandom();
    userAvatarImg.src = `images/${randomNumber + 1}.jpg`;
    saveAvatarImg(userAvatarImg.src);
}

function changeCustomImg() {
    const randomNumber = genRandom();
    customUserAvatarImg.src = `images/${randomNumber + 1}.jpg`;
    saveCustomAvatarImg(customUserAvatarImg.src);
}

function loadAvatarImg() {
    const currentAvatarImg = localStorage.getItem(AVATARIMG_LS);
    const currentCustomAvatarImg = localStorage.getItem(CUSTOMAVATARIMG_LS);
    if(currentAvatarImg !== null) {
        userAvatarImg.src = currentAvatarImg;
    }
    if(currentCustomAvatarImg !== null) {
        customUserAvatarImg.src = currentCustomAvatarImg;
    }
}

function init() {
    loadAvatarImg();
    userComponentOwn.addEventListener("click", changeOwnImg);
    customUserComponent.addEventListener("click", changeCustomImg);
}

init();