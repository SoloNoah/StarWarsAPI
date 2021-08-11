import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setMovies } from '../../store/actions';

const TOC = (props) => {
  useEffect(() => {
    props.setMovies('SET_MOVIES');
  }, [props.setMovies]);

  return (
    <div>
      <h1>TOC</h1>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   movies: state.swapi.movies,
// });

// const mapDispatchToProps = {
//   setMovies,
// };

export default connect(null, { setMovies })(TOC);
