import axios from 'axios';
import { GET_MOVIES, fetchMovies } from '../actions/movies';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MOVIES:
      axios.get('http://192.168.90.44:8080/api/movies/575')
        .then((response) => {
          store.dispatch(fetchMovies(response.data));
        })
        .catch((error) => {
          console.log('Error : ', error);
        });
      break;

    default:
  }
  next(action);
};

export default apiMiddleware;
