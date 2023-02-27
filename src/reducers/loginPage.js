import { HANDLE_SUCCESSFUL_AUTH } from '../actions/loginPageActions';

const initialState = {
  logged: false,
  email: '',
  password: '',
  nickname: '',
  token: '',
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
        nickname: action.nickname,
        token: action.token,
      };

    default:
      return state;
  }
}
