import axios from 'axios';
import React, { useState } from 'react';
import useSWR from 'swr';
import { Pokemon } from './types/pokemon';
import './PokemonList.css';


export const PokemonList: React.FC<{}> = () => {
  const [nameSubstring, setNameSubstring] = useState('');

  const fetchPokemons = (): Promise<Pokemon[]> => {
    return axios.get<Pokemon[]>(`/pokemons${nameSubstring !== '' ? `?name=${nameSubstring}` : ''}`).then((resule) => resule.data);
  }  

  const { data } = useSWR(`/api/pokemons/${nameSubstring}}`, fetchPokemons);

  return (
    <div className="PokemonList-container">
      <div>
        <input onChange={(e) => setNameSubstring(e.target.value)} />
      </div>
      {!data
        ? <p>loading</p>
        : (
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
        )
      }
    </div>
  );
}
