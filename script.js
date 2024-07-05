const form = document.forms.form
const input = form.text

input.addEventListener('blur', function (event){
    form.submit()
})


