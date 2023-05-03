import React from "react";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/registro.css"

const Registro = () => {
    return(
        <Form className="registro-styles nes-container is-rounded is-dark col-6">
          <Form.Group className="m-3" controlId="formBasicEmail">
            <h3>Formulario de Registro</h3>
            <Form.Label className="mt-3">Introduce una direccion de correo:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Label className="mt-4">Introduzca una contraseña:</Form.Label>
            <Form.Control type="password" placeholder="Enter password"/>
            <Form.Label className="mt-4">Introduzca de nuevo la contraseña:</Form.Label>
            <Form.Control type="password" placeholder="Enter password again"/>
          </Form.Group>
          <button type="button" className="nes-btn is-primary m-3">Registrarse</button>
        </Form>
    );
};

export default Registro;