let pokemonCount = 151;

// {{name: bulbasuar, type:[],}}
const pokedex = new Map();

window.onload = async function () {
  getPokemon(1);
};

async function getPokemon(num) {
  let url = "https://pokeapi.co/api/v2/pokemon/" + num;
  let response = await fetch(url);
  let pokemon = await response.json();

  let name = pokemon["name"];
  let types = pokemon["types"];
  let pkmnImg = pokemon["sprites"]["front_shiny"];

  let res = await fetch(pokemon["species"]["url"]);
  let desc = await res.json();

  desc = desc["flavor_text_entries"]["5"]["flavor_text"];
  pokedex[num] = {
    name: name,
    types: types,
    img: pkmnImg,
    desc: desc,
  };
}

// updateDisplay
