const counterNumber = document.getElementById('count')

let count = parseInt(counterNumber.textContent)
const btns = document.querySelectorAll('.btn')

btns.forEach(function(item) {
    item.addEventListener('click', (e) => {
        const btnType = e.currentTarget.classList
        if (btnType.contains('decrease')) {
            // console.log("decreased")
            count--
        }
        if (btnType.contains('increase')) {
            count++
        }
        if (btnType.contains('reset')) {
            count = 0
        }
        if (count > 0) {
            counterNumber.style.color = 'rgb(17,207,27)'
        }
        if (count < 0) {
            counterNumber.style.color = 'red'
        }
        if (count === 0) {
            counterNumber.style.color = '#222'
        }
        counterNumber.textContent = count
    })
})