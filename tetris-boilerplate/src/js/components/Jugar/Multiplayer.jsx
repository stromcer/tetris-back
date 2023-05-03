import React from "react";
import Tetris from "../Tetris/Tetris.jsx";
import Chat from "../Chat";

const Multiplayer = () => {
    return (
        <div className="d-flex">
            <div className="">
                <Tetris />
            </div>
            <div className="d-flex m-5">
                <Chat />
            </div>
        </div>
    )
}

export default Multiplayer;