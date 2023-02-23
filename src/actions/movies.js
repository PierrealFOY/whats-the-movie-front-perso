export const GET_MOVIES = 'GET_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const NEXT_MOVIE = 'NEXT_MOVIE';
export const RESET_GAME = 'RESET_GAME';
export const GET_MOVIES_RESPONSES = 'GET_MOVIES_RESPONSES';
export const FETCH_MOVIES_RESPONSES = 'FETCH_MOVIES_RESPONSES';

/**
 * Getting movies from the API
 */
export const getMovies = () => ({
  type: GET_MOVIES,
});

/**
 * fetching movies into the reducer
 * @param {*} data : array of movies
 */
export const fetchMovies = (data) => ({
  type: FETCH_MOVIES,
  data: data,
});

/**
 * increments the game turn number
 */
export const nextMovie = () => ({
  type: NEXT_MOVIE,
});

/**
 * resets the game turn number to 0
 */
export const resetGame = () => ({
  type: RESET_GAME,
});

export const getMoviesResponses = () => ({
  type: GET_MOVIES_RESPONSES,
});

export const fetchMoviesResponses = (responses) => ({
  type: FETCH_MOVIES_RESPONSES,
  responses: responses,
});
