import api from '../helper/api';
import { SET_MOVIES, SET_CHOSEN_MOVIE } from './actiontypes';

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

export const setChosenMovie = (chosenMovie, type) => (dispatch) => {
  try {
    dispatch({ type: SET_CHOSEN_MOVIE, payload: chosenMovie });
  } catch (error) {
    console.log("Couldn't set chosen movie");
  }
};
