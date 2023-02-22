import axios from 'axios';
import { GET_MOVIES, fetchMovies } from '../actions/movies';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MOVIES:
      // call the endpoint on the API to get the movies
      axios.get(/* 'http://xxx.xxx.xxx.xx:8080/api/movies/' */)
        .then((response) => {
          // dispatch the array returned in the state
          store.dispatch(fetchMovies(response.data));
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
