import axios from 'axios';
import { FETCH_CLASSEMENT_FAILURE, FETCH_CLASSEMENT_SUCCESS, FETCH_CLASSEMENT_REQUEST, fetchClassementSuccess, fetchClassementFailure } from '../actions/ranking';

const rankingMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case FETCH_CLASSEMENT_REQUEST:
      axios
      .get('http://localhost:8081/api/users/classement?limit=50')
      .then((response) => {
        store.dispatch(fetchClassementSuccess(response.data));
        console.log(response)
      })
      .catch((error) => {
        store.dispatch(fetchClassementFailure(error));
        console.log(error);
      });
  break;

  default:
}

next(action);
};

export default rankingMiddleware;
