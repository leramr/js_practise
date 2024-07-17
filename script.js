import pokemonCard from './src/'

fetch ('https://pokeapi.co/api/v2/pokemon/2')
.then (res => {
   return res.json()
})
.then(pokemon =>{
  console.log (pokemon)
})
.catch (error => console.log(error))