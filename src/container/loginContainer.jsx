import React, { useState, useReducer } from "react";
import Login from "../components/loginComponents";
import * as yup from "yup";
import apiHelper from "../apis/apiHepler";
import { useHistory } from "react-router-dom";
import reducer, { initialState } from "../reducers/loginContainerReducer.js";
let schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(6).required(),
});
function LoginContainer() {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);

  const emailChangeHandler = (e) => {
    dispatch({ type: "setEmail", value: e.target.value });
    console.log(state.email);
  };
  const passwordChangeHandler = (e) => {
    dispatch({ type: "setPassword", value: e.target.value });
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "setPasswordError", value: "" });
    dispatch({ type: "setEmailError", value: "" });

    schema
      .validate(
        {
          email: state.email,
          password: state.password,
        },
        { abortEarly: false }
      )
      .then(() => {
        apiHelper("post", "https://api.taiga.io/api/v1/auth", {
          username: state.email,
          password: state.password,
          type: "normal",
        })
          .then((res) => {
            history.push("/dashboard");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        err.inner.forEach((ele) => {
          console.log(ele.message);
          if (ele.path == "email")
            dispatch({ type: "setEmailError", value: ele.message });
          if (ele.path == "password")
            dispatch({ type: "setPasswordError", value: ele.message });
        });
      });
  };
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Login
        email={state.email}
        password={state.password}
        emailChangeHandler={emailChangeHandler}
        passwordChangeHandler={passwordChangeHandler}
        onClickHandler={onClickHandler}
        emailError={state.emailError}
        passError={state.passwordError}
      />
    </div>
  );
}

export default LoginContainer;
