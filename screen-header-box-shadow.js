const SCREENHEADERBOXSHADOW_CN = "screen-header-box-shadow";

function handleBodyScroll() {
    const scrollTop = document.documentElement.scrollTop;
    if(scrollTop !== 0) {
        screenHeader.classList.add(SCREENHEADERBOXSHADOW_CN);
    } else {
        screenHeader.classList.remove(SCREENHEADERBOXSHADOW_CN);
    }
}

function init() {
    window.addEventListener("scroll", handleBodyScroll);
}

init();