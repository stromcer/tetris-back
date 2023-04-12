import React, { createContext, useContext, useState } from "react"

const Context = createContext()

export const ContextProvider = ({children}) => {

    const [test,setTest] = useState("Vacio")

    const store = {
        test
    }

    return  <Context.Provider value={{store}}>
            {children}
            </Context.Provider>
}

const useAppContext = () => useContext(Context)

export default useAppContext;