import React from "react";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/login.css"

const Login = () => {
    return (
        <Form className="login-styles nes-container is-rounded is-dark col-5">
          <Form.Group className="m-3">
            <h3 className="h3-styles">Login</h3>
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
            <button type="button" className="nes-btn is-primary m-3">Iniciar sesion</button>
            <a className="passwordForgot btn" href="http://">
              Forgot your password?
            </a>
          </div>
        </Form>
      );
}

export default Login;