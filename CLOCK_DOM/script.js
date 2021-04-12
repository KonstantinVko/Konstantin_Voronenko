const renderClock = () => {
    document.getElementById('app').innerHTML =
        '<div class="smallCircle one">1</div> \n' +
        '<div class="smallCircle two">2</div> \n' +
        '<div class="smallCircle three">3</div>\n' +
        '<div class="smallCircle four">4</div>\n' +
        '<div class="smallCircle five">5</div>\n' +
        '<div class="smallCircle six">6</div>\n' +
        '<div class="smallCircle seven">7</div>\n' +
        '<div class="smallCircle eight">8</div>\n' +
        '<div class="smallCircle nine">9</div>\n' +
        '<div class="smallCircle ten">10</div>\n' +
        '<div class="smallCircle eleven">11</div>\n' +
        '<div class="smallCircle twelve">12</div>\n' +
        '<div class="digitalWatch"></div>\n' +
        '<div class="hoursArrow"></div>\n' +
        '<div class="minutesArrow"></div>\n' +
        '<div class="secondsArrow"></div>\n'
};
const getArrows = () => {
    let hoursArrow = document.querySelector('.hoursArrow');
    let minutesArrow = document.querySelector('.minutesArrow');
    let secondsArrow = document.querySelector('.secondsArrow');
    let digitalWatch = document.querySelector('.digitalWatch');
    return {
        hoursArrow,
        minutesArrow,
        secondsArrow,
        digitalWatch
    }
};
const changeTime = () => {
    let arrows = getArrows();

    let time = new Date();
    arrows.digitalWatch.innerHTML = time.toLocaleTimeString();

    let secondsPosition = 6 * time.getSeconds() - 6;
    secondsPosition += 6;
    arrows.secondsArrow.style.transform = "rotate(" + secondsPosition + "deg)";

    let minutesPosition = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
    minutesPosition += 6 * (1/60);
    arrows.minutesArrow.style.transform = "rotate(" + minutesPosition + "deg)";

    let hoursPosition = 30 * (time.getHours() + (1 / 60) * time.getMinutes())
    hoursPosition += 6 * (1/360);
    arrows.hoursArrow.style.transform = "rotate(" + hoursPosition + "deg)";
};

window.addEventListener("load", () => {
    renderClock();
    changeTime();
});
window.setInterval(changeTime, 1000);