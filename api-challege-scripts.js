const url = "https://pokeapi.co/api/v2/";
let searchResults = [];
let types = ["normal","fighting","flying","poison","ground","rock","bug","ghost","steel",
    "fire","water","grass","electric","psychic","ice","dragon","dark","fairy"];

function updateList (gen, type) {
    let typeNumber = types.indexOf(type) + 1;
    fetch(url + `type/${typeNumber}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let typePokemon = json.pokemon;
        
            typePokemon.forEach((pokemon) => {
                let pokemonName = pokemon.pokemon.name;
                searchResults.push(pokemonName);
            })
        })
    fetch(url + `generation/${gen}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let genPokemon = json.pokemon_species;
            let pokemonList = document.getElementById("pokemon-list");

            genPokemon.forEach((pokemon) => {
                if (searchResults.includes(pokemon.name)) {
                    let listItem = document.createElement("li");
                    listItem.innerText = pokemon.name;
                    pokemonList.appendChild(listItem);
                }
            })
        })
}

function getPokemon () {
    let generation = document.getElementById("generation").value;
    let type = document.getElementById("type").value;
    let parentDiv = document.getElementById("pokemon-list");

    parentDiv.innerHTML = "";
    searchResults = [];

    updateList(generation, type);
}

let button = document.getElementById("update");
button.addEventListener("click", getPokemon);