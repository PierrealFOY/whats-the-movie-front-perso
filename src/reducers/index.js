import { combineReducers } from 'redux';
import moviesReducer from './movies';
import timerReducer from './timer';
import loginPage from './loginPage';

const rootReducer = combineReducers({
  movies: moviesReducer,
  timer: timerReducer,
  login: loginPage,
});

export default rootReducer;
