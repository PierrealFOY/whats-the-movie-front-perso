import axios from 'axios';

import { 
      handleSuccessfulAuth, handleFailedAuth, SUBMIT_LOGIN,
      handleSuccessGetData,handleFailedGetData,  GET_DATA,
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

      case GET_DATA:
        axios.get(
          'http://localhost:8081/api/users/user',
        )
        .then((response) => {
          console.log(response);
          //store.dispatch(handleSuccessGetData(response.data))
        })
        .catch((error) => {
          console.log(error);
          //store.dispatch(handleFailedGetData(error.response.data))
        })
        break;

    default:
  }

  next(action);
};

export default authMiddleware;
