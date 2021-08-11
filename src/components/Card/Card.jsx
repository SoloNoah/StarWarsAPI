import React from 'react';
import Preview from './Preview';

const Card = ({ movies }) => {
  console.log('in card');
  return (
    <div>
      {movies.map((movie, index) => (
        <Preview movie={movie} key={index} />
      ))}
    </div>
  );
};

export default Card;
