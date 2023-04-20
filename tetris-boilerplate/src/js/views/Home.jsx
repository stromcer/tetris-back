import React from "react";
import useAppContext from "../store/context";
import AppPrueba from "../server/AppPrueba";

const Home = () => {
    
    const {store,actions} = useAppContext()

    return(
        <>
        <h1>{store.test}</h1>
        <button onClick={actions.handleTheme}>Escucha Nuestro Tema</button>
        <AppPrueba />
        </>
    );

};

export default Home;