import { PokemonList } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'PokemonList',
  component: PokemonList,
} as ComponentMeta<typeof PokemonList>;

export const Default: ComponentStory<typeof PokemonList> = () => {
  return <PokemonList />;
};
