export const GET_MOVIES = 'GET_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const NEXT_MOVIE = 'NEXT_MOVIE';
export const RESET_GAME = 'RESET_GAME';

export const getMovies = () => ({
  type: GET_MOVIES,
});

export const fetchMovies = (data) => ({
  type: FETCH_MOVIES,
  data: data,
});

export const nextMovie = () => ({
  type: NEXT_MOVIE,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
