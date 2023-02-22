import { FETCH_MOVIES, NEXT_MOVIE, RESET_GAME } from '../actions/movies';
import data from '../data/data';

/**
 * Initial state
 */
export const initialState = {
  // list of the movies
  movies: data,
  // game turn number
  tour: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MOVIES:
      // put the movies from the API in the state
      return {
        ...state,
        movies: action.data,
      };

    case NEXT_MOVIE:
      // increments the game turn number
      return {
        ...state,
        tour: state.tour + 1,
      };

    case RESET_GAME:
      // resets the game turn number to 0
      return {
        ...state,
        tour: 0,
      };

    default:
      return state;
  }
};

export default reducer;
