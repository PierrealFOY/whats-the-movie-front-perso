import { START_TIMER, RESET_TIMER, UPDATE_TIME, STOP_TIMER } from './../actions/movies'

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
        time : 60,
        running: true,
      };
    case UPDATE_TIME:
      return {
        ...state,
        time: state.time - 1,
      };
    
    case  STOP_TIMER:
      return {
        ...state,
        time: 60,
        running: false,
      }
      
    default:
      return state;
  }
};

export default reducer;
