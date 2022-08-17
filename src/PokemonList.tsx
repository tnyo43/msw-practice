import axios from 'axios';
import React, { useState } from 'react';
import useSWR from 'swr';
import { Pokedex } from './types/pokemon';
import './PokemonList.css';


export const PokemonList: React.FC<{}> = () => {
  const [nameSubstring, setNameSubstring] = useState('');

  const fetchPokemons = (): Promise<Pokedex[]> => {
    return axios.get<Pokedex[]>(`/pokemons${nameSubstring !== '' ? `?name=${nameSubstring}` : ''}`).then((resule) => resule.data);
  }  

  const { data, mutate } = useSWR(`/api/pokemons/${nameSubstring}}`, fetchPokemons);

  const onLikePokemon = ({ pokedexNo }: { pokedexNo: number }) => {
    axios.post(`/pokemons/favorite/${pokedexNo}`).then((result) => result.data);
    mutate();
  }
  const onUnlikePokemon = ({ pokedexNo }: { pokedexNo: number }) => {
    axios.delete(`/pokemons/favorite/${pokedexNo}`).then((result) => result.data);
    mutate();
  }

  return (
    <div className="PokemonList-container">
      <div>
        <input onChange={(e) => setNameSubstring(e.target.value)} />
      </div>
      {!data
        ? <p>loading</p>
        : (
          <div className="PokemonList-list">
            {data.map(({ id, pokemon, favorite }) => (
              <div key={id} className="PokemonList-item">
                <div className="PokemonList-item-like-wrapper">
                  <button
                    onClick={() => favorite ? onUnlikePokemon(pokemon) : onLikePokemon(pokemon)}
                    className={favorite ? "PokemonList-item-like" : "PokemonList-item-unlike"}>
                      {favorite ? 'unlike' : 'like'}
                  </button>
                </div>
                <div>
                  <div>No: {pokemon.pokedexNo}</div>
                  <div>name: {pokemon.name}</div>
                  <div className="PokemonList-item-image">
                    <img src={pokemon.image} alt={'pokemon'} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
}
