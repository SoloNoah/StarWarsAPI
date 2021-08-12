import React from 'react';
import { setLike } from '../../store/actions';
import { connect } from 'react-redux';

const ChosenFilmCard = ({ movie, setLike }) => {
  const onLikeClicked = () => {
    setLike(movie);
  };
  return (
    <React.Fragment>
      {!movie ? (
        <div className='template'>
          <h1>Select a movie</h1>
        </div>
      ) : (
        <div className='wrapper'>
          <div className='chosenfilm'>
            <h1>{movie.title}</h1>
            <button onClick={onLikeClicked}>Like</button>
            <p>{movie.opening_crawl}</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  setLike,
};
export default connect(null, mapDispatchToProps)(ChosenFilmCard);
