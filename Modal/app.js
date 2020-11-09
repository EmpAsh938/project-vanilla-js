const openBtn = document.querySelector('.open-btn')
const toggleModal = document.querySelector('.toggle-modal')
const closeModal = document.querySelector('.close-modal')

openBtn.addEventListener('click', function(){
    console.log('clicked')
    toggleModal.classList.add('toggle-modal-now')
})

closeModal.addEventListener('click', function(){
    toggleModal.classList.remove('toggle-modal-now')
})