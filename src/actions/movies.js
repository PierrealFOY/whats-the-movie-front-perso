export const GET_MOVIES = 'GET_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export const getMovies = () => ({
  type: GET_MOVIES,
});

export const fetchMovies = (data) => ({
  type: FETCH_MOVIES,
  data: data,
});
