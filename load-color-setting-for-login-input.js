function loadColorSetting() {
    const currentBgColor = localStorage.getItem(BGCOLOR_LS);
    if(currentBgColor !== null) {
        loginNameInput.classList.add(currentBgColor);
        loginPasswordInput.classList.add(currentBgColor);
    }
}

function init() {
    loadColorSetting();
}

init();
