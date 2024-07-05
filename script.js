const form = document.forms.form;

const checkbox = form.checkbox;

checkbox[2].value = 'save'
checkbox[2].checked  = true 
checkbox[0].value = 'save'
checkbox[0].checked  = true 
checkbox[2].value = 'blue'
console.log (checkbox[2].value)





























// `<form name="some" class="some">
//      <input type="text" id="example" name="example">
//    </form>`

// const textArea = document.querySelector(".text");
// const max = textArea.getAttribute("maxlength");
// const textCounter = document.querySelector(".text-counter");
// textCounter.innerHTML = max;

// textArea.addEventListener("keyup", setSymb);
// function setSymb() {
//   const result = max - textArea.value.length;
//   textCounter.innerHTML = result;
// }
