import { Pokemon } from '../../../types/pokemon';

const pokemonData: Pokemon[] = [
  {
    id: 'Pokeomon:1',
    pokedexNo: 1,
    name: 'Bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 'Pokeomon:2',
    pokedexNo: 2,
    name: 'Ivysaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    id: 'Pokeomon:3',
    pokedexNo: 3,
    name: 'Venusaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
  {
    id: 'Pokeomon:4',
    pokedexNo: 4,
    name: 'Charmander',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    id: 'Pokeomon:5',
    pokedexNo: 5,
    name: 'Charmeleon',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  },
  {
    id: 'Pokeomon:6',
    pokedexNo: 6,
    name: 'Charizard',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  },
];

export const favoriteSet = new Set<number>();

export const getPokemonList = (options: {
  nameSubstring: string | undefined;
  onlyFavorite: boolean;
}) =>
  pokemonData
    .filter(
      (pokemon) =>
        options.nameSubstring === undefined ||
        pokemon.name.toLowerCase().includes(options.nameSubstring)
    )
    .map((pokemon) => ({
      id: `Pokedex:${pokemon.id}`,
      pokemon,
      favorite: favoriteSet.has(pokemon.pokedexNo),
    }))
    .filter((pokedex) => !options.onlyFavorite || pokedex.favorite);
