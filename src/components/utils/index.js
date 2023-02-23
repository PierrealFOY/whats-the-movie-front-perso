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
