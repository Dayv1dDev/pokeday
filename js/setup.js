let pokemons = [' '];
let currentlyShowingAmount = 0;
let maxIndex = 29;
let currentPokemonList = [];

const typeColors = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

// fetch pokemon names, ids and types
async function getPokeNames() {
    let url = "https://pokeapi.co/api/v2/pokemon/?limit=898";
    let response = await fetch(url);
    let responseAsJson = await response.json();

    for (let i = 0; i < responseAsJson.results.length; i++) {
        pokemons.push({
            id: i + 1,
            name: responseAsJson.results[i].name,
            types: []
        });
    };

    getAllTypes();
};

async function getAllTypes() {
    for (let i = 0; i < 18; i++) {
        let url = "https://pokeapi.co/api/v2/type/" + (i + 1);
        let response = await fetch(url);
        let responseAsJson = await response.json();

        const pokemonsInType = responseAsJson.pokemon;

        for (j = 0; j < pokemonsInType.length; j++) {
            const pokemonId = pokemonsInType[j].pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");

            if (pokemonId <= pokemons.length && pokemons[pokemonId]) {
                pokemons[pokemonId].types.push(responseAsJson.name);
            };
        };
    };

    completeLoading();
};

function completeLoading() {
    // const loadingDiv = document.getElementById('loading-div');
    // loadingDiv.classList.add('hideLoading');

    // setTimeout(function() {
    //     loadingDiv.classList.replace('hideLoading', 'hide');
    //     document.body.style.overflow = 'unset';
    // }, 500);

    pokemons.splice(0, 1);
    currentPokemonList = pokemons;

    updatePokemonList();
};

function renderPokemonList(index) {
    if (currentPokemonList[index]) {
	document.getElementById("pokemon-list-container").insertAdjacentHTML('beforeend', `<div onclick="openInfo(${data.id})" class="pokemon-card container">
				<img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="Picture from ${data.name}">
                <span class="bold">#${currentPokemonList[index].id}</span>
                <h3>${firstLetterToUpperCase(currentPokemonList[index].name)}</h3>
				${getTypesContainer(currentPokemonList[index].types)}
            </div>`);

    updatePokemonList();
    }
}

function updatePokemonList() {
    if (currentlyShowingAmount <= maxIndex) {
        renderPokemonList(currentlyShowingAmount);
    };
};

function getTypesContainer(types) {
    let htmlReturn = '<div class="type-container">';
    for (let i = 0; i < types.length; i++) {
        htmlReturn += `<div class="pokemon-type container" style="background-color: ${typeColors[types[i]]};">${firstLetterToUpperCase(types[i])}</div>`;
    }
	
    return htmlReturn + '</div>';
}

function firstLetterToUpperCase(name) {
    let splittedStr = name.toLowerCase().split('-');
    for (let i = 0; i < splittedStr.length; i++) {
        splittedStr[i] = splittedStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    };
    return splittedStr.join(' ');
};
