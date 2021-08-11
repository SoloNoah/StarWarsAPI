import React from 'react';
import Preview from './Preview';

const Card = ({ movies }) => {
  
  return (
    <ul className="toc">
      {movies.map((movie, index) => (
        <Preview movie={movie} key={index} />
      ))}
    </ul>
  );
};

export default Card;
