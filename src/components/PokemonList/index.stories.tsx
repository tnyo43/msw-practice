import { PokemonList } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useEffect } from 'react';
import { pokemonHandlerWithError } from '../../mocks/handlers/pokemonHandlers/error';
import { pokemonHandlerVerySlow } from '../../mocks/handlers/pokemonHandlers/slow';

export default {
  title: 'PokemonList',
  component: PokemonList,
} as ComponentMeta<typeof PokemonList>;

export const Default: ComponentStory<typeof PokemonList> = () => {
  return <PokemonList />;
};

export const Loading: ComponentStory<typeof PokemonList> = () => {
  const { worker } = window.msw;

  useEffect(() => {
    return () => worker.resetHandlers();
  }, []);
  worker.use(pokemonHandlerVerySlow);

  return <PokemonList />;
};

export const Error: ComponentStory<typeof PokemonList> = () => {
  const { worker } = window.msw;

  useEffect(() => {
    return () => worker.resetHandlers();
  }, []);
  worker.use(pokemonHandlerWithError);

  return <PokemonList />;
};
