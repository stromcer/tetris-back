import React, { createContext, useContext, useState, useEffect } from "react"
import Tetris_Theme from "../utils/tetris_theme.js"

const Context = createContext()

export const ContextProvider = ({children}) => {

    const [musicOn,SetMusicOn] = useState(false)
    const [test,setTest] = useState("Vacio")

    const handleTheme = () => {
        Tetris_Theme.play()
    }

    const store = {
        test
    }

    const actions = {
        handleTheme
    }

    return  <Context.Provider value={{store,actions}}>
            {children}
            </Context.Provider>
}

const useAppContext = () => useContext(Context)

export default useAppContext;