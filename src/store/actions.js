import api from '../helper/api';
import likesHelper from '../helper/likesHelper';
import { SET_MOVIES, SET_CHOSEN_MOVIE, MANAGE_LIKE, SET_LIKES_ONLOAD } from './actiontypes';

export const setMovies = () => async (dispatch) => {
  try {
    const res = await api.getMovies();
    dispatch({
      type: SET_MOVIES,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setChosenMovie = (chosenMovie) => (dispatch) => {
  try {
    const allLikes = likesHelper.getLikedMovies();
    let likedState = false;
    for (const likedObj of allLikes) {
      if (likedObj.title === chosenMovie.title) {
        likedState = true;
        break;
      }
    }
    /*  Need to understand how to find if chosen movie is in all likes  */
    let movie = JSON.parse(JSON.stringify(chosenMovie));
    movie['likedState'] = likedState;
    dispatch({ type: SET_CHOSEN_MOVIE, payload: movie });
  } catch (error) {
    console.log("Couldn't set chosen movie");
  }
};

export const manageLike = (likedMovie) => (dispatch) => {
  try {
    dispatch({ type: MANAGE_LIKE, payload: likedMovie });
  } catch (error) {
    console.log("Couldn't set like for movie");
  }
};

export const setLikesOnload = () => (dispatch) => {
  try {
    const likedMovies = likesHelper.getLikedMovies();
    dispatch({ type: SET_LIKES_ONLOAD, payload: likedMovies });
  } catch (error) {
    console.log("Disatch Couldn't load liked movies into redux store ");
  }
};
