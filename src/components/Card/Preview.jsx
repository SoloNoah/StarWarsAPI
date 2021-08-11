import React from 'react';

const MoviePreview = ({ movie }) => {
  console.log(movie);
  return (
    <div className='movie-card'>
      <h2>{movie.title}</h2>
    </div>
  );
};

export default MoviePreview;
