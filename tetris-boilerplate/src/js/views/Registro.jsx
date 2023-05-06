import React from "react";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/registro.css"
import useFormInputs from "../hooks/useFormInputs";
import apiFetch from "../utils/apiFetch";


const Registro = () => {
  const {userTextInputs, handleTextChangeInputs }  = useFormInputs({
    nickname: "",
    name: "",
    email: "",
    password: "",
    passwordAgain: ""
  })

  const handleSubmit = (e) => {
    if( userTextInputs.password !== userTextInputs.passwordAgain ){
      return
    }

    const body = {
      nickname: userTextInputs.nickname,
      name: userTextInputs.name,
      email: userTextInputs.email,
      password: userTextInputs.password,
      }
      console.log(body)
      apiFetch("/api/singup", "POST", body, false)
  }
  


    return(
      <Form className="registro-styles nes-container is-rounded is-dark col-6">
        <Form.Group className="m-3" controlId="formBasicEmail">
          <h3>Formulario de Registro</h3>
          <Form.Label className="mt-3">Introduce tu nombre de usuario:</Form.Label>
          <Form.Control type="text" placeholder="Enter username" name="nickname" onChange={handleTextChangeInputs} />
          <Form.Label className="mt-3">Introduce tu nombre:</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleTextChangeInputs}/>
          <Form.Label className="mt-3">Introduce una direccion de correo:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleTextChangeInputs} />
          <Form.Label className="mt-4">Introduzca una contraseña:</Form.Label>
          <Form.Control type="password" placeholder="Enter password" name="password" onChange={handleTextChangeInputs}/>
          <Form.Label className="mt-4">Introduzca de nuevo la contraseña:</Form.Label>
          <Form.Control type="password" placeholder="Enter password again" name="passwordAgain" onChange={handleTextChangeInputs}/>
        </Form.Group>
        <button type="button" className="nes-btn is-primary m-3" onClick={handleSubmit}>Registrarse</button>
      </Form>
  );
};

export default Registro;