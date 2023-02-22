import { FETCH_MOVIES, NEXT_MOVIE, RESET_GAME } from '../actions/movies';
import data from '../data/data';

export const initialState = {
  movies: data,
  tour: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.data,
      };

    case NEXT_MOVIE:
      return {
        ...state,
        tour: state.tour + 1,
      };

    case RESET_GAME:
      return {
        ...state,
        tour: 0,
      };

    default:
      return state;
  }
};

export default reducer;
