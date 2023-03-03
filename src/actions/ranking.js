export const FETCH_CLASSEMENT_SUCCESS = 'FETCH_CLASSEMENT_SUCCESS';
export const FETCH_CLASSEMENT_FAILURE = 'FETCH_CLASSEMENT_FAILURE';
export const FETCH_CLASSEMENT_REQUEST = 'FETCH_CLASSEMENT_REQUEST'


export const fetchClassementSuccess = (data) => ({
  type: FETCH_CLASSEMENT_SUCCESS,
  data: data,
});

export const fetchClassementRequest = () => ({
  type: FETCH_CLASSEMENT_REQUEST,
});

export const fetchClassementFailure = () => ({
  type: FETCH_CLASSEMENT_FAILURE,
});
