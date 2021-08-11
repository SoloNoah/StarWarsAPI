import { SET_MOVIES } from './actiontypes';

const initialState = {
  movies: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    default:
      return state;
  }
}
