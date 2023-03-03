import { ADD_SCORE, RESET_SCORE } from '../actions/score';

const initialState = {
  userScore: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        userScore: state.userScore + action.score,
      };

    case RESET_SCORE:
      return {
        ...state,
        userScore: 0,
      };

    default:
      return state;
  }
};

export default reducer;
