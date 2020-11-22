const userComponentOwn = document.querySelector(".user-component--own"),
userAvatarImg = userComponentOwn.querySelector(".user-component__avatar--own");

const IMG_NUMBER = 17,
AVATARIMG_LS = "avatar-img";

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function saveAvatarImg(text) {
    localStorage.setItem(AVATARIMG_LS, text);
}

function changeOwnImg() {
    const randomNumber = genRandom();
    userAvatarImg.src = `images/${randomNumber + 1}.jpg`;
    saveAvatarImg(userAvatarImg.src);
}

function loadAvatarImg() {
    const currentAvatarImg = localStorage.getItem(AVATARIMG_LS);
    if(currentAvatarImg !== null) {
        userAvatarImg.src = currentAvatarImg;
    }
}

function init() {
    loadAvatarImg();
    userComponentOwn.addEventListener("click", changeOwnImg);
}

init();