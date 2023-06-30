const url = "https://pokeapi.co/api/v2/";

function updateList (gen, pokemonNumber) {
    fetch(url + `generation/${gen}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let listItem = document.createElement("h3");
            let pokemonName = json.pokemon_species[pokemonNumber].name;
            listItem.innerText = pokemonName;
            document.getElementById("pokemon").appendChild(listItem);
        })
    }

function getPokemon () {
    let generation = document.getElementById("generation").value;
    let pokemonNumber = document.getElementById("pokemon-number").value;
    let parentDiv = document.getElementById("pokemon");

    parentDiv.innerHTML = "";
    
    updateList(generation, pokemonNumber);
}

let button = document.getElementById("update");
button.addEventListener("click", getPokemon);