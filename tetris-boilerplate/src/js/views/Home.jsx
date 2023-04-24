import React from "react";
import useAppContext from "../store/context";
import Tetris from "../../components/Tetris";
const Home = () => {
    
    const {actions} = useAppContext()

    return(
        <>
        <button onClick={actions.handleTheme}>Escucha Nuestro Tema</button>
        <Tetris />
        </>
    );

};

export default Home;