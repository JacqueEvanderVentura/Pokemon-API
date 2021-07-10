const addPokemonsToDataList = (data) => {
    for (let i = 0; i < data.length; i++) {
        const dataListPokemons = document.getElementById("dataListPokemons");
        const newOption = document.createElement("option");
        newOption.textContent = data[i].name.english;
        newOption.setAttribute("value", data[i].name.english)
        dataListPokemons.appendChild(newOption)

    }
}

fetch("/resources/js/pokedex.json")
    .then((response) => response.json())
    .then((data) => addPokemonsToDataList(data));