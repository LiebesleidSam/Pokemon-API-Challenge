const url = "https://pokeapi.co/api/v2/";

function run () {
    fetch(url + "generation/1/")
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let listItem = document.createElement("li");
            listItem.innerText = json.pokemon_species[0].name;
            document.getElementById("pokemon-list").appendChild(listItem);
        })
    }

