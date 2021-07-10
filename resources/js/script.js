//#region for DropDown DataList with Every Pokemon from PokeDex
const addPokemonsToDataList = (data) => {
    for (let i = 0; i < data.length; i++) {
        const dataListPokemons = document.getElementById("dataListPokemons");
        const newOption = document.createElement("option");
        newOption.textContent = data[i].name.english;
        newOption.setAttribute("value", data[i].name.english);
        dataListPokemons.appendChild(newOption);
    }
};

fetch("/resources/js/pokedex.json")
    .then((response) => response.json())
    .then((data) => addPokemonsToDataList(data));
//#endregion


const inputPokemons = document.getElementById("inputPokemons");

const thPokename = document.getElementById("thPokename");
const tdSprite = document.getElementById("tdSprite");
const tdType = document.getElementById("tdType");
const tdWeight = document.getElementById("tdWeight");

const namePokeContainer = (data) => {
    thPokename.textContent = data.name.toUpperCase();
    console.log(data);

};

const spritePokeContainer = (data) => {
    const pokeNameFirstLetterUpper = data.name.replace(data.name.charAt(0), data.name.charAt(0).toUpperCase());
    tdSprite.innerHTML = `<img src="${data.sprites.front_default}" alt="Just a ${pokeNameFirstLetterUpper}" width ="300vw">`;
};

const typePokeContainer = (data) => {
    const pokeTypeFirstLetterUpper = data.types[0].type.name.replace(data.types[0].type.name.charAt(0), data.types[0].type.name.charAt(0).toUpperCase())

    if (data.types[1]) {
        const pokeSecondType = data.types[1].type.name;
        tdType.textContent = `${pokeTypeFirstLetterUpper}, ${pokeSecondType}`;
        console.log(pokeSecondType);

    } else {
        tdType.textContent = pokeTypeFirstLetterUpper;
    }

}

const weightPokeContainer = (data) => {
    tdWeight.textContent = data.weight;
}
const fillPokeContainer = (data) => {
    namePokeContainer(data);
    spritePokeContainer(data);
    typePokeContainer(data);
    weightPokeContainer(data);
};

const button = document.getElementById("button");
button.addEventListener("click", (e) => {
    e.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemons.value.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => fillPokeContainer(data))

});