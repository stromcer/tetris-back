import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useFormInputs from "../hooks/useFormInputs";

const Login = () => {
  const {userTextInputs, handleTextChangeInputs, handleChecksChangeInputs}  = useFormInputs()


    return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" value={userTextInputs["email"]} onChange={handleTextChangeInputs} type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" value={userTextInputs["password"]} onChange={handleTextChangeInputs} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Check name="remember" value={true} onChange={handleChecksChangeInputs} type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
}

export default Login;