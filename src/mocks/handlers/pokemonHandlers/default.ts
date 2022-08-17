import { rest } from 'msw';
import { Pokedex } from '../../../types/pokemon';
import { favoriteSet, getPokemonList } from './utils';

export const defaultHandlers = [
  rest.get<{}, {}, Pokedex[]>('/pokemons', (req, res, ctx) => {
    const nameSubstring = req.url.searchParams.get('name')?.toLowerCase();
    const onlyFavorite = req.url.searchParams.get('onlyFavorite') === 'true';

    return res(ctx.json(getPokemonList({ nameSubstring, onlyFavorite })));
  }),
  rest.post('/pokemons/favorite/:pokedexNo', async (req, res, ctx) => {
    const pokedexNoRawText = await req.params.pokedexNo;
    const pokedexNo = Number(pokedexNoRawText);

    favoriteSet.add(pokedexNo);

    return res(
      ctx.json({
        pokedexNo,
      })
    );
  }),
  rest.delete('/pokemons/favorite/:pokedexNo', async (req, res, ctx) => {
    const pokedexNoRawText = await req.params.pokedexNo;
    const pokedexNo = Number(pokedexNoRawText);

    favoriteSet.delete(pokedexNo);

    return res(
      ctx.json({
        pokedexNo,
      })
    );
  }),
];
