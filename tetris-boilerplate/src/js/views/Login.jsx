import React from "react";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/login.css"
import useFormInputs from "../hooks/useFormInputs";


const Login = () => {
  const {userTextInputs, handleTextChangeInputs, handleChecksChangeInputs}  = useFormInputs()


    return (
        <Form className="login-styles nes-container is-rounded is-dark col-5">
          <Form.Group className="m-3">
            <h3>Inicio de Sesion</h3>
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicEmail">
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
          <div className="col-12">
            <button type="button" className="nes-btn is-primary m-3">Iniciar sesion</button>
            <a className="passwordForgot btn" href="http://">
              ¿Olvidaste tu contrasña?¿
            </a>
          </div>
        </Form>
      );
}

export default Login;