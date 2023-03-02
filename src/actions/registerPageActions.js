export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PSEUDO = 'CHANGE_PSEUDO';
export const CHANGE_PICTURE = 'CHANGE_PICTURE';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_CONFIRM_PASSWORD = 'CHANGE_CONFIRM_PASSWORD';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SET_REGISTER_SUCCESS = 'SET_REGISTER_SUCCESS';

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  payload: email,
});

export const changePseudo = (pseudo) => ({
  type: CHANGE_PSEUDO,
  payload: pseudo,
});

export const changePicture = (picture) => ({
  type: CHANGE_PICTURE,
  payload: picture,
});

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  payload: password,
});

export const changeConfirmPassword = (confirmPassword) => ({
  type: CHANGE_CONFIRM_PASSWORD,
  payload: confirmPassword,
});

export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});

export const handleSuccessfulRegister = (success) => ({
  type: SET_REGISTER_SUCCESS,
  payload: success,
});
