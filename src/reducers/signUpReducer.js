export const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  name: "",
  nameError: "",
  checkBox: false,
  checkBoxError: "",
  userName: "",
  userNameError: "",
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
    case "setName":
      return { ...state, name: action.value };
    case "setNameError":
      return { ...state, nameError: action.value };
    case "setCheckBox":
      return { ...state, checkBox: action.value };
    case "setCheckBoxError":
      return { ...state, checkBoxError: action.value };
    case "setUserNameError":
      return { ...state, userNameError: action.value };
    case "setUserName":
      return { ...state, userName: action.value };
  }
};
export default reducer;
