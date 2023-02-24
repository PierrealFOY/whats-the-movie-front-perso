import axios from 'axios';
import {
  GET_MOVIES,
  fetchMovies,
  GET_MOVIES_RESPONSES,
  fetchMoviesResponses,
} from '../actions/movies';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MOVIES:
      // call the endpoint on the API to get the movies
      axios.get('http://localhost:8081/api/movies/game?limit=5')
        .then((response) => {
          // dispatch the array returned in the state
          store.dispatch(fetchMovies(response.data));
        })
        .catch((error) => {
          // error
          console.log('Error : ', error);
        });
      break;

    case GET_MOVIES_RESPONSES:
      // call the endpoint on the API to get the movies
      axios.get('http://localhost:8081/api/movies/game?limit=4')
        .then((response) => {
          // dispatch the array returned in the state
          store.dispatch(fetchMoviesResponses(response.data));
        })
        .catch((error) => {
          // error
          console.log('Error : ', error);
        });
      break;

    default:
  }
  next(action);
};

export default apiMiddleware;
