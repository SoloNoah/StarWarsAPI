import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setMovies } from '../../store/actions';
import { setLikesOnload } from '../../store/actions';

import List from '../List/List';

const TOC = ({ movies, setMovies, setLikesOnload }) => {
  
  useEffect(() => {
    setMovies();
    setLikesOnload();
  }, []);

  return <>{!movies.length ? <div>Loading...</div> : <List movies={movies} />}</>;
};

const mapStateToProps = (state) => ({
  movies: state.swapi.movies,
});

const mapDispatchToProps = {
  setMovies,
  setLikesOnload,
};

export default connect(mapStateToProps, mapDispatchToProps)(TOC);
