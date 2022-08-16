import { rest } from "msw"

type Pokemon = { id: number, pokedexNo: number, name: string };
type FetchPokemonsParams = {};

export const pokemonHandlers = [
  rest.get<{}, FetchPokemonsParams, Pokemon[]>('/pokemons', (_req, res, ctx) => {
    return res(
      ctx.json([{
        id: 1,
        pokedexNo: 1,
        name: 'Bulbasaur'
      }])
    )
  })
]
