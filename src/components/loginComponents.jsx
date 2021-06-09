import React from "react";
import { Form } from "react-bootstrap";
import { Card, From, Button } from "react-bootstrap";
function loginComponents({
  email,
  password,
  emailChangeHandler,
  passwordChangeHandler,
  onClickHandler,
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
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={passwordChangeHandler}
              type="password"
              placeholder="Password"
            />
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
