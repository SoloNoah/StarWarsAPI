import React from 'react';
import { connect } from 'react-redux';

import { setChosenMovie } from '../../store/actions';

const ListItem = ({ movie, setChosenMovie, showSidebar }) => {
  const setMovie = () => {
    setChosenMovie(movie);
    showSidebar(true);
  };

  return (
    <div>
      <li className='movie-item' onClick={setMovie}>
        <h2>{movie.title}</h2>
      </li>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.swapi.selectedMovie,
});

const mapDispatchToProps = {
  setChosenMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
