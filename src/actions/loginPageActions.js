export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const HANDLE_SUCCESSFUL_AUTH = 'HANDLE_SUCCESSFUL_AUTH';
export const HANDLE_FAILED_AUTH = 'HANDLE_FAILED_AUTH';
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';
export const SHOW_LOGOUT = 'SHOW_LOGOUT';
export const GET_ROLE = 'GET_ROLE';
export const GET_ROLE_FAILED = 'GET_ROLE_FAILED';

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


export const handleSuccessfulAuth = (token, id) => ({
  type: HANDLE_SUCCESSFUL_AUTH,
  token: token,
  id: id,
});

export const handleFailedAuth = () => ({
  type: HANDLE_FAILED_AUTH,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});

export const handleSuccessGetRole = (token, role) => ({
  type: GET_ROLE,
  token: token,
  role: role,
})

export const handleFailedGetRole = () => ({
  type: GET_ROLE_FAILED,
})
