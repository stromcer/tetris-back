import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import useControls from "../hooks/useControls";

const ModalControls = ({ modalName, searchedKey, text }) => {
  const {
    buttonsMap,
    modalsShows,
    handleOpenModal,
    handleCloseModal,
    handleChangeButton
  } = useControls();
    
  const testin = (e) => {
    if (!modalsShows[modalName]) return
    const {key , keyCode, code} = e;
    const new_key = {key , keyCode, code};
    console.log(searchedKey, new_key);
    handleChangeButton(searchedKey, new_key);
    handleCloseModal(modalName);
    return
  };  




  return (
    <div  onKeyDown={testin}>
      <button onClick={()=>handleOpenModal(modalName)}>{buttonsMap[searchedKey].key}</button>

      <Modal show={modalsShows[modalName]} onHide={()=>handleCloseModal(modalName)} > 
        <Modal.Title>
          Presiona la tecla que quieras asignar a la siguiente accion
        </Modal.Title>
        <Modal.Body>
          <h1>
            <b>{text}</b>
          </h1>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalControls;
