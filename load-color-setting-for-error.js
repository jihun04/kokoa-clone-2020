function loadColorSetting() {
    const currentColor = localStorage.getItem(COLOR_LS);
    const currentBgColor = localStorage.getItem(BGCOLOR_LS);
    if(currentColor !== null) {
        body.classList.add(currentColor);
        battery1.classList.add(currentColor);
        battery2.classList.add(currentColor);
        battery3.classList.add(currentColor);
        battery4.classList.add(currentColor);
        battery5.classList.add(currentColor);
        battery6.classList.add(currentColor);
    }
    if(currentBgColor !== null) {
        body.classList.add(currentBgColor);
        nav.classList.add(currentBgColor);
        statusBar.classList.add(currentBgColor);
        screenHeader.classList.add(currentBgColor);
    }
}

function init() {
    loadColorSetting();
}

init();