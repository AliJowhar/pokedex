let pokemonCount = 151;

// {{name: bulbasuar, type:[],}}
const pokedex = new Map([]);

window.onload = async function () {
  getPokemon(65);
};

async function getPokemon(num) {
  let url = "https://pokeapi.co/api/v2/pokemon/" + num;
  let response = await fetch(url);
  let pokemon = await response.json();

  let name = pokemon.name;
  let type = pokemon.types;

  let res = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + num);
  let desc = await res.json();

  desc = desc["flavor_text_entries"]["5"]["flavor_text"];

  pokedex.set({
    pkmnName: name,
  });

  console.log(pokedex);
}
getPokemon;

// updateDisplay
console.log(pokedex);
// pkmnType: type,
// pkmnDesc: desc,
