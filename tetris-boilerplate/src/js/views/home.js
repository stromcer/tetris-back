import React from "react";
import useAppContext from "../store/context";

const Home = () => {
    
    const {store} = useAppContext()

    return(
        <h1>{store.test}</h1>
    )

}

export default Home;