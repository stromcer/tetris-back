import React from "react";
import { Link } from "react-router-dom"
import SoundOptions from "../components/SoundOptions.jsx";

const Options = () => {
  return (
    <div className="container text-center ">
      <h1> OPCIONES </h1>
      <div className="w-75 mx-auto">
        <div> PLACE HOLDER INICIAR SINGLEPLAYER </div>
        <div> PLACE HOLDER INICIAR MULTIPLAYER </div>
        <div> PLACE HOLDER VER MI PERFIL </div>
        <div> <SoundOptions/> </div>
        <Link to="/options/controls"> CONTROLES DEL JUEGO </Link>
      </div>
    </div>
  );
};

export default Options;
