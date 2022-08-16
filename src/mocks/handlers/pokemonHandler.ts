import { rest } from "msw"
import { Pokemon } from "../../types/pokemon";

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
]

export const pokemonHandlers = [
  rest.get<{}, {}, Pokemon[]>('/pokemons', (req, res, ctx) => {
    const nameSubstring = req.url.searchParams.get('name')?.toLowerCase();

    return res(
      ctx.json(pokemonData.filter((pokemon) => nameSubstring === undefined || pokemon.name.toLowerCase().includes(nameSubstring)))
    )
  })
]
