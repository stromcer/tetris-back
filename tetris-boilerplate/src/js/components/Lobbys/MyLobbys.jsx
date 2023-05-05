import React from "react";
import Lobby from "./Lobby";
import Chat from "../Chat";

    const lobbys = [
        {title: "Lobby 1", id: 1, players:["Nº players"], button: {text:"Join Game"}},
        {title: "Lobby 2", id: 2, players:["Nº players"], button: {text:"Join Game"}},
    ];

    const Mylobbys = () =>{
        return(
            <div className="d-flex justify-content-between mt-5">
                <div className="row m-5">
                    {lobbys.map((lobby,index) => {
                        return(<Lobby key={index} content={lobby}/>)
                    })};
                </div>
                <div className="row m-5">
                    <Chat />
                </div>
            </div> 
        );
    };
        
export default Mylobbys;
