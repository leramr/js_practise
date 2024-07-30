const container = document.querySelector('.container')

mouseOver=(e)=>{
    container.style.backgroundColor = 'blue'
}
container.addEventListener('mouseover', mouseOver)

mouseOver=(e)=>{
    container.style.backgroundColor = 'pink'
}
container.addEventListener('mouseout', mouseOver)
