import { SET_MOVIES, SET_CHOSEN_MOVIE, MANAGE_LIKE, SET_LIKES_ONLOAD } from './actiontypes';

const initialState = {
  movies: [],
  selectedMovie: null,
  likes: [],
  currentMovieLiked: false,
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
    case MANAGE_LIKE:
      /* 
        Iterating over the state.likes array and checking for duplicate. if there is a duplicate -> filter state.like into a new array, replace 
        it in the local storge and in redux store.
        If there isn't a duplicate -> create a new array with the payload and set the state and the local storage.

        In real world application I would use unique id to find similaritis. Names can be unique and I can fail in other situations.
      */

      for (const index in state.likes) {
        if (state.likes[index].title === payload.title) {
          let updatedLikes = state.likes.filter((likedObj) => likedObj.title !== payload.title);
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
    case SET_LIKES_ONLOAD:
      return {
        ...state,
        likes: payload,
      };
    default:
      return state;
  }
}
