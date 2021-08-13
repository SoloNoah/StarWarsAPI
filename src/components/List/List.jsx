import React, { useState } from 'react';
import ListItem from './ListItem';

const List = ({ movies }) => {
  const [slide, setSlide] = useState(false);
  const showSidebar = () => setSlide(!slide);

  return (
    <React.Fragment>
      <div onClick={showSidebar} className={slide ? 'burger cross' : 'burger'} id='burger'>
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='line-3'></div>
      </div>
      <ul className={slide ? 'toc_list active' : 'toc_list'}>
        {movies.map((movie, index) => (
          <ListItem movie={movie} key={index} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default List;
