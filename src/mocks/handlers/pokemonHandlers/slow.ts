import { rest } from 'msw';
import { Pokedex } from '../../../types/pokemon';
import { getPokemonList } from './utils';

export const handlerVerySlow = rest.get<{}, {}, Pokedex[]>('/pokemons', async (req, res, ctx) => {
  await new Promise((resolve) => setTimeout(resolve, 365 * 24 * 60 * 60 * 1000));
  const nameSubstring = req.url.searchParams.get('name')?.toLowerCase();
  const onlyFavorite = req.url.searchParams.get('onlyFavorite') === 'true';

  return res(ctx.json(getPokemonList({ nameSubstring, onlyFavorite })));
});
