import {
  HANDLE_SUCCESSFUL_AUTH,
  HANDLE_FAILED_AUTH,
  HANDLE_LOGOUT,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
} from '../actions/loginPageActions';

const initialState = {
  logged: false,
  showLogout: false,
  email: '',
  password: '',
  token: '',
  id: '',
  name: '',
  game: '',
  score: '',
  picture: '',
  role:'',
  message: '',
};

export default function LoginPageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };

    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };

    case HANDLE_SUCCESSFUL_AUTH:
      return {
        ...state,
        logged: true,
        password: '',
        token: action.token,
        id: action.id,
        name: action.name,
        game: action.game,
        score: action.score,
        picture: action.picture,
        role: action.role,
        message: '',
      };

    case HANDLE_FAILED_AUTH:
      return {
        ...state,
        logged: false,
        message: 'Oups...mauvais identifiants',
      };

    case HANDLE_LOGOUT:
      return {
        ...state,
        logged: false,

      };

    default:
      return state;
  }
}
