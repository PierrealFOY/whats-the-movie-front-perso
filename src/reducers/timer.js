import {
  START_TIMER,
  RESET_TIMER,
  UPDATE_TIME,
  STOP_TIMER,
  RESET_FALSE_ANSWER,
} from '../actions/movies';

const initialState = {
  time: 60,
  running: false,
  score: 1200,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        time: 60,
        running: true,
        score: 1200,
      };
    case RESET_TIMER:
      return {
        ...state,
        time: 60,
        running: true,
        score: 1200,
      };

    case RESET_FALSE_ANSWER:
      return {
        ...state,
        time: state.time,
        running: false,
        score: 0,
      };

    case UPDATE_TIME:
      return {
        ...state,
        time: state.time - 1,
        score: state.score - 20,
      };

    case STOP_TIMER:
      return {
        ...state,
        time: state.time,
        running: false,
        score: state.score,
      };

    default:
      return state;
  }
};

export default reducer;
