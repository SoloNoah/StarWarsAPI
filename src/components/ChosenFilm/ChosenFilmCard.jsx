import React, { useState, useEffect } from 'react';

const ChosenFilmCard = ({ movie }) => {
  const [displayedMovie, setDisplayedMovie] = useState({});

  useEffect(() => {
    if (movie) {
      setDisplayedMovie(movie);
    }
  }, [movie]);
  return (
    <React.Fragment>
      {!movie ? (
        <div className='template'>
          <h1>Select a movie</h1>
        </div>
      ) : (
        <div className='wrapper'>
          <div className='chosenfilm scroll'>
            <h1>{displayedMovie.title}</h1>
            <p>{displayedMovie.opening_crawl}</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ChosenFilmCard;
