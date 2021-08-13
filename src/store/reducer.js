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
      for (const index in state.likes) {
        if (JSON.stringify(state.likes[index]) === JSON.stringify(payload)) {
          let updatedLikes = state.likes.filter((likedObj) => JSON.stringify(likedObj) !== JSON.stringify(payload));
          localStorage.setItem('likes', JSON.stringify(updatedLikes));
          return { ...state, likes: updatedLikes };
        }
      }
      const likeStateUpdate = [...state.likes, payload];
      localStorage.setItem('likes', JSON.stringify(likeStateUpdate));
      return {
        ...state,
        likes: [...state.likes, payload],
      };
    default:
      return state;
  }
}
