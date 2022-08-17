export type Pokemon = {
  id: string;
  pokedexNo: number;
  name: string;
  image: string;
};

export type Pokedex = {
  id: string;
  pokemon: Pokemon;
  favorite: boolean;
};
