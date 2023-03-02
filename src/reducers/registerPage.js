import {
  CHANGE_EMAIL,
  CHANGE_PSEUDO,
  CHANGE_PICTURE,
  CHANGE_PASSWORD,
  CHANGE_CONFIRM_PASSWORD,
  SET_REGISTER_SUCCESS,
} from "../actions/registerPageActions";

const initialState = {
  email: '',
  pseudo: '',
  picture: '',
  password: '',
  confirmPassword: '',
  successRegister: false,
};

export default function LoginPageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_PSEUDO:
      return { ...state, pseudo: action.payload };
    case CHANGE_PICTURE:
      return { ...state, picture: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case CHANGE_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    case SET_REGISTER_SUCCESS:
      return { ...state, successRegister: action.payload };

    default:
      return state;
  }
}
