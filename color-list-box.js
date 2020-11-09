const bgColorSettingBox = document.querySelector(".bg-color-setting-box"),
colorSettingBox = document.querySelector(".color-setting-box"),
bgColorSettingOpen = document.querySelector(".bg-color-setting--open"),
bgColorSettingBoxOpen = bgColorSettingOpen.querySelector(".bg-color-setting-box--open"),
colorSettingOpen = document.querySelector(".color-setting--open"),
colorSettingBoxOpen = colorSettingOpen.querySelector(".color-setting-box--open");

const DISPLAYNONE_CN = "display-none";

function handleBCListClose() {
    bgColorSettingBox.classList.remove(DISPLAYNONE_CN);
    bgColorSettingOpen.classList.add(DISPLAYNONE_CN);
}

function handleBCListOpen() {
    bgColorSettingBox.classList.add(DISPLAYNONE_CN);
    bgColorSettingOpen.classList.remove(DISPLAYNONE_CN);
    bgColorSettingBoxOpen.addEventListener("click", handleBCListClose);
}

function handleCListClose() {
    colorSettingBox.classList.remove(DISPLAYNONE_CN);
    colorSettingOpen.classList.add(DISPLAYNONE_CN);
}

function handleCListOpen() {
    colorSettingBox.classList.add(DISPLAYNONE_CN);
    colorSettingOpen.classList.remove(DISPLAYNONE_CN);
    colorSettingBoxOpen.addEventListener("click", handleCListClose);
}

function init() {
    bgColorSettingBox.addEventListener("click", handleBCListOpen);
    colorSettingBox.addEventListener("click", handleCListOpen);
}

init();