import axios from 'axios';
import React from 'react';
import useSWR from 'swr';
import { Pokemon } from './types/pokemon';
import './PokemonList.css';


const fetchPokemons = (): Promise<Pokemon[]> => {
  return axios.get<Pokemon[]>('/pokemons').then((resule) => resule.data);
}

export const PokemonList: React.FC<{}> = () => {
  const { data } = useSWR('/api/pokemons', fetchPokemons);

  if (!data) return <p>loading</p>

  return (
    <div className="PokemonList-container">
      <div className="PokemonList-list">
        {data.map((pokemon) => (
          <div key={pokemon.id} className="PokemonList-item">
            <div>No: {pokemon.pokedexNo}</div>
            <div>name: {pokemon.name}</div>
            <div className="PokemonList-item-image">
              <img src={pokemon.image} alt={'pokemon'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
