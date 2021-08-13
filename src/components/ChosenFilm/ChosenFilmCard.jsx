import React, { useState, useEffect } from 'react';
import { manageLike } from '../../store/actions';
import { connect } from 'react-redux';

const ChosenFilmCard = ({ movie, manageLike, likedState }) => {
  const [likeState, setLikeState] = useState();

  useEffect(() => {
    if (movie !== null) {
      setLikeState(movie.likedState);
    }
  }, [movie]);

  const onLikeClicked = () => {
    manageLike(movie);
    setLikeState(!likeState);
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
            {!likeState ? (
              <div className='like__btn' onClick={onLikeClicked}>
                Like
              </div>
            ) : (
              <div className='like__btn liked' onClick={onLikeClicked}>
                Dislike
              </div>
            )}
            {/* <div className='like__btn' onClick={onLikeClicked}>
              Like
            </div> */}
            <p>{movie.opening_crawl}</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  movie: state.swapi.selectedMovie,
});
const mapDispatchToProps = {
  manageLike,
};
export default connect(mapStateToProps, mapDispatchToProps)(ChosenFilmCard);
