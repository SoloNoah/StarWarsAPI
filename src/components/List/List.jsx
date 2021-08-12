import React from 'react';
import ListItem from './ListItem';

const List = ({ movies }) => {
  return (
    <ul className='toc_list'>
      {movies.map((movie, index) => (
        <ListItem movie={movie} key={index} />
      ))}
    </ul>
  );
};

export default List;
