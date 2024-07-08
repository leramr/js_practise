const container = document.querySelector('.container')

container.addEventListener('click', onClick)

function onClick(e){
    if (e.target.nodeName !== 'BUTTON'){
        return
    }
    console.log (e.target)
}

