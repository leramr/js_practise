

fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(response => {
    return response.json(); 
  })
  .then(response => {
    console.log(response); 
  })
  .catch(error => {
    console.log(error); 
  });
