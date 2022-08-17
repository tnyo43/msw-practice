import { PokemonList } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useEffect } from 'react';
import { pokemonHandlers } from '../../mocks/handlers/pokemonHandlers';

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
  worker.use(pokemonHandlers.slow);

  return <PokemonList />;
};

export const Error: ComponentStory<typeof PokemonList> = () => {
  const { worker } = window.msw;

  useEffect(() => {
    return () => worker.resetHandlers();
  }, []);
  worker.use(pokemonHandlers.error);

  return <PokemonList />;
};
