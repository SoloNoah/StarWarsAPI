import React from 'react';

const ChosenFilmCard = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.opening_crawl}</p>
    </div>
  );
};

export default ChosenFilmCard;
