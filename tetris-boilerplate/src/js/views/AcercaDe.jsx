import React from "react";
import { Link } from "react-router-dom";
import "../styles/acercaDe.css"

const AcercaDe = () => {
    return(
        <div className="container col-6">
            <div>
                <ul>
                    <li>
                        <h2 className="mt-3">Indice</h2>
                    </li>
                    <li>
                        <Link to="/acercaDe/queEsTetris">¿Qué es Tetris?</Link>
                    </li>
                    <li>
                         <Link to="/acercaDe/instrucciones">Como jugar Tetris: paso a paso</Link>
                     </li>
                    <li>
                        <Link to="/acercaDe/jugarOnline">Jugar Online</Link>
                    </li>
                    <li>
                        <Link to="/acercaDe/preguntasFrecuentes">Preguntas frecuentes durante una partida</Link>
                    </li>
                    <li>
                        <Link to="/acercaDe/sobreNosotros">Sobre Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/acercaDe/soporte">¿Algun inconveniente con Tetris?, ponte en contacto con nosotros</Link>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}

export default AcercaDe;