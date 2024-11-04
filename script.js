function calcTimer() {
    let today = new Date();
    let saleDeadline = new Date(2024, 10, 2);
    let delta = (saleDeadline - today) / 1000;
    delta = Math.trunc(delta);

    let hours = Math.trunc(delta / 3600);
    let minutes = Math.trunc((delta % 3600) / 60);
    let seconds = delta % 60;
    let hoursElem = document.getElementById("timerHours");
    let minutesElem = document.getElementById("timerMinutes");
    let secondsElem = document.getElementById("timerSeconds");

    hoursElem.innerHTML = twoDigits(hours);
    minutesElem.innerHTML = twoDigits(minutes);
    secondsElem.innerHTML = twoDigits(seconds);
}

calcTimer();
setInterval(calcTimer, 1000);

function twoDigits(num) {
    return num < 10 ? "0" + num : num;
}
