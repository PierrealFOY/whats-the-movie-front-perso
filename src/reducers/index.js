import { combineReducers } from 'redux';
import moviesReducer from './movies';
import timerReducer from './timer';
import loginPage from './loginPage';
import scoreReducer from './score';

const rootReducer = combineReducers({
  movies: moviesReducer,
  timer: timerReducer,
  login: loginPage,
  score: scoreReducer,

});

export default rootReducer;
