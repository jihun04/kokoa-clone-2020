function loadColorSetting() {
    const currentColor = localStorage.getItem(COLOR_LS);
    const currentBgColor = localStorage.getItem(BGCOLOR_LS);
    if(currentColor !== null) {
        body.classList.add(currentColor);
    }
    if(currentBgColor !== null) {
        altScreenHeader.classList.add(currentBgColor);
        body.classList.add(currentBgColor);
        nav.classList.add(currentBgColor);
        statusBar.classList.add(currentBgColor);
    }
}

function init() {
    loadColorSetting();
}

init();
