import React from "react";
import Tetris from "../../../components/Tetris";
import Chat from "../Chat";

const Multiplayer = () => {
    return (
        <div className="d-flex">
            <Tetris />
            <Chat />
        </div>
    )
}

export default Multiplayer;