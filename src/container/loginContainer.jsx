import React, { useState } from "react";
import Login from "../components/loginComponents";
import * as yup from "yup";
let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    schema
      .validate(
        {
          email,
          password,
        },
        { abortEarly: false }
      )
      .catch((err) => {
        err.inner.forEach((error) => {
          console.log(error.name, error.message);
        });
      });
  };
  return (
    <div>
      <Login
        email={email}
        password={password}
        emailChangeHandler={emailChangeHandler}
        passwordChangeHandler={passwordChangeHandler}
        onClickHandler={onClickHandler}
      />
    </div>
  );
}

export default LoginContainer;
