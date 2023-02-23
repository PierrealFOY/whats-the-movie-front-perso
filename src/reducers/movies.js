import {
  FETCH_MOVIES,
  FETCH_MOVIES_RESPONSES,
  NEXT_MOVIE,
  RESET_GAME,
  SET_USER_RESPONSE,
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
  // indicator to know if a response is given or not
  userResponse: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MOVIES:
      // put the movies from the API in the state
      return {
        ...state,
        movies: action.data,
        tour: 0,
        userResponse: '',
      };

    case NEXT_MOVIE:
      // increments the game turn number
      return {
        ...state,
        tour: state.tour + 1,
        responses: [],
        userResponse: '',
      };

    case RESET_GAME:
      // resets the game turn number to 0
      return {
        ...state,
        movies: [],
        tour: 0,
        responses: [],
        userResponse: '',
      };

    case FETCH_MOVIES_RESPONSES:
      return {
        ...state,
        responses: action.responses,
      };

    case SET_USER_RESPONSE:
      return {
        ...state,
        userResponse: action.userResponse,
      };

    default:
      return state;
  }
};

export default reducer;
