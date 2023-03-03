import { FETCH_CLASSEMENT_FAILURE, FETCH_CLASSEMENT_SUCCESS } from "../actions/ranking";

const initialState = {
  classement: []
};

const rankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASSEMENT_SUCCESS:
      return {
        ...state,
        classement: action.data, // mettre à jour le tableau de données
      };
    default:
      return state;
  }
};

export default rankingReducer;
