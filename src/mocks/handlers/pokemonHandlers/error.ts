import { rest } from 'msw';

export const handlerWithError = rest.get('/pokemons', (_req, res, ctx) => {
  return res(
    ctx.status(500),
    ctx.json({
      errorMessage: 'Pokemons have refused to appear!',
    })
  );
});
