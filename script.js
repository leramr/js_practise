const container = document.querySelector('.container')
const btn = document.querySelectorAll('.btn')

container.addEventListener('click', onClick)

function onClick(e){
    if (e.target.nodeName !== 'BUTTON'){
        return
    }

    const currentActiveBtn = document.querySelector('.active')

    console.log (currentActiveBtn)
    if (currentActiveBtn){
        currentActiveBtn.classList.remove('active')
    }

    const nexrActiveBtn = e.target
    nexrActiveBtn.classList.add('active')
}


