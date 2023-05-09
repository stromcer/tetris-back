import React from "react";
import { Link } from "react-router-dom";
import "../../styles/lobby.css"

const Lobby = (props) => {
    return(
        <div className="lobbys-styles">
            <h6 className="title">{props.content.title}</h6>
            <p>{props.content.players}</p>
            <Link to="/jugar/multiplayer/multiplayer">
                <button className="btn btn-primary">{props.content.button.text}</button>
            </Link>
        </div>
    );
};

export default Lobby;