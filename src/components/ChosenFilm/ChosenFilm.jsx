import React from 'react';
import { connect } from 'react-redux';

import ChosenFilmCard from './ChosenFilmCard';

const ChosenFilm = ({ selectedMovie }) => {
  return <ChosenFilmCard movie={selectedMovie} />;
};

const mapStateToProps = (state) => ({
  selectedMovie: state.swapi.selectedMovie,
});

export default connect(mapStateToProps, null)(ChosenFilm);
