import React from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import "./signupComponent.css";
function signupComponent({
  nameChangeHandler,
  passwordChangeHandler,
  emailChangeHandler,
  emailError,
  nameError,
  passwordError,
  onSubmitHandler,
  checkBoxHandler,
  checkBoxError,
  userNameChangeHandler,
  userNameError,
}) {
  return (
    <Form>
      <center>
        <h2>Sign Up</h2>
      </center>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control placeholder="Enter Name" onChange={nameChangeHandler} />
          {nameError !== "" && <span className="error">{nameError}</span>}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          UserName
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            placeholder="Enter User Name"
            onChange={userNameChangeHandler}
          />
          {userNameError !== "" && (
            <span className="error">{userNameError}</span>
          )}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={emailChangeHandler}
          />
          {emailError !== "" && <span className="error">{emailError}</span>}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={passwordChangeHandler}
          />
          {passwordError !== "" && (
            <span className="error">{passwordError}</span>
          )}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check onClick={checkBoxHandler} label="Terms and Conditions" />

          {checkBoxError !== "" && (
            <span className="error">{checkBoxError}</span>
          )}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button onClick={onSubmitHandler} type="submit">
            Sign in
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default signupComponent;
