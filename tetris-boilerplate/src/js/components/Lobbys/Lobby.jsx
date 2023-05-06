import React from "react";
import { Link } from "react-router-dom";
import "../../styles/lobby.css"

const Lobby = (props) => {
    return(
        <div className="lobbys-styles">
            <h6 className="title">{props.content.title}</h6>
            <h5>{props.content.players}</h5>
            <Link to="/jugar/lobby/multiplayer">
                <button className="btn btn-info">{props.content.button.text}</button>
            </Link>
        </div>
    );
};

export default Lobby;