let pokemonCount = 151;

// {{name: bulbasuar, type:[],}}
const pokedex = new Map([]);

window.onload = async function () {
  getPokemon();
};

async function getPokemon() {
  let url = "https://pokeapi.co/api/v2/pokemon/1";
  let response = await fetch(url);
  let pokemon = await response.json();

  console.log(pokemon);
}
getPokemon;

// updateDisplay
