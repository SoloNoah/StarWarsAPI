import React from 'react';

const ChosenFilmCard = ({ movie }) => {
  return (
    <React.Fragment>
      {!movie ? (
        <div className='template'>
          <h1>Select a movie</h1>
        </div>
      ) : (
        <div className='wrapper'>
          <div className='chosenfilm scroll'>
            <h1>{movie.title}</h1>
            <p>{movie.opening_crawl}</p>
            {/* <button>Like</button> */}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ChosenFilmCard;
