import { TOGGLE_MENU } from "../actions/menu";

const initialState = {
  expanded: false,
};

export default function menuReducer(state=initialState, action={}) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        expanded: action.expanded,
      };
    default: return state;
  }
}
