export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const HANDLE_SUCCESSFUL_AUTH = 'HANDLE_SUCCESSFUL_AUTH';
export const HANDLE_FAILED_AUTH = 'HANDLE_FAILED_AUTH';
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';

export const submitEmail = (email) => ({
  type: 'SUBMIT_EMAIL',
  payload: email,
});

export const submitPassword = (password) => ({
  type: 'SUBMIT_PASSWORD',
  payload: password,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const handleSuccessfulAuth = (nickname, token) => ({
  type: HANDLE_SUCCESSFUL_AUTH,
  nickname: nickname,
  token: token,
});

export const handleFailedAuth = () => ({
  type: HANDLE_FAILED_AUTH,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});
