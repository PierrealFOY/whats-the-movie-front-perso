import { START_TIMER, RESET_TIMER, UPDATE_TIME, STOP_TIMER } from './../actions/movies'

const initialState = {
  time: 60,
  running: false,
  score: 600,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        time: 60,
        running: true,
        score: 600,
      };
    case RESET_TIMER:
      return {
        ...state,
        time : 60,
        running: true,
        score: 600,
      };
    case UPDATE_TIME:
      return {
        ...state,
        time: state.time - 1,
        score: state.score - 10,
      };
    
    case  STOP_TIMER:
      return {
        ...state,
        time: state.time,
        running: false,
        score: state.score
      }
      
    default:
      return state;
  }
};

export default reducer;
