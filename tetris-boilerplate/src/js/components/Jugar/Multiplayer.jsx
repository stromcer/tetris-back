import React from "react";
import Tetris from "../Tetris/Tetris.jsx";
import Chat from "../Chat";
import { useParams } from "react-router-dom";
import "../../styles/chat.css"

const Multiplayer = () => {
    const { lobbyName } = useParams()
    return (
        <div className="d-flex">
            <div className="">
                <Tetris />
            </div>
            <div className="d-flex m-5">
                <Chat specialClass="bg-dark" room={lobbyName} />
            </div>
        </div>
    );
};

export default Multiplayer;