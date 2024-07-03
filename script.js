const nav = document.querySelector('.nav')

document.addEventListener('click', menu)

function menu (event){
if (event.target.closest('.btn')){
    nav.classList.toggle('-active')
}
if (!event.target.closest('.btn')){
    nav.classList.remove('-active')
}
}