export const GET_MOVIES = 'GET_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const NEXT_MOVIE = 'NEXT_MOVIE';
export const RESET_GAME = 'RESET_GAME';
export const FETCH_MOVIES_RESPONSES = 'FETCH_MOVIES_RESPONSES';
export const SET_USER_RESPONSE = 'SET_USER_RESPONSE';
export const SUBMIT_MOVIE = 'SUBMIT_MOVIE';

// Timer
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const RESET_FALSE_ANSWER = 'RESET_FALSE_ANSWER';
export const UPDATE_TIME = 'UPDATE_TIME';
export const GAME_OFF = 'GAME_OFF';

// Saving game infos
export const SAVE_GAME = 'SAVE_GAME';

export const GET_ARRAY_TIME = 'GET_ARRAY_TIME';
export const SET_ARRAY_TIME = 'SET_ARRAY_TIME';

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

export const fetchMoviesResponses = (responses) => ({
  type: FETCH_MOVIES_RESPONSES,
  responses: responses,
});

export const setUserResponse = (response) => ({
  type: SET_USER_RESPONSE,
  userResponse: response,
});

export const startTimer = () => ({
  type: START_TIMER,
});

export const updateTime = () => ({
  type: UPDATE_TIME,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
});

export const stopTimer = () => ({
  type: STOP_TIMER,
});

export const gameOff = () => ({
  type : GAME_OFF
})

export const resetFalseAnswer = () => ({
  type: RESET_FALSE_ANSWER,
});

export const submitMovie = () => ({
  type: SUBMIT_MOVIE,
});

export const saveGame = () => ({
  type: SAVE_GAME,
});

export const getArrayTime = () => ({
  type: GET_ARRAY_TIME,
});

export const setArrayTime = (array) => ({
  type: SET_ARRAY_TIME,
  array: array,
});
