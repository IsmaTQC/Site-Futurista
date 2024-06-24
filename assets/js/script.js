let botao = document.querySelector('.btn-menu')
let nav   = document.querySelector('.navbar')
botao.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})