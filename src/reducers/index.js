import { combineReducers } from 'redux';
import moviesReducer from './movies';
import timerReducer from './timer';
import scoreReducer from './score';

const rootReducer = combineReducers({
  movies: moviesReducer,
  timer: timerReducer,
  score: scoreReducer,
});

export default rootReducer;
