import React, { useReducer } from "react";
import SignupComponents from "../components/signupComponent";
import * as yup from "yup";
import reducer, { initialState } from "../reducers/signUpReducer";
import apiHelper from "../apis/apiHepler";
import { useHistory } from "react-router-dom";
let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  name: yup.string().max(15).required(),
  userName: yup.string().required().min(6),
  checkBox: yup
    .boolean()
    .required("The terms and conditions must be accepted")
    .oneOf([true], "The terms and conditions must be accepted."),
});

function SignupContainer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const emailChangeHandler = (e) => {
    dispatch({ type: "setEmail", value: e.target.value });
    console.log(state.email);
  };
  const checkBoxHandler = (e) => {
    dispatch({ type: "setCheckBox", value: e.target.checked });
  };
  const nameChangeHandler = (e) => {
    dispatch({ type: "setName", value: e.target.value });
    console.log(state.name);
  };
  const passwordChangeHandler = (e) => {
    dispatch({ type: "setPassword", value: e.target.value });
  };
  const userNameChangeHandler = (e) => {
    dispatch({ type: "setUserName", value: e.target.value });
    console.log(state.userName);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "setPasswordError", value: "" });
    dispatch({ type: "setEmailError", value: "" });
    dispatch({ type: "setNameError", value: "" });
    dispatch({ type: "setCheckBoxError", value: "" });
    dispatch({ type: "setUserNameError", value: "" });

    schema
      .validate(
        {
          email: state.email,
          password: state.password,
          name: state.name,
          userName: state.userName,
          checkBox: state.checkBox,
        },
        { abortEarly: false }
      )
      .then(() => {
        apiHelper("post", "https://api.taiga.io/api/v1/auth/register", {
          accepted_terms: state.checkBox,
          email: state.email,
          full_name: state.name,
          password: state.password,
          type: "public",
          username: state.userName,
        })
          .then((res) => {
            console.log(res);
            history.push("/");
          })
          .catch((err) => {
            console.log(err.data);
          });
      })
      .catch((err) => {
        err.inner.forEach((ele) => {
          console.log(ele.message);
          if (ele.path == "email")
            dispatch({ type: "setEmailError", value: ele.message });
          if (ele.path == "password")
            dispatch({ type: "setPasswordError", value: ele.message });
          if (ele.path == "name")
            dispatch({ type: "setNameError", value: ele.message });
          if (ele.path == "checkBox")
            dispatch({ type: "setCheckBoxError", value: ele.message });
          if (ele.path == "userName")
            dispatch({ type: "setUserNameError", value: ele.message });
        });
      });
  };
  return (
    <div className="container-div">
      <SignupComponents
        nameChangeHandler={nameChangeHandler}
        passwordChangeHandler={passwordChangeHandler}
        emailChangeHandler={emailChangeHandler}
        emailError={state.emailError}
        nameError={state.nameError}
        passwordError={state.passwordError}
        onSubmitHandler={onSubmitHandler}
        checkBoxHandler={checkBoxHandler}
        checkBoxError={state.checkBoxError}
        userNameChangeHandler={userNameChangeHandler}
        userNameError={state.userNameError}
      />
    </div>
  );
}

export default SignupContainer;
