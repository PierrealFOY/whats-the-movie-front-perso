const initialState = {
  email: '',
  pseudo: '',
  picture: '',
  password: '',
  confirmPassword: '',
};

export default function LoginPageReducer(action, state = initialState) {
  switch (action.type) {
    case 'SUBMIT_EMAIL':
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
