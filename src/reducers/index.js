import { combineReducers } from 'redux';
import moviesReducer from './movies';
import timerReducer from './timer';
import loginPage from './loginPage';
import scoreReducer from './score';
import addMovieReducer from './formReducer';
import registerPage from './registerPage';
import rankingReducer from './ranking';
import menuReducer from './menu';

const rootReducer = combineReducers({
  movies: moviesReducer,
  timer: timerReducer,
  login: loginPage,
  score: scoreReducer,
  addMovie: addMovieReducer,
  register: registerPage,
  ranking: rankingReducer,
  menu: menuReducer,
});

export default rootReducer;
