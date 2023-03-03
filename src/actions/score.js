// score
export const ADD_SCORE = 'ADD_SCORE';
export const RESET_SCORE = 'RESET_SCORE';

export const addScore = (score) => ({
  type: ADD_SCORE,
  score: score,
});

export const resetScore = () => ({
  type: RESET_SCORE,
});
