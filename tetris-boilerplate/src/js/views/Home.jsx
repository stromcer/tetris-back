import React from "react";
import useAppContext from "../store/context";
import Chat from "../components/Chat";

const Home = () => {
    
    const {store,actions} = useAppContext()

    return(
        <>
        <h1>{store.test}</h1>
        <button onClick={actions.handleTheme}>Escucha Nuestro Tema</button>
        <Chat />
        </>
    );

};

export default Home;