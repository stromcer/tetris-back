import React, { useEffect, useMemo } from "react";
import Lobby from "./Lobby";
import Chat from "../Chat";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

    const Mylobbys = () =>{

        useEffect(()=>{},[])
        const lobbys = useMemo(() => [
            {title: "Lobby 1", id: 1, players:["Nº players"], button: {text:"Join Game"}},
            {title: "Lobby 2", id: 2, players:["Nº players"], button: {text:"Join Game"}},
            {title: "Lobby 3", id: 3, players:["Nº players"], button: {text:"Join Game"}},
            {title: "Lobby 4", id: 4, players:["Nº players"], button: {text:"Join Game"}},
        ],[])

        
        return(
            <div>
                <div className="d-flex">
                    <div className="row">
                        {lobbys.map((lobby,index) => {
                            return(<Lobby key={index} content={lobby}/>)
                        })}
                    </div>
                    <div className="row m-5">
                        <Chat  room="searchLobby" />
                    </div>
                </div>
                <div className="ranking d-flex justify-content-center">
                    <Link to="ranking">
                        <Button variant="dark">
                            <h6 className="mt-2">Top Mundial</h6>
                        </Button>
                    </Link>
                </div>
            </div> 
        );
    };
        
export default Mylobbys;
