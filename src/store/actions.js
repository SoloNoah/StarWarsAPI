import api from '../helper/api';
import { SET_MOVIES, SET_CHOSEN_MOVIE, SET_LIKE, REMOVE_LIKE } from './actiontypes';

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
    dispatch({ type: SET_CHOSEN_MOVIE, payload: chosenMovie });
  } catch (error) {
    console.log("Couldn't set chosen movie");
  }
};

export const setLike = (likedMovie) => (dispatch) => {
  try {
    dispatch({ type: SET_LIKE, payload: likedMovie });
  } catch (error) {
    console.log("Couldn't set like for movie");
  }
};
