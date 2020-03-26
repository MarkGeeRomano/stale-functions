import React, { useState, useRef } from 'react';

import Tile from './Tile';
import pokeUrls from './pokeImgUrls';

import './App.css';

function App() {
  const [pokemon, setPokemon] = useState(pokeUrls.map(url => ({ url, isFavorite: false })))
  const pokemonRef = useRef(pokemon)
  pokemonRef.current = pokemon

  const toggleFavorite = (i) => () => {
    const pokemon = pokemonRef.current
    const updatedPokemon = { ...pokemon[i], isFavorite: !pokemon[i].isFavorite }
    setPokemon([
      ...pokemon.slice(0, i),
      updatedPokemon,
      ...pokemon.slice(i + 1)
    ])
  }

  return (
    <div className="App">
      {pokemon.map((p, i) => (
        <Tile pokemon={p} toggleFavorite={toggleFavorite(i)}/>
      ))}
    </div>
  );
}

export default App;
