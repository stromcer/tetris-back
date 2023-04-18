import React, { useEffect } from "react";
import useControls from "../hooks/useControls";
import "../styles/controls.css";
import ModalControls from "./ModalControl";

const Controls = () => {
  const {
    rotateButton,
    moveLeftButton,
    moveRightButton,
    moveDownButton,
    pauseButton,
    modalsShows,
    handleOpenModal,
    handleCloseModal,
  } = useControls();

  return (
    <>
      <div className="container controls-container border-rounded py-5 bg-white">
        <div >
          <h1> CONTROLES </h1>
        </div>
        <div>
          <p>Rotar pieza :</p>
          <ModalControls
            modalName="rotateModal"
            searchedKey="rotateButton"
            text="ROTAR PIEZA"
          />
        </div>
        <div>
          <p>Mover a la izquierda :</p>
          <ModalControls
            modalName="moveLeftModal"
            searchedKey="moveLeftButton"
            text="DESPLAZAR PIEZA A LA IZQUIERDA"
          />
        </div>
        {/* <div>
          <p>Mover a la derecha :</p>
          <ModalControls
            handleOpen={() => {
              handleOpenModal("moveRightModal");
            }}
            handleClose={() => handleCloseModal("moveRightModal")}
            show={modalsShows.moveRightModal}
            searchedKey={"moveRightButton"}
            text="DESPLAZAR PIEZA A LA DERECHA"
          />
        </div>
        <div>
          <p>Bajar la pieza :</p>
          <ModalControls
            handleOpen={() => {
              handleOpenModal("moveDownModal");
            }}
            handleClose={() => handleCloseModal("moveDownModal")}
            show={modalsShows.moveDownModal}
            searchedKey={"moveDownButton"}
            text="BAJAR PIEZA"
          />
        </div>
        <div>
          <p>Pause (Solo funciona en solitario):</p>
          <ModalControls
            handleOpen={() => {
              handleOpenModal("pauseModal");
            }}
            handleClose={() => handleCloseModal("pauseModal")}
            show={modalsShows.pauseModal}
            searchedKey={"pauseButton"}
            text="PAUSAR PARTIDA"
          />
        </div> */}
      </div>
    </>
  );
};

export default Controls;
