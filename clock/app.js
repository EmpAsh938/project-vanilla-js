const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand')


function rotateHands(){
    const second = new Date().getUTCSeconds()
    const secondInDegrees = 90 + second * 6
    secondHand.style.transform = `rotate(${secondInDegrees}deg)`

    const minute = new Date().getUTCMinutes()
    const minuteInDegrees = 90 + minute * 6
    minuteHand.style.transform = `rotate(${minuteInDegrees}deg)`

    const hour = new Date().getUTCHours()
    const hourInDegrees = 90 + hour * 30
    hourHand.style.transform = `rotate(${hourInDegrees}deg)`

}


setInterval(() => {
    rotateHands()

}, 1000)