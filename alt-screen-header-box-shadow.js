const altScreenHeader = document.querySelector(".alt-header");

const SCREENHEADERBOXSHADOW_CN = "screen-header-box-shadow";

function handleBodyScroll() {
    const scrollTop = document.documentElement.scrollTop;
    if(scrollTop !== 0) {
        altScreenHeader.classList.add(SCREENHEADERBOXSHADOW_CN);
    } else {
        altScreenHeader.classList.remove(SCREENHEADERBOXSHADOW_CN);
    }
}

function init() {
    window.addEventListener("scroll", handleBodyScroll);
}

init();