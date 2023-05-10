import React, { useEffect, useMemo } from "react";
import Tetris from "../Tetris/Tetris.jsx";
import Chat from "../Chat";
import { useParams } from "react-router-dom";
import "../../styles/chat.css"

const Multiplayer = () => {
    
    const { lobbyName } = useParams()
    return (
        <div className="d-flex">
            <div>
                <Tetris />
            </div>
            <div className="multiplayer-chat-styles">
                <Chat room={lobbyName} />
            </div>
        </div>
    );
};

export default Multiplayer;