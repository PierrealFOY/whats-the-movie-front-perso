import axios from 'axios';
import { handleSuccessfulAuth, SUBMIT_LOGIN } from '../actions/loginPageActions';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        // URL
        'http://localhost:8081/api/login_check',
        // données
        {
          // /!\ ne pas oublier le tiroir ici
          email: store.getState().email,
          password: store.getState().password,
        },
      )
        .then((response) => {
          // console.log(response.data.pseudo);
          // console.log(response.data.token);

          // on veut envoyer les infos de la réponse vers le state (reducer) => dispatch
          console.log('toto');
          store.dispatch(handleSuccessfulAuth(response.data.pseudo, response.data.token));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default authMiddleware;
