const noWifiIcon = document.querySelector(".no-wifi"),
checkWifiBox = noWifiIcon.querySelector(".check-wifi"),
checkWifiCloseBtn = checkWifiBox.querySelector("i");

function handleCheckWifiClick() {
    noWifiIcon.removeChild(checkWifiBox);
}

function init() {
    checkWifiCloseBtn.addEventListener("click", handleCheckWifiClick);
}

init();