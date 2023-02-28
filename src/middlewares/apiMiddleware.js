/* eslint-disable max-len */
import axios from 'axios';
import {
  GET_MOVIES,
  fetchMovies,
  fetchMoviesResponses,
} from '../actions/movies';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MOVIES:
      // call the endpoint on the API to get 20 random movies
      axios.get('http://localhost:8081/api/movies/games?limit=20')
        .then((responseMovies) => {
          // array who will receive the 5 movies of the game
          const arrayMovie = [];
          // array who will receive the 4 possible responses for each one of the 5 movies
          const arrayResponses = [];
          // intermediate array who will reveive 4 possible responses for a movie
          let intermediateArray = [];
          // loop into the 20 movies
          for (let i = 0; i < 20; i += 1) {
            // if we are in the 1rst movie, the last movie
            // or any movie who is a multiple of 4
            if (i % 4 === 0 || i === 0 || i === 19) {
              if (i !== 19) {
                // we are in the 1rst movie,
                // or any movie who is a multiple of 4
                // we put this movie in the list of movies to guess
                arrayMovie.push(responseMovies.data[i]);
              }

              // if we aren't in the first movie
              if (i !== 0) {
                if (i === 19) {
                  // if we are in the last movie,
                  // we put the current movie in the intermediate array
                  intermediateArray.push(responseMovies.data[i]);
                }
                // we shuffle the intermediate array (for not having
                // the right movie tu guess in the first place)
                intermediateArray.sort(() => Math.random() - 0.5);
                // we put the intermediate array in the response array
                arrayResponses.push(intermediateArray);
                // we clean the intermediate array
                intermediateArray = [];
              }
            }

            if (i !== 19) {
              // if we aren't in the last movie
              // we put the current movie in the intermediate array
              intermediateArray.push(responseMovies.data[i]);
            }
          }
          // dispatching the movies to guess in the state
          store.dispatch(fetchMovies(arrayMovie));
          // dispatching the possible responses for each movie in the state
          store.dispatch(fetchMoviesResponses(arrayResponses));
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
