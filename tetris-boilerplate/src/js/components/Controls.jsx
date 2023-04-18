import React from "react";
import useControls from "../hooks/useControls";
import "../styles/controls.css";

const Controls = () => {
  const {
    rotateButton,
    moveLeftButton,
    moveRightButton,
    moveDownButton,
    pauseButton,
  } = useControls();

  return (
    <>
      <div className="container controls-container border-rounded p-2 bg-white">
        <div>
          <h1> CONTROLES </h1>
        </div>
        <div>
          <p>Rotar pieza :</p>
          <button>{rotateButton.key}</button>
        </div>
        <div>
          <p>Mover a la izquierda :</p>
          <button>{moveLeftButton.key}</button>
        </div>
        <div>
          <p>Mover a la derecha :</p>
          <button>{moveRightButton.key}</button>
        </div>
        <div>
          <p>Bajar la pieza :</p>
          <button>{moveDownButton.key}</button>
        </div>
        <div>
          <p>Pause (Solo funciona en solitario):</p>
          <button>{pauseButton.key}</button>
        </div>
      </div>
    </>
  );
};

export default Controls;
