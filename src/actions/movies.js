export const GET_MOVIES = 'GET_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const NEXT_MOVIE = 'NEXT_MOVIE';
export const RESET_GAME = 'RESET_GAME';

// Timer
export const START_TIMER = 'START_TIMER'
export const STOP_TIMER  = 'STOP_TIMER' 
export const RESET_TIMER = 'RESET_TIMER'
export const UPDATE_TIME = 'UPDATE_TIME'


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

export const startTimer = () => ({
  type: START_TIMER,
})

export const updateTime = () => ({
  type: UPDATE_TIME,
})

export const resetTimer = () => ({
  type: RESET_TIMER,
})

export const stopTimer = () => ({
  type: STOP_TIMER
})
