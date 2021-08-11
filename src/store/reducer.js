import { SET_MOVIES, SET_CHOSEN_MOVIE } from './actiontypes';

const initialState = {
  movies: [],
  selectedMovie: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case SET_CHOSEN_MOVIE:
      return {
        ...state,
        selectedMovie: payload,
      };
    default:
      return state;
  }
}
