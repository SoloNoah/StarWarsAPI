import api from '../helper/api';
import { SET_MOVIES } from './actiontypes';

export const setMovies = (type) => async (dispatch) => {
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
