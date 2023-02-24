const initialState = {
  email: '',
  password: '',
};

export default function LoginPageReducer(action, state = initialState) {
  switch (action.type) {
    case 'SUBMIT_EMAIL':
      return { ...state, email: action.payload };
    case 'SUBMIT_PASSWORD':
      return { ...state, password: action.payload };

    default:
      return state;
  }
}
