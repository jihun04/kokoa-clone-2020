const clock = document.querySelector(".clock");

function loadTime() {
    const date = new Date;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
}

function init() {
    loadTime();
    setInterval(loadTime);
}

init();