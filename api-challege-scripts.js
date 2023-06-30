const url = "https://pokeapi.co/api/v2/";

function updateList (gen, type) {
    fetch(url + `generation/${gen}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let genPokemon = json.pokemon_species;
            const pokemonList = document.getElementById("pokemon-list");

            genPokemon.forEach((pokemon) => {
                let listItem = document.createElement("li");
                listItem.innerText = pokemon.name;
                pokemonList.appendChild(listItem);
            })
        })
}

function getPokemon () {
    let generation = document.getElementById("generation").value;
    let type = document.getElementById("type").value;
    let parentDiv = document.getElementById("pokemon-list");

    parentDiv.innerHTML = "";

    updateList(generation, type);
}

let button = document.getElementById("update");
button.addEventListener("click", getPokemon);