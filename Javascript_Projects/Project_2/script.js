const pokemonData = [
  {
    name: "Pikachu",
    type: "Electric",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    name: "Charmander",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    name: "Bulbasaur",
    type: "Grass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    name: "Squirtle",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    name: "Jynx",
    type: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
  },
];

// target html elements
const pokemonList = document.querySelector("#pokemon-list");
const searchInput = document.querySelector("#searchInput");
const typeFilter = document.querySelector("#typeFilter");
const searchButton = document.querySelector("#serachButton");

// show cards
function displayPokemons(pokemons) {
  pokemonList.innerHTML = "";
  pokemons.forEach((pokemon) => {
    const card = document.createElement("div");
    card.className = "pokemon-card";

    //html set
    card.innerHTML = `
        <img src="${pokemon.image}" alt="${pokemon.name}">
        <h3>${pokemon.name}</h3>
        <p>Type: ${pokemon.type}</p>`;

    pokemonList.appendChild(card);
  });
}

// filter

function filterPokemons() {
    const searchText = searchInput.value.toLowerCase();
    const selectType = typeFilter.value;

    const filteredPokemons = pokemonData.filter((pokemon) => {
        const matchName = pokemon.name.toLowerCase().includes(searchText);
        const matchType = selectType === '' || pokemon.type === selectType;
        return matchName && matchType;
    });
    displayPokemons(filteredPokemons);
}

// searchButton.addEventListener('click', filterPokemons);
searchInput.addEventListener('input', filterPokemons);
typeFilter.addEventListener('change', filterPokemons);

displayPokemons(pokemonData);

console.log("hello");