const div = document.querySelector(".div");

const option ={
    'capture' : false,
    'once' : true,
    'passive':false
}

function show() {
  console.log("yes");
}

div.addEventListener("click", show, option )
