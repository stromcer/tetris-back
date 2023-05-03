import React, { createContext, useContext } from "react"
import Tetris_Theme from "../utils/tetris_theme.js"

const Context = createContext()

export const ContextProvider = ({children}) => {
 
    const handleTheme = () => {
        Tetris_Theme.play()
    }

    const store = {}

    const actions = {
        handleTheme
    }

    return  <Context.Provider value={{store,actions}}>
            {children}
            </Context.Provider>
}

const useAppContext = () => useContext(Context)

export default useAppContext;