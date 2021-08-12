import React from 'react';
import { connect } from 'react-redux';

import { setChosenMovie } from '../../store/actions';

const MoviePreview = ({ movie, setChosenMovie }) => {
  const setMovie = () => {
    setChosenMovie(movie);
  };
  return (
    <li className='movie-item' onClick={setMovie}>
      <h2>{movie.title}</h2>
    </li>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.swapi.selectedMovie,
});

const mapDispatchToProps = {
  setChosenMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePreview);
