import axios from 'axios';
import { GET_MOVIES, fetchMovies } from '../actions/movies';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MOVIES:
      // call the endpoint on the API to get the movies
      axios.get('http://localhost:8000/api/movies')
        .then((response) => {
          console.log('Response : ', response.data);
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
