const btn = document.querySelector('button')
const canva = document.querySelector('.canva')
const offcanva = document.querySelector('.off-canva')

btn.addEventListener('click', () => {
    offcanva.classList.toggle('active')
    canva.classList.toggle('active')
})