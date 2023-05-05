import React, { createContext, useContext, useEffect, useState } from "react"
import Tetris_Theme from "../utils/tetris_theme.js"
import apiFetch from "../utils/apiFetch.js"
const Context = createContext()

export const ContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({})
    const [token , setToken ] = useState(localStorage.getItem("token"))
    const [isUserLogged, setIsUserLogged] = useState(localStorage.getItem("isUserLogged"))


    const handleTheme = () => {
        Tetris_Theme.play()
    }

    const handleToken = () => {
        setToken(localStorage.getItem("token"))
    }

    useEffect(() => {
        const gettoken = async () => {
            const response = await apiFetch("/api/user/info", "GET", "body", true )
            console.log(response.data)
            localStorage.setItem("isUserLogged", true)
            setUserInfo(response.data)
            setIsUserLogged(true)
            return response
        }
        const response = gettoken()
        
    },[token])


    const store = {
        userInfo,
        isUserLogged
    }

    const actions = {
        handleTheme,
        handleToken
    }
    

    return  <Context.Provider value={{store,actions,}}>
            {children}
            </Context.Provider>
}

const useAppContext = () => useContext(Context)

export default useAppContext;