/**
 *
 * @param {*} date
 * @returns the date formatted date. Ex "lundi 20 février 2023 "
 */

// eslint-disable-next-line import/prefer-default-export
export const formatDate = (date) => {
  const dateToFormat = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return dateToFormat.toLocaleDateString('fr-FR', options);
};

export const formatDateForAPI = (date) => {
  const dateToFormat = new Date(date);
  return dateToFormat.toISOString();
};

export const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const shuffleArray = (array) => {
  var i, j, tmp;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
};

export const sliceArray = (array) => {
  const value = array[0];
  array.slice(0, 1);
  return value;
};

export const isLogged = () => {
  let isUserLogged = false;
  const loginInfos = JSON.parse(localStorage.getItem('loginInfos'));
  if (loginInfos) {
    isUserLogged = loginInfos.logged;
  }
  return isUserLogged;
};

export const getUserRole = () => {
  let userRole = "";
  const loginInfos = JSON.parse(localStorage.getItem('loginInfos'));
  if (loginInfos) {
    userRole = loginInfos.role;
  }
  return userRole;
};
