import axios from 'axios';

import { 
      handleSuccessfulAuth, handleFailedAuth, SUBMIT_LOGIN,
} from '../actions/loginPageActions';

const authMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        'http://localhost:8081/api/login_check',
        {
          username: store.getState().login.email,
          password: store.getState().login.password,
        },
      )
        .then((response) => {
          store.dispatch(handleSuccessfulAuth(
            response.data.token, response.data.data.id, response.data.data.name, 
            response.data.data.numberGame, response.data.data.score, response.data.data.picture))
          })

        .catch((error) => {
          store.dispatch(handleFailedAuth(
            error.response.data))
          });
      break;
    default:
  }

  next(action);
};

export default authMiddleware;
