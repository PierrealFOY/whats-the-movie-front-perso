import { combineReducers } from 'redux';
import moviesReducer from './movies';
import timerReducer from './timer';


const rootReducer = combineReducers({
  movies: moviesReducer,
  timer : timerReducer,
});

export default rootReducer;
