/* eslint-disable max-len */
import axios from 'axios';
import {
  GET_MOVIES,
  SUBMIT_MOVIE,
  fetchMovies,
  fetchMoviesResponses,
  SAVE_GAME,
} from '../actions/movies';
import { GET_LISTS_FOR_MOVIE, resetFilmsInfos, setListsForMovie } from '../actions/formActions';
import { formatDateForAPI, capitalizeFirstLetter } from '../components/utils';
import { fetchClassementRequest } from '../actions/ranking';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // Get 20 random movies in the database
    case GET_MOVIES:
      // call the endpoint on the API to get 20 random movies
      axios.get('https://jean-christophemartin-server.eddi.cloud/api/movies/games?limit=20')
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

    // Submitting a movie
    case SUBMIT_MOVIE:
      axios.post('https://jean-christophemartin-server.eddi.cloud/api/movies', {
        title: store.getState().addMovie.title,
        synopsis: store.getState().addMovie.synopsis,
        releaseDate: formatDateForAPI(store.getState().addMovie.releaseDate),
        poster: '', // store.getState().addMovie.poster,
        status: 0,
        idGenres: store.getState().addMovie.genres,
        idActors: store.getState().addMovie.actors,
        idProductionStudios: store.getState().addMovie.productionStudios,
        idDirectors: store.getState().addMovie.directors,
        idCountries: store.getState().addMovie.countries,
        idUser: store.getState().login.id,
      })
        .then((response) => {
          console.log('Response : ', response);
          // we reset the movies infos
          store.dispatch(resetFilmsInfos());
        })
        .catch((error) => {
          console.log(error);
          const title = Object.keys(error.response.data)[0];
          const message = error.response.data[Object.keys(error.response.data)][0];
          alert(capitalizeFirstLetter(title) + ' : ' + message);
        });
      break;

    // save the datas of the game played by a connected user
    case SAVE_GAME:
      // getting ths ids of the movies the user had to guess
      const idMovies = [];
      store.getState().movies.movies.map((movie) => {
        idMovies.push(movie.id);
      });
      axios.post('https://jean-christophemartin-server.eddi.cloud/api/games', {
        userId: store.getState().login.id,
        score: store.getState().score.userScore, // user score
        moviesId: idMovies, // id of the movies the user had to guess
      })
        .then((response) => {
          // console.log('Response : ', response.data);
          // we update the ranking of the user
          store.dispatch(fetchClassementRequest());
        })
        .catch((error) => {
          console.log('Error apiMiddleware SAVE_GAME : ', error);
          const title = Object.keys(error.response.data)[0];
          const message = error.response.data[Object.keys(error.response.data)][0];
          alert(capitalizeFirstLetter(title) + ' : ' + message);          
        });
      break;

    case GET_LISTS_FOR_MOVIE:
      axios.get('https://jean-christophemartin-server.eddi.cloud/api/forms')
        .then((response) => {
          store.dispatch(setListsForMovie(response.data.actor, response.data.countries, response.data.directors, response.data.genres, response.data.productionStudios));
        })
        .catch((error) => {
          console.log('Error GET_LISTS_FOR_MOVIE : ', error);
        })

    default:
  }
  next(action);
};

export default apiMiddleware;
