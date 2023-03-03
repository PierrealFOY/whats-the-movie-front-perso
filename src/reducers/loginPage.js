import {
  HANDLE_SUCCESSFUL_AUTH, HANDLE_FAILED_AUTH, HANDLE_LOGOUT,
} from '../actions/loginPageActions';

const initialState = {
  logged: false,
  showLogout: false,
  email: '',
  password: '',
  token: '',
  id: '',
};

export default function LoginPageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SUBMIT_EMAIL':
      return { ...state, email: action.payload };

    case 'SUBMIT_PASSWORD':
      return { ...state, password: action.payload };

    case HANDLE_SUCCESSFUL_AUTH:
      return {
        ...state,
        logged: true,
        password: '',
        token: action.token,
        id: action.id,
      };

    case HANDLE_FAILED_AUTH:
      return {
        ...state,
        logged: false,

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
