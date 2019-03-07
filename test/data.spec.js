require('../src/data.js');

const pokemon = require('../src/data/pokemon/pokemon.json');
const pokemonObj = pokemon.pokemon;

describe('filterData', () => {
  it('should be a function', () => {
   expect(typeof(kantodex.filterData)).toBe('function');
  });

  it('debería devolver Gastly,Haunter,Gengar, para tipo Ghost', () => {
    expect(window.kantodex.filterData(pokemonObj,'Ghost')).toEqual([{
      "id": 92,
      "num": "092",
      "name": "Gastly",
      "img": "http://www.serebii.net/pokemongo/pokemon/092.png",
      "type": [
        "Ghost",
        "Poison"
      ],
      "height": "1.30 m",
      "weight": "0.1 kg",
      "candy": "Gastly Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 0.79,
      "avg_spawns": 79,
      "spawn_time": "04:21",
      "multipliers": [1.78],
      "weaknesses": [
        "Ground",
        "Psychic",
        "Ghost",
        "Dark"
      ],
      "next_evolution": [{
        "num": "093",
        "name": "Haunter"
      }, {
        "num": "094",
        "name": "Gengar"
      }]
    }, {
      "id": 93,
      "num": "093",
      "name": "Haunter",
      "img": "http://www.serebii.net/pokemongo/pokemon/093.png",
      "type": [
        "Ghost",
        "Poison"
      ],
      "height": "1.60 m",
      "weight": "0.1 kg",
      "candy": "Gastly Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.052,
      "avg_spawns": 5.2,
      "spawn_time": "00:10",
      "multipliers": [
        1.56,
        1.8
      ],
      "weaknesses": [
        "Ground",
        "Psychic",
        "Ghost",
        "Dark"
      ],
      "prev_evolution": [{
        "num": "092",
        "name": "Gastly"
      }],
      "next_evolution": [{
        "num": "094",
        "name": "Gengar"
      }]
    }, {
      "id": 94,
      "num": "094",
      "name": "Gengar",
      "img": "http://www.serebii.net/pokemongo/pokemon/094.png",
      "type": [
        "Ghost",
        "Poison"
      ],
      "height": "1.50 m",
      "weight": "40.5 kg",
      "candy": "Gastly Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0067,
      "avg_spawns": 0.67,
      "spawn_time": "03:55",
      "multipliers": null,
      "weaknesses": [
        "Ground",
        "Psychic",
        "Ghost",
        "Dark"
      ],
      "prev_evolution": [{
        "num": "092",
        "name": "Gastly"
      }, {
        "num": "093",
        "name": "Haunter"
      }]
    }]);
  });
});

describe('sortData', () => {
  it('should be a function', () => {
   expect(typeof(kantodex.sortData)).toBe('function');
  });

  it('Debería devolver Zubat', () => {
    expect(window.kantodex.sortData(pokemonObj)[150]).toEqual({
      "id": 41,
      "num": "041",
      "name": "Zubat",
      "img": "http://www.serebii.net/pokemongo/pokemon/041.png",
      "type": [
        "Poison",
        "Flying"
      ],
      "height": "0.79 m",
      "weight": "7.5 kg",
      "candy": "Zubat Candy",
      "candy_count": 50,
      "egg": "2 km",
      "spawn_chance": 6.52,
      "avg_spawns": 652,
      "spawn_time": "12:28",
      "multipliers": [
        2.6,
        3.67
      ],
      "weaknesses": [
        "Electric",
        "Ice",
        "Psychic",
        "Rock"
      ],
      "next_evolution": [{
        "num": "042",
        "name": "Golbat"
      }]}
    );
    });
  });
describe('computeStats', () => {
    it('should be a function', () => {
     expect(typeof(kantodex.computeStats)).toBe('function');
    });
    it('Debería devolver 26 dulces en promedio para tipo Electric', () => {
      expect(window.kantodex.computeStats(pokemonObj,'Electric')).toBe(26);
    }
      );
    });
