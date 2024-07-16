import { throttle } from "lodash.throttle";



const refs ={
    form : document.querySelector('.feedback-form'),
    textarea : document.querySelector('.textarea')
}

const STORAGE_MESSAGE = 'feedback-message'
populatedTextarea()

refs.form.addEventListener('submit', onFormSubmit)
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000))

function onFormSubmit(e){
e.preventDefault ()
console.log ('send')
e.target.reset()
localStorage.removeItem(STORAGE_MESSAGE)
}

function onTextareaInput(e){
    const message = e.target.value
    localStorage.setItem(STORAGE_MESSAGE, message)
}

function populatedTextarea(){
const savedMessage = localStorage.getItem(STORAGE_MESSAGE)
if (savedMessage){
    console.log (savedMessage)
    refs.textarea.value=savedMessage
}
}

