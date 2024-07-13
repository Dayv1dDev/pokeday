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

let pokemonList = [
    ' ', { id: 1, name: 'bulbasaur', types: [] },
    { id: 2, name: 'ivysaur', types: [] },
    { id: 3, name: 'venusaur', types: [] },
    { id: 4, name: 'charmander', types: [] },
    { id: 5, name: 'charmeleon', types: [] },
    { id: 6, name: 'charizard', types: [] },
    { id: 7, name: 'squirtle', types: [] },
    { id: 8, name: 'wartortle', types: [] },
    { id: 9, name: 'blastoise', types: [] },
    { id: 10, name: 'caterpie', types: [] },
    { id: 11, name: 'metapod', types: [] },
    { id: 12, name: 'butterfree', types: [] },
    { id: 13, name: 'weedle', types: [] },
    { id: 14, name: 'kakuna', types: [] },
    { id: 15, name: 'beedrill', types: [] },
    { id: 16, name: 'pidgey', types: [] },
    { id: 17, name: 'pidgeotto', types: [] },
    { id: 18, name: 'pidgeot', types: [] },
    { id: 19, name: 'rattata', types: [] },
    { id: 20, name: 'raticate', types: [] },
    { id: 21, name: 'spearow', types: [] },
    { id: 22, name: 'fearow', types: [] },
    { id: 23, name: 'ekans', types: [] },
    { id: 24, name: 'arbok', types: [] },
    { id: 25, name: 'pikachu', types: [] },
    { id: 26, name: 'raichu', types: [] },
    { id: 27, name: 'sandshrew', types: [] },
    { id: 28, name: 'sandslash', types: [] },
    { id: 29, name: 'nidoran-f', types: [] },
    { id: 30, name: 'nidorina', types: [] },
    { id: 31, name: 'nidoqueen', types: [] },
    { id: 32, name: 'nidoran-m', types: [] },
    { id: 33, name: 'nidorino', types: [] },
    { id: 34, name: 'nidoking', types: [] },
    { id: 35, name: 'clefairy', types: [] },
    { id: 36, name: 'clefable', types: [] },
    { id: 37, name: 'vulpix', types: [] },
    { id: 38, name: 'ninetales', types: [] },
    { id: 39, name: 'jigglypuff', types: [] },
    { id: 40, name: 'wigglytuff', types: [] },
    { id: 41, name: 'zubat', types: [] },
    { id: 42, name: 'golbat', types: [] },
    { id: 43, name: 'oddish', types: [] },
    { id: 44, name: 'gloom', types: [] },
    { id: 45, name: 'vileplume', types: [] },
    { id: 46, name: 'paras', types: [] },
    { id: 47, name: 'parasect', types: [] },
    { id: 48, name: 'venonat', types: [] },
    { id: 49, name: 'venomoth', types: [] },
    { id: 50, name: 'diglett', types: [] },
    { id: 51, name: 'dugtrio', types: [] },
    { id: 52, name: 'meowth', types: [] },
    { id: 53, name: 'persian', types: [] },
    { id: 54, name: 'psyduck', types: [] },
    { id: 55, name: 'golduck', types: [] },
    { id: 56, name: 'mankey', types: [] },
    { id: 57, name: 'primeape', types: [] },
    { id: 58, name: 'growlithe', types: [] },
    { id: 59, name: 'arcanine', types: [] },
    { id: 60, name: 'poliwag', types: [] },
    { id: 61, name: 'poliwhirl', types: [] },
    { id: 62, name: 'poliwrath', types: [] },
    { id: 63, name: 'abra', types: [] },
    { id: 64, name: 'kadabra', types: [] },
    { id: 65, name: 'alakazam', types: [] },
    { id: 66, name: 'machop', types: [] },
    { id: 67, name: 'machoke', types: [] },
    { id: 68, name: 'machamp', types: [] },
    { id: 69, name: 'bellsprout', types: [] },
    { id: 70, name: 'weepinbell', types: [] },
    { id: 71, name: 'victreebel', types: [] },
    { id: 72, name: 'tentacool', types: [] },
    { id: 73, name: 'tentacruel', types: [] },
    { id: 74, name: 'geodude', types: [] },
    { id: 75, name: 'graveler', types: [] },
    { id: 76, name: 'golem', types: [] },
    { id: 77, name: 'ponyta', types: [] },
    { id: 78, name: 'rapidash', types: [] },
    { id: 79, name: 'slowpoke', types: [] },
    { id: 80, name: 'slowbro', types: [] },
    { id: 81, name: 'magnemite', types: [] },
    { id: 82, name: 'magneton', types: [] },
    { id: 83, name: 'farfetchd', types: [] },
    { id: 84, name: 'doduo', types: [] },
    { id: 85, name: 'dodrio', types: [] },
    { id: 86, name: 'seel', types: [] },
    { id: 87, name: 'dewgong', types: [] },
    { id: 88, name: 'grimer', types: [] },
    { id: 89, name: 'muk', types: [] },
    { id: 90, name: 'shellder', types: [] },
    { id: 91, name: 'cloyster', types: [] },
    { id: 92, name: 'gastly', types: [] },
    { id: 93, name: 'haunter', types: [] },
    { id: 94, name: 'gengar', types: [] },
    { id: 95, name: 'onix', types: [] },
    { id: 96, name: 'drowzee', types: [] },
    { id: 97, name: 'hypno', types: [] },
    { id: 98, name: 'krabby', types: [] },
    { id: 99, name: 'kingler', types: [] }
]


// renderPokemonList(pokemonList);

// function renderPokemonList(data) {
// 	document.getElementById("pokemon-list-container").insertAdjacentHTML('beforeend', `<div onclick="openInfo(${data.id})" class="pokemon-card container">
// 				<img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="Picture from ${data.name}">
//                 <span class="bold">#${data.id}</span>
//                 <h3>${firstLetterToUpperCase(data.name)}</h3>
// 				${getTypeContainer()}
//             </div>`);
// }

// function getTypeContainer() {

// }

// function firstLetterToUpperCase(name) {
//     let splittedStr = name.toLowerCase().split('-');
//     for (let i = 0; i < splittedStr.length; i++) {
//         splittedStr[i] = splittedStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     };
//     return splittedStr.join(' ');
// };

