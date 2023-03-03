import axios from 'axios';
import { handleSuccessfulAuth, handleFailedAuth, SUBMIT_LOGIN } from '../actions/loginPageActions';
import { SUBMIT_REGISTER, handleSuccessfulRegister } from '../actions/registerPageActions';

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
          console.log(response.data);
          store.dispatch(handleSuccessfulAuth(response.data.nickname, response.data.token));
        })
        .catch((error) => {
          store.dispatch(handleFailedAuth(error.response.data.nickname, error.response.data.token));
        });

      break;

    case SUBMIT_REGISTER:
      axios.post(
        'http://localhost:8081/api/users',
        {
          email: store.getState().register.email,
          name: store.getState().register.pseudo,
          password: store.getState().register.password,
          // picture: '',
        },
      )
        .then((response) => {
          store.dispatch(handleSuccessfulRegister(true));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }

  next(action);
};

export default authMiddleware;
