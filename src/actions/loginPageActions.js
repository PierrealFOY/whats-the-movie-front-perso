export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const HANDLE_SUCCESSFUL_AUTH = 'HANDLE_SUCCESSFUL_AUTH';
export const HANDLE_FAILED_AUTH = 'HANDLE_FAILED_AUTH';
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  payload: email,
});

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  payload: password,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const handleSuccessfulAuth = (token, id, name, game, score, picture, role) => ({
  type: HANDLE_SUCCESSFUL_AUTH,
  token: token,
  id: id,
  name: name,
  game: game,
  score: score,
  picture: picture,
  role: role,
});

export const handleFailedAuth = () => ({
  type: HANDLE_FAILED_AUTH,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});
