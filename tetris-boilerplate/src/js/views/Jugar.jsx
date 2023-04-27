import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "../styles/jugar.css"

const Jugar = () => {
    return(
        <div className="jugar-styles nes-container is-dark mt-5">
            <Link to="/jugar/singleplayer">
                <Button>Singleplayer</Button>
            </Link>
            <Link to="/jugar/multiplayer">
                <Button>Multiplayer</Button>
            </Link>
        </div>
            
    );
};

export default Jugar;