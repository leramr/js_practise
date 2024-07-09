const container = document.querySelector(".container");
const selectedTags = new Set();

container.addEventListener("click", onClick);

function onClick(e) {
    if (e.target.nodeName!=='BUTTON'){
        return
    } 
  const tag = e.target.textContent;
  const isActive = e.target.classList.contains('active')
  e.target.classList.toggle('active')
  if (isActive){
    selectedTags.delete(tag)
  }else{
    selectedTags.add(tag)
  }

  console.log(selectedTags);

}
