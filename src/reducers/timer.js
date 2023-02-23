import { START_TIMER, RESET_TIMER, UPDATE_TIME } from './../actions/movies'

const initialState = {
  time: 60,
  running: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        running: true,
      };
    case RESET_TIMER:
      return {
        ...state,
        time : action.payload,
        running: false,
      };
    case UPDATE_TIME:
      return {
        ...state,
        time: state.time - 1,
      };
    default:
      return state;
  }
};

export default reducer;
