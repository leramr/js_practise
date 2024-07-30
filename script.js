const openBtn = document.querySelector('.btn-open')
const btnClose = document.querySelector('.btn-close')
const menu = document.querySelector('.dropdown-menu')


openDropdown=(e)=>{
    menu.style.display = 'block';
}
openBtn.addEventListener('click', openDropdown )


closeDropdown=(e)=>{
    menu.style.display="none"
}
btnClose.addEventListener('click', closeDropdown)
