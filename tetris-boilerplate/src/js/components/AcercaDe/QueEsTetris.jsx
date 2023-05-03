import React from "react";
import "../../styles/AcercaDe/queEsTetris.css"
import { useNavigate } from "react-router-dom";

const QueEsTetris = () => {

    const navigate = useNavigate()

    return(
        <div className="nes-container col-8 is-dark with-title mt-5">
            <p className="title">¿Qué es Tetris?</p>
            <p>
                Tetris es el revolucionario juego que movilizó al mundo desde su distribución.
                Consiste básicamente en ir colocando las figuras geométricas de manera tal que
                se forme una fila en la parte inferior de la pantalla con el fin de que se eliminen quedar colocadas correctamente.
            </p>
            <p className="d-flex justify-content-end">
                <button type="button" className="nes-btn is-error" onClick={() => navigate("/acercaDe")}>Volver</button>
            </p>
        </div>          
    )
}

export default QueEsTetris;