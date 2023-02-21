import { FETCH_MOVIES } from '../actions/movies';

export const initialState = {
  movies: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
