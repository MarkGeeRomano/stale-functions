import React, { useState } from 'react';

import Tile from './Tile';
import pokeUrls from './pokeImgUrls';

import './App.css';

function App() {
  const [pokemon, setPokemon] = useState(pokeUrls.map(url => ({ url, isFavorite: false })))

  const toggleFavorite = (i) => () => {
    setPokemon((pokemon) => [
      ...pokemon.slice(0, i),
      { ...pokemon[i], isFavorite: !pokemon[i].isFavorite },
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
