import { combineReducers } from 'redux';
import moviesReducer from './movies';
import timerReducer from './timer';
import loginPage from './loginPage';
import scoreReducer from './score';
import addMovieReducer from './formReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  timer: timerReducer,
  login: loginPage,
  score: scoreReducer,
  addMovie: addMovieReducer,
});

export default rootReducer;
