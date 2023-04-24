import React from "react";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/login.css"

const Login = () => {
    return (
        <Form className="container col-5">
          <Form.Group className="m-3">
            <h3>Login</h3>
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="col-12">
            <button className="button m-3" type="submit">
              Iniciar sesion
            </button>
            <a className="passwordForgot btn" href="http://">
              Forgot your password?
            </a>
          </div>
        </Form>
      );
}

export default Login;