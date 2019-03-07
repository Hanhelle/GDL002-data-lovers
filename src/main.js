'use strict';

const pokemonObj = POKEMON.pokemon;

let pokemonList = [];
let pokemonInfo = "";

let condition = document.querySelector('select');	

const description = document.querySelector('h1');
const searchInput = document.querySelector('#searchbar');
const searchButton = document.querySelector('#searchbutton');
const filterButton = document.querySelector('#filterbutton');
const sortButton = document.querySelector('#sortbutton');
const showAllButton = document.querySelector('#showall');
const resetButton = document.querySelector('#resetbutton');
const results = document.querySelector('#results');
const footer = document.querySelector('footer');
const aboutUsButton = document.querySelector('#aboutusbutton');
const aboutUs = document.querySelector('p');
const searchBox = document.querySelector('#search');
const homeButton = document.querySelector('#homebutton');
//const averageCandyButton = 

//Funcion para validar el texto que ingreso el usuario
const validateSearchInput = () => {

	if (searchInput.value.length < 1) {
		searchInput.placeholder = "Busca por nombre o número...";
		warnAndReset();
	} else if (/[^a-z0-9]/i.test(searchInput.value)) {
		searchInput.placeholder = "Solo puedes utilizar letras y/o números...";
		warnAndReset();
	} else if (searchInput.value < 1 || searchInput.value > 151) {
		searchInput.placeholder = "Solo existen 151 pokemon en Kanto";
		warnAndReset();
	} else {
		searchInput.style.backgroundColor = "rgb(139, 196, 122)";
		results.innerHTML = "";
		searchPokemon();
	}

};

/*Funcion que cambia de color el campo donde el usuario ingresa su busqueda,resetea valor de busqueda del usuario a vacio y esconde el contenedor de resultados */
const warnAndReset = () => {

	searchInput.style.backgroundColor =  "rgb(212, 110, 110)";
	searchInput.value = "";
	results.style.display = "none";

};	

//Funcion para borrar campos 
const resetForm = () => {

	searchInput.value = "";
	searchInput.placeholder = "Busca por nombre o número";
	pokemonList = [];
	results.innerHTML = "";
	searchInput.style.background = "rgb(120, 166, 223)";
	condition.value = "Filtrarpor";

};

//Funcion para mostrar en placeholder la cantidad de resultados
const colorBgAndShow = () => {

	if (pokemonList.length === 0 ) {
		searchInput.style.background = "rgb(196, 191, 122)";
		searchInput.placeholder = `[ 0 RESULTADOS ]`;
	} else if (pokemonList.length === 1 ) {
		searchInput.style.background = "rgb(123, 134, 228)";
		searchInput.placeholder = `[ ${pokemonList.length} RESULTADO ]`;
	} else {
		searchInput.style.background = "rgb(123, 134, 228)";
		searchInput.placeholder = `[ ${pokemonList.length} RESULTADOS ]`;
	}

	searchInput.value = "";
	condition.value = "Filtrarpor";
	results.style.display = "block";

};

//Funcion que obtiene la información de 1 pokemon buscado.
const searchPokemon = () => {

	let searchedPokemon = searchInput.value.toLowerCase();
	pokemonObj.forEach((element) => {
		pokemonInfo = `
			<div class="pokemoninfo">
			<div id="pokemonid">${element.id}</div>
			<div id="pokemonname">${element.name}</div>
			<img id="pokemonimg" src="${element.img}">
			<div id="pokemontype"><div class="property">Type: </div>${element.type}</div>
			<div id="pokemonheight"><div class="property">Height: </div>${element.height}</div>
			<div id="pokemonweight"><div class="property">Weight: </div>${element.weight}</div>
			<div id="pokemoncandy"><div class="property">Candy: </div>${element.candy}</div>
			<div id="pokemoncandycount"><div class="property">Candy Count: </div>${element.candy_count}</div>
			<div id="pokemonegg"><div class="property">Egg: </div>${element.egg}</div>
			<div id="pokemonspawnchance"><div class="property">Spawn Chance: </div>${element.spawn_chance}</div>
			<div id="pokemonavgspawns"><div class="property">Average Spawns: </div>${element.avg_spawns}</div>
			<div id="pokemonspawntime"><div class="property">Spawn Time: </div>${element.spawn_time}</div>
			<div id="pokemonmultipliers"><div class="property">Multipliers: </div>${element.multipliers}</div>
			<div id="pokemonweaknesses"><div class="property">Weaknesses: </div>${element.weaknesses}</div>
			<div id="pokemonprevevolution"><div class="property">Previous Evolution: </div>${element.next_evolution}</div>
			<div id="pokemonnextevolution"><div class="property">Next Evolution: </div>${element.next_evolution}</div>
			</div>`
		;

		if (element.name.toLowerCase().includes(`${searchedPokemon}`) || element.id === parseInt(searchedPokemon)) {
			pokemonList.push(element);
			results.innerHTML += pokemonInfo;
		} else {
			searchInput.value = '';
			searchInput.placeholder = "Tu búsqueda no arrojó resultados";
			searchInput.style.backgroundColor =  "rgb(196, 187, 107)";
		}
	});
	colorBgAndShow();
};

//Funcion que obtiene e imprime una lista corta de todos los pokemon
const getAllPokemon = () => {

	pokemonList = [];

	results.innerHTML = "";
	
	pokemonObj.forEach((element) => {

		pokemonInfo = `
			<div class="pokemoninfo">
			<div id="pokemonid">${element.id}</div>
			<div id="pokemonname">${element.name}</div>
			<img id="pokemonimg" src="${element.img}">
			<div id="pokemontype"><div class="property">Type: </div>${element.type}</div>
			<div id="pokemonheight"><div class="property">Height: </div>${element.height}</div>
			<div id="pokemonweight"><div class="property">Weight: </div>${element.weight}</div>
			<div id="pokemoncandy"><div class="property">Candy: </div>${element.candy}</div>
			<div id="pokemoncandycount"><div class="property">Candy Count: </div>${element.candy_count}</div>
			<div id="pokemonegg"><div class="property">Egg: </div>${element.egg}</div>
			<div id="pokemonspawnchance"><div class="property">Spawn Chance: </div>${element.spawn_chance}</div>
			<div id="pokemonavgspawns"><div class="property">Average Spawns: </div>${element.avg_spawns}</div>
			<div id="pokemonspawntime"><div class="property">Spawn Time: </div>${element.spawn_time}</div>
			<div id="pokemonmultipliers"><div class="property">Multipliers: </div>${element.multipliers}</div>
			<div id="pokemonweaknesses"><div class="property">Weaknesses: </div>${element.weaknesses}</div>
			<div id="pokemonprevevolution"><div class="property">Previous Evolution: </div>${element.next_evolution}</div>
			<div id="pokemonnextevolution"><div class="property">Next Evolution: </div>${element.next_evolution}</div>
			</div>`
		;

		pokemonList.push(element);
		results.innerHTML += pokemonInfo;

	});

	colorBgAndShow();
	
};

//Funcion para imprimir la lista por orden alfabético
const printSortedList = () => {

	results.innerHTML = "";

	kantodex.sortData(pokemonList).forEach((element) => {

		pokemonInfo = `
			<div class="pokemoninfo">
			<div id="pokemonid">${element.id}</div>
			<div id="pokemonname">${element.name}</div>
			<img id="pokemonimg" src="${element.img}">
			<div id="pokemontype"><div class="property">Type: </div>${element.type}</div>
			<div id="pokemonheight"><div class="property">Height: </div>${element.height}</div>
			<div id="pokemonweight"><div class="property">Weight: </div>${element.weight}</div>
			<div id="pokemoncandy"><div class="property">Candy: </div>${element.candy}</div>
			<div id="pokemoncandycount"><div class="property">Candy Count: </div>${element.candy_count}</div>
			<div id="pokemonegg"><div class="property">Egg: </div>${element.egg}</div>
			<div id="pokemonspawnchance"><div class="property">Spawn Chance: </div>${element.spawn_chance}</div>
			<div id="pokemonavgspawns"><div class="property">Average Spawns: </div>${element.avg_spawns}</div>
			<div id="pokemonspawntime"><div class="property">Spawn Time: </div>${element.spawn_time}</div>
			<div id="pokemonmultipliers"><div class="property">Multipliers: </div>${element.multipliers}</div>
			<div id="pokemonweaknesses"><div class="property">Weaknesses: </div>${element.weaknesses}</div>
			<div id="pokemonprevevolution"><div class="property">Previous Evolution: </div>${element.next_evolution}</div>
			<div id="pokemonnextevolution"><div class="property">Next Evolution: </div>${element.next_evolution}</div>
			</div>`
			;

		results.innerHTML += pokemonInfo;
	}
	);

	colorBgAndShow();

};

//Funcion para imprimir lista de Pokemon filtrados
const printFilteredPokemon = () => {

		results.innerHTML = "";

		if (pokemonList.length === 0) {
			pokemonList = pokemonObj;
		}

        kantodex.filterData(pokemonList, condition.value).forEach((element) => {
            let pokemonInfo = 
                `
                <div class="pokemoninfo">
                <div id="pokemonid">${element.id}</div>
                <div id="pokemonname">${element.name}</div>
                <img id="pokemonimg" src="${element.img}">
                <div id="pokemontype">Type: ${element.type}</div>
                <div id="pokemonheight">Height: ${element.height}</div>
                <div id="pokemonweight">Weight: ${element.weight}</div>
                <div id="pokemoncandy">Candy: ${element.candy}</div>
                <div id="pokemoncandycount">Candy Count: ${element.candy_count}</div>
                <div id="pokemonegg">Egg: ${element.egg}</div>
                <div id="pokemonspawnchance">Spawn Chance: ${element.spawn_chance}</div>
                <div id="pokemonavgspawns">Average Spawns: ${element.avg_spawns}</div>
                <div id="pokemonspawntime">Spawn Time: ${element.spawn_time}</div>
                <div id="pokemonmultipliers">Multipliers: ${element.multipliers}</div>
                <div id="pokemonweaknesses">Weaknesses: ${element.weaknesses}</div>
                <div id="pokemonnextevolution">Next Evolution: ${element.next_evolution}</div>
                </div>
                `
			;
			results.innerHTML += pokemonInfo;
		});

		pokemonList = kantodex.filterData(pokemonList, condition.value);
		colorBgAndShow();

	};

//Funcion para mostrar About Kanto Dex
const showAboutUs = () => {

    description.style.display = 'none';
    searchInput.style.display = 'none';
	searchButton.style.display = 'none';
	condition.style.display = 'none';
	filterButton.style.display = 'none';
	sortButton.style.display = 'none';
	showAllButton.style.display = 'none';
	resetButton.style.display = 'none';
    footer.style.display = 'flex';
	results.style.display = 'none';
	searchBox.style.display = 'none';
	aboutUs.style.display = 'block';
	homeButton.style.display = 'flex';

};

const home = () => {
	aboutUs.style.display = 'none';
	homeButton.style.display = 'none'; 
	description.style.display = 'block';
	searchInput.style.display = 'flex';
	searchButton.style.display = 'flex';
	condition.style.display = 'flex';
	filterButton.style.display = 'flex';
	sortButton.style.display = 'flex';
	showAllButton.style.display = 'flex';
	resetButton.style.display = 'flex';
	footer.style.display = 'flex';
	results.style.display = 'none';
	searchBox.style.display = 'grid';

	
	resetForm();
};

//Botones

aboutUsButton.addEventListener('click', showAboutUs);
showAllButton.addEventListener('click', getAllPokemon);
searchButton.addEventListener('click', validateSearchInput);
filterButton.addEventListener('click', printFilteredPokemon);
resetButton.addEventListener('click', resetForm);
sortButton.addEventListener('click', printSortedList);
homeButton.addEventListener('click', home);