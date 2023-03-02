import axios from 'axios';
import { handleSuccessfulAuth, handleFailedAuth, SUBMIT_LOGIN } from '../actions/loginPageActions';

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
          store.dispatch(handleSuccessfulAuth(response.data.nickname, response.data.token));
        })
        .catch((error) => {
          store.dispatch(handleFailedAuth(error.response.data.nickname, error.response.data.token));
        });

      break;

    default:
  }

  next(action);
};

export default authMiddleware;