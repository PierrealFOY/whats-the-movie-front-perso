import axios from 'axios';

import { handleSuccessfulAuth, handleFailedAuth, SUBMIT_LOGIN } from '../actions/loginPageActions';
import { SUBMIT_REGISTER, handleSuccessfulRegister } from '../actions/registerPageActions';

const authMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        'https://jean-christophemartin-server.eddi.cloud/api/login_check',
        {
          username: store.getState().login.email,
          password: store.getState().login.password,
        },
      )
        .then((response) => {
          store.dispatch(handleSuccessfulAuth(
            response.data.token, response.data.data.id, response.data.data.name, 
            response.data.data.numberGame, response.data.data.score, 
            response.data.data.picture, response.data.data.role[0], 
            ))
          })
        .catch((error) => {
          store.dispatch(handleFailedAuth(
            error.response.data))
          });
      break;


    case SUBMIT_REGISTER:
      axios.post(
        'https://jean-christophemartin-server.eddi.cloud/api/users',
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
