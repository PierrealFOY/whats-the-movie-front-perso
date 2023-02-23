import {
  FETCH_MOVIES,
  FETCH_MOVIES_RESPONSES,
  NEXT_MOVIE,
  RESET_GAME,
} from '../actions/movies';

/**
 * Initial state
 */
export const initialState = {
  // list of the movies
  movies: [],
  // game turn number
  tour: 0,
  // possibles responses to give to the gamer
  responses: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MOVIES:
      // put the movies from the API in the state
      return {
        ...state,
        movies: action.data,
        tour: 0,
      };

    case NEXT_MOVIE:
      // increments the game turn number
      return {
        ...state,
        tour: state.tour + 1,
        responses: [],
      };

    case RESET_GAME:
      // resets the game turn number to 0
      return {
        ...state,
        movies: [],
        tour: 0,
        responses: [],
      };

    case FETCH_MOVIES_RESPONSES:
      return {
        ...state,
        responses: action.responses,
      };

    default:
      return state;
  }
};

export default reducer;
