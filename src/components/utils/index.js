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
