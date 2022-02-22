const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const am_pm = document.querySelector('.am_pm');

let hour_clock, hours, minutes, seconds;

function getTime(date) {
    hours = date.getHours();
    minutes = date.getMinutes().toString();
    seconds = date.getSeconds().toString();
    hour_clock = hours > 12 ? 'pm' : 'am';
    hours = hours % 12;
}

setInterval(() => {
    getTime(new Date());
    hour.textContent = hours.toString().length === 1 ?  `0${hours}` : hours;
    minute.textContent = minutes.length === 1 ?  `0${minutes}` : minutes;
    second.textContent = seconds.length === 1 ?  `0${seconds}` : seconds;
    am_pm.textContent = hour_clock;
}, 1000)
