const input = document.querySelector('.input')
const btnPlusOne = document.querySelector('.btn-one')
const btnPlusTwo = document.querySelector('.btn-two')
let count = 0


input.value=0
handleChangeOne=(e)=>{
    count+=1
    input.value = count
}
btnPlusOne.addEventListener('click', handleChangeOne)

handleChangeTwo=(e)=>{
    count+=2
    input.value = count
    input.style.fontSize = "35px"
}
btnPlusTwo.addEventListener('click', handleChangeTwo)
