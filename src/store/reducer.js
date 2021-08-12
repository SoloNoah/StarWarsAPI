import { SET_MOVIES, SET_CHOSEN_MOVIE, SET_LIKE, REMOVE_LIKE } from './actiontypes';

const initialState = {
  movies: [],
  selectedMovie: null,
  likes: [],
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
    case SET_LIKE:
      for (let item in state.likes) {
        if (item.title === payload.title) {
          return state;
        }
      }
      return {
        ...state,
        likes: [...state.likes, payload],
      };
    default:
      return state;
  }
}
