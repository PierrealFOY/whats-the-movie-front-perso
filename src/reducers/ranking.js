import { FETCH_CLASSEMENT_FAILURE, FETCH_CLASSEMENT_SUCCESS } from "../actions/ranking";

const initialState = {
  name: '',
  score: '',
  numberGame: '',
};

const rankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASSEMENT_SUCCESS:
      return {
        ...state,
        name: action.name,
        score: action.score,
        numberGame: action.numberGame,
      };
    case FETCH_CLASSEMENT_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rankingReducer;
