let pokemonCount = 151;

// {{name: bulbasuar, type:[],}}
const pokedex = {};

window.onload = async function () {
  for (let i = 1; i < pokemonCount; i++) {
    await getPokemon(i);
    // console.log(pokedex[i]);
  }

  // console.log(pokedex);
};

async function getPokemon(num) {
  let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
  let response = await fetch(url);
  let pokemon = await response.json();

  let pokemonName = pokemon["name"];
  let pokemonType = pokemon["types"];
  let pokemonImg = pokemon["sprites"]["front_shiny"];

  let res = await fetch(pokemon["species"]["url"]);
  let desc = await res.json();

  // console.log(types);

  pokemonDesc = desc["flavor_text_entries"]["5"]["flavor_text"];

  pokedex[num] = {
    name: pokemonName,
    img: pokemonImg,
    types: pokemonType,
    desc: pokemonDesc,
  };
}

// updateDisplay
