import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Registro = () => {
    return(
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Por favor, Introduce una direccion de correo</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>
    );
};

export default Registro;