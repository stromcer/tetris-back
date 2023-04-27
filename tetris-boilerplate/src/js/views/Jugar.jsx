import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Jugar = () => {
    return(
        <div className="d-grid justify-content-center">
            <Link to="/jugar/multiplayer">
                <Button className="justify-content-center">Multiplayer</Button>
            </Link>
            <Link to="/jugar/singleplayer">
                <Button className="justify-content-center">Singleplayer</Button>
            </Link>
        </div>
            
    );
};

export default Jugar;