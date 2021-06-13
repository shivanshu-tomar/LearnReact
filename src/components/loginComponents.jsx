import React from "react";
import { Form } from "react-bootstrap";
import { Card, From, Button } from "react-bootstrap";
function loginComponents({
  email,
  password,
  emailChangeHandler,
  passwordChangeHandler,
  onClickHandler,
  emailError,
  passError,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={emailChangeHandler}
              type="email"
              placeholder="Enter email"
            />
            {emailError !== "" && <span>{emailError}</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={passwordChangeHandler}
              type="password"
              placeholder="Password"
            />
            {passError !== "" && <span>{passError}</span>}
          </Form.Group>

          <Button onClick={onClickHandler} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default loginComponents;
