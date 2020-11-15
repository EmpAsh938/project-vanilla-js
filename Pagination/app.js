import fetchReq from './fetchData.js'
import displayData from './displayData.js'

const preloader = document.querySelector('.preloader')
const header = document.querySelector('.main')

let pageData = [];
let index = 0;

const showData = (i,d) => {
    let page = filterData(i, d)
    displayData(page)
}

// fetching API && working with preloader
const fetchData = async () => {
    preloader.classList.remove('preloader')
    header.classList.add('preloader')
    const peopleData = await fetchReq()
    preloader.classList.add('preloader')
    header.classList.remove('preloader')
    pageData = peopleData
    showData(index, pageData)
}
window.addEventListener('load', fetchData)


// working with buttons
const btnContainer = document.querySelector('.btn-container')
const secondaryButton = document.querySelectorAll('.btn-secondary') 
btnContainer.childNodes.forEach(btncontainer => {
    btncontainer.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('prev')) {
            index--
            if (index < 0) {
                index = 10
            }
        } else if (e.currentTarget.classList.contains('next')) {
            index++
            if (index > 10) {
                index = 0
            }
        } else if (e.currentTarget.classList.contains('btn-secondary')) {
            e.currentTarget.classList.add('btn-active')
            index = parseInt(e.currentTarget.textContent)
        }
        secondaryButton.forEach(secondary => {
            if (index == secondary.textContent) {
                secondary.classList.add('btn-active')
            }
            if (secondary.textContent != index) {
                // console.log('fired')
                secondary.classList.remove('btn-active')
            }
        })
        showData(index, pageData)

    })
})





// filtering the data 
const filterData = (param, paramData) => {
    const page = 10
    let firstIndex;
    let lastIndex;
    if (param !== 0) {
        firstIndex = (param * page) - page
        lastIndex = (param * page)
    } else {
        firstIndex = param
        lastIndex = page
    }
    // if (param > 90) {
    //     param = 0
    // } else if (param === 0) {
    //     param;
    // } else if (param <= 10) {
    //     param *= 10
    //     param - 10 
    // }
    return paramData.slice(firstIndex, lastIndex)
}



