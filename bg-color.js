const body = document.querySelector("body"),
colorSettingList = body.querySelector(".color-list-box"),
color1Btn = colorSettingList.querySelector(".color1-btn"),
color2Btn = colorSettingList.querySelector(".color2-btn"),
color3Btn = colorSettingList.querySelector(".color3-btn"),
color4Btn = colorSettingList.querySelector(".color4-btn"),
color5Btn = colorSettingList.querySelector(".color5-btn"),
color6Btn = colorSettingList.querySelector(".color6-btn"),
color7Btn = colorSettingList.querySelector(".color7-btn"),
color8Btn = colorSettingList.querySelector(".color8-btn"),
color9Btn = colorSettingList.querySelector(".color9-btn"),
color10Btn = colorSettingList.querySelector(".color10-btn"),
color11Btn = colorSettingList.querySelector(".color11-btn"),
color12Btn = colorSettingList.querySelector(".color12-btn"),
color13Btn = colorSettingList.querySelector(".color13-btn"),
color14Btn = colorSettingList.querySelector(".color14-btn"),
color15Btn = colorSettingList.querySelector(".color15-btn");

const 
BGCOLOR_LS = "bg-color",
COLOR_LS = "color",
COLOR1_CN = "color1",
COLOR2_CN = "color2",
COLOR3_CN = "color3",
COLOR4_CN = "color4",
COLOR5_CN = "color5",
COLOR6_CN = "color6",
COLOR7_CN = "color7",
COLOR8_CN = "color8",
COLOR9_CN = "color9",
COLOR10_CN = "color10",
COLOR11_CN = "color11",
COLOR12_CN = "color12",
COLOR13_CN = "color13",
COLOR14_CN = "color14",
COLOR15_CN = "color15";


    // body.classList.remove(COLOR2_CN);
    // body.classList.remove(COLOR4_CN);
    // body.classList.remove(COLOR7_CN);
    // body.classList.remove(COLOR8_CN);
    // body.classList.remove(COLOR9_CN);
    // body.classList.remove(COLOR10_CN);
    // body.classList.remove(COLOR11_CN);
    // body.classList.remove(COLOR15_CN);

function handleColor1Click() {
    body.classList.add(COLOR1_CN);
    body.classList.remove(COLOR3_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR14_CN);
}
function handleColor2Click() {
    body.classList.add(COLOR2_CN);
    body.classList.remove(COLOR1_CN);
    body.classList.remove(COLOR3_CN);
    body.classList.remove(COLOR4_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR7_CN);
    body.classList.remove(COLOR8_CN);
    body.classList.remove(COLOR9_CN);
    body.classList.remove(COLOR10_CN);
    body.classList.remove(COLOR11_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR14_CN);
    body.classList.remove(COLOR15_CN);
}
function handleColor3Click() {
    body.classList.add(COLOR3_CN);
    body.classList.remove(COLOR1_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR14_CN);
}
function handleColor4Click() {
    body.classList.add(COLOR4_CN);
    body.classList.remove(COLOR2_CN);
    body.classList.remove(COLOR3_CN);
    body.classList.remove(COLOR1_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR7_CN);
    body.classList.remove(COLOR8_CN);
    body.classList.remove(COLOR9_CN);
    body.classList.remove(COLOR10_CN);
    body.classList.remove(COLOR11_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR14_CN);
    body.classList.remove(COLOR15_CN);
}
function handleColor5Click() {
    body.classList.add(COLOR5_CN);
    body.classList.remove(COLOR1_CN);
    body.classList.remove(COLOR3_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR14_CN);
}
function handleColor6Click() {
    body.classList.add(COLOR6_CN);
    body.classList.remove(COLOR1_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR3_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR14_CN);
}
function handleColor7Click() {
    body.classList.add(COLOR7_CN);
    body.classList.remove(COLOR2_CN);
    body.classList.remove(COLOR3_CN);
    body.classList.remove(COLOR4_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR1_CN);
    body.classList.remove(COLOR8_CN);
    body.classList.remove(COLOR9_CN);
    body.classList.remove(COLOR10_CN);
    body.classList.remove(COLOR11_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR14_CN);
    body.classList.remove(COLOR15_CN);
}
function handleColor8Click() {
    body.classList.add(COLOR8_CN);
    body.classList.remove(COLOR2_CN);
    body.classList.remove(COLOR3_CN);
    body.classList.remove(COLOR4_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR7_CN);
    body.classList.remove(COLOR1_CN);
    body.classList.remove(COLOR9_CN);
    body.classList.remove(COLOR10_CN);
    body.classList.remove(COLOR11_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR14_CN);
    body.classList.remove(COLOR15_CN);
}
function handleColor9Click() {
    body.classList.add(COLOR9_CN);
    body.classList.remove(COLOR2_CN);
    body.classList.remove(COLOR3_CN);
    body.classList.remove(COLOR4_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR7_CN);
    body.classList.remove(COLOR8_CN);
    body.classList.remove(COLOR1_CN);
    body.classList.remove(COLOR10_CN);
    body.classList.remove(COLOR11_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR14_CN);
    body.classList.remove(COLOR15_CN);
}
function handleColor10Click() {
    body.classList.add(COLOR10_CN);
    body.classList.remove(COLOR2_CN);
    body.classList.remove(COLOR3_CN);
    body.classList.remove(COLOR4_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR7_CN);
    body.classList.remove(COLOR8_CN);
    body.classList.remove(COLOR9_CN);
    body.classList.remove(COLOR1_CN);
    body.classList.remove(COLOR11_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR14_CN);
    body.classList.remove(COLOR15_CN);
}
function handleColor11Click() {
    body.classList.add(COLOR11_CN);
    body.classList.remove(COLOR2_CN);
    body.classList.remove(COLOR3_CN);
    body.classList.remove(COLOR4_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR7_CN);
    body.classList.remove(COLOR8_CN);
    body.classList.remove(COLOR9_CN);
    body.classList.remove(COLOR10_CN);
    body.classList.remove(COLOR1_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR14_CN);
    body.classList.remove(COLOR15_CN);
}
function handleColor12Click() {
    body.classList.add(COLOR12_CN);
    body.classList.remove(COLOR1_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR3_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR14_CN);
}
function handleColor13Click() {
    body.classList.add(COLOR13_CN);
    body.classList.remove(COLOR1_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR3_CN);
    body.classList.remove(COLOR14_CN);
}
function handleColor14Click() {
    body.classList.add(COLOR14_CN);
    body.classList.remove(COLOR1_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR3_CN);
}
function handleColor15Click() {
    body.classList.add(COLOR15_CN);
    body.classList.remove(COLOR2_CN);
    body.classList.remove(COLOR3_CN);
    body.classList.remove(COLOR4_CN);
    body.classList.remove(COLOR5_CN);
    body.classList.remove(COLOR6_CN);
    body.classList.remove(COLOR7_CN);
    body.classList.remove(COLOR8_CN);
    body.classList.remove(COLOR9_CN);
    body.classList.remove(COLOR10_CN);
    body.classList.remove(COLOR11_CN);
    body.classList.remove(COLOR12_CN);
    body.classList.remove(COLOR13_CN);
    body.classList.remove(COLOR14_CN);
    body.classList.remove(COLOR1_CN);
}

function saveBackgroudColor(text) {
    localStorage
}

function askColor() {
    color1Btn.addEventListener("click", handleColor1Click);
    color2Btn.addEventListener("click", handleColor2Click);
    color3Btn.addEventListener("click", handleColor3Click);
    color4Btn.addEventListener("click", handleColor4Click);
    color5Btn.addEventListener("click", handleColor5Click);
    color6Btn.addEventListener("click", handleColor6Click);
    color7Btn.addEventListener("click", handleColor7Click);
    color8Btn.addEventListener("click", handleColor8Click);
    color9Btn.addEventListener("click", handleColor9Click);
    color10Btn.addEventListener("click", handleColor10Click);
    color11Btn.addEventListener("click", handleColor11Click);
    color12Btn.addEventListener("click", handleColor12Click);
    color13Btn.addEventListener("click", handleColor13Click);
    color14Btn.addEventListener("click", handleColor14Click);
    color15Btn.addEventListener("click", handleColor15Click);
}

function init() {
    askColor();
}

init();