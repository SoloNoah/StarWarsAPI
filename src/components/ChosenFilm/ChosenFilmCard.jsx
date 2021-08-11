import React from 'react';

const ChosenFilmCard = ({ movie }) => {
  return (
    <div className='chosenfilm'>
      <h1>{movie.title}</h1>
      <p>{movie.opening_crawl}</p>
      <button>Like</button>
    </div>
  );
};

export default ChosenFilmCard;
