import React from 'react';

const Tile = ({
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
};

export default Tile;