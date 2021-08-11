import React from 'react';

const ChosenFilmCard = ({ movie }) => {
  return (
    <React.Fragment>
      {!movie ? (
        <div className='chosenfilm'>
          <h1>Select a movie</h1>
        </div>
      ) : (
        <div className='chosenfilm'>
          <h1>{movie.title}</h1>
          <p>{movie.opening_crawl}</p>
          <button>Like</button>
        </div>
      )}
    </React.Fragment>
  );
};

export default ChosenFilmCard;
