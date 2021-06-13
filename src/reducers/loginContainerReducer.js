export const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.value };
    case "setPassword":
      return { ...state, password: action.value };
    case "setEmailError":
      return { ...state, emailError: action.value };
    case "setPasswordError":
      return { ...state, passwordError: action.value };
  }
};
export default reducer;
