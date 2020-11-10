const timers = document.querySelectorAll('.timers h4')
const headerInfo = document.querySelector('.header-info')
const timerContainer = document.querySelector('.timer-container')

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

// days and months start from 0 index
// const deadLine = new Date(yr, mnth, date, hr, min, sec)
const deadLine = new Date(2020, 11, 20, 12, 11, 0)
// console.log(deadLine)
let randomDate; /* if date exceeds the default */
if (deadLine.getDate() > 7) {
    randomDate = deadLine.getDate() % 7 
} else {
    randomDate = deadLine.getDate()
}


const day = days[randomDate]
const date = deadLine.getDate()
const month = months[deadLine.getMonth()]
const year = deadLine.getFullYear()
const hour = deadLine.getHours()
const minute = deadLine.getMinutes()
const second = deadLine.getSeconds()

// checking pm and am
let refTime;
if (hour >= 12 && minute >= 1) {
    refTime = 'pm'
} else {
    refTime = 'am'
}

const am_pm = refTime


// change the deadline
headerInfo.textContent = `giveaway ends on ${day}, ${format(date)} ${month} ${format(year)}, ${format(hour)}:${format(minute)}${am_pm}`

// calculating the deadLine

// reference for calculating
/*
1 sec = 1000 ms
1 min = 60 sec * 1000 ms
1 hr  = 60 min * 60 sec * 1000 ms
1 day = 24 hr * 60 min * 60 sec * 1000 ms
*/
const endDate = deadLine.getTime()
let currentDate

// console.log(endDate)
// console.log(currentDate)

function leftTime(){
    if (currentDate > deadLine.getTime()) {
        clearInterval(timerInterval)
        console.log("time expired!!!!!!")
        console.log('LOL')
        timers.forEach(item=>{
            item.textContent = format(0)
        })
        timerContainer.innerHTML = `
        <h4 class='timer-cont'>Offer has been expired!</h4>`
        headerInfo.style.color = 'red'
        headerInfo.textContent = `giveaway ended on ${day}, ${format(date)} ${month} ${format(year)}, ${format(hour)}:${format(minute)}${am_pm}`
    }
    let remainingTime = endDate - currentDate
    let daysLeft = Math.ceil(remainingTime / (24 * 3600000))
    remainingTime = remainingTime % (24 * 3600000)
    let hrLeft = Math.ceil(remainingTime / 3600000)
    remainingTime = remainingTime % 3600000
    let minLeft = Math.ceil(remainingTime / 60000)
    remainingTime = remainingTime % 60000
    let secLeft = Math.ceil(remainingTime / 1000)
    remainingTime = remainingTime % 1000
    timers.forEach(function(timer){
        if (timer.classList.contains('days')) {
            timer.textContent = format(daysLeft)
        } else if (timer.classList.contains('hours')) {
            timer.textContent = format(hrLeft)
        } else if (timer.classList.contains('minutes')) {
            timer.textContent = format(minLeft)
        } else if (timer.classList.contains('seconds')) {
            timer.textContent = format(secLeft)
        } 
    })
}

let timerInterval = setInterval(() => {
    // console.log(currentDate)
    currentDate = new Date().getTime()  
    leftTime()  
}, 1000);




// two digit 
function format(par){
    let newPar = par.toString()
    if (newPar.length === 1) {
        return `0${newPar}`
    } else {
        return newPar
    }
}
