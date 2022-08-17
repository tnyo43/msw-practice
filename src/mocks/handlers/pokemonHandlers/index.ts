import { defaultHandlers } from './default';
import { handlerWithError } from './error';
import { handlerVerySlow } from './slow';

export const pokemonHandlers = {
  default: defaultHandlers,
  slow: handlerVerySlow,
  error: handlerWithError,
};
