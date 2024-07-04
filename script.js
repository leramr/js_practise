const textArea = document.querySelector(".text");
const max = textArea.getAttribute("maxlength");
const textCounter = document.querySelector(".text-counter");
textCounter.innerHTML = max;

textArea.addEventListener("keyup", setSymb);
function setSymb() {
  const result = max - textArea.value.length;
  textCounter.innerHTML = result;
}
