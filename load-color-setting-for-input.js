function loadColorSetting() {
    const currentColor = localStorage.getItem(COLOR_LS);
    const currentBgColor = localStorage.getItem(BGCOLOR_LS);
    if(currentColor !== null) {
        input.classList.add(currentColor);
    }
    if(currentBgColor !== null) {
        input.classList.add(currentBgColor);
    }
}

function init() {
    loadColorSetting();
}

init();