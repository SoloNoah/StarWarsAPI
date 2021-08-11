import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setMovies } from '../../store/actions';

import Card from '../Card/Card';
const TOC = ({ movies, setMovies }) => {
  useEffect(() => {
    setMovies('SET_MOVIES');
  }, [setMovies]);

  return <>{!movies.length ? <div>Loading...</div> : <Card movies={movies} />}</>;
};

const mapStateToProps = (state) => ({
  movies: state.swapi.movies,
});

const mapDispatchToProps = {
  setMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(TOC);
