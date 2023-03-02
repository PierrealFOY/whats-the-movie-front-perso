import axios from 'axios';

import { 
      handleSuccessfulAuth, handleFailedAuth, SUBMIT_LOGIN,
      handleSuccessGetRole,handleFailedGetRole,  GET_ROLE,
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
          store.dispatch(handleSuccessfulAuth(response.data.token, response.data.data.id));
        })
        .catch((error) => {
          store.dispatch(handleFailedAuth(error.response.data.token));
        });
      break;

    case GET_ROLE:
      axios.get(
        'http://localhost:8081/api/users/1',
      )
      .then((response) => {
        console.log(response);
        store.dispatch(handleSuccessGetRole(response.data.token))
      })
      .catch((error) => {
        console.log(error);
        store.dispatch(handleFailedGetRole(error.response.data.token))
      })
      break;

    default:
  }

  next(action);
};

export default authMiddleware;
