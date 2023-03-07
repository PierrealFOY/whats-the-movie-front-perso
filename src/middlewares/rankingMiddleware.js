import axios from 'axios';
import { FETCH_CLASSEMENT_REQUEST, fetchClassementSuccess, fetchClassementFailure } from '../actions/ranking';

const rankingMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case FETCH_CLASSEMENT_REQUEST:
      axios
      .get('https://jean-christophemartin-server.eddi.cloud/api/users/classement?limit=50')
      .then((response) => {
        store.dispatch(fetchClassementSuccess(response.data));
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
