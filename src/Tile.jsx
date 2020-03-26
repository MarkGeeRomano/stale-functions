import React, { memo } from 'react';

const Tile = memo(({
  toggleFavorite,
  pokemon: { url, isFavorite },
}) => {
  return (
    <div className="tile-container" onClick={toggleFavorite}>
      <img src={url} />
      <div className="text-container">
        {url.slice(url.lastIndexOf('/') + 1, url.lastIndexOf('.'))}
        <span className="heart-container" style={{ visibility: isFavorite ? 'visible' : 'hidden' }}>
          ❤️
        </span>
      </div>
    </div>
  );
},
  (oldProps, newProps) => oldProps.pokemon.isFavorite === newProps.pokemon.isFavorite
);

export default Tile;