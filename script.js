const container = document.querySelector(".container");
const selectedTags = new Set();

container.addEventListener("click", onClick);

function onClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }
//   e.target.classList.toggle("active");
//   console.log(e.target);

  const tag = e.target.textContent;
  const isActive = e.target.classList.contains('active')

  if (isActive){
    selectedTags.delete(tag)
  }else{
    selectedTags.add(tag)
  }
  e.target.classList.toggle('active')
  console.log(selectedTags);

}
