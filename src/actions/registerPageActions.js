export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  payload: email,
});

export const submitPseudo = (pseudo) => ({
  type: 'SUBMIT_PSEUDO',
  payload: pseudo,
});

export const submitPicture = (picture) => ({
  type: 'SUBMIT_PICTURE',
  payload: picture,
});

export const submitPassword = (password) => ({
  type: 'SUBMIT_PASSWORD',
  payload: password,
});

export const submitConfirmPassword = (confirmPassword) => ({
  type: 'SUBMIT_CONFIRM_PASSWORD',
  payload: confirmPassword,
});
