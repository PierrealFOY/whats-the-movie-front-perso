import { CHANGE_EMAIL } from "../actions/registerPageActions";

const initialState = {
  email: '',
  pseudo: '',
  picture: '',
  password: '',
  confirmPassword: '',
};

export default function LoginPageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case 'SUBMIT_PSEUDO':
      return { ...state, pseudo: action.payload };
    case 'SUBMIT_PICTURE':
      return { ...state, picture: action.payload };
    case 'SUBMIT_PASSWORD':
      return { ...state, password: action.payload };
    case 'SUBMIT_CONFIRM_PASSWORD':
      return { ...state, confirmPassword: action.payload };

    default:
      return state;
  }
}
